import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Container,
    ContentBody,
    ContentFooter,
    ContentHeader,
    Description,
    Title,
    ViewButton,
} from "./styles";
import SignInGoogleButton from "../../components/SignInGoogleButton";

const Login = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Welcome back {"\n"} to Mabank Wallet</Title>
                    <Description>Sign up with</Description>
                    <ViewButton>
                        <SignInGoogleButton title="Google" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody></ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export default Login;
