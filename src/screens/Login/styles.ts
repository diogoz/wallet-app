import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
    margin-top: ${RFValue(80)}px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const ContentHeader = styled.View`
    padding: ${RFValue(32)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.RUBIKIMEDIUM};
    line-height: 28.44px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PURPLEDARK3};
`;

export const Description = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
    line-height: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    padding-top: ${RFValue(72)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const ViewButton = styled.View``;

export const ContentBody = styled.View``;

export const ContentFooter = styled.View``;
