/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Scooltercontact1200(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="400px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(41,50,60,1)"
      {...rest}
      {...getOverrideProps(overrides, "Scooltercontact1200")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Scoolter S.A.C.&#xA;RUC 20603460112&#xA;+51 957719036&#xA;Mercado Plaza de Flores, Barranco, Lima, Perú&#xA;ventas@scoolter.pe"
        {...getOverrideProps(overrides, "FichaGeneral")}
      ></Text>
      <Image
        width="190px"
        height="184px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://a360data.s3.us-east-2.amazonaws.com/Logotipo-22.png"
        {...getOverrideProps(overrides, "Isotipo")}
      ></Image>
    </Flex>
  );
}
