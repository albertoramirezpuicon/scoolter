/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ScoolterIncludesHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="30px 200px 10px 200px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ScoolterIncludesHeader")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="48px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="56.25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="What is included in your motorbike rental?"
        {...getOverrideProps(overrides, "lblTitle")}
      ></Text>
    </Flex>
  );
}
