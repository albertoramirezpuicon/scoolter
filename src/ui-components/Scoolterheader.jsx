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
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Scoolterheader(props) {
  const { HeaderGap = "400", overrides, ...rest } = props;
  const webUnderScorewhatsappOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://wa.link/czxryt",
  });
  const webUnderScorefacebookOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.facebook.com/scoolter.pe/",
  });
  const webUnderScoreinstagramOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.instagram.com/scoolterperu/",
  });
  return (
    <Flex
      gap="120px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Scoolterheader")}
    >
      <Flex
        gap="0"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="139.68px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 283269880")}
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
        <Image
          width="399px"
          height="139.68px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/Logotipo-01.png"
          {...getOverrideProps(overrides, "Logotipo")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        shrink="0"
        height="97px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 283269882")}
      >
        <Image
          width="275px"
          height="39px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://a360data.s3.us-east-2.amazonaws.com/web_headertext.png"
          {...getOverrideProps(overrides, "web_headertext 1")}
        ></Image>
        <Flex
          gap="30px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 283269881")}
        >
          <Image
            width="48px"
            height="48px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src="https://a360data.s3.us-east-2.amazonaws.com/web_whatsapp.png"
            onClick={() => {
              webUnderScorewhatsappOneOnClick();
            }}
            {...getOverrideProps(overrides, "web_whatsapp 1")}
          ></Image>
          <Image
            width="48px"
            height="48px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src="https://a360data.s3.us-east-2.amazonaws.com/web_facebook.png"
            onClick={() => {
              webUnderScorefacebookOneOnClick();
            }}
            {...getOverrideProps(overrides, "web_facebook 1")}
          ></Image>
          <Image
            width="48px"
            height="48px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            src="https://a360data.s3.us-east-2.amazonaws.com/web_instagram.png"
            onClick={() => {
              webUnderScoreinstagramOneOnClick();
            }}
            {...getOverrideProps(overrides, "web_instagram 1")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
