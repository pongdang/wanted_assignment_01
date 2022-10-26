/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Title({ className, children }) {
  return (
    <h1
      className={className}
      css={css`
        font-size: 2.8rem;
      `}
    >
      {children}
    </h1>
  );
}
