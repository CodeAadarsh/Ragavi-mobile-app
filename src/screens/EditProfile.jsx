import { View, Text, Image, ScrollView, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { TextInput } from 'react-native-gesture-handler';
import EditPassword from '../../assets/SVG_Jsx/EditPassword';

const EditProfile = () => {
  const headerDetails = 'Edit Profile';
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleDiscard = () => {
    // Implement discard logic here
    console.log('Discard pressed');
  };

  const handleApply = () => {
    // Implement apply logic here
    console.log('Apply pressed');
  };

  return (
    <>
      <View className='flex-1 bg-white'>
        <View>
          {/* Header Elements */}
          <HeaderComponent headerDetails={headerDetails} />
          <View className="ml-14 mr-4">
            <Text style={{ fontFamily: 'Frutiger' }} className="text-lg font-bold">Provile details about yourself and any other pertinent information.</Text>
          </View>
          <View className="border border-gray-200 mt-5"></View>
        </View>

        <ScrollView className="flex-1 p-5">
        <KeyboardAvoidingView>

          {/* Profile Images */}
          <View className="flex flex-row">
            <View className="">
              <Image
                className="w-[82px] h-[82px]"
                source={require('../../assets/Images/Vector.png')}
              />
            </View>
            {/* Profile Image Header */}
            <View className="flex flex-col mx-6">
              <Text style={{ fontFamily: 'Frutiger' }} className="text-xl my-2 font-bold">Basic Information</Text>
              <Text style={{ fontFamily: 'Frutiger' }} className="text-lg font-bold">Profile Photo</Text>
              <View className="flex flex-row my-1">
                <TouchableOpacity>
                  <Text style={{ fontFamily: 'Frutiger' }} className="text-base text-primary font-bold mr-3">Change </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontFamily: 'Frutiger' }} className="text-base text-primary font-bold">Remove </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            {/* Details Form */}
            <View className="my-10">
              <View className="">
                <Text style={{ fontFamily: 'Frutiger' }} className="text-lg my-1 ">Full Name</Text>
                <TextInput style={{ fontFamily: 'Frutiger' }} className="border border-solid h-8 px-3 w-full flex-1" />
              </View>
              <View className="">
                <Text style={{ fontFamily: 'Frutiger' }} className="text-lg my-1 ">Mobile Number</Text>
                <TextInput style={{ fontFamily: 'Frutiger' }} className="border border-solid h-8 w-full px-3 flex-1" />
              </View>
              <View className="">
                <Text style={{ fontFamily: 'Frutiger' }} className="text-lg my-1 ">Email</Text>
                <TextInput style={{ fontFamily: 'Frutiger' }} className="border border-solid h-8 w-full px-3 flex-1" />
              </View>
              <View className="">
                <Text style={{ fontFamily: 'Frutiger' }} className="text-lg my-1 ">Password</Text>
                <View className="flex flex-row">
                  <TextInput style={{ fontFamily: 'Frutiger' }}
                    className="border border-solid h-8 w-full flex-1"
                    secureTextEntry={!passwordVisible}
                  />
                  <TouchableOpacity onPress={handlePasswordVisibility} className="absolute top-0 right-0 p-2">
                    <EditPassword />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>

        </ScrollView>
        
        <View className="flex flex-row justify-between mt-5 p-5 ">
          <TouchableOpacity onPress={handleDiscard} className="border border-solid w-40 h-9 justify-center items-center">
            <Text style={{ fontFamily: 'Frutiger' }} className="text-black font-normal text-lg">Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleApply} className="bg-primary w-40 h-9 justify-center items-center">
            <Text style={{ fontFamily: 'Frutiger' }} className="text-white font-normal text-lg">Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default EditProfile;