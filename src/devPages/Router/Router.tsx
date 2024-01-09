import { SideMenu, TopBar, Text } from '../../components';
import { devRoutes } from './routes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function Router() {
  return (
    <BrowserRouter>
      <div className="w-full h-full max-h-screen flex">
        <SideMenu
          header={{
            href: '/',
            logo: 'https://placehold.co/175x20',
            logoShape: 'https://placehold.co/25x25',
          }}
          links={devRoutes.map(devRoute => {
            return {
              icon: devRoute.icon,
              label: <Link to={devRoute.path}>{devRoute.displayName}</Link>,
              key: devRoute.displayName,
            };
          })}
          footerLinks={[
            {
              icon: <img src="https://placehold.co/25x25" />,
              label: 'Link 1',
              key: 'link1',
            },
            {
              icon: <img src="https://placehold.co/25x25" />,
              label: 'Link 2',
              key: 'link2',
            },
          ]}
          selectedKeys={['link1']}
        />

        <main className="w-full max-h-screen overflow-y-scroll">
          <TopBar
            backButton={{
              label: 'Back',
              href: '/',
            }}
            dropdownLabel="Dropdown"
            dropdownMenu={{
              items: [
                {
                  key: 'header',
                  label: (
                    <div className="group">
                      <Link
                        className="block px-4 text-inherit transition-none hover:text-crate-blue"
                        to="/"
                      >
                        <div>Name Surname</div>
                        <Text pale className="group-hover:text-crate-blue">
                          Admin
                        </Text>
                      </Link>
                    </div>
                  ),
                },
              ],
            }}
          />

          <div
            className="px-4 md:px-10 max-w-[1200px] mx-auto"
            style={{ minHeight: 'calc(100vh - 80px)' }}
          >
            <Routes>
              {devRoutes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
