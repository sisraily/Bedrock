import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  spacing as defaultSpacings,
  SpacingTypes,
  mergeSpacings,
} from '@bedrock-layout/spacing-constants';

type JustifyAlignOptions = 'start' | 'center' | 'end';

type JustifyAlignMap = { [key in JustifyAlignOptions]: string };
const justifyAlignMap: JustifyAlignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
};
export interface InlineClusterProps {
  justify?: JustifyAlignOptions;
  align?: JustifyAlignOptions;
  gutter?: SpacingTypes;
}

const InlineCluster = styled.div<InlineClusterProps>`
  box-sizing: border-box;
  --gutter: ${({ gutter, theme: { spacing = {} } }) =>
    gutter && mergeSpacings(spacing)[gutter]
      ? mergeSpacings(spacing)[gutter]
      : mergeSpacings(spacing).md};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    typeof props.justify !== 'undefined' && justifyAlignMap[props.justify]
      ? justifyAlignMap[props.justify]
      : justifyAlignMap.start};
  align-items: ${(props) =>
    typeof props.align !== 'undefined' && justifyAlignMap[props.align]
      ? justifyAlignMap[props.align]
      : justifyAlignMap.start};
  margin: calc(var(--gutter) / 2 * -1);
  & > * {
    margin: calc(var(--gutter) / 2);
  }
`;

InlineCluster.displayName = 'InlineCluster';

InlineCluster.propTypes = {
  gutter: PropTypes.oneOf<SpacingTypes>(
    Object.keys(defaultSpacings) as SpacingTypes[]
  ),
  justify: PropTypes.oneOf<JustifyAlignOptions>(['start', 'center', 'end']),
  align: PropTypes.oneOf<JustifyAlignOptions>(['start', 'center', 'end']),
};

export default InlineCluster;
