import { Redirect } from '../components/Redirect';
import { useTokenContext } from '../contexts/TokenContext';

export function withAuthGuard(type, Component) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLogin } = useTokenContext();

  // 로그인을 하지 않았는데 member만 접근할 수 있는 페이지에 접근하려 했을 때
  if (!isLogin && type === 'member') {
    // '/' 페이지로 리다이렉트
    return <Redirect to="/" />;
  }

  // 로그인을 했는데 guest만 접근할 수 있는 페이지에 접근하려 했을 때
  if (isLogin && type === 'guest') {
    // '/todo' 페이지로 리다이렉트
    return <Redirect to="/todo" />;
  }

  return Component;
}
