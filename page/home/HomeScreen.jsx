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
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useCustomFont from '../../data/useCustomFont'
import { GlobaSafeAreaView } from '../../style/globalStyled'
import { Camera } from 'expo-camera'
const HomeScreen = () => {
    const SCREEN_HEIGHT = Dimensions.get("window").height;
    const navigation = useNavigation();
    const handlePress = (select) => {
        select === 'Camera' ? (navigation.navigate('Camera')) : (navigation.navigate('UniListPage'));
    };
    const fontLoaded = async () => await useCustomFont('Bazzi', require('../../assets/fonts/Bazzi.ttf'));
    const openCameraHandler = async () => {
        // 카메라에 대한 접근 권한을 얻을 수 있는지 묻는 함수입니다.
        const { status } = await Camera.requestCameraPermissionsAsync();

        // 권한을 획득하면 status가 granted 상태가 됩니다.
        if (status === 'granted') {
            // Camera 컴포넌트가 있는 CameraScreen으로 이동합니다.
            navigation.navigate('Camera');
        } else {
            Alert.alert('카메라 접근 허용은 필수입니다.');
        }
    };
    return (
        <ThemeProvider theme={fontLoaded ? { fontFamily: 'Bazzi' } : {}}>
            <GlobaSafeAreaView>
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
                            <ContentCard onPress={() => openCameraHandler()}>
                                <WithLocalSvg asset={CameraIcon} />
                                <ContentText>재활용 쓰레기 촬영</ContentText>
                            </ContentCard>
                            <ContentCard onPress={() => handlePress('Building')}>
                                <WithLocalSvg asset={BuildingsIcon} />
                                <ContentText>학교 리스트</ContentText>
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
            </GlobaSafeAreaView>
        </ThemeProvider>
    )
}

export default HomeScreen