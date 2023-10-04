import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WithLocalSvg } from 'react-native-svg';//svg사용에 필수
import MapPage from '../page/Map/MapPage';
import MorePage from '../page/More/MorePage';
import HomeIcon from '../assets/icon/Home.svg';
import HomeCIcon from '../assets/icon/HomeC.svg';
import MapIcon from '../assets/icon/Map.svg';
import MapCIcon from '../assets/icon/MapC.svg';
import MoreIcon from '../assets/icon/More.svg';
import MoreCIcon from '../assets/icon/MoreC.svg';
import HomeStack from '../page/Home/HomeStack';
import { useRecoilValue } from 'recoil';
import { navigatorState } from '../atom/homeAtom';
const Tab = createBottomTabNavigator();
function BottomNav() {
    const tabBarState = useRecoilValue(navigatorState)
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Main"
                screenOptions={({ route }) => ({
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => {
                        if (route.name === "Main") {
                            return <WithLocalSvg asset={focused ? (HomeCIcon) : (HomeIcon)} />;
                        }
                        if (route.name === "Map") {
                            return <WithLocalSvg asset={focused ? (MapCIcon) : (MapIcon)} />;
                        }
                        if (route.name === "More") {
                            return <WithLocalSvg asset={focused ? (MoreCIcon) : (MoreIcon)} />;
                        }
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                    headerShadowVisible: false, // 헤더 border 제거
                })}
            >
                {tabBarState ? (
                    <Tab.Screen name="Main" component={HomeStack} />
                ) : (<>
                    <Tab.Screen name="Main" component={HomeStack} />
                    <Tab.Screen name="Map" component={MapPage} />
                    <Tab.Screen name="More" component={MorePage} />
                </>)}
            </Tab.Navigator>
        </NavigationContainer >
    )
}
export default BottomNav;