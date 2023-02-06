import React from "react";
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
import SignInFacebookButton from "../../components/SignInFacebookButton";

const Login = () => {
    return (
        <Container>
            <ContentHeader>
                <Title>Welcome back {"\n"} to Mabank Wallet</Title>
                <Description>Sign up with</Description>
                <ViewButton>
                    <SignInGoogleButton title="Google" />
                    <SignInFacebookButton title="Facebook" />
                </ViewButton>
            </ContentHeader>

            <ContentBody></ContentBody>

            <ContentFooter></ContentFooter>
        </Container>
    );
};

export default Login;
