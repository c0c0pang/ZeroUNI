import { Platform } from "react-native";
import styled from "styled-components/native";

export const BazziText = styled.Text`
    font-family: ${(props) => props.theme.fontFamily};
`;

export const HomeScreenView = styled.View`
    display: flex;
    gap: 20px;
    padding: 25px;
`;

export const UserInfoView = styled.View`
    border-radius: 5px;
    background-color: white;
`;

export const CardView = styled.TouchableOpacity`
    background-color: white;
    border-radius: 5px;
    ${Platform.select({
    ios: `
      shadow-offset: 0px 1px;
      shadow-opacity: 0.15;
      shadow-radius: 1px;
    `,
    android: `
      elevation: 2;
    `,
})}
`;

export const UserInfoCard = styled(CardView)`
    display: flex;
    justify-content: space-around;
    height: 108px;
    padding: 10px;
`;

export const UserInfoText = styled(BazziText)`
    font-size: 15px;
`;

export const UserInfoPointView = styled.View`
    display: flex;
    flex-direction: row;
    gap: 2px;
`;
export const PointView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const UserInfoPointText = styled(BazziText)`
    color: #629F3C;
`;

export const ContentView = styled.View`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const ContentCard = styled(CardView)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 119px;
    width: 160px;
`;

export const ContentText = styled(BazziText)`
    font-size: 17px;
`;

export const RankContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const RankView = styled.View`
    display: flex;
    gap: 10px;
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
`;
export const RankListView = styled.View`
    display: flex;
    padding: 5px;
`;
export const RankText = styled(BazziText)`
    font-size: 16px;
`;
export const RankTextView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const RankUniText = styled(BazziText)`
    font-size: 16px;
`;
export const RankNameText = styled(BazziText)`
    font-size: 16px;
`;
export const RankList = styled.FlatList`
    background-color: white;
    width: 159px;
    border-radius: 5px;
    padding: 5px;
`
