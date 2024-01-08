import { render, screen } from '../../../test/testUtils';
import Loader, { LoaderProps } from './Loader';
import { LOADER_COLORS, LOADER_SIZES } from './constants';

const defaultProps: LoaderProps = {
  size: 'medium',
  color: 'primary',
};
const setup = (props: Partial<LoaderProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };

  return render(<Loader {...combinedProps} />);
};

describe('The Loader component', () => {
  it('displays the loader as an accessible alert', () => {
    setup();

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays the loader at the correct size', () => {
    setup({
      size: 'large',
    });

    expect(screen.getByRole('alert').firstElementChild!.getAttribute('height')).toBe(
      `${LOADER_SIZES.large}`,
    );
    expect(screen.getByRole('alert').firstElementChild!.getAttribute('width')).toBe(
      `${LOADER_SIZES.large}`,
    );
  });

  it('displays the loader in the correct color', () => {
    setup({ color: 'secondary' });

    expect(screen.getByRole('alert').firstElementChild!.classList).toContain(
      LOADER_COLORS.secondary,
    );
  });

  it('adds a test id', () => {
    setup();

    expect(screen.getByRole('alert').getAttribute('data-testid')).toBe(
      'crate-loading-spinner',
    );
  });

  it('displays the message if a message is passed', () => {
    setup({
      message: <div>Your resource is loading</div>,
    });

    expect(screen.getByText('Your resource is loading')).toBeInTheDocument();
  });
});
