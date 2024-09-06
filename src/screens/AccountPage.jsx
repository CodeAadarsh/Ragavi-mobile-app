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
import { useNavigation } from '@react-navigation/native';
import EditProfile from './EditProfile';

const AccountPage = ({ }) => {

  const navigation = useNavigation();

  const menuOptions = [
    {
      label: 'My Orders',
      pagename : <MyOrdersIcon/>,
      navigation: "MyOrders"
    },
    {
      label: 'Address Book',
      pagename: <AddressBook/>,
      navigation: "MyAddresses"
    },
    {
      label: 'My Gift Card',
      pagename: <GiftCardIcon/>,
      navigation: "GiftCard"
    },
    {
      label: 'My Rewards',
      pagename: <RewardIcon/>,
      navigation: "MyRewards"
    },
    {
      label: 'Size Chart',
      pagename: <SizeChartIcon/>,
      navigation: "Productspage"
    },
    {
      label: 'Contact Us',
      pagename: <ContactIcon/>,
      navigation: "ContactUs"

    },
    {
      label: 'WholeSale',
      pagename: <WholesaleIcon/>,
      navigation: "Error404"

    },
    {
      label: 'Privacy Policy',
      pagename: <PrivacyPolicyIcon/>,
      navigation: "Error404"

    },
    {
      label: 'Shipping Policy',
      pagename: <ShippingPolicyIcon/>,
      navigation: "Error404"

    },
    {
      label: 'Influencers',
      pagename: <InfluencersIcon/>,
      navigation: "Error404"

    },
    {
      label: 'FAQs',
      pagename: <FAQsIcon/>,
      navigation: "Error404"

    },
  ]
  const profile = 'EditProfile'
  const headerDetails = 'My Account'
  return (
    <>
       <TouchableOpacity>
        <HeaderComponent headerDetails={headerDetails}/>
      </TouchableOpacity>
      <ScrollView  showsVerticalScrollIndicator={false} className='flex-1 '>
      {/* Chevron + Header */}
   
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
        <Text className='text-xl font-semibold p-2'>Johnny Crow Senior</Text>

        {/* Edit Profile  */}
        <TouchableOpacity onPress={() => navigation.navigate(profile)} className='flex flex-row p-1 border-2 border-solid items-center justify-center'>
          <Image
            className='h-3 w-3'
            source={require('../../assets/Images/EditProfile.png')} />
          <Text className='mx-2 text-xs'>Edit Profile</Text>
        </TouchableOpacity>
      </View>


      <View className='mt-10'>
        {menuOptions.map((items, index) => (
          <TouchableOpacity onPress={()=>navigation.navigate(items.navigation)} className='p-1 flex flex-row items-center border border-solid border-gray-200 justify-between' key={index}>
            <View className='flex flex-row'>
              <View className="items-center justify-center pl-2">
              {items.pagename}
              </View>
              <Text className='ml-6 font-normal text-xl '>{items.label}</Text>
            </View>
            <ChevronRight/>
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>

    </>
  
  );
}

export default AccountPage;
