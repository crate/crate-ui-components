import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import TEXT_ELEMENTS from './TextConstants';

function Text({ className, displayAs, pale, truncate, children, id, testId }) {
  const displayElement = displayAs || TEXT_ELEMENTS.div;

  const textClasses = cx(
    'text-sm leading-5 tracking-wide',
    { 'text-neutral-500': pale, truncate },
    className,
  );

  return React.createElement(
    displayElement,
    {
      className: textClasses,
      id,
      'data-testid': testId,
    },
    children,
  );
}

Text.elements = TEXT_ELEMENTS;

Text.propTypes = {
  className: PropTypes.string,
  displayAs: PropTypes.oneOf([
    Text.elements.div,
    Text.elements.span,
    Text.elements.p,
  ]),
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  pale: PropTypes.bool,
  truncate: PropTypes.bool,
  testId: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  displayAs: null,
  id: null,
  pale: false,
  truncate: false,
  testId: null,
};

export default Text;
