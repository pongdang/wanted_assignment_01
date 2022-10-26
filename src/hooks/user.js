import { join } from '../api/join';
import { signIn } from '../api/signIn';
import { useTokenContext } from '../contexts/TokenContext';

export function useLogin() {
  const { setAccessToken } = useTokenContext();

  return {
    login: async user => {
      const { access_token } = await signIn(user);

      setAccessToken(access_token);
    },
  };
}

export function useJoin() {
  const { setAccessToken } = useTokenContext();

  return {
    join: async user => {
      const { access_token } = await join(user);

      setAccessToken(access_token);
    },
  };
}

export function useLogout() {
  const { clearAccessToken } = useTokenContext();

  return {
    logout: () => {
      clearAccessToken();
    },
  };
}
