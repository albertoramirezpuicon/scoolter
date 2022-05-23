/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ScoolterFirstRowFlex(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 24px 10px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ScoolterFirstRowFlex")}
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="285px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23.5px 71.5px 23.5px 71.5px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_helmet.png"
          {...getOverrideProps(overrides, "web_helmet 1")}
        ></Image>
        <Text
          fontFamily="Roboto"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="42.1875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Certified &#xA;helmet"
          {...getOverrideProps(overrides, "labelHelmet")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="285px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23.5px 71.5px 23.5px 71.5px"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_routes.png"
          {...getOverrideProps(overrides, "web_routes 1")}
        ></Image>
        <Text
          fontFamily="Roboto"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="42.1875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Touristic &#xA;maps"
          {...getOverrideProps(overrides, "labelMaps")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="285px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23.5px 71.5px 23.5px 71.5px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_road.png"
          {...getOverrideProps(overrides, "web_road 1")}
        ></Image>
        <Text
          fontFamily="Roboto"
          fontSize="36px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="42.1875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Unlimited&#xA;kilometers"
          {...getOverrideProps(overrides, "labelKilometers")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="285px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23.5px 71.5px 23.5px 71.5px"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_insurance.png"
          {...getOverrideProps(overrides, "web_insurance 1")}
        ></Image>
        <Text
          fontFamily="Roboto"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="42.1875px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Accident &#xA;insurance"
          {...getOverrideProps(overrides, "labelInsurance")}
        ></Text>
      </Flex>
    </Flex>
  );
}
