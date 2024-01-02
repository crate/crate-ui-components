import React, { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const render = (ui: React.ReactElement, { locale = "en", ...options } = {}) => {
  // eslint-disable-next-line react/prop-types
  const TestWrapper = ({ children }: PropsWithChildren) => {
    return <main>{children}</main>;
  };

  return rtlRender(ui, { wrapper: TestWrapper, ...options });
};

const render2 = (
  ui: React.ReactElement,
  { locale = "en", ...options } = {}
) => {
  // eslint-disable-next-line react/prop-types
  const TestWrapper = ({ children }: PropsWithChildren) => {
    return <main>{children}</main>;
  };

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: TestWrapper, ...options }),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render, render2 };
