import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../screens/Homepage';
import Productspage from '../screens/Productspage';
import LoginPage from '../screens/LoginPage';
import SignUp from '../screens/SignUp';
import OtpPage from '../screens/OtpPage';
import AccountPage from '../screens/AccountPage';
import SearchPage from '../screens/SearchPage';
import SearchPageCategories from '../screens/SearchPageCategories';
import ProductCard from '../components/ProductCard';
import MyAddresses from '../screens/MyAddresses';
import MyAddressForm from '../screens/MyAddressForm';
import MyOrders from '../screens/MyOrders';
import WishList from '../screens/WishList';
import MyCart from '../screens/MyCart';
import ContactUs from '../screens/ContactUs';
import MainTabBar from './TabBar/MainTabBar';
import SeeAll from '../screens/SeeAll';

const Stack = createStackNavigator();

export default function HomeStack() {



  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTabBar} options={{headerShown:false}} />
      <Stack.Screen name="Productspage" component={Productspage} options={{headerShown:false}} />
      <Stack.Screen name="MyAddressForm" component={MyAddressForm} options={{headerShown:false}} />
      <Stack.Screen name="SeeAll" component={SeeAll} options={{headerShown:false}} />

      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
