/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function LinkButton({ to, buttonType = 'button', children }) {
  return (
    <Link
      to={to}
      css={css`
        display: block;
        text-decoration-color: #dc602a;
      `}
    >
      <Button
        css={css`
          background: transparent;
          color: #dc602a;
        `}
        type={buttonType}
      >
        {children}
      </Button>
    </Link>
  );
}
