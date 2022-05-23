/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ScoolterSecondRowFlex(props) {
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
      {...getOverrideProps(overrides, "ScoolterSecondRowFlex")}
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="284px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23px 71px 23px 71px"
        {...getOverrideProps(overrides, "Frame 421")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_fuel.png"
          {...getOverrideProps(overrides, "web_fuel 1")}
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
          children="Full tank &#xA;at pick up"
          {...getOverrideProps(overrides, "labelTank")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="284px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23px 71px 23px 71px"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_hotel.png"
          {...getOverrideProps(overrides, "web_hotel 1")}
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
          children="Free hotel&#xA;delivery"
          {...getOverrideProps(overrides, "labelDelivery")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="284px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23px 71px 23px 71px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_premium.png"
          {...getOverrideProps(overrides, "web_premium 1")}
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
          children="Premium &#xA;rentals"
          {...getOverrideProps(overrides, "labelPremium")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="284px"
        position="relative"
        border="1px SOLID rgba(237,114,37,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="23px 71px 23px 71px"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <Image
          width="128px"
          height="128px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_gps.png"
          {...getOverrideProps(overrides, "web_gps 1")}
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
          children="Anti-theft &#xA;GPS"
          {...getOverrideProps(overrides, "labelGPS")}
        ></Text>
      </Flex>
    </Flex>
  );
}
