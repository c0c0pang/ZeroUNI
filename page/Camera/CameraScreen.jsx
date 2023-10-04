import React, { useState, useEffect, useRef } from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { AutoFocus, Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { AfterButtonView, CameraButtonView, CameraView } from '../../style/cameraStyled/cameraStyledComponent';
import CameraButton from './CameraButton';
import CameraIcon from '../../assets/icon/CameraBut.svg'
import { useRecoilState } from 'recoil';
import { navigatorState } from '../../atom/homeAtom';
import { useNavigation } from '@react-navigation/native';
import FlashIcon from '../../assets/icon/Flash.svg'
import { WithLocalSvg } from 'react-native-svg';
export default function CameraScreen() {
    const cameraRef = useRef(null);
    const navigation = useNavigation();
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
    const [image, setImage] = useState(false)
    const [cameraPermission, setCameraPermission] = useState(null);
    const [tabBarState, setTabBarState] = useRecoilState(navigatorState)
    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    }
    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                console.log('미디어 라이브러리 권한이 거부되었습니다');
            }

            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            if (cameraPermission.status !== 'granted') {
                console.log('카메라 권한이 거부되었습니다');
            } else {
                setCameraPermission(true);
            }
        })();
    }, [])
    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
            // 뒤로가기 시 navigatorState 상태 변경
            setTabBarState(false);
        });

        return unsubscribe;
    }, [tabBarState]);
    if (!cameraPermission) {
        return <Text>No Camera Access</Text>
    }
    return (
        <CameraView>
            {
                !image ? (
                    <Camera
                        style={{ flex: 1, justifyContent: 'space-between' }}
                        ref={cameraRef}
                        type={cameraType}
                        flashMode={flash}
                    >
                        <CameraButtonView>
                            <WithLocalSvg asset={FlashIcon} width={50} height={50} onPress={() => setFlash(flash === 0 ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)} />
                        </CameraButtonView>
                        <CameraButton onPress={takePicture} icon={CameraIcon}></CameraButton>
                    </Camera>
                ) : (
                    <Image source={{ uri: image }} style={{ flex: 1 }} />
                )
            }
            {image ? (
                <AfterButtonView>
                    <CameraButton onPress={() => setImage(false)} text={'재촬영'} color={'#629F3C'}></CameraButton>
                    <CameraButton onPress={() => setImage(false)} text={'검사'} color={'#F6A79C'}></CameraButton>
                </AfterButtonView>
            ) :
                null
            }
        </CameraView>
    );
}
