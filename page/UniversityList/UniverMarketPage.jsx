import React from 'react'
import { GlobaSafeAreaView } from '../../style/globalStyled'
import { MarketView, UniFalatList, UniImgText, UniImgTextView } from '../../style/universityStyled/universityStyledComponent'
import { WithLocalSvg } from 'react-native-svg'
import { ThemeProvider } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import BackIcon from '../../assets/icon/Back.svg'
import { TouchableOpacity, View, Text } from 'react-native'
import { CouponData } from '../../data/Data'
import CouponCard from './CouponCard'
function UniverMarketPage({ route }) {
    const navigation = useNavigation();
    return (
        <GlobaSafeAreaView>
            <ThemeProvider theme={route.params?.fontLoaded ? { fontFamily: 'Bazzi' } : {}}>
                <MarketView>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <WithLocalSvg asset={BackIcon} width={32} height={32} />
                    </TouchableOpacity>
                    <UniImgTextView>
                        <WithLocalSvg asset={route.params?.icon} width={40} height={40} />
                        <UniImgText>{route.params?.title}</UniImgText>
                    </UniImgTextView>
                    <View />
                </MarketView>
                <UniFalatList
                    data={CouponData}
                    renderItem={({ item }) => (
                        <CouponCard props={item} />
                    )
                    }
                    keyExtractor={(item, index) => index}
                />
            </ThemeProvider>
        </GlobaSafeAreaView>
    )
}

export default UniverMarketPage