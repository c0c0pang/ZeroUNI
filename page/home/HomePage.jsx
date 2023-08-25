import React, { useEffect, useState } from 'react'
import {
    ContentCard,
    ContentText,
    ContentView,
    HomeScreenView,
    PointView,
    RankContainer,
    RankList,
    RankListView,
    RankText,
    RankView,
    UserInfoCard,
    UserInfoPointText,
    UserInfoPointView,
    UserInfoText,
    UserInfoView
} from '../../style/homeStyled/homeStyledComponent'
import * as Font from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import { WithLocalSvg } from 'react-native-svg'
import CameraIcon from '../../assets/icon/Camera.svg'
import BuildingsIcon from '../../assets/icon/Buildings.svg'
import { AdList, RankData } from '../../data/Data'
import RankListPage from './RankListPage'
import Swiper from 'react-native-web-swiper'
import { Dimensions, ScrollView, View } from 'react-native'
function HomePage() {
    const SCREEN_HEIGHT = Dimensions.get("window").height;
    const theme = {
        fontFamily: 'Bazzi', // 커스텀 폰트 이름
    };
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'Bazzi': require('../../assets/fonts/Bazzi.ttf'),
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; // 폰트 로딩 중에 아무것도 표시하지 않음
    }
    return (
        <ThemeProvider theme={theme}>
            <ScrollView>
                <HomeScreenView>
                    <UserInfoView>
                        <UserInfoCard>
                            <UserInfoText>안녕하세요 최원석 님!</UserInfoText>
                            <PointView>
                                <UserInfoPointView>
                                    <UserInfoPointText>Z</UserInfoPointText>
                                    <UserInfoText>- Point</UserInfoText>
                                </UserInfoPointView>
                                <UserInfoText>4,000 P</UserInfoText>
                            </PointView>
                            <UserInfoText>오늘도 지구를 아껴주셔서 감사합니다!</UserInfoText>
                        </UserInfoCard>
                    </UserInfoView>
                    <ContentView>
                        <ContentCard>
                            <WithLocalSvg asset={CameraIcon} />
                            <ContentText>재활용 쓰레기 촬영</ContentText>
                        </ContentCard>
                        <ContentCard>
                            <WithLocalSvg asset={BuildingsIcon} />
                            <ContentText>제휴매장 찾기</ContentText>
                        </ContentCard>
                    </ContentView>
                    <RankContainer>
                        <RankView>
                            <RankText>개인 랭킹</RankText>
                            <RankList
                                data={RankData}
                                renderItem={({ item }) => {
                                    return (
                                        <RankListView>
                                            <RankListPage props={item} />
                                        </RankListView>
                                    )
                                }
                                }
                                keyExtractor={item => item.id}
                            />
                        </RankView>
                        <RankView>
                            <RankText>단체 랭킹</RankText>
                            <RankList
                                data={RankData}
                                renderItem={({ item }) => {
                                    return (
                                        <RankListView>
                                            <RankListPage props={item} />
                                        </RankListView>
                                    )
                                }
                                }
                                keyExtractor={item => item.id}
                            />
                        </RankView>
                    </RankContainer>
                    <Swiper
                        loop
                        timeout={5}
                        containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 8 }}
                        controlsEnabled={false}
                    >
                        {AdList.map((item) => {
                            return (
                                <WithLocalSvg asset={item} />
                            )
                        }
                        )}
                    </Swiper>
                </HomeScreenView>
            </ScrollView>
        </ThemeProvider>
    )
}

export default HomePage