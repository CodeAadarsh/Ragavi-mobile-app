import { createStackNavigator } from '@react-navigation/stack';
import AccountPage from '../../screens/AccountPage';
import MyOrders from '../../screens/MyOrders';
import MyAddresses from '../../screens/MyAddresses';
import ContactUs from '../../screens/ContactUs';
import Error404 from '../../screens/ErrorPage';
import MyRewards from '../../screens/MyRewards';
import EditProfile from '../../screens/EditProfile';
import MyAddressForm from '../../screens/MyAddressForm';
import MyCart from '../../screens/MyCart';
import MyOrders1 from '../../screens/MyOrders1'
import WishList from '../../screens/WishList';
import MyGiftCard from '../../screens/MyGiftCard'
import Productspage from '../../screens/Productspage';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import ShippingPolicy from '../../screens/ShippingPolicy';
import FAQs from '../../screens/FAQs';

const Stack = createStackNavigator();

export default function AccountpageRoutes() {



  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountPage" component={AccountPage} options={{headerShown:false}} />
      <Stack.Screen name="MyOrders" component={MyOrders} options={{headerShown:false}} />
      <Stack.Screen name="MyAddresses" component={MyAddresses} options={{headerShown:false}} />
      <Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown:false}} />
      <Stack.Screen name="Error404" component={Error404} options={{headerShown:false}} />
      <Stack.Screen name='MyRewards' component={MyRewards} options={{headerShown:false}} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:false}} />
      <Stack.Screen name='AddressForm' component={MyAddressForm} options={{headerShown:false}} />
      <Stack.Screen name='GiftCard' component={MyGiftCard} options={{headerShown:false}} />
      <Stack.Screen name='Productspage' component={Productspage} options={{headerShown:false}} />
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{headerShown:false}} />
      <Stack.Screen name='ShippingPolicy' component={ShippingPolicy} options={{headerShown:false}} />
      <Stack.Screen name='FAQs' component={FAQs} options={{headerShown:false}} />

    </Stack.Navigator>
  );
}

