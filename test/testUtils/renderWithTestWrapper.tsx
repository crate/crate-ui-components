import React, { PropsWithChildren } from 'react';
import { RenderResult, render as rtlRender } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render = (
  ui: React.ReactElement,
  { ...options } = {},
): RenderResult & { user: UserEvent } => {
  const TestWrapper = ({ children }: PropsWithChildren) => {
    return <main>{children}</main>;
  };

  const renderResult = {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: TestWrapper, ...options }),
  };

  return renderResult;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
