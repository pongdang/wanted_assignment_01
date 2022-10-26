import { del, get, post, put } from './http';

export const getTodoList = async accessToken => {
  const { data } = await get({
    url: '/todos',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const createTodoItem = async (todo, accessToken) => {
  await post({
    url: '/todos',
    data: { todo },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const updateTodoItem = async (todoItemId, todo, isCompleted, accessToken) => {
  await put({
    url: `/todos/${todoItemId}`,
    data: { todo, isCompleted },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const deleteTodoItem = async (todoItemId, accessToken) => {
  await del({
    url: `/todos/${todoItemId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
