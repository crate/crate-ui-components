import { PropsWithChildren } from 'react';

const TabContent = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default function getTabItems() {
  const items = [
    {
      children: <TabContent>Tab Content 1</TabContent>,
      label: 'Tab Title 1',
      key: 'tab1',
    },
    {
      children: <TabContent>Tab Content 2</TabContent>,
      label: 'Tab Title 2',
      key: 'tab2',
    },
    {
      children: <TabContent>Tab Content 3</TabContent>,
      label: 'Tab Title 3',
      key: 'tab3',
    },
  ];

  return items;
}
