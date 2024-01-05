/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import React, { useMemo } from 'react';
import Loader from '../Loader/Loader';
import useButtonStyles from './useButtonStyles';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'regular' | 'small';
export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  /** Aria controls - receives id for the controlled region */
  ariaControls?: React.AriaAttributes['aria-controls'];
  /** Aria to be set if the popup is open */
  ariaExpanded?: React.AriaAttributes['aria-expanded'];
  /** Aria for a button popup */
  ariaHasPopup?: React.AriaAttributes['aria-haspopup'];
  /** Element id to describe the button control */
  ariaLabelledBy?: React.AriaAttributes['aria-labelledby'];
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  /** The ID of a form that a submit button will submit */
  form?: string;
  ghost?: boolean;
  id?: string;
  kind?: ButtonKind;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  size?: ButtonSize;
  warn?: boolean;
};

function Button({
  ariaControls,
  ariaExpanded,
  ariaHasPopup,
  ariaLabelledBy,
  className = '',
  children,
  disabled = false,
  form,
  ghost = false,
  id,
  kind = 'primary',
  loading = false,
  onClick,
  size = 'regular',
  type = 'button',
  warn = false,
}: ButtonProps) {
  const buttonClasses = useButtonStyles({
    className,
    disabled,
    ghost,
    kind,
    loading,
    size,
    warn,
  });

  const buttonProps = useMemo(
    () => ({
      'aria-busy': loading ? true : undefined,
      'aria-controls': ariaControls,
      'aria-disabled': disabled || loading,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHasPopup,
      'aria-labelledby': ariaLabelledBy,
      className: buttonClasses,
      'data-testid': id,
      disabled: disabled || loading,
      form,
      id,
      onClick,
      type,
    }),
    [
      ariaLabelledBy,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      buttonClasses,
      disabled,
      form,
      onClick,
      id,
      loading,
      type,
    ],
  );

  return (
    <button {...buttonProps}>
      <span>{children}</span>
      {loading && <Loader className="ml-2" size="small" />}
    </button>
  );
}

export default Button;
