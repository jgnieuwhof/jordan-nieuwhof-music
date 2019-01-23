import styled from '@emotion/styled';
import {
  space,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  border,
  borderRadius,
  fontSize,
  fontWeight,
  color,
  justifyContent,
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
  ${maxWidth}
  ${border}
  ${borderRadius}

  ${fontSize}
  ${fontWeight}

  ${color}
  ${textAlign}
  ${lineHeight}

  ${justifyContent}
  ${justifySelf}
  ${alignSelf}

  ${styleHelper('overflowY')}
  ${styleHelper('transform')}
  ${styleHelper('transformOrigin')}
  ${styleHelper('flex')}
  ${styleHelper('flexGrow')}
  ${styleHelper('cursor')}
  ${styleHelper('transition')}
  ${styleHelper('paddingTop')}
  ${styleHelper('margin')}
  ${styleHelper('marginLeft')}
`;

export default applyDefaultStyles;
