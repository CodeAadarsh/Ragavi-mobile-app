import { View, Text, CheckBox } from 'react-native'
import React from 'react'
import ChevronLeft from '../../assets/SVG_Jsx/ChevronLeft'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AddItem from '../../assets/SVG_Jsx/AddItem'
import AddressCard from '../components/AddressCard';
import HeaderComponent from '../components/HeaderComponent';


const isLoading = false;
const MyAddresses = () => {

    if (isLoading) {
        return (
            <ActivityLoading />
        )
    }
    const myAddressDetails = [
        {
            name: 'Mr John Doe',
            addressLine1: '639 Frami Island, Glennburgh',
            addressLine2: ' WA 49310, 639 Frami Island,Germany',
            pincode: '32405',
            phoneNumber: '3454674154',
        },
        {
            name: 'Mr Suresh Singh',
            addressLine1: '34- Jawahar Nagar',
            addressLine2: ' Main Road Agra',
            pincode: '32405',
            phoneNumber: '9854674154',
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
    const headerDetails = 'My Addresses'
    return (

        <ScrollView  showsVerticalScrollIndicator={false} className='flex1 bg-secondary'>

            {/* My Address Header */}
            <HeaderComponent headerDetails={headerDetails} />

            <TouchableOpacity className='mb-4 p-3 flex flex-row items-center border border-solid border-gray-200'>

                <AddItem />
                <Text className=' text-base  bg-secondary'>Add A New Address</Text>
            </TouchableOpacity>
            
            {/* Addresses */}
            <View className='shadow-2xl'>
                {myAddressDetails.map((item, index) => (
                    <AddressCard
                    key={index}
                    name = {item.name}
                    addLine1 = {item.addressLine1}
                    addLine2 = {item.addressLine2}
                    pincode = {item.pincode}
                    phone = {item.phoneNumber}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default MyAddresses