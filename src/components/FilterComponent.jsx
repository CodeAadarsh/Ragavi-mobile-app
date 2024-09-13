import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FilterIcon from '../../assets/SVG_Jsx/FilterIcon'
import ChevronDown from '../../assets/SVG_Jsx/ChevronDown'
import SwapIcon from '../../assets/SVG_Jsx/SwapIcon'

const FilterComponent = () => {
    return (
        <View className='bg-white border border-solid border-gray-300 py-5 py-2'>
            <View className='flex flex-row justify-around'>
                <TouchableOpacity className='flex flex-row gap-x-2'>
                    <FilterIcon />
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-light'>Filters</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex flex-row gap-2'>
                    <SwapIcon />
                    <Text style={{ fontFamily: 'Frutiger' }} className='text-lg font-light'>Price: low to high</Text>
                    <ChevronDown />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FilterComponent