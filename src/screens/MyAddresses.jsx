import { View, Text } from 'react-native'
import React from 'react'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddItem from '../../assets/SVG_Jsx/AddItem'


const isLoading = false;
const MyAddresses = () => {

    if (isLoading) {
        return (
            <ActivityLoading />
        )
    }
    const myAddressDetails = [
        {
            name: 'Mr Suresh Singh',
            addressLine1: '34- Jawahar Nagar',
            addressLine2: ' Main Road Agra',
            pincode: '32405',
            phoneNumber: '3454674154',
        },
        {
            name: 'Mr Sagar Agarwal',
            addressLine1: 'Near New Triton Mall',
            addressLine2: 'Sim City Chandigarh',
            pincode: '12403',
            phoneNumber: '9853869955',
        },
        {
            name: 'Mr Shivam Chaudhary',
            addressLine1: '54- Transport Nagar',
            addressLine2: 'Near Pink Square Mall Jaipur',
            pincode: '32143',
            phoneNumber: '9683563573',
        },
        {
            name: 'Mr John Doe',
            addressLine1: '639 Frami Island, Glennburgh',
            addressLine2: ' WA 49310, 639 Frami Island,Germany',
            pincode: '32405',
            phoneNumber: '3454674154',
        },
    ]

    return (

        <View className='flex1 bg-secondary'>

            {/* My Address Header */}
            <TouchableOpacity className='bg-secondary p-8 flex flex-row mt-10'>
                <View className='mt-1'>
                    <ChevronLeft />
                </View>
                <Text className='text-3xl mx-4'>My Addresses</Text>
            </TouchableOpacity>

            <TouchableOpacity className='p-6 flex flex-row items-center border border-solid border-gray-200'>

                <AddItem />
                <Text className='text-xl font-normal bg-secondary'>Add A New Address</Text>
            </TouchableOpacity>

        </View>
    )
}

export default MyAddresses