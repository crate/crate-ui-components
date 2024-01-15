import App from '../App';
import { ApartmentOutlined } from '@ant-design/icons';
import {
  ButtonPage,
  ConfirmDeletePage,
  HeadingsPage,
  LoadersPage,
  NoDataViewsPage,
  TablesPage,
  TabsPage,
  TextsPage,
} from '../pages';

type DevRoute = {
  path: string;
  component: React.ReactNode;
  icon: React.ReactNode;
  displayName: string;
};

export const devRoutes: DevRoute[] = [
  {
    path: '/',
    component: <App />,
    icon: <ApartmentOutlined />,
    displayName: 'Home',
  },
  {
    path: '/buttons',
    component: <ButtonPage />,
    icon: <ApartmentOutlined />,
    displayName: 'Buttons',
  },
  {
    path: '/headings',
    component: <HeadingsPage />,
    icon: <ApartmentOutlined />,
    displayName: 'Headings',
  },
  {
    path: '/loaders',
    component: <LoadersPage />,
    icon: <ApartmentOutlined />,
    displayName: 'Loaders',
  },
  {
    path: '/noDataView',
    component: <NoDataViewsPage />,
    icon: <ApartmentOutlined />,
    displayName: 'No Data View',
  },
  {
    path: '/tables',
    component: <TablesPage />,
    icon: <ApartmentOutlined />,
    displayName: 'Tables',
  },
  {
    path: '/tabs',
    component: <TabsPage />,
    icon: <ApartmentOutlined />,
    displayName: 'Tabs',
  },
  {
    path: '/texts',
    component: <TextsPage />,
    icon: <ApartmentOutlined />,
    displayName: 'Texts',
  },
  {
    path: '/confirm-delete',
    component: <ConfirmDeletePage />,
    icon: <ApartmentOutlined />,
    displayName: 'Confirm Delete Page',
  },
];
