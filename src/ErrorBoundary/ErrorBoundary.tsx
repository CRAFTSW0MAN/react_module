import { Component, ReactNode } from 'react';
import { IStateError } from '../type/interfaces';

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
      return this.props.fallback;
    }
    return this.props.children;
  }
}
