/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function MapsFullMap(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="400px"
      height="300px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MapsFullMap")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Maps / Zoom Levels / 2 (City)")}
      ></View>
      <View
        width="287px"
        height="15px"
        position="absolute"
        bottom="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Controls / Google Maps Byline")}
      ></View>
      <View
        width="66px"
        height="26px"
        position="absolute"
        bottom="0px"
        left="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Controls / Google Logo / Color")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="28px"
        height="89px"
        position="absolute"
        top="8px"
        left="364px"
        {...getOverrideProps(overrides, "Controls")}
      >
        <View
          width="28px"
          height="28px"
          position="absolute"
          top="61px"
          right="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Controls / Street View")}
        ></View>
        <View
          width="28px"
          height="53px"
          position="absolute"
          top="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Controls / Zoom Controls")}
        ></View>
      </View>
      <View
        width="94px"
        height="29px"
        position="absolute"
        top="8px"
        left="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Controls / Map Type")}
      ></View>
    </View>
  );
}
