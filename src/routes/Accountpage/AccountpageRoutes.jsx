import { createStackNavigator } from '@react-navigation/stack';
import AccountPage from '../../screens/AccountPage';
import MyOrders from '../../screens/MyOrders';
import MyAddresses from '../../screens/MyAddresses';
import ContactUs from '../../screens/ContactUs';
import Error404 from '../../screens/ErrorPage';

const Stack = createStackNavigator();

export default function AccountpageRoutes() {



  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountPage" component={AccountPage} options={{headerShown:false}} />
      <Stack.Screen name="MyOrders" component={MyOrders} options={{headerShown:false}} />
      <Stack.Screen name="MyAddresses" component={MyAddresses} options={{headerShown:false}} />
      <Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown:false}} />
      <Stack.Screen name="Error404" component={Error404} options={{headerShown:false}} />

    </Stack.Navigator>
  );
}

