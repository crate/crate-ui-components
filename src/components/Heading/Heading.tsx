import React from 'react';
import cx from 'classnames';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps = {
  className?: string;
  level: HeadingLevel;
  displayAs?: HeadingLevel;
  light?: boolean;
  ariaLabel?: React.AriaAttributes['aria-label'];
  id?: string;
  children: React.ReactNode;
};

function Heading({
  className = '',
  children,
  level,
  displayAs,
  light,
  ariaLabel,
  id,
}: HeadingProps) {
  const displayLevel = displayAs || level;

  const classExtensions = {
    h1: 'text-3xl',
    h2: 'text-xl',
    h3: 'text-lg',
    h4: 'text-base',
    h5: 'text-sm',
    h6: 'text-sm',
  };
  const headingClasses = cx(
    { 'font-normal': light, 'font-bold': !light },
    classExtensions[displayLevel],
    className,
  );

  return React.createElement(
    level,
    {
      className: headingClasses,
      'aria-label': ariaLabel,
      id,
    },
    children,
  );
}

export default Heading;
