import styled from '@emotion/styled';
import { createTodoItem } from '../api/todos';
import { useTokenContext } from '../contexts/TokenContext';
import { useFormField } from '../hooks/useFormField';
import { isEmptyValue } from '../util/validation';
import { Button } from './Button';

export function TodoForm({ invalidate }) {
  const { accessToken } = useTokenContext();
  const {
    value: content,
    onChange,
    errorMessage,
    clearValue,
  } = useFormField({
    validators: [
      {
        ok: value => isEmptyValue(value),
        message: '오늘의 할 일을 입력해주세요!',
      },
    ],
  });

  const handleTodoSubmit = async e => {
    e.preventDefault();

    if (errorMessage != null) {
      return;
    }

    await createTodoItem(content, accessToken);

    invalidate();
    clearValue();
  };

  return (
    <Form onSubmit={handleTodoSubmit}>
      <Input type="text" onChange={onChange} value={content} />
      <SubmitButton type="submit" disabled={errorMessage != null}>
        추가
      </SubmitButton>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 0px 10px;
`;

const Input = styled.input`
  padding-left: 8px;
`;

const SubmitButton = styled(Button)`
  padding: 10px 0;
  border-radius: 12px;
  font-size: 1.6rem;

  &:disabled {
    background-color: #c1c1c199;
    cursor: not-allowed;
    font-weight: 500;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  height: 16px;
  font-size: 1.3rem;
  text-align: center;
`;
