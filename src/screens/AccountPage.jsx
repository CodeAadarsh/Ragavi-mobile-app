import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import AddressBook from '../../a../../assets/SVG_Jsx/AddressBook'
import MyOrdersIcon from '../../assets/SVG_Jsx/MyOrdersIcon'
import GiftCardIcon from '../../assets/SVG_Jsx/GiftCardIcon'
import RewardIcon from '../../assets/SVG_Jsx/RewardIcon'
import SizeChartIcon from '../../assets/SVG_Jsx/SizeChartIcon'
import ContactIcon from '../../assets/SVG_Jsx/ContactIcon'
import WholesaleIcon from '../../assets/SVG_Jsx/WholesaleIcon'
import PrivacyPolicyIcon from '../../assets/SVG_Jsx/PrivacyPolicyIcon'
import ShippingPolicyIcon from '../../assets/SVG_Jsx/ShippingPolicyIcon'
import InfluencersIcon from '../../assets/SVG_Jsx/InfluencersIcon'
import FAQsIcon from '../../assets/SVG_Jsx/FAQsIcon'
import ChevronRight from '../../assets/SVG_Jsx/ChevronRight'
import HeaderComponent from '../components/HeaderComponent';

const AccountPage = ({ navigation }) => {
  const menuOptions = [
    {
      label: 'My Orders',
      pagename : <MyOrdersIcon/>
    },
    {
      label: 'Address Book',
      pagename: <AddressBook/>
    },
    {
      label: 'My Gift Card',
      pagename: <GiftCardIcon/>
    },
    {
      label: 'My Rewards',
      pagename: <RewardIcon/>
    },
    {
      label: 'Size Chart',
      pagename: <SizeChartIcon/>
    },
    {
      label: 'Contact Us',
      pagename: <ContactIcon/>

    },
    {
      label: 'WholeSale',
      pagename: <WholesaleIcon/>

    },
    {
      label: 'Privacy Policy',
      pagename: <PrivacyPolicyIcon/>

    },
    {
      label: 'Shipping Policy',
      pagename: <ShippingPolicyIcon/>

    },
    {
      label: 'Influencers',
      pagename: <InfluencersIcon/>

    },
    {
      label: 'FAQs',
      pagename: <FAQsIcon/>

    },
  ]
  const headerDetails = 'My Account'
  return (
    <ScrollView className='flex-1 bg-white'>
      {/* Chevron + Header */}
      <TouchableOpacity>
        <HeaderComponent headerDetails={headerDetails}/>
      </TouchableOpacity>

      {/* Profile Image+ Name + Edit Option */}
      <View className='flex justify-center items-center'>
        {/* Profile Image */}
        <TouchableOpacity className='border-solid border-red-800 border-4 rounded-full'>
          <Image
            className='w-20 h-20'
            source={require('../../assets/Images/Vector.png')}
          />
        </TouchableOpacity>

        {/* Profile Name */}
        <Text className='text-2xl p-2'>Johnny Crow Senior</Text>

        {/* Edit Profile  */}
        <TouchableOpacity className='flex flex-row p-1 border-2 border-solid items-center justify-center'>
          <Image
            className='h-3 w-3'
            source={require('../../assets/Images/EditProfile.png')} />
          <Text className='mx-2'>Edit Profile</Text>
        </TouchableOpacity>
      </View>


      <View className='mt-10'>
        {menuOptions.map((items, index) => (
          <TouchableOpacity className='p-1 flex flex-row items-center border border-solid border-gray-200 justify-between' key={index}>
            <View className='flex flex-row'>
              {items.pagename}
              <Text className='ml-4 text-lg font-normal'>{items.label}</Text>
            </View>
            <ChevronRight/>
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>
  );
}

export default AccountPage;
