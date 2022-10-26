import { useEffect, useState } from 'react';

export function EventErrorHandler({ children }) {
  const [error, setError] = useState(null);

  if (error != null) {
    throw error;
  }

  const unhandledRejection = error => {
    setError(new Error(error.reason.message));
  };

  const errorEvent = event => {
    setError(event.error);
  };

  useEffect(() => {
    window.addEventListener('unhandledrejection', unhandledRejection);
    window.addEventListener('error', errorEvent);

    return () => {
      window.removeEventListener('unhandledrejection', unhandledRejection);
      window.removeEventListener('error', errorEvent);
    };
  }, []);

  return <>{children}</>;
}
