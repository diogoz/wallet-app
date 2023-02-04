import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    flex-direction: row;
`;

export const GoogleIcon = styled.Image`
    width: ${RFValue(24)}px;
    height: ${RFValue(24)}px;
    margin-right: ${RFValue(8)}px;
`;

export const ButtonTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;
