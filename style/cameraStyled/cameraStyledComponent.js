import { styled } from "styled-components/native";
import { Platform } from "react-native";
import { BazziText } from "../homeStyled/homeStyledComponent";
export const CameraView = styled.View`
    flex: 1;
    justify-content: center;
`
export const CameraButtonView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 30px;

`
export const AfterButtonView = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-around;
    gap: 150px;
    margin-bottom: 20px;
`
export const AfterText = styled(BazziText)`
    font-size: 18px;
    color: white;
`
export const AfterView = styled.View`
    background-color: ${(props) => props.color};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 10px;
`
export const CameraButtonTouchableOpacity = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 20px;
    justify-content: center;
    ${Platform.select({
    ios: `
      shadow-offset: 0px 1px;
      shadow-opacity: 0.15;
      shadow-radius: 1px;
    `,
    android: `
      elevation: 2;
    `,
})};
`