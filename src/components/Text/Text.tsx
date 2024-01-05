import React from 'react';
import cx from 'classnames';

export type TextProps = {
  className?: string;
  displayAs?: 'div' | 'span' | 'p';
  pale?: boolean;
  truncate?: boolean;
  children: React.ReactNode;
  id?: string;
  testId?: string;
};

function Text({
  className = '',
  displayAs = 'div',
  pale = false,
  truncate = false,
  children,
  id,
  testId,
}: TextProps) {
  const textClasses = cx(
    'text-sm leading-5 tracking-wide',
    { 'text-neutral-500': pale, truncate },
    className,
  );

  return React.createElement(
    displayAs,
    {
      className: textClasses,
      id,
      'data-testid': testId,
    },
    children,
  );
}

export default Text;
