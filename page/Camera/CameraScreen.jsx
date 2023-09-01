import React, { useState, useEffect, useRef } from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AutoFocus, Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { CameraView, CameraVieww } from '../../style/cameraStyled/cameraStyledComponent';
import CameraButton from './CameraButton';
export default function CameraScreen() {
    const cameraRef = useRef(null);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
    const [zoomLevel, setZoomLevel] = useState(0);

    const [cameraPermission, setCameraPermission] = useState(null);
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(cameraStatus === 'granted');
        })();
    }, [])
    return (
        <CameraVieww>
            <Camera
                style={CameraView}
                ref={cameraRef}
                type={cameraType}
                zoom={zoomLevel}
                autoFocus={AutoFocus.on}
                flashMode={flash}
            >
                <Text>asd</Text>
            </Camera>
            <CameraButton></CameraButton>
        </CameraVieww>
    );
}
