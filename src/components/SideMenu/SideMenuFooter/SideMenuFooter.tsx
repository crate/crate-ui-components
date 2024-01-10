import { Menu } from 'antd';
import { useThemedMenu } from '../../../hooks';
import { SideMenuLink } from '../SideMenu';

type SideMenuFooterProps = {
  items?: SideMenuLink[];
  selectedKeys?: string[];
};

function SideMenuFooter({ items = [], selectedKeys = [] }: SideMenuFooterProps) {
  const { mode, theme } = useThemedMenu();

  return (
    <div className="border-t border-crate-border-dark">
      <Menu mode={mode} selectedKeys={selectedKeys} theme={theme} items={items} />
    </div>
  );
}

export default SideMenuFooter;
