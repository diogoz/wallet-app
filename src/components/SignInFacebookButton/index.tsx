import React from "react";
import { View } from "react-native";
import { Button, ButtonTitle, FacebookIcon } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    title: string;
}
const SignInFacebookButton = ({ title, ...rest }: Props) => {
    return (
        <View>
            <Button {...rest}>
                <FacebookIcon name="facebook" />
                <ButtonTitle>{title}</ButtonTitle>
            </Button>
        </View>
    );
};

export default SignInFacebookButton;
