import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../../screens/Homepage';
import SearchPage from '../../screens/SearchPage';
import WishList from '../../screens/WishList';
import MyCart from '../../screens/MyCart';
import AccountPage from '../../screens/AccountPage';
import AccountpageRoutes from '../Accountpage/AccountpageRoutes';
import LoginPage from '../../screens/LoginPage';
import SignUp from '../../screens/SignUp';
import OtpPage from '../../screens/OtpPage';
import MobileLogin from '../../screens/MobileLogin';
import ForgotPassword from '../../screens/ForgotPassword';
import MyRewards from '../../screens/MyRewards';
import MyOrders from '../../screens/MyOrders';
import MyOrders1 from '../../screens/MyOrders1';
import EditProfile from '../../screens/EditProfile';

const Tab = createBottomTabNavigator();

function MainTabBar() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown:false,
      // tabBarIcon: ({ focused, color, size }) => {
      //   let iconName;

      //   if (route.name === 'Home') {
      //     iconName = focused
      //       ? 'ios-information-circle'
      //       : 'ios-information-circle-outline';
      //   } else if (route.name === 'Settings') {
      //     iconName = focused ? 'ios-list' : 'ios-list-outline';
      //   }

      //   // You can return any component that you like here!
      //   return <Ionicons name={iconName} size={size} color={color} />;
      // },
      // tabBarActiveTintColor: 'tomato',
      // tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Homepage} />
    <Tab.Screen name="Search" component={SearchPage} />
    <Tab.Screen name="WishList" component={WishList} />
    <Tab.Screen name="MyCart" component={MyCart} />
    <Tab.Screen name="AccountPage" component={AccountpageRoutes} />
  </Tab.Navigator>
  );
}

export default MainTabBar