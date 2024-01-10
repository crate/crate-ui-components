import React, { PropsWithChildren } from 'react';
import { RenderResult, render as rtlRender } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import rootMessages from '../../src/rootMessages';
import testMessages from './testMessages';

const intlErrorHandler = (err: Error) => {
  // explicitly throw an error so tests fail when a bad i18n string is found
  throw err;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render = (
  ui: React.ReactElement,
  { locale = 'en', ...options } = {},
): RenderResult & { user: UserEvent } => {
  const messagesWithTestValues = {
    ...rootMessages[locale as keyof typeof rootMessages],
    ...testMessages,
  };

  const TestWrapper = ({ children }: PropsWithChildren) => {
    return (
      <IntlProvider
        locale={locale}
        messages={messagesWithTestValues}
        onError={intlErrorHandler}
      >
        <main>{children}</main>
      </IntlProvider>
    );
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
