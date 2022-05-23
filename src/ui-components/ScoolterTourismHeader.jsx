/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function ScoolterTourismHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="20px 200px 20px 200px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ScoolterTourismHeader")}
    >
      <Image
        width="800px"
        height="117.61px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://a360data.s3.us-east-2.amazonaws.com/web_textwhattovisit.png"
        {...getOverrideProps(overrides, "web_textwhattovisit 1")}
      ></Image>
    </Flex>
  );
}
