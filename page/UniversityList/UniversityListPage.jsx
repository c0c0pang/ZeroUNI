import React, { useEffect, useState } from 'react'
import { AutocompleteDropdown, AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { UniDataSet } from '../../data/Data';
import { Dimensions, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { SearchBackView, UniFalatList, UniImgCardView, UniImgText, UniLyoutView, UniSearchView } from '../../style/universityStyled/universityStyledComponent';
import SearchListBar from './SearchListBar';
import { WithLocalSvg } from 'react-native-svg';
import { ThemeProvider } from 'styled-components/native';
import useCustomFont from '../../data/useCustomFont';
import BackIcon from '../../assets/icon/Back.svg'
import { useNavigation } from '@react-navigation/native';
import { GlobaSafeAreaView } from '../../style/globalStyled';
import { useRecoilValue } from 'recoil';
import { univerItem } from '../../atom/homeAtom';
function UniversityListPage() {
    const fontLoaded = useCustomFont('Bazzi', require('../../assets/fonts/Bazzi.ttf'));
    const navigation = useNavigation();
    const selectedItem = useRecoilValue(univerItem)
    return (
        <AutocompleteDropdownContextProvider>
            <GlobaSafeAreaView>
                <UniSearchView>
                    <SearchBackView>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <WithLocalSvg asset={BackIcon} width={32} height={32} />
                        </TouchableOpacity>
                        <SearchListBar />
                    </SearchBackView>
                    <ThemeProvider theme={fontLoaded ? { fontFamily: 'Bazzi' } : {}}>
                        <UniFalatList
                            data={selectedItem === null ? (UniDataSet) : ([selectedItem])}
                            renderItem={({ item }) => (
                                <UniImgCardView onPress={() => navigation.navigate('UniMarketPage', { icon: item.uni, title: item.title, fontLoaded: fontLoaded })}>
                                    <WithLocalSvg asset={item.uni} width={53} height={53} />
                                    <UniImgText>{item.title}</UniImgText>
                                </UniImgCardView>
                            )}
                            keyExtractor={(item, index) => index}
                            numColumns={3}
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                                marginBottom: 22
                            }}
                        />
                    </ThemeProvider>
                </UniSearchView>
            </GlobaSafeAreaView>
        </AutocompleteDropdownContextProvider>
    )
}

export default UniversityListPage