import { Menu } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { SIDE_MENU_TOGGLE_DISABLED_THRESHOLD } from '../../../constants/defaults';
import { useThemedMenu } from '../../../hooks';

export type MenuCollapseToggleProps = {
  toggleSideMenu: () => void;
  collapsed: boolean;
};

function MenuCollapseToggle({ toggleSideMenu, collapsed }: MenuCollapseToggleProps) {
  const { mode, theme } = useThemedMenu();

  return (
    <Menu
      onClick={toggleSideMenu}
      mode={mode}
      theme={theme}
      selectedKeys={[]}
      data-testid="collapse-menu-toggle"
      items={[
        {
          disabled: window.innerWidth < SIDE_MENU_TOGGLE_DISABLED_THRESHOLD,
          icon: collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />,
          key: 'collapse',
          label: collapsed ? 'Expand' : 'Collapse',
        },
      ]}
    />
  );
}

export default MenuCollapseToggle;
