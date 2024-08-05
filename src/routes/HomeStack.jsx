import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../screens/Homepage';
import Productspage from '../screens/Productspage';
import LoginPage from '../screens/LoginPage';
import SignUp from '../screens/SignUp';
import OtpPage from '../screens/OtpPage';
import AccountPage from '../screens/AccountPage';
import SearchPage from '../screens/SearchPageCategories';
import SearchPageCategories from '../screens/SearchPageCategories';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SearchPageCategories} options={{headerShown:false}} />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
