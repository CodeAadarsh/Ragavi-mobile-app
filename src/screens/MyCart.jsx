import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import AddItem from '../../assets/SVG_Jsx/AddItem'
import MyCartCard from '../components/MyCartCard'

const MyCart = () => {

  const myCartDetails = [
    {
      name: 'Leheriya Kurta Set',
      size: 'XS',
      quantity: 3,
      price: 2342,
      path: require('../../assets/Images/HomepageImg2.png')
    },
    {
      name: 'Kurta Bihari',
      size: 'M',
      quantity: 1,
      price: 1235,
      path: require('../../assets/Images/ProductImg1.png')
    },
    {
      name: 'Some Dress ',
      size: 'S',
      quantity: 2,
      price: 3421,
      path: require('../../assets/Images/ProductImg2.png')
    },
    {
      name: 'Some Other Dress',
      size: 'XL',
      quantity: 1,
      price: 2164,
      path: require('../../assets/Images/ProductImg3.png')
    },
    {
      name: 'Another Dress',
      size: 'M',
      quantity: 5,
      price: 9785,
      path: require('../../assets/Images/Homepageimg4.webp')
    },
  ]

  const [selectedItems, setSelectedItems] = useState([]);

  const calculatedPrice = () => {
    return myCartDetails.reduce((total, item, index) => {
      if (selectedItems.includes(index)) {
        return total + (item.price * item.quantity);
      }
      return total;
    }, 0);
  };

  const handleSelection = (index) => {
    const isSelected = selectedItems.includes(index);
    setSelectedItems(isSelected ? selectedItems.filter((i) => i !== index) : [...selectedItems, index]);
  };

  const totalPrice = calculatedPrice();

  const headerDetails = 'My Cart'

  return (
<>
<HeaderComponent headerDetails={headerDetails} />
<ScrollView   showsVerticalScrollIndicator={false} >
      {/* Header */}


      <View className='flex flex-row justify-between mb-2 px-8 py-4 border border-solid border-gray-200'>
        <Text>Total Amount</Text>
        <Text>₹ {totalPrice}</Text>
      </View>

      <View className='mx-2'>
        {myCartDetails.map((items, index) => (
          <MyCartCard
            key={index}
            name={items.name}
            size={items.size}
            quantity={items.quantity}
            price={items.price}
            path={items.path}
            handleSelection={handleSelection.bind(null, index)}
            isSelected={selectedItems.includes(index)}
          />
        ))}
      </View>
      
    </ScrollView>
    <View className='mt-auto mx-3 my-4 flex flex-row justify-between'>
        <Text className='text-lg font-normal'>Total Amount</Text>
        <Text className='text-lg'>₹ {totalPrice}</Text>
      </View>
      <View className='flex flex-row justify-end mx-6 mb-6 '>
        <TouchableOpacity className='shadow-2xl w-40 h-10 bg-primary flex items-center justify-center'>
          <Text className='text-white font-normal text-lg'>
            Proceed To Buy
          </Text>
        </TouchableOpacity>
      </View>

</>

  )
}

export default MyCart