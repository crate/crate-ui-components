import PropTypes from 'prop-types';
import cx from 'classnames';
import { Layout } from 'antd';
import {
  ANTD_THEME_PRESET,
  SIDE_MENU_COLLAPSED_WIDTH,
  SIDE_MENU_EXPANDED_WIDTH,
} from '../../constants/defaults';
import MenuCollapseToggle from './MenuCollapseToggle';
import { Link } from 'react-router-dom';
import SideMenuFooter from './SideMenuFooter/SideMenuFooter';
import SideMenuBody from './SideMenuBody';
import { useState } from 'react';

export type SideMenuLink = {
  icon: React.ReactNode;
  key: string;
  label: React.ReactNode;
};
type SideMenuHeaderProps = {
  href: string;
  logo: string;
  logoShape: string;
};

export type SideMenuProps = {
  header: SideMenuHeaderProps;
  links?: SideMenuLink[];
  footerLinks?: SideMenuLink[];
  selectedKeys?: string[];
};

function SideMenu({
  header,
  links = [],
  footerLinks = [],
  selectedKeys = [],
}: SideMenuProps) {
  const [sidemenuIsCollapsed, setSidemenuIsCollapsed] = useState(false);

  return (
    <Layout.Sider
      breakpoint="md"
      className="static h-screen"
      collapsed={sidemenuIsCollapsed}
      onCollapse={value => setSidemenuIsCollapsed(value)}
      collapsedWidth={SIDE_MENU_COLLAPSED_WIDTH}
      theme={ANTD_THEME_PRESET}
      width={SIDE_MENU_EXPANDED_WIDTH}
      data-testid={
        sidemenuIsCollapsed ? 'side-menu-collapsed' : 'side-menu-expanded'
      }
    >
      <div className="flex flex-col h-screen relative">
        {/* crate logo */}
        <div className="px-6 py-3" data-testid="crate-logo">
          <Link to={header.href} className="w-full">
            <img
              alt="CrateDB Cloud logo"
              className={cx('mx-auto', 'h-5', {
                'w-6': sidemenuIsCollapsed,
              })}
              src={sidemenuIsCollapsed ? header.logoShape : header.logo}
            />
          </Link>
        </div>
        {/* Body */}
        <div className="flex">
          <SideMenuBody items={links} selectedKeys={selectedKeys} />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full">
          <SideMenuFooter items={footerLinks} selectedKeys={selectedKeys} />
          <MenuCollapseToggle
            toggleSideMenu={() => setSidemenuIsCollapsed(!sidemenuIsCollapsed)}
            collapsed={sidemenuIsCollapsed}
          />
        </div>
      </div>
    </Layout.Sider>
  );
}

SideMenu.propTypes = {
  organizationId: PropTypes.string,
};

SideMenu.defaultProps = {
  organizationId: null,
};

export default SideMenu;
