import styled from '@emotion/styled';
import {
  space,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  border,
  borderRadius,
  fontSize,
  fontWeight,
  color,
  justifySelf,
  alignSelf,
  textAlign,
  lineHeight,
  position,
  top,
  right,
  left,
  bottom
} from 'styled-system';
import decamelize from 'decamelize';

const styleHelper = (prop, cssProp) => props =>
  props[prop] ? `${cssProp || decamelize(prop, '-')}: ${props[prop]};` : ``;

const applyDefaultStyles = Component => styled(Component)`
  ${position}
  ${top}
  ${right}
  ${left}
  ${bottom}

  ${space}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${width}
  ${minWidth}
  ${border}
  ${borderRadius}

  ${fontSize}
  ${fontWeight}

  ${color}
  ${textAlign}
  ${lineHeight}

  ${justifySelf}
  ${alignSelf}

  ${styleHelper('overflowY')}
  ${styleHelper('transform')}
  ${styleHelper('transformOrigin')}
  ${styleHelper('flexGrow')}
  ${styleHelper('cursor')}
  ${styleHelper('transition')}
  ${styleHelper('paddingTop')}
`;

export default applyDefaultStyles;
