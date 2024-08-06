import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const AccountPage = ({ navigation }) => {
  const menuOptions = [
    {
      label: 'My Orders',
      icon: require('../../assets/Images/MyOrders.png'),
    },
    {
      label: 'Address Book',
      icon: require('../../assets/Images/AddressBook.png'),
    },
    {
      label: 'My Gift Card',
      icon: require('../../assets/Images/GiftCard.png'),
    },
    {
      label: 'My Rewards',
      icon: require('../../assets/Images/Rewards.png'),
    },
    {
      label: 'Size Chart',
      icon: require('../../assets/Images/SizeChart.png'),
    },
    {
      label: 'Contact Us',
      icon: require('../../assets/Images/ContactUs.png'),
    },
    {
      label: 'WholeSale',
      icon: require('../../assets/Images/WholeSale.png'),
    },
    {
      label: 'Privacy Policy',
      icon: require('../../assets/Images/PrivacyPolicy.png'),
    },
    {
      label: 'Shipping Policy',
      icon: require('../../assets/Images/ShippingPolicy.png'),
    },
    {
      label: 'Influencers',
      icon: require('../../assets/Images/Influencers.png'),
    },
    {
      label: 'FAQs',
      icon: require('../../assets/Images/FAQs.png'),
    },
  ]

  return (
    <ScrollView className='flex-1 bg-white'>
      {/* Chevron + Header */}
      <TouchableOpacity>
        <View className='mt-10 p-8 flex flex-row'>
          <Image
            className="w-6 h-6"
            source={require('../../assets/Images/Chevron.png')}
          />
          <Text className='font-bold text-3xl ml-4'>My Account</Text>
        </View>
      </TouchableOpacity>

      {/* Profile Image+ Name + Edit Option */}
      <View className='flex justify-center items-center'>
        {/* Profile Image */}
        <TouchableOpacity className='border-solid border-primary border-4 rounded-full'>
          <Image
            className='w-20 h-20'
            source={require('../../assets/Images/Vector.png')}
          />
        </TouchableOpacity>

        {/* Profile Name */}
        <Text className='text-3xl p-2'>Johnny Crow Senior</Text>

        {/* Edit Profile  */}
        <TouchableOpacity className='flex flex-row p-2 border-4 border-solid items-center justify-center'>
          <Image
            className='h-4 w-4'
            source={require('../../assets/Images/EditProfile.png')} />
          <Text className='mx-2'>Edit Profile</Text>
        </TouchableOpacity>
      </View>


      <View className='mt-10'>
        {menuOptions.map((items, index) => (
          <TouchableOpacity className='p-2 flex flex-row items-center border border-solid border-gray-200 justify-between' key={index}>
            <View className='flex flex-row'>
              <Image className='h-6 w-6' source={items.icon} />
              <Text className='ml-4 text-lg'>{items.label}</Text>
            </View>
            <Image className='h-6 w-6' source={require('../../assets/Images/ChevronRight.png')} />
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>
  );
}

export default AccountPage;
