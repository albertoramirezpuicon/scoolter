/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Scooltermobileheader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="center"
      position="relative"
      padding="10px 26px 10px 26px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Scooltermobileheader")}
    >
      <Image
        width="94px"
        height="94px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://a360data.s3.us-east-2.amazonaws.com/Logotipo-22.png"
        {...getOverrideProps(overrides, "Isotipo")}
      ></Image>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.33px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Scoolter&#xA;Rent a scooter in&#xA;Lima, Peru"
        {...getOverrideProps(
          overrides,
          "Scoolter Rent a scooter in Lima, Peru"
        )}
      ></Text>
    </Flex>
  );
}
