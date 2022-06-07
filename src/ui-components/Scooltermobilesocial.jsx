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
export default function Scooltermobilesocial(props) {
  const { overrides, ...rest } = props;
  const webUnderScorewhatsappOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://api.whatsapp.com/send?phone=51957719036&text=I%20want%20to%20rent%20a%20motorbike%20%F0%9F%9B%B5",
  });
  const webUnderScorefacebookOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.facebook.com/scoolter.pe/",
  });
  const webUnderScoreinstagramOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "",
  });
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
  );
}
