import { Navigate } from 'react-router-dom';

export function Redirect({ to }) {
  return <Navigate replace to={to} />;
}
