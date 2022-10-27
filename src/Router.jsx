import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Redirect } from './components/Redirect';
import { withAuthGuard } from './util/withAuthGuard';
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
