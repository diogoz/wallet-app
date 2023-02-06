import React from "react";
import { View } from "react-native";
import { Button, GoogleIcon, ButtonTitle } from "./styles";
import GoogleLogo from "../../assets/GoogleLogo.png";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    title: string;
}

const SignInGoogleButton = ({ title, ...rest }: Props) => {
    return (
        <View>
            <Button {...rest}>
                <GoogleIcon source={GoogleLogo} />
                <ButtonTitle>Google</ButtonTitle>
            </Button>
        </View>
    );
};

export default SignInGoogleButton;
