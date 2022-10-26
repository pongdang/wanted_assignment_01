import { Component } from 'react';
import { EventErrorHandler } from './EventErrorHandler';

// NOTE: ErrorBoundary 는 클래스 컴포넌트로만 작성할 수 있어 부득이하게 클래스 컴포넌트를 이용합니다.
export class OriginalErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { error };
  }

  constructor(props) {
    super(props);
    this.state = { error: undefined };
  }

  resetErrorBoundary = () => {
    this.setState({ error: undefined });
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { renderFallback, children } = this.props;

    if (error != null) {
      return renderFallback({ error, reset: this.resetErrorBoundary });
    }

    return children;
  }
}

export function ErrorBoundary({ children, ...props }) {
  return (
    <OriginalErrorBoundary
      {...props}
      renderFallback={({ error, reset }) => props.renderFallback({ error, children, reset })}
    >
      <EventErrorHandler>{children}</EventErrorHandler>
    </OriginalErrorBoundary>
  );
}
