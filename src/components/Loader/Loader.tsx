import cx from 'classnames';
import { LOADER_COLORS, LOADER_SIZES } from './constants';
import Text from '../Text';

export type LoaderProps = {
  align?: 'left' | 'center';
  className?: string;
  color?: keyof typeof LOADER_COLORS;
  message?: React.ReactNode;
  size?: keyof typeof LOADER_SIZES;
};

function Loader({
  align = 'left',
  color,
  className = '',
  size = 'medium',
  message,
}: LoaderProps) {
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
        className={cx(
          'animate-spin',
          'relative',
          color ? LOADER_COLORS[color] : '',
          {
            block: !message && align === 'center',
            'm-auto': !message && align === 'center',
            'mr-2': !!message,
          },
        )}
        fill="none"
        viewBox="0 0 24 24"
        style={{ minWidth: 16, minHeight: 16 }}
        width={LOADER_SIZES[size]}
        height={LOADER_SIZES[size]}
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

export default Loader;
