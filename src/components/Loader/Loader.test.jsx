import React from "react";
import { render } from "../../../test/testUtils";
import Loader from "./Loader";

const defaultProps = {
  size: Loader.sizes.MEDIUM,
  color: Loader.colors.PRIMARY,
};
const setup = (props) => {
  const combinedProps = { ...defaultProps, ...props };

  return render(<Loader {...combinedProps} />);
};

describe("The Loader component", () => {
  it("displays the loader as an accessible alert", () => {
    const { getByRole } = setup();

    expect(getByRole("alert")).toBeInTheDocument();
  });

  it("displays the loader at the correct size", () => {
    const { getByRole } = setup({ size: Loader.sizes.LARGE });

    expect(getByRole("alert").firstElementChild.getAttribute("height")).toBe(
      `${Loader.sizes.LARGE}`
    );
    expect(getByRole("alert").firstElementChild.getAttribute("width")).toBe(
      `${Loader.sizes.LARGE}`
    );
  });

  it("displays the loader in the correct color", () => {
    const { getByRole } = setup({ color: Loader.colors.SECONDARY });

    expect(getByRole("alert").firstElementChild.classList).toContain(
      Loader.colors.SECONDARY
    );
  });

  it("adds a test id", () => {
    const { getByRole } = setup();

    expect(getByRole("alert").getAttribute("data-testid")).toBe(
      "crate-loading-spinner"
    );
  });

  it("displays the message if a message is passed", () => {
    const { getByText } = setup({
      message: <div>Your resource is loading</div>,
    });

    expect(getByText("Your resource is loading")).toBeInTheDocument();
  });
});
