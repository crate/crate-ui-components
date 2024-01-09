import { Link } from 'react-router-dom';
import cx from 'classnames';
import { Dropdown, MenuProps } from 'antd';
import { ArrowLeftOutlined, CaretDownOutlined } from '@ant-design/icons';

type BackButton = {
  label: string;
  href: string;
};

export type TopBarProps = {
  backButton?: BackButton;
  dropdownLabel: React.ReactNode;
  dropdownMenu: MenuProps;
};

function TopBar({ backButton, dropdownLabel, dropdownMenu }: TopBarProps) {
  const renderBackLink = () => {
    if (backButton) {
      return (
        <Link
          className="cursor-pointer text-crate-border-light"
          to={backButton.href}
        >
          <ArrowLeftOutlined className="mr-2" />
          {backButton.label}
        </Link>
      );
    }

    return null;
  };

  const styles = cx(
    'bg-neutral-800',
    'ease duration-200',
    'h-12',
    'text-white',
    'transition-all',
    'z-50',
    'flex',
    'grow',
    'justify-center',
  );

  return (
    <div className={styles}>
      <div className="w-full flex flex-row-reverse h-full items-center justify-between px-4 md:px-10 max-w-[1200px]">
        <Dropdown
          placement="bottomRight"
          trigger={['click']}
          overlayStyle={{ minWidth: undefined }}
          menu={dropdownMenu}
        >
          <div className="cursor-pointer flex flex-row items-center select-none gap-2">
            {dropdownLabel}
            <CaretDownOutlined />
          </div>
        </Dropdown>
        {renderBackLink()}
      </div>
    </div>
  );
}

export default TopBar;
