import styled from "styled-components/native";
import { BazziText } from "../homeStyled/homeStyledComponent";
export const CouponCardView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    margin-bottom: 15px;
    justify-content: space-between;
    border-radius: 3px;
    ${Platform.select({
  ios: `
      shadow-offset: 0px 1px;
      shadow-opacity: 0.1;
      shadow-radius: 3px;
    `,
  android: `
      elevation: 2;
    `,
})}
`
export const CouponCardTextView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
`
export const CouponCardText = styled(BazziText)`
    font-size: 14px;
`
export const CouponBuyText = styled(BazziText)`
    font-size: 16px;
    color: white;
`
export const CouponBuyButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 74px;
  background-color: #629F3C;
  border-radius: 0px 3px 3px 0px;
  
`