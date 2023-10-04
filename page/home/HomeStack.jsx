import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import UniversityListPage from '../UniversityList/UniversityListPage';
import HomeScreen from './HomeScreen';
import CameraScreen from '../Camera/CameraScreen';
import { useSetRecoilState } from 'recoil';
import { navigatorState } from '../../atom/homeAtom';
import UniverMarketPage from '../UniversityList/UniverMarketPage';

const Stack = createNativeStackNavigator();

function HomeStack() {
    const setShowTabBar = useSetRecoilState(navigatorState)
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false
            })
            }

        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Group>
                <Stack.Screen name="UniListPage" component={UniversityListPage} />
                <Stack.Screen name="UniMarketPage" component={UniverMarketPage} />
            </Stack.Group>
            <Stack.Screen
                name="Camera"
                component={CameraScreen}
                listeners={({ route }) => ({
                    focus: () => {
                        setShowTabBar(true);
                    },
                    blur: () => {
                        setShowTabBar(true);
                    },
                })}
                options={{
                    gestureEnabled: true
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack;
