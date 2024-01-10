import { ANTD_MENU_MODE, ANTD_THEME_PRESET } from '../constants/defaults';

function useThemedMenuProps() {
  return {
    mode: ANTD_MENU_MODE,
    theme: ANTD_THEME_PRESET,
  };
}

export default useThemedMenuProps;
