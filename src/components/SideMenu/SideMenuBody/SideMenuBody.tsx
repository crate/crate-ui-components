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
    <div className="w-full">
      <Menu mode={mode} selectedKeys={selectedKeys} theme={theme} items={items} />
    </div>
  );
}

export default SideMenuBody;
