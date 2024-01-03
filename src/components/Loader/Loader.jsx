import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { LOADER_ALIGNMENT_OPTIONS, LOADER_COLORS, LOADER_SIZES } from './constants';
import Text from '../Text';

function Loader({ align, color, className, size, message }) {
  return (
    <div
      className={cx(className, 'relative', 'inline-block', {
        flex: !!message,
        'items-center': !!message,
      })}
      data-testid="crate-loading-spinner"
      role="alert"
      title="loading"
    >
      <svg
        className={cx('animate-spin', 'relative', color, {
          block: !message && align === LOADER_ALIGNMENT_OPTIONS.CENTER,
          'm-auto': !message && align === LOADER_ALIGNMENT_OPTIONS.CENTER,
          'mr-2': !!message,
        })}
        fill="none"
        viewBox="0 0 24 24"
        style={{ minWidth: 16, minHeight: 16 }}
        width={size}
        height={size}
      >
        <circle
          className="absolute left-1/2 opacity-25 top-1/2"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>

      {message && <Text pale>{message}</Text>}
    </div>
  );
}

Loader.alignment = LOADER_ALIGNMENT_OPTIONS;
Loader.colors = LOADER_COLORS;
Loader.sizes = LOADER_SIZES;

Loader.propTypes = {
  align: PropTypes.oneOf([Loader.alignment.LEFT, Loader.alignment.CENTER]),
  className: PropTypes.string,
  color: PropTypes.oneOf([Loader.colors.PRIMARY, Loader.colors.SECONDARY, '']),
  message: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([Loader.sizes.SMALL, Loader.sizes.MEDIUM, Loader.sizes.LARGE]),
    PropTypes.number,
  ]),
};

Loader.defaultProps = {
  align: Loader.alignment.LEFT,
  className: '',
  color: '',
  message: null,
  size: Loader.sizes.MEDIUM,
};

export default Loader;
