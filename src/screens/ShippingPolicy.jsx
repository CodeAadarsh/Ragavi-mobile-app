import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import ListItems from '../components/ListItems'

const ShippingPolicy = () => {

    const listData1 =[
        "We offer free shipping within India for all prepaid and Cash on Delivery (COD) orders above INR 1500.00.",
        "For orders up to INR 1500.00, a nominal shipping and handling charge of INR 99.00 applies.",
        "There are no additional charges for Cash on Delivery orders.",
        "A limited number of pin codes within India are eligible for Cash on Deliver.",
    ]
    
    const listData2 = [
        "Additional shipping fees are charged based on the weight of the total order parcel, calculated at the time of checkout.",
        "Please note that many countries impose import duties, customs charges, and taxes on shipped items. These additional charges are the responsibility of the customer upon delivery.",
        "We recommend checking your country's tax policies before placing an international order, as we do not offer returns or cancellations for such orders if customs charges are not paid or accepted by the customer.",
    ]

    const listData3 = [
        "Our team works diligently to dispatch your order as soon as possible. However, in some cases, certain styles may need to be procured and arranged from other locations, which can extend the dispatch timelines by up to 2 weeks.",
        "Once your order is dispatched, delivery within India typically takes 1-4 business days, depending on the pin code. For international deliveries, it may take 10-12 business days.",
        "Unforeseen circumstances on the logistics provider's end may cause occasional delays, but rest assured that our Customer Care team will closely monitor your order's progress.",
        "You can track the status of your order from your My Account section on our website or contact our Customer Care team at care@ragavi.in for any order and dispatch-related queries.",
        "Our delivery partners will make up to 3 delivery attempts. Please provide a complete and accurate shipping address, including the pin code/zip code and a valid mobile number, to facilitate faster delivery.",
    ]
    const listData4 = [
        "We offer multiple payment options, including major debit and credit cards, net banking, recognized eWallets, and UPI, for orders within India.",
        "Cash on Delivery is available for domestic orders with a maximum total order value of ₹15,000.",
        "For orders outside India, we only accept prepaid payments through major Mastercard, American Express, and Visa cards, along with a recognized payment gateway such as PayPal.",
    ]
    const listData5 = [
        "In case you receive a damaged, broken, or opened parcel, please record a video and take images of the packaging. Do not accept the order in such cases.",
        "Email us the images, videos, and order number, and we will promptly assist you in resolving the issue and handling claims with the shipping agency.",
    ]
    const listData6 =[
        "If you prefer self-collection, please email us at care@ragavi.in with your order number upon order confirmation.",
        "Orders should be collected within 2 working days of receiving the confirmation email.",
        "If the order is not collected within 2 working days, we will ship it to the provided shipping address.",
        "Self-collection is available starting from 1 day after the order is placed.",
    ]
    const listData7 = [
        "Please note that there may be instances where we are unable to accept or fulfil certain orders, and we reserve the right to cancel them at our discretion.",
        "Reasons for cancellation may include limitations on available quantities, inaccuracies or errors in product or pricing information, or issues identified by our credit and fraud avoidance department.",
        "Additional verification or information may be required before accepting an order.",
        "If your order is cancelled after your card or wallet has been charged, the corresponding amount will be reversed back to your Card Account.",
        "By placing an order with Ragavi, you agree not to dispute any decision made by us and accept our final decision regarding cancellations.",
    ]
    const listData8 = [
        "If you receive a credit note, it will be sent to your registered email ID and can be used once on our official website within 2 months from the date of issue.",
    ]
    return (
        <>
            <View>
                <HeaderComponent />
            </View>
            <ScrollView className='p-3 bg-white'>
                <Text className='text-4xl text-primary'>
                    Shipping Policy
                </Text>
                <Text className='font-light text-xl py-2 text-justify '>
                    We strive to provide a seamless and hassle-free shopping experience at Ragavi. Our policies and terms of use are designed to ensure a smooth purchase process. We kindly request you to review these policies carefully before making a purchase
                </Text>
                <Text className='font-light text-xl text-justify'>
                    We strive to provide a seamless and hassle-free shopping experience at Ragavi. Our policies and terms of use are designed to ensure a smooth purchase process. We kindly request you to review these policies carefully before making a purchase
                </Text>
                <Text className='font-light text-2xl py-3'>
                    Shipping Charges for Delivery in India:
                </Text>
                <View>
                    {listData1.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>


                <Text className='font-light text-2xl py-3'>
                    Shipping Charges for Delivery Outside India:
                </Text>
                <View>
                    {listData2.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}    
                </View>


                <Text className='font-light text-2xl py-3'>
                    Order Dispatch and Delivery:
                </Text>
                <View>
                    {listData3.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>
                <Text className='font-light text-2xl py-3'>
                    Payment Options:
                </Text>
                <View>
                    {listData4.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>
                <Text className='font-light text-2xl py-3'>
                Receiving Order Guidelines:
                </Text>
                <View>
                    {listData5.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>
                <Text className='font-light text-2xl py-3'>
                Self-Collection:
                </Text>
                <View>
                    {listData6.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>
                <Text className='font-light text-2xl py-3'>
                Cancellation by the Team:
                </Text>
                <View>
                    {listData7.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>
                <Text className='font-light text-2xl py-3'>
                Credit Note Usage:
                </Text>
                <View>
                    {listData8.map((items, index) => (
                        <ListItems 
                        key={index}
                        text={items}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
}

export default ShippingPolicy