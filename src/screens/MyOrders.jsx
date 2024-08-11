import { View, Text } from 'react-native'
import React from 'react'
import MyAddressForm from './MyAddressForm'
import HeaderComponent from '../components/HeaderComponent'
import OrderCard from '../components/OrderCard'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { styled } from 'nativewind'

const MyOrders = () => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledTouchableOpacity = styled(TouchableOpacity);

  const orderDetails = [ 
    {
      orderNumber : '1947036',
      date : '05-12-2019',
      trackNumber : 'IW3476565545',
      quantity : 3,
      Total : 3435,
      status : 'Delivered'

    },
    {
      orderNumber : '1627166',
      date : '12-07-2022',
      trackNumber : 'av4y76565535',
      quantity : 1,
      Total : 1735,
      status : 'Delivered'

    },
    {
      orderNumber : '2957010',
      date : '18-08-2017',
      trackNumber : 'IW347559845',
      quantity : 6,
      Total : 14355,
      status : 'Delivered'

    },
    {
      orderNumber : '194656',
      date : '27-12-2023',
      trackNumber : 'IW347634464',
      quantity : 1,
      Total : 1700,
      status : 'Delivered'

    },
    {
      orderNumber : '1947022',
      date : '05-12-2020',
      trackNumber : 'IW3476554635',
      quantity : 4,
      total : 6021,
      status : 'Delivered'
    },
  ]
  const headerDetails = 'My Orders'

  return (
    <>
     <HeaderComponent headerDetails={headerDetails} />
     
     <View className='flex flex-row items-center  justify-evenly pb-4'>
       <TouchableOpacity className='bg-primary w-40 h-8 shadow-2xl flex justify-center items-center'>
         <Text className='text-white font-normal text-sm'>Delivered</Text>
       </TouchableOpacity>
       <TouchableOpacity className='w-40 h-8 shadow-2xl flex justify-center items-center'>
         <Text className='text-sm font-normal'>Processing</Text>
       </TouchableOpacity>
     </View>
     <ScrollView  showsVerticalScrollIndicator={false} className='flex-1'>

     

     <View className='mt-8'>
     {orderDetails.map((items, index) => (
       <OrderCard
       key={index}
       orderNumber = {items.orderNumber}
       date = {items.date}
       trackNumber = {items.trackNumber}
       quantity = {items.quantity}
       total = {items.Total}
       status={items.status}
       />
     ))}
     </View>
   </ScrollView>
    </>
   
  )
}

export default MyOrders