/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { BUTTON_INPUT_TYPES, BUTTON_KINDS, BUTTON_SIZES } from './constants';
import Loader from '../Loader/Loader';
import useButtonStyles from './useButtonStyles';

function Button({
  ariaControls,
  ariaExpanded,
  ariaHasPopup,
  ariaLabelledBy,
  className,
  children,
  disabled,
  form,
  ghost,
  id,
  kind,
  loading,
  onClick,
  size,
  type,
  warn,
}) {
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
      'aria-busy': loading ? 'true' : undefined,
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
      {loading && <Loader className="ml-2" size={Loader.sizes.SMALL} />}
    </button>
  );
}

Button.sizes = BUTTON_SIZES;
Button.types = BUTTON_INPUT_TYPES;
Button.kinds = BUTTON_KINDS;

Button.propTypes = {
  /** Aria controls - receives id for the controlled region */
  ariaControls: PropTypes.string,
  /** Aria to be set if the popup is open */
  ariaExpanded: PropTypes.bool,
  /** Aria for a button popup */
  ariaHasPopup: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Element id to describe the button control */
  ariaLabelledBy: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /** The ID of a form that a submit button will submit */
  form: PropTypes.string,
  ghost: PropTypes.bool,
  id: PropTypes.string,
  kind: PropTypes.oneOf([
    Button.kinds.PRIMARY,
    Button.kinds.SECONDARY,
    Button.kinds.TERTIARY,
  ]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    Button.types.BUTTON,
    Button.types.SUBMIT,
    Button.types.RESET,
  ]),
  size: PropTypes.oneOf([Button.sizes.REGULAR, Button.sizes.SMALL]),
  warn: PropTypes.bool,
};

Button.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  ariaHasPopup: null,
  ariaLabelledBy: null,
  className: '',
  disabled: false,
  form: null,
  ghost: false,
  id: null,
  kind: Button.kinds.PRIMARY,
  loading: false,
  onClick: null,
  type: Button.types.BUTTON,
  size: Button.sizes.REGULAR,
  warn: false,
};

export default Button;
