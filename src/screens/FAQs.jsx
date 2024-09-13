import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FAQCard from '../components/FAQCard'
import { FaceFrownIcon } from 'react-native-heroicons/outline'


const faqData = [
    {
        id: 0,
        title: "Is Ragavi an Indian Company?",
        details: "Yes, Ragavi is an Indian homegrown label.",
        type: "About_Ragavi",
    },
    {
        id: 1,
        title: "Where is Ragavi's head office located?",
        details: "Ragavi's head office is located in Jaipur, India.",
        type: 'About_Ragavi',
    },
    {
        id: 2,
        title: "Where can I buy Ragavi's products in India?",
        details: "You can buy our products in India through our website. Simply visit our website www.ragavi.in to explore our extensive range of authentic garments and conveniently shop your favourite pieces. Embrace style and tradition with Ragavi!",
        type: 'About_Ragavi',
    },
    {
        id: 3,
        title: "What if I have any complain regarding my order?",
        details: "If you have any complaints regarding your order, we encourage you to reach out to us. Our customer support team is here to assist you and address any concerns you may have. You can click on this link to contact us.",
        type: 'About_Ragavi',
    },
    {
        id: 4,
        title: "Do you provide wholesale pricing?",
        details: "Yes, we do provide wholesale pricing. For more information and to discuss wholesale opportunities, please connect with us at +91 99287 15600. Our team will be happy to assist you and provide you with the necessary details regarding our wholesale pricing and bulk orders.",
        type: 'About_Ragavi',
    },
    {
        id: 5,
        title: 'Is Ragavi an Indian Company?',
        details: "Yes, Ragavi is an Indian homegrown label.",
        type: 'About_Ragavi',
    },
    {
        id: 6,
        title: "How can I receive updates about the discount / sale offers?",
        details: "To receive updates about discount/sale offers, you should subscribe to our newsletter. By subscribing, you'll stay updated with the latest trends and gain access to exclusive offers too. Join our community today to make sure you don't miss out on any exciting discounts or sale events.",
        type: 'About_Ragavi',
    },
    {
        id: 7,
        title: "What makes Ragavi unique?",
        details: "What makes Ragavi unique is our focus on authentic natural prints, specifically hand block prints. We bring together the beauty of traditional craftsmanship and the charm of natural processes, combining them with contemporary silhouettes and designs. Our garments showcase the artistry and skill of hand block printing, creating unique and elegant pieces that reflect the rich heritage of Indian textiles. With Ragavi, you can experience the perfect blend of traditional techniques and modern fashion.",
        type: 'About_Ragavi',
    },
    {
        id: 8,
        title: "Where do I apply the promo code to get the discount?",
        details: `During the checkout process, you can apply the promo code to receive a discount on your Ragavi purchase. Look for the "Promo Code" or "Discount Code" field on the checkout page and enter the code accurately. Click on the "Apply" or "Submit" button to see the discounted price reflected in your order total. Enjoy the savings and happy shopping with Ragavi!`,
        type: 'About_Ragavi',
    },
    {
        id: 9,
        title: "How do I add items to my wishlist?",
        details: `To add items to your wishlist on our website, you will need to log in to your account. Once logged in, you can browse our collection and click on the heart icon or the "Add to Wishlist" button located near each product. This action will add the item to your wishlist, allowing you to save and revisit it later. Start exploring our website and start building your Ragavi wishlist today to experience the essence of Indian fashion.`,
        type: 'About_Ragavi',
    },
    {
        id: 10,
        title: "Are all Ragavi's products handmade?",
        details: `Yes, all of our products are handmade. We take pride in our commitment to craftsmanship, and each garment is meticulously handcrafted by our in-house team. This hands-on approach ensures attention to detail and the preservation of traditional techniques, resulting in high-quality and unique pieces that reflect the essence of our brand.`,
        type: 'About_Our_Product',
    },
    {
        id: 11,
        title: "Do Ragavi's sizes conform to international norms?",
        details: `No, the sizes do not conform to international norms. Currently, there is no standardised sizing system for Indian wear that aligns with international norms. We understand the importance of accurate sizing, and we provide detailed size charts and measurements for each product on our website to assist you in finding the best fit. We recommend referring to the size chart and taking your measurements to determine the appropriate size for your desired garment. If you have any further questions or need assistance with sizing, our customer support team is always here to help.`,
        type: 'About_Our_Product',
    },
    {
        id: 12,
        title: "Are your products genuine and authentic?",
        details: `Yes, all of our products are genuine and authentic. We take pride in our commitment to craftsmanship, and each garment is meticulously handcrafted by our in-house team. This hands-on approach ensures attention to detail and the preservation of traditional techniques, resulting in high-quality and unique pieces that reflect the essence of our brand.`,
        type: 'About_Our_Product',
    },
    {
        id: 13,
        title: "What types of outfits does Ragavi offer?",
        details: `Ragavi offers a wide range of outfits to cater to different styles and occasions. Our collection includes Dresses, Suit Sets, Kurtas, Loungewear, Sarees, Kurta Sets and Co-ord Sets. With Ragavi, you can find outfits that suit your personal style and preferences across these different categories.`,
        type: 'About_Our_Product',
    },
    {
        id: 14,
        title: "What materials are used in your products?",
        details: `The materials used in our products are mentioned in the product description for each specific item. We believe in using high-quality fabrics that are carefully chosen to enhance the overall look and feel of our garments. Please refer to the product descriptions on our website to find out the specific materials used in each garment.`,
        type: 'About_Our_Product',
    },
    {
        id: 15,
        title: "How do I shop online?",
        details: `To shop online with Ragavi, please follow these steps:

        1. Visit our website

        2. Browse and select products: Explore our collection and click on the products you like to view more details. Select the appropriate size and quantity, and then click on the "Add to Cart" button.

        3. Proceed to checkout

        4. Provide shipping and billing details

        5. Select the payment option

        6. Don't forget to apply your discount coupon code

        7. Place your order

        After successfully placing your order, you will receive an order confirmation email or message with the relevant details. Keep this information handy for future reference.`,
        type: 'Shopping',
    },
    {
        id: 16,
        title: "How will I know if you have received my order?",
        details: `Once you have successfully placed your order with Ragavi, you will receive a confirmation email. This email serves as a notification that we have received your order and it is being processed. If you do not receive a confirmation email within 48 hours of placing your order, we recommend checking your spam or junk folder. Additionally, you can reach out to our customer support team to verify the status of your order.`,
        type: 'Shopping',
    },
    {
        id: 17,
        title: "How do I check my order status?",
        details: `To check the status of your Ragavi order, simply log in to your account on our website and navigate to the "Track Order" section. You will be able to track the progress of your order 24 hours after it has been dispatched from our warehouse.`,
        type: 'Shopping',
    },
    {
        id: 18,
        title: "Is it safe to shop using my credit card online ?",
        details: `Yes, it is generally safe to shop using your credit card online. However, it is important to take precautions such as shopping from secured websites with encrypted connections and not sharing your payment OTPs (One-Time Passwords) or sensitive card information with anyone.`,
        type: 'Shopping',
    },
    {
        id: 19,
        title: "How long will it take to receive my order?",
        details: `The estimated time of the making of an order is mentioned on the respective product page. Once the order is ready, shipping within India typically takes 3-7 days, while international shipping may take around 12-15 days. If your order does not reach you by the expected delivery date, please reach out to us at care@ragavi.in or text us on +91-7272054054 for assistance. Our customer support team operates from 9 am to 5 pm (Monday - Friday) and will be glad to assist you with any inquiries regarding your order.`,
        type: 'Shipping',
    },
    {
        id: 20,
        title: "How is my order shipped?",
        details: `We ship your orders through reputed shipping partners such as Bluedart, Delhivery, FedEx, DHL, and others. These are well-known and reliable shipping providers that ensure secure and efficient delivery of your order to your specified shipping address. We strive to partner with trusted shipping companies to provide you with a seamless shipping experience.`,
        type: 'Shipping',
    },
    {
        id: 21,
        title: "Are all products in an order shipped together?",
        details: `In the case of multiple items in an order, it is possible that some items may be shipped separately. Rest assured, we make every effort to minimize any inconvenience and provide updates regarding the status of each item in your order.`,
        type: 'Shipping',
    },
    {
        id: 22,
        title: "Can I ship different items in my order to different shipping addresses?",
        details: `No, currently we do not offer the option to ship different items in a single order to multiple shipping addresses. However, you can place separate orders for each shipping address if you wish to send items to different locations. This allows us to ensure accurate and efficient processing of each order and delivery to the intended address.`,
        type: 'Shipping',
    },
    {
        id: 23,
        title: "What are the shipping costs?",
        details: `We offer free shipping for all orders within India. For international orders, the shipping cost starts at Rs. 1600 per kilogram and may vary depending on your specific shipping address. The shipping cost is calculated based on the weight of the package and the destination. During the checkout process, the applicable shipping charges will be displayed before you finalise your order.`,
        type: 'Shipping',
    },
    {
        id: 24,
        title: "Will I be charged for customs charges in case of international shipping?",
        details: `Yes, in the case of international shipping, you may be charged customs duties or taxes by your country's customs department. These charges are imposed by the customs authorities of your country and are not collected by us.`,
        type: 'Shipping',
    },
    {
        id: 25,
        title: "Can I change my shipping address after placing my order?",
        details: `Yes, it is possible to change your shipping address after placing an order, but please note that this can only be done before the order is dispatched from our warehouse.`,
        type: 'Shipping',
    },
    {
        id: 26,
        title: "I have received a partial item/partial order or a tampered package. What should I do?",
        details: `If you have received a partial item/partial order or if the package appears to be tampered with, we apologize for the inconvenience caused. Please reach out to us immediately for assistance. You can contact our customer support team by sending an email to care@ragavi.in or by texting us on +91-7272054054. Our dedicated team is available to assist you during our working hours, which are from 9 am to 5 pm (Monday - Friday).`,
        type: 'Shipping',
    },
    {
        id: 27,
        title: "What payment methods do you accept?",
        details: `We accept a variety of payment methods for your convenience. These include credit cards, debit cards, net banking, UPI, wallets, cash on delivery (COD) and more. The availability of specific payment options may vary depending on your location. During the checkout process, you will be presented with the available payment methods to choose from.`,
        type: 'Billing_and_Payment',
    },
    {
        id: 28,
        title: "What currency will my order be billed in?",
        details: `The currency in which your order will be billed depends on the country you are placing the order from.`,
        type: 'Billing_and_Payment',
    },
    {
        id: 29,
        title: "Can I change my billing address?",
        details: `To change your billing address, we recommend contacting our customer support team directly. You can reach out to us via phone by calling the provided contact number or by sending an email to care@ragavi.in Our customer support team will assist you with the necessary steps to update your billing address. Please note that the feasibility of changing the billing address may depend on various factors, such as the status of your order and the specific policies in place. Our team will provide you with the appropriate guidance and support to address your query effectively.`,
        type: 'Billing_and_Payment',
    },
    {
        id: 30,
        title: "How can I get my Receipt?",
        details: `Upon placing your order, you will receive a confirmation email serving as a receipt, containing details of your purchase. Additionally, a physical invoice will be included with your order package too.`,
        type: 'Billing_and_Payment',
    },
    {
        id: 31,
        title: "How can I modify my order?",
        details: `If you need to modify your order, please contact our customer support team by sending an email to care@ragavi.in or by texting us at +91-7272054054. Our dedicated team is available to assist you during our working hours, which are from 9 am to 5 pm (Monday - Friday). Kindly provide them with the necessary details regarding the modifications you would like to make, and our team will do their best to accommodate your request, depending on the status of your order and feasibility.`,
        type: 'Customer_Service',
    },
    {
        id: 32,
        title: "How can I cancel my order?",
        details: `If you wish to cancel your order, please contact our customer support team as soon as possible. You can reach out to us by sending an email to care@ragavi.in or by texting us at +91-7272054054. Our dedicated team is available to assist you during our working hours, which are from 9 am to 5 pm (Monday - Friday).`,
        type: 'Customer_Service',
    },
    {
        id: 33,
        title: "Do you offer customisation services?",
        details: `At the moment, we do not offer customisation services.`,
        type: 'Customer_Service',
    },
    {
        id: 34,
        title: "Do you offer wholesale or bulk orders?",
        details: `Yes, we offer wholesale or bulk orders. If you are interested in placing a wholesale order or have any inquiries related to bulk purchases, please contact us by clicking on the link below.
        Contact us`,
        type: 'Customer_Service',
    },
    {
        id: 35,
        title: "What is your return/exchange policy?",
        details: `Please refer to our website's return/exchange policy for detailed information. You can find the policy by visiting the following link. Return & Exchange`,
        type: 'Return_&_Exchange',
    },
    {
        id: 36,
        title: "How do I care for my garments by Ragavi?",
        details: `To ensure the longevity of your Ragavi garments, we recommend following the care instructions provided on the product description page as well as the wash care label attached to the garment. In addition, we advise storing your garments in breathable bags or covers to protect them from dust and potential damage. It is also recommended to store them away from direct sunlight, as prolonged exposure to sunlight can lead to fading or discolouration.`,
        type: 'Garment_Care',
    },
    {
        id: 37,
        title: "What sizes are available?",
        details: `We offer a range of sizes for our garments, typically ranging from XS to 6XL. However, please note that the availability of sizes may vary for each specific product. The sizes available for a particular product will be mentioned on the product page itself.`,
        type: 'Sizes',
    },
    {
        id: 38,
        title: "How do I choose the right size for my outfit?",
        details: `To ensure you choose the right size for your outfit, we provide a size chart for each product on our website. The size chart can be found alongside the product description, allowing you to easily compare your measurements with the recommended sizes.`,
        type: 'Sizes',
    },
    {
        id: 39,
        title: "How can I contact your customer support team?",
        details: `Our customer support team is available to assist you with any inquiries or concerns you may have. You can contact us by sending an email to care@ragavi.in or by texting us at +91-7272054054. Our team operates during our working hours, which are from 9 am to 5 pm (Monday - Friday). Whether you have questions about your order, need sizing assistance, or require any other support, our customer support team will be delighted to help you. Don't hesitate to reach out to us, and we'll ensure a prompt and helpful response to address your needs.`,
        type: 'Contact_Us',
    },
    {
        id: 40,
        title: "Can I have the product gift wrapped?",
        details: `After placing your order, please send a screenshot of the order ID or reply to the order confirmation email with the request for gift wrapping. Our customer support team will assist you further and ensure that your order is gift wrapped as per your instructions.`,
        type: 'Gifts',
    },
    {
        id: 41,
        title: "Can I include a gift message with the package?",
        details: `Yes, we can include a gift message with the package. After placing your order, please send a screenshot of the order ID or reply to the order confirmation email with the request for adding a gift message. Our customer support team will assist you further.`,
        type: 'Gifts',
    },



]



