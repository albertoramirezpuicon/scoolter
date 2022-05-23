/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function ScoolterIncludesFirstRow(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ScoolterIncludesFirstRow")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="304px"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 418")}
      ></Flex>
    </Flex>
  );
}
