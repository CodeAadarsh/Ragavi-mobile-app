import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ShortLogo from '../../assets/SVG_Jsx/ShortLogo'
import BagIcon from '../../assets/SVG_Jsx/BagIcon'
import CarrierIcon from '../../assets/SVG_Jsx/CarrierIcon'
import ClockIcon from '../../assets/SVG_Jsx/ClockIcon'
import FaceBookIcon from '../../assets/SVG_Jsx/FaceBookIcon'
import InstagramIcon from '../../assets/SVG_Jsx/InstagramIcon'
import InterNetIcon from '../../assets/SVG_Jsx/InterNetIcon'
import LocationIcon from '../../assets/SVG_Jsx/LocationIcon'
import MailIcon from '../../assets/SVG_Jsx/MailIcon'
import YoutubeIcon from '../../assets/SVG_Jsx/YoutubeIcon'
import CallIcon from '../../assets/SVG_Jsx/CallIcon'
import RefundIcon from '../../assets/SVG_Jsx/RefundIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ChevronRight from '../../assets/SVG_Jsx/ChevronRight'


const ContactUs = () => {

    headerDetails = 'Contact Us'
    return (
        <>
         <HeaderComponent headerDetails={headerDetails} />
         <View className='flex-1 bg-white'>
            {/* Header */}
           
            <View className='px-6 '>
                {/* reach out on */}
                <View className='flex flex-row gap-3 mb-10'>
                    <ShortLogo />
                    <Text className='text-lg pt-1'>Reach Out On</Text>
                </View>

                {/*  Timings  */}
                <View className='flex flex-row pt-10 py-3 gap-4 justify-between'>

                    <View className='flex flex-row '>
                        <View className=''>
                            <BagIcon />
                        </View>
                        <Text className='text-lg mt-1 font-normal mx-3'> Mon - Sat </Text>
                    </View>
                    <View className='flex flex-row '>
                        <View className=''>
                            <ClockIcon />
                        </View>
                        <Text className='text-lg mt-1 font-normal mr-8'> 10 - 6 pm </Text>
                    </View>

                </View>
                {/*  Details */}
                <View className='flex flex-row py-3 gap-4 justify-between'>

                    <View className='flex flex-row '>
                        <View className=''>
                            <CallIcon />
                        </View>
                        <Text className='text-lg mt-1 font-normal mx-2'> + 91 7272054054 </Text>
                    </View>
                    <View className='flex flex-row '>
                        <View className=''>
                            <InterNetIcon />
                        </View>
                        <Text className='text-lg mt-1 font-normal mr-8'> Ragavi.in </Text>
                    </View>

                </View>
                {/* Mail */}
                <View className='flex flex-row py-2'>
                    <MailIcon />
                    <Text className='text-lg font-normal mx-4'>RagaviInfo@ragavi.info</Text>
                </View>
                {/* Location */}
                <View className='flex flex-row py-2 mr-4'>
                    <View className='mt-4'>
                        <LocationIcon />
                    </View>
                    <Text className='text-lg font-normal mx-4'>Raj Ethnic Apparels Pvt. Ltd. H-135, RIICO Industrial Area,Mansarovar Jaipur- 302020 Rajasthan</Text>
                </View>

                {/* Social Medias */}
                <View className='mx-2 py-10'>
                    <Text className='text-2xl my-1'>Stay Connected</Text>
                    <View className='flex flex-row  justify-start gap-5'>
                        <TouchableOpacity>
                            <InstagramIcon />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <FaceBookIcon />
                        </TouchableOpacity>

                        <TouchableOpacity>

                            <YoutubeIcon />
                        </TouchableOpacity>

                        <TouchableOpacity>

                            <CarrierIcon />
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Refunds And Exchange */}

            </View>
            <TouchableOpacity className='flex flex-row justify-between border border-gray-400 p-2'>
                <View className='flex flex-row px-2 gap-4'>
                <RefundIcon/>
                <Text className='font-normal text-2xl'>Refunds & Exchange</Text>
                </View>
                <ChevronRight/>
            </TouchableOpacity>
        </View>
        </>
        
    )
}

export default ContactUs