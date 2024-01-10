import { Menu, MenuTheme } from 'antd';
import React from 'react';

type MenuMode = NonNullable<React.ComponentProps<typeof Menu>['mode']>;

// side menu
// ---------
export const ANTD_MENU_MODE: MenuMode = 'inline';
export const ANTD_THEME_PRESET: MenuTheme = 'dark';
export const SIDE_MENU_EXPANDED_WIDTH = 224;
export const SIDE_MENU_TOGGLE_DISABLED_THRESHOLD = 500;
export const SIDE_MENU_COLLAPSED_WIDTH = 80;
