import { renderHook } from '@testing-library/react';
import useThemedMenu from '../useThemedMenu';
import { ANTD_THEME_PRESET } from '../../constants/defaults';

describe('The useThemedMenu hook', () => {
  it('it returns the correct theme values', () => {
    const { result } = renderHook(() => useThemedMenu());

    expect(result.current).toStrictEqual({
      mode: 'inline',
      theme: ANTD_THEME_PRESET,
    });
  });
});
