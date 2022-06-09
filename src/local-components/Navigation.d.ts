import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type NavigationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Navigation(props: NavigationProps): React.ReactElement;