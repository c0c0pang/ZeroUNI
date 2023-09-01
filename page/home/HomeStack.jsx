import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import UniversityListPage from '../UniversityList/UniversityListPage';
import HomeScreen from './HomeScreen';
import CameraScreen from '../Camera/CameraScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({

                headerShown: false
            })
            }
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UniListPage" component={UniversityListPage} />
            <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;
