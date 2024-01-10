import { render, screen, within } from '../../../test/testUtils';
import TopBar, { TopBarProps } from './TopBar';

const defaultProps: TopBarProps = {
  dropdownLabel: 'DropdownLabel',
  dropdownMenu: {
    items: [
      {
        key: 'header',
        label: 'DropdownContent',
      },
    ],
  },
};

const setup = (props: Partial<TopBarProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };
  return render(<TopBar {...combinedProps} />);
};

describe('The TopBar component', () => {
  it('displays the dropdown label', async () => {
    setup();

    expect(await screen.findByText('DropdownLabel')).toBeInTheDocument();
  });

  it('does not display the "back to clusters list" link', () => {
    setup();

    expect(screen.queryByTestId('back-to-cluster-link')).not.toBeInTheDocument();
  });

  describe('when clicking the dropdown', () => {
    it('displays a dropdown', async () => {
      const { user } = setup();

      await user.click(await screen.findByText('DropdownLabel'));

      const menu = await screen.findByRole('menu');
      expect(within(menu).getByText('DropdownContent')).toBeInTheDocument();
    });
  });

  describe('when displaying the dropdown', () => {
    it('contains the content', async () => {
      const { user } = setup();

      await user.click(await screen.findByText('DropdownLabel'));

      const menu = await screen.findByRole('menu');
      expect(within(menu).getByText('DropdownContent')).toBeInTheDocument();
    });
  });
});
