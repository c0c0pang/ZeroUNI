import { styled } from "styled-components/native";

export const UniView = styled.View`
`
export const UniSearchView = styled.View`
    padding: 20px;
`
export const UniImgCardView = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 22px;
    border-radius: 9px;
    gap: 8px;
    height: 95px;
    ${Platform.select({
    ios: `
      shadow-offset: 0px 1px;
      shadow-opacity: 0.15;
      shadow-radius: 2px;
    `,
    android: `
      elevation: 2;
    `,
})}
`

export const UniImgText = styled.Text`
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 16;
`
export const UniFalatList = styled.FlatList`
    margin-top: 10px;
    padding: 5px;
`
export const SearchBackView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`