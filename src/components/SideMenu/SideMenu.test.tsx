import { render, waitFor, screen } from '../../../test/testUtils';
import SideMenu, { SideMenuProps } from './SideMenu';

const defaultProps: SideMenuProps = {
  header: {
    href: 'LOGO_HREF',
    logo: 'LOGO',
    logoShape: 'LOGO_SHAPE',
  },
  footerLinks: [
    {
      key: 'documentation',
      label: 'Documentation',
      icon: '',
    },
    {
      key: 'community',
      label: 'Community',
      icon: '',
    },
    {
      key: 'support_center',
      label: 'Support Center',
      icon: '',
    },
  ],
  links: [
    {
      key: 'link1',
      label: 'Link1',
      icon: '',
    },
    {
      key: 'link2',
      label: 'Link2',
      icon: '',
    },
  ],
};

const setup = (props: Partial<SideMenuProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };

  return render(<SideMenu {...combinedProps} />);
};

describe('The SideMenu component', () => {
  describe('when displaying the component', () => {
    it('displays the Crate logo', async () => {
      setup();

      expect(await screen.findByTestId('crate-logo')).toBeInTheDocument();
    });
  });

  describe('expanding and collapsing the side menu', () => {
    it('displays the side menu expanded by default', async () => {
      setup();

      expect(await screen.findByTestId('side-menu-expanded')).toBeInTheDocument();
    });

    it('collapses the sidemenu when the collapse button is clicked', async () => {
      const { user } = setup();

      await user.click(screen.getByTestId('collapse-menu-toggle').children[0]);

      expect(await screen.findByTestId('side-menu-collapsed')).toBeInTheDocument();
    });
  });

  describe('the body', () => {
    it('displays links', async () => {
      setup();

      const bodyLinks = screen
        .queryAllByRole('menu')[0]
        .querySelectorAll('[role="menuitem"]');

      await waitFor(() => {
        expect(bodyLinks.length).toBe(2);
        expect(bodyLinks[0].textContent).toBe('Link1');
        expect(bodyLinks[1].textContent).toBe('Link2');
      });
    });
  });

  describe('the footer', () => {
    it('displays links', async () => {
      setup();

      const footerLinks = screen
        .queryAllByRole('menu')[1]
        .querySelectorAll('[role="menuitem"]');

      await waitFor(() => {
        expect(footerLinks.length).toBe(3);
        expect(footerLinks[0].textContent).toBe('Documentation');
        expect(footerLinks[1].textContent).toBe('Community');
        expect(footerLinks[2].textContent).toBe('Support Center');
      });
    });
  });
});
