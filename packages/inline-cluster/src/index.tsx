import {
  SpacingOptions,
  getSpacingValue,
} from "@bedrock-layout/spacing-constants";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

type JustifyAlignOptions = "start" | "center" | "end";

type JustifyAlignMap = { [key in JustifyAlignOptions]: string };
const justifyAlignMap: JustifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export interface InlineClusterProps {
  justify?: JustifyAlignOptions;
  align?: JustifyAlignOptions;
  gutter: keyof SpacingOptions;
}

export const InlineCluster = styled.div.attrs<InlineClusterProps>(
  ({ justify, align }) => {
    const justifyValue = justify ? `justify:${justify}` : "justify:start";
    const alignValue = align ? `align:${align}` : "align:start";
    return {
      "data-bedrock-inline": `${justifyValue} ${alignValue}`,
      "data-bedrock-inline-cluster": undefined,
    };
  }
)<InlineClusterProps>`
  --gutter: ${({ gutter, theme }) => {
    const maybeGutter = getSpacingValue(theme, gutter);
    return maybeGutter ?? "0px";
  }};

  box-sizing: border-box;
  > * {
    margin: 0;
  }

  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    typeof props.justify !== "undefined" && justifyAlignMap[props.justify]
      ? justifyAlignMap[props.justify]
      : justifyAlignMap.start};

  align-items: ${(props) =>
    typeof props.align !== "undefined" && justifyAlignMap[props.align]
      ? justifyAlignMap[props.align]
      : justifyAlignMap.start};
`;

InlineCluster.displayName = "InlineCluster";

InlineCluster.propTypes = {
  gutter: PropTypes.string.isRequired as React.Validator<keyof SpacingOptions>,
  justify: PropTypes.oneOf<JustifyAlignOptions>(["start", "center", "end"]),
  align: PropTypes.oneOf<JustifyAlignOptions>(["start", "center", "end"]),
};
