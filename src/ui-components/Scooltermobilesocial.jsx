/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Scooltermobilesocial(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Scooltermobilesocial")}
    >
      <Flex
        gap="30px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 28")}
      >
        <Image
          width="48px"
          height="48px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_whatsapp.png"
          {...getOverrideProps(overrides, "web_whatsapp 1")}
        ></Image>
        <Image
          width="48px"
          height="48px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_facebook.png"
          {...getOverrideProps(overrides, "web_facebook 1")}
        ></Image>
        <Image
          width="48px"
          height="48px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_instagram.png"
          {...getOverrideProps(overrides, "web_instagram 1")}
        ></Image>
      </Flex>
    </Flex>
  );
}
