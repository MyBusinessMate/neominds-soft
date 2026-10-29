import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            backgroundColor: '#000814',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ef4444',
              fontSize: '28px',
              marginBottom: '24px',
            }}
          >
            !
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#a3a09b', maxWidth: '480px', marginBottom: '16px' }}>
            An unexpected error occurred while rendering this page.
          </p>
          {this.state.error && (
            <div style={{ textAlign: 'left', background: '#fbf9f5', color: '#fe6200', padding: '16px', borderRadius: '8px', fontSize: '13px', maxWidth: '850px', width: '100%', marginBottom: '24px', overflowX: 'auto', border: '1px solid #f0ece2', fontFamily: 'monospace' }}>
              <strong>Error:</strong> {this.state.error.message}
              <pre style={{ marginTop: '8px', color: '#9ca3af', fontSize: '11px', whiteSpace: 'pre-wrap' }}>{this.state.error.stack}</pre>
            </div>
          )}
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
            style={{ padding: '12px 32px', borderRadius: '8px' }}
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
