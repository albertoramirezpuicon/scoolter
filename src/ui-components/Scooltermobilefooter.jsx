/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Scooltermobilefooter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(41,50,60,1)"
      {...rest}
      {...getOverrideProps(overrides, "Scooltermobilefooter")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Scoolter S.A.C.&#xA;RUC 20603460112&#xA; +51 957719036&#xA;Mercado Plaza de Flores,  Barranco, Lima, Perú&#xA;ventas@scoolter.pe"
        {...getOverrideProps(overrides, "lblDatos")}
      ></Text>
    </Flex>
  );
}
