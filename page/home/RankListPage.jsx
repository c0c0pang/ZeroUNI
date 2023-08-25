import React from 'react'
import { View } from 'react-native'
import { RankUniText, RankNameText, RankTextView } from '../../style/homeStyled/homeStyledComponent'

function RankListPage({ props }) {
    return (
        <RankTextView>
            <RankUniText>{props.id + 1}등 {props.uni}</RankUniText>
            <RankNameText>{props.name}</RankNameText>
        </RankTextView>
    )
}

export default RankListPage