import React, { useEffect, useState } from 'react'

import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { UniDataSet } from '../../data/Data';
import { Dimensions } from 'react-native';
import useCustomFont from '../../data/useCustomFont';
import { useSetRecoilState } from 'recoil';
import { univerItem } from '../../atom/homeAtom';
function SearchListBar() {
    const setSelectedItem = useSetRecoilState(univerItem)
    const fontLoaded = useCustomFont('Bazzi', require('../../assets/fonts/Bazzi.ttf'))
    return (
        <AutocompleteDropdown
            onSelectItem={setSelectedItem}
            dataSet={UniDataSet}
            clearOnFocus={false}
            closeOnBlur={true}
            containerStyle={{ flexGrow: 1, flexShrink: 1 }}
            suggestionsListMaxHeight={Dimensions.get('window').height * 0.2}
            textInputProps={{
                placeholder: '찾고자 하는 학교를 입력하세요.',
                placeholderTextColor: '#fff',
                autoCorrect: false,
                autoCapitalize: 'none',
                style: {
                    borderRadius: 3,
                    // backgroundColor: '#F6A79C',
                    color: '#000',
                    paddingLeft: 18,
                    fontFamily: fontLoaded ? 'Bazzi' : {}
                },

            }}
            inputContainerStyle={{
                backgroundColor: '#F6A79C',
                borderRadius: 3,
            }}
            suggestionsListContainerStyle={{
                backgroundColor: '#F6A79C',
            }}
            suggestionsListTextStyle={{
                fontFamily: fontLoaded ? 'Bazzi' : {},
                color: '#000'
            }}
            showChevron={false}
        />
    )
}

export default SearchListBar