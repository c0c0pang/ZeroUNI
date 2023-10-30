import { Platform } from "react-native";
import styled from "styled-components/native";
import { fontPercentage, widthPercentage } from "../../responsiveSize";

export const BazziText = styled.Text`
    font-family: ${(props) => props.theme.fontFamily};
`;

export const HomeScreenView = styled.View`
    display: flex;
    gap: 40px;
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
    font-size: ${fontPercentage(15)}px;
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
    font-size: ${fontPercentage(15)}px;
`;

export const ContentView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
`;

export const ContentCard = styled(CardView)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 119px;
    width: 48%;
`;

export const ContentText = styled(BazziText)`
    font-size: ${fontPercentage(15)}px;
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
    font-size: ${fontPercentage(16)}px;
`;
export const RankTextView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const RankUniText = styled(BazziText)`
    font-size: ${fontPercentage(13)}px;
`;
export const RankNameText = styled(BazziText)`
    font-size: ${fontPercentage(13)}px;
`;
export const RankList = styled.FlatList`
    background-color: white;
    width: ${widthPercentage(159)}px;
    border-radius: 5px;
    padding: 5px;
`
