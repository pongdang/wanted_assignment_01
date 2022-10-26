import { post } from './http';

export const signIn = async user => {
  const { data } = await post({
    url: '/auth/signin',
    data: user,
  });

  return data;
};
