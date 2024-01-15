import { render, waitFor, screen } from '../../../../test/testUtils';
import MenuCollapseToggle from '.';
import { MenuCollapseToggleProps } from './MenuCollapseToggle';

const toggleSideMenuSpy = jest.fn();

const defaultProps: MenuCollapseToggleProps = {
  collapsed: false,
  toggleSideMenu: toggleSideMenuSpy,
};

const setup = (props: Partial<MenuCollapseToggleProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };

  return render(<MenuCollapseToggle {...combinedProps} />);
};

// note: all these tests use waitFor to handle the animation in this component
describe('The MenuCollapseToggle component', () => {
  const { innerWidth } = global;

  afterAll(() => {
    global.innerWidth = innerWidth;
  });

  it('displays a button that toggles the sidemenu when clicked', async () => {
    const { user } = setup();
    const toggleButton = screen.getByRole('menu').children[0];
    user.click(toggleButton);

    await waitFor(() => {
      expect(toggleSideMenuSpy).toHaveBeenCalled();
    });
  });

  it('displays an expand call to action in the button when the sidemenu is collapsed', async () => {
    setup({ collapsed: true });

    await waitFor(() => {
      expect(screen.getByText('Expand')).toBeInTheDocument();
    });
  });

  it('displays an collapse call to action in the button when the sidemenu is expanded', async () => {
    setup({ collapsed: false });

    await waitFor(() => {
      expect(screen.getByText('Collapse')).toBeInTheDocument();
    });
  });

  it('enables the menu link if the window width is 500px or wider', async () => {
    global.innerWidth = 500;
    setup();
    const toggleButton = screen.getByRole('menu').children[0];

    await waitFor(() => {
      expect(toggleButton.getAttribute('aria-disabled')).toBe('false');
    });
  });

  it('disables the menu link if the window width is less than 500px wide', async () => {
    global.innerWidth = 499;
    setup();
    const toggleButton = screen.getByRole('menu').children[0];

    await waitFor(() => {
      expect(toggleButton.getAttribute('aria-disabled')).toBe('true');
    });
  });
});
