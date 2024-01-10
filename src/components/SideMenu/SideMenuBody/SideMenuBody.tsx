import { Menu } from 'antd';
import { useThemedMenu } from '../../../hooks';
import { SideMenuLink } from '../SideMenu';

type SideMenuBodyProps = {
  items?: SideMenuLink[];
  selectedKeys?: string[];
};

function SideMenuBody({ items = [], selectedKeys = [] }: SideMenuBodyProps) {
  const { mode, theme } = useThemedMenu();

  return (
    <Menu mode={mode} selectedKeys={selectedKeys} theme={theme} items={items} />
  );
}

export default SideMenuBody;
