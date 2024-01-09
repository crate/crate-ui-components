import React from 'react';

export const useLocation = jest.fn();
export const useRouteMatch = jest.fn();
export const useHistory = jest.fn();
export const useParams = jest.fn();
export const withRouter = children => children;
export const Route = ({ children }) => <div>{children}</div>;
export const Link = ({ children, to }) => <a href={to}>{children}</a>;
export const NavLink = ({ children }) => <div>{children}</div>;
export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Redirect = ({ children }) => <div>{children}</div>;
export const Switch = ({ children }) => <div>{children}</div>;
