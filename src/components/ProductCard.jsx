import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Xcross from '../../assets/SVG_Jsx/Xcross';
import { useNavigation,useRoute } from '@react-navigation/native';
const ProductCard = ({ discountAmount, itemName, mrp, discountedPrice, path, selectType,fromWhere }) => {
  const navigation = useNavigation();
 
  return (
    <TouchableOpacity className="m-1 w-48 " onPress={()=>navigation.navigate("Productspage", {productData:{image:path,discountedPrice}})}>
      {fromWhere === "wish" && <TouchableOpacity className="absolute bottom-80 right-4 rounded-full bg-white ">
        <Xcross className="h-6 w-6  "/>
      </TouchableOpacity>}
      <Image source={path} className="w-full h-72" />
     
      
      <TouchableOpacity className="absolute bottom-2  right-2">
          {selectType}
      </TouchableOpacity>
  

      <View className="absolute top-2 left-2 bg-primary p-2">
        <Text style={{ fontFamily: 'Frutiger' }} className="text-white text-lg">-{discountAmount}</Text>
      </View>
      
        <Text style={{ fontFamily: 'Frutiger' }} className="text-xl font-semibold">{itemName}</Text>
        <View className="flex-row items-center mx-2 ">
          <Text style={{ fontFamily: 'Frutiger' }} className="text-gray-400 line-through mr-2">{'\u20B9'}{mrp}</Text>
          <Text style={{ fontFamily: 'Frutiger' }} className="text-primary text-lg">{'\u20B9'}{discountedPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
