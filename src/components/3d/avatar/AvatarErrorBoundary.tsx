'use client';

import { Component, type ReactNode } from 'react';
import { ImageOff } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackLabel?: string;
}

interface State {
  hasError: boolean;
}

export class AvatarErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          background: 'rgba(201, 168, 76, 0.05)',
          borderRadius: '16px',
        }}>
          <ImageOff style={{ width: '48px', height: '48px', color: 'rgba(201, 168, 76, 0.3)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textAlign: 'center', padding: '0 1rem' }}>
            {this.props.fallbackLabel ?? '3D non disponible'}
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}
