import { useEffect, useState } from 'react';

export function useFormField({ initialValue, validators }) {
  const [value, setValue] = useState(initialValue ?? '');
  const [errorMessage, setErrorMessage] = useState();
  const [firstRender, setFirstRender] = useState(true);

  const onChange = e => setValue(e.target.value);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      setErrorMessage('');
      return;
    }

    for (const validator of validators) {
      if (!validator.ok(value)) {
        setErrorMessage(validator.message);
        return;
      }
    }
    setErrorMessage(undefined);
    // NOTE: 최초 렌더링시 에러 메시지 비활성
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, JSON.stringify(validators)]);

  const clearValue = () => setValue('');

  return {
    value,
    onChange,
    errorMessage,
    setValue,
    clearValue,
    setFirstRender,
  };
}
