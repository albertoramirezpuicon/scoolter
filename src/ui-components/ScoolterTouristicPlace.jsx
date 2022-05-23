/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ScoolterTouristicPlace(props) {
  const { touristicPlace, overrides, ...rest } = props;
  const imgTouristicPlaceOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: touristicPlace?.locationurl,
  });
  const labelTouristicPlaceOnClick = useNavigateAction({
    type: "url",
    url: touristicPlace?.locationurl,
  });
  return (
    <Flex
      gap="20px"
      direction="column"
      width="320px"
      position="relative"
      padding="20px 0px 20px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ScoolterTouristicPlace")}
    >
      <Image
        width="320px"
        height="212.62px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={touristicPlace?.imageurl}
        onClick={() => {
          imgTouristicPlaceOnClick();
        }}
        {...getOverrideProps(overrides, "imgTouristicPlace")}
      ></Image>
      <Text
        fontFamily="Roboto"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.21px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={touristicPlace?.nombre}
        onClick={() => {
          labelTouristicPlaceOnClick();
        }}
        {...getOverrideProps(overrides, "labelTouristicPlace")}
      ></Text>
    </Flex>
  );
}
