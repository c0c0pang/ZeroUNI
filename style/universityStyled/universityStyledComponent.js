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
    width: 28%;
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
    font-size: 18px;
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
export const MarketView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
export const UniImgTextView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`