const FAQs = () => {
    const [selectedType, setSelectedType] = useState("All");

    const headerDetails = 'FAQs'
    const filterButtonBaseClasses = "mx-2 mb-2 px-2 py-2 transition duration-100";
    const filterButtonActiveClasses = "bg-primary text-white";
    const filterButtonInactiveClasses = "bg-white text-black bg-[#eeeeee]";
    return (
        <>
            <View>
                <HeaderComponent headerDetails={headerDetails} />
            </View>
            <ScrollView className=' bg-white'>
                <Text style={{ fontFamily: 'Frutiger' }} className='py-4 text-center text-3xl text-primary'>FAQ's</Text>

                <View className='flex flex-row flex-wrap justify-center my-4 text-center'>
                    {["About_Ragavi", "About_Our_Product", "Shopping", "Shipping", "Billing_and_Payment", "Customer_Service", "Return_&_Exchange", "Garment_Care", "Sizes", "Contact_Us", "Gifts"].map((type) => (
                        <TouchableOpacity
                            key={type}
                            onPress={() => setSelectedType(type)}
                            className={` ${filterButtonBaseClasses} ${selectedType === type ? filterButtonActiveClasses : filterButtonInactiveClasses}`}
                        >
                            <Text style={{ fontFamily: 'Frutiger' }} className={`text-black ${selectedType === type ? filterButtonActiveClasses : filterButtonInactiveClasses}`}>{type.toUpperCase().split('_').join(' ')}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className='gap-4 p-5'>
                    {selectedType === "All" ? (
                        faqData.map((items, index) => (
                            <FAQCard
                            key={index}
                            title={items.title}
                            details={items.details}
                            type={items.type} 
                            />
                        ))
                    ) : (
                        faqData
                        .filter((items) => items.type === selectedType)
                        .map((items, index) => (
                            <FAQCard 
                            key={index}
                            title={items.title}
                            details={items.details}
                            type={items.type}
                            />
                        ))
                    )}
                </View>
            </ScrollView>
        </>
    )
}

export default FAQs