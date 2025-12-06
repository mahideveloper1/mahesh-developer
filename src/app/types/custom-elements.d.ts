declare namespace JSX {
    interface IntrinsicElements {
      'pitchline-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-id'?: string;
          placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'bottom-center' | 'top-center';
          variant?: 'compact' | 'full';
        },
        HTMLElement
      >;
    }
  }

  export {};