import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const fallbackColors = {
  primary: '#007bff',
  primaryHover: '#0056b3',
  white: '#ffffff',
  secondaryBackground: '#ffffff',
  secondaryHover: '#e2e6ea',
  focusOutline: 'blue',
  background: '#ffffff',
  disabledOpacity: 0.6,
};

const fallbackSpacing = {
  xsmall: '0.25rem',
  small: '0.5rem',
  medium: '0.75rem',
  large: '1.25rem',
};

const fallbackFontSizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
};

const fallbackFontWeights = {
  bold: '700',
};

const fallbackLineHeights = {
  body: 1.5,
};

const fallbackBorderRadius = '4px';

const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${fallbackSpacing.small} ${fallbackSpacing.medium};
  border-radius: ${fallbackBorderRadius};
  font-weight: ${fallbackFontWeights.bold};
  font-size: ${fallbackFontSizes.medium};
  line-height: ${fallbackLineHeights.body};
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out, color 0.2s ease-out, box-shadow 0.2s ease-out;
  white-space: nowrap;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${fallbackColors.background}, 0 0 0 5px ${fallbackColors.focusOutline};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: ${fallbackColors.disabledOpacity};
  }
`;

const primaryStyles = css`
  background-color: ${fallbackColors.primary};
  color: ${fallbackColors.white};
  border-color: ${fallbackColors.primary};

  &:hover:not(:disabled) {
    background-color: ${fallbackColors.primaryHover};
    border-color: ${fallbackColors.primaryHover};
  }
`;

const secondaryStyles = css`
  background-color: ${fallbackColors.secondaryBackground};
  color: ${fallbackColors.primary};
  border-color: ${fallbackColors.primary};

  &:hover:not(:disabled) {
    background-color: ${fallbackColors.secondaryHover};
    border-color: ${fallbackColors.primaryHover};
  }
`;

const smallSizeStyles = css`
  padding: ${fallbackSpacing.xsmall} ${fallbackSpacing.small};
  font-size: ${fallbackFontSizes.small};
`;

const largeSizeStyles = css`
  padding: ${fallbackSpacing.medium} ${fallbackSpacing.large};
  font-size: ${fallbackFontSizes.large};
`;

const StyledButton = styled.button`
  ${baseButtonStyles}
  ${props => props.variant === 'primary' && primaryStyles}
  ${props => props.variant === 'secondary' && secondaryStyles}
  ${props => props.size === 'small' && smallSizeStyles}
  ${props => props.size === 'large' && largeSizeStyles}
`;

const Button = ({ href, children, variant, size, disabled, onClick, type = 'button', ...props }) => {
  const Component = href ? StyledButton.withComponent('a') : StyledButton;

  const componentProps = {
    href,
    variant,
    size,
    disabled,
    onClick: !href ? onClick : undefined,
    type: !href ? type : undefined,
    role: href ? 'button' : undefined,
    ...props
  };

  return <Component {...componentProps}>{children}</Component>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  'aria-label': PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  href: null,
  onClick: () => {},
  type: 'button',
  'aria-label': null,
};

export default Button;