import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render = (ui: React.ReactElement, { locale = 'en', ...options } = {}) => {
  const TestWrapper = ({ children }: PropsWithChildren) => {
    return <main>{children}</main>;
  };

  return rtlRender(ui, { wrapper: TestWrapper, ...options });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render2 = (ui: React.ReactElement, { locale = 'en', ...options } = {}) => {
  const TestWrapper = ({ children }: PropsWithChildren) => {
    return <main>{children}</main>;
  };

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: TestWrapper, ...options }),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render, render2 };
