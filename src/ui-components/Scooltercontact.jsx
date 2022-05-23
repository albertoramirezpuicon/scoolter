/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Scooltercontact(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      alignItems="flex-start"
      position="relative"
      padding="20px 10px 20px 10px"
      backgroundColor="rgba(41,50,60,1)"
      {...rest}
      {...getOverrideProps(overrides, "Scooltercontact")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="180px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 425")}
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
          width="705px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Scoolter S.A.C.&#xA;RUC 20603460112&#xA;Teléfono:  +51 949358364&#xA;Dirección: Mercado Plaza de Flores, Barranco, Lima, Perú&#xA;Empresa de alquiler de motos en Lima, Perú&#xA;Para contactos corporativos: ventas@scoolter.pe"
          {...getOverrideProps(overrides, "Ficha general")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        height="180px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="705px"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 426")}
      >
        <Image
          width="147px"
          height="139.53px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/Logotipo-22.png"
          {...getOverrideProps(overrides, "Isotipo")}
        ></Image>
      </Flex>
    </Flex>
  );
}
