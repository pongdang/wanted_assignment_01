import { getTodoList } from '../api/todos';
import { useTokenContext } from '../contexts/TokenContext';
import { useFetch } from './useFetch';

export function useTodoList() {
  const { accessToken } = useTokenContext();
  const { data: todoList, invalidate } = useFetch(['getTodoList'], () => getTodoList(accessToken));

  return [todoList, invalidate];
}
