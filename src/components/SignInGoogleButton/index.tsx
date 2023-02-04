import React from "react";
import { View, Text } from "react-native";
import { Button, GoogleIcon, ButtonTitle } from "./styles";
import GoogleLogo from "../../assets/GoogleLogo.png";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    title: string;
}

const SignInGoogleButton: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <View>
            <Button {...rest}>
                <GoogleIcon source={GoogleLogo} />
                <ButtonTitle>{title}</ButtonTitle>
            </Button>
        </View>
    );
};

export default SignInGoogleButton;
