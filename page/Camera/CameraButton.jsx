import React from 'react'
import CameraIcon from '../../assets/icon/CameraBut.svg'
import { WithLocalSvg } from 'react-native-svg'
import { CameraButtonView } from '../../style/cameraStyled/cameraStyledComponent'
function CameraButton() {
    return (
        <CameraButtonView>
            <WithLocalSvg asset={CameraIcon} />
        </CameraButtonView>
    )
}

export default CameraButton