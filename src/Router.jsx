import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTokenContext } from './contexts/TokenContext';
import { Join } from './pages/Join';
import { Login } from './pages/Login';
import { TodoPage } from './pages/TodoPage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withAuthGuard('guest', <Login />)} />
        <Route path="/signup" element={withAuthGuard('guest', <Join />)} />
        <Route path="/todo" element={withAuthGuard('member', <TodoPage />)} />
        <Route path="*" element={<Redirect to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function Redirect({ to }) {
  return <Navigate replace to={to} />;
}

// TODO: hocs 디렉토리로 이동하기
function withAuthGuard(type, Component) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLogin } = useTokenContext();

  if (!isLogin && type === 'member') {
    return <Redirect to="/" />;
  }

  if (isLogin && type === 'guest') {
    return <Redirect to="/todo" />;
  }

  return Component;
}
