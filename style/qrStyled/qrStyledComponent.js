import styled from "styled-components/native"
import { BazziText } from "../homeStyled/homeStyledComponent"
import { fontPercentage } from "../../responsiveSize"

export const QRView = styled.View`
    display: flex;
    align-items: center;
    gap: 50px;
    flex:1;
    padding: 20px;
    margin-top:50px;
`
export const QRTitleText = styled(BazziText)`
    font-size: ${fontPercentage(22)}px;
    flex:0.1;
`
export const QRText = styled(BazziText)`
    font-size: ${fontPercentage(18)}px;
    flex:0.2;
`