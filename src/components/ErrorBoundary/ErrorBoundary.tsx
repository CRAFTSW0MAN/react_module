import { Component, ReactNode } from 'react';
import { IStateError } from '../../type/interfaces';

export class ErrorBoundary extends Component<
  Record<string, ReactNode>,
  { hasError: boolean }
> {
  public state: IStateError = { hasError: false };
  constructor(props: Record<string, ReactNode>) {
    super(props);
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  static componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('The server has crashed:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <section className="error">
          <h2>The server has crashed!</h2>
          <h2>Reload the page!</h2>
        </section>
      );
    }
    return this.props.children;
  }
}
