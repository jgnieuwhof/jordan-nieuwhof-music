import React from 'react';
import styled from '@emotion/styled';

import { applyDefaultStyles } from './util';

const StyledButton = applyDefaultStyles('button');
const StyledLink = styled(applyDefaultStyles('a'))`
  text-decoration: none;
`;

const Button = ({
  children,
  Icon,
  href,
  disabled,
  fontSize = 2,
  p = 2,
  bg = 'dark',
  color = 'light',
  fontWeight = 'bold',
  border = 0,
  borderRadius = 4,
  ...x
}) => {
  const Component = href ? StyledLink : StyledButton;
  const StyledIcon =
    Icon &&
    styled(Icon)`
      margin-left: 8px;
      position: relative;
      top: 1px;
    `;
  return (
    <Component
      {...x}
      {...{
        disabled,
        href,
        p,
        bg,
        color,
        fontSize,
        fontWeight,
        border,
        borderRadius
      }}
      {...!disabled && { cursor: 'pointer' }}
    >
      {children}
      {Icon && <StyledIcon />}
    </Component>
  );
};

export default Button;
