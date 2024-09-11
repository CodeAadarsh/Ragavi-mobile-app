import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ListItems from '../components/ListItems'

const PrivacyPolicy = () => {
    // const headerDetails = 'Privacy Policy'
    const listData1 = [
        "To provide, operate and maintain our website.",
        "To improve customer service: your information helps us to respond more effectively to your service requests.",
        "To keep track of your orders: we may use the information which Users submit about themselves while placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to offer the service.",
        "To send information that you agreed to receive about topics we think will be of interest to you.",
        "To personalize your shopping experience: we may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.",
        "To keep track of your account activity.",
        "To inform you about our special offers.",
        "To send periodic emails: only the email address which the Users provide for order processing will be used to send them information and updates about their order. It may also be used to respond to their inquiries, and/or other requests or questions. If at any time the User would like to unsubscribe from receiving future emails, we include an unsubscribe link at the bottom of each email.",
    ]

    return (
        <>
            <HeaderComponent />

            <ScrollView className='p-3 '>
                <View className=''>
                    {/* Header */}
                    <Text className='text-4xl text-primary font-normal pb-3'>
                        Privacy Policy
                    </Text>
                    <Text className='font-light text-xl py-2'>
                        This Privacy Policy governs how Ragavi (Raj Ethnic Apparels Pvt. Ltd.) collects, uses, maintains, and discloses information gathered from users (each, a "User") of the www.ragavi.in website (“Site"). This Privacy Policy applies to the Site and all the products and services offered by
                        Ragavi.
                    </Text>

                    <Text className='font-light text-xl'>
                        Ragavi (Raj Ethnic Apparels Pvt. Ltd.), accessible from www.ragavi.in, keeps the privacy of its visitors as one of our main priorities. This Privacy Policy applies to our online activities only and is valid for visitors to our website with regards to the information that they share on and/or collect from Ragavi. This policy does not apply to any information collected online or via channels other than this website.
                    </Text>
                    <Text className='font-light text-2xl mt-4'>
                        Consent
                    </Text>
                    <Text className='font-light text-xl mb-4'>
                        By using our website (www.ragavi.in) you hereby consent to our Privacy Policy and agree to its terms.
                    </Text>

                    <Text className='font-light text-2xl'>
                        Information We Collect
                    </Text>
                    <Text className='font-light text-xl'>
                        We may collect personal identification information from Users in a variety of ways when users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities that we make available on our site.
                    </Text>
                    <Text className='font-light text-xl'>
                        When you register for an account on our website, we may ask for your contact information such as name, company name, address, email address, date of birth, and telephone number.
                    </Text>
                    <Text className='font-light text-2xl  my-4'>
                        Usage of your Personal Identification Information:
                    </Text>
                    <View>
                        {listData1.map((items, index) => (
                            <ListItems 
                            key={index}
                            text={items}
                            />
                        ))}
                    </View>

                    <Text className='text-xl font-normal pt-4'>
                        Changes to this Privacy Policy
                    </Text>
                    <Text className='text-xl font-normal '>
                        Ragavi (Raj Ethnic Apparels Pvt. Ltd.) has the discretion to update this Privacy Policy at any time. Whenever we do, we revise the updated date at the bottom of this page, always.
                    </Text>
                    <Text className='text-xl font-normal '>
                        We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
                    </Text>
                    <Text className='text-xl font-normal '>
                        To acknowledge and agree on the changes is your responsibility and so is to review this Privacy Policy periodically and become aware of any modifications.
                    </Text>
                    <Text className='text-xl font-normal pt-4'>
                        Cookies
                    </Text>
                    <Text className='text-xl font-normal '>
                        Like any other website, www.ragavi.in uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accesses or visits.
                    </Text>
                    <Text className='text-xl font-normal '>
                        The information is used to optimize the users' experience by customizing our web page content based on your browser type and/or other information.
                    </Text>
                    <Text className='text-xl font-normal pt-4'>
                        Contact Us
                    </Text>
                    <Text className='text-xl font-normal '>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at care@ragavi.in.
                    </Text>


                </View>
            </ScrollView>
        </>
    )
}

export default PrivacyPolicy