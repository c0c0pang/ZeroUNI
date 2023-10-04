import React from 'react'
import CameraIcon from '../../assets/icon/CameraBut.svg'
import { WithLocalSvg } from 'react-native-svg'
import { AfterText, AfterView, CameraButtonTouchableOpacity } from '../../style/cameraStyled/cameraStyledComponent'
import { Text, View } from 'react-native'
import { BazziText } from '../../style/homeStyled/homeStyledComponent'
import useCustomFont from '../../data/useCustomFont'
import { ThemeProvider } from 'styled-components/native'
function CameraButton(props) {
    const fontLoaded = async () => await useCustomFont('Bazzi', require('../../assets/fonts/Bazzi.ttf'));
    return (
        <ThemeProvider theme={fontLoaded ? { fontFamily: 'Bazzi' } : {}}>
            <CameraButtonTouchableOpacity onPress={props.onPress}>
                {props.icon ? (
                    <View style={{ padding: 50 }}>
                        <WithLocalSvg asset={props.icon} />
                    </View>

                ) : (
                    <AfterView color={props.color}>
                        <AfterText>{props.text}</AfterText>
                    </AfterView>
                )}
            </CameraButtonTouchableOpacity>
        </ThemeProvider>
    )
}

export default CameraButton