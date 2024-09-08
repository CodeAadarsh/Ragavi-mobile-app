import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // or use another icon library
import {HomeIcon,MagnifyingGlassIcon,HeartIcon, ShoppingBagIcon,UserCircleIcon} from 'react-native-heroicons/outline'
import {HomeIcon as HomeMini, MagnifyingGlassIcon as MagnifyingGlassIconMini, HeartIcon as HeartIconMini, ShoppingBagIcon as ShoppingBagIconMini, UserCircleIcon as UserCircleIconMini} from 'react-native-heroicons/mini'
import Homepage from '../../screens/Homepage';
import SearchPage from '../../screens/SearchPage';
import WishList from '../../screens/WishList';
import MyCart from '../../screens/MyCart';
import AccountpageRoutes from '../Accountpage/AccountpageRoutes';

const Tab = createBottomTabNavigator();

function MainTabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#A50102', // Your primary color
          borderTopWidth: 0, // To remove the default border
          height: 75,
          alignItems:'center',
          alignContent:'center'  
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Choose icons based on the route name
          if (route.name === 'Home') {
            iconName = focused ? <HomeMini size={25} color={'#fff'}/>:<HomeIcon size={25} color={'#fff'}/>  ;
          } else if (route.name === 'Search') {
            iconName = focused ? <MagnifyingGlassIconMini size={25} color={'#fff'}/> : <MagnifyingGlassIcon size={25} color={'#fff'}/>;
          } else if (route.name === 'WishList') {
            iconName = focused ? <HeartIconMini size={25} color={'#fff'}/> : <HeartIcon size={25} color={'#fff'}/>;
          } else if (route.name === 'MyCart') {
            iconName = focused ? <ShoppingBagIconMini size={25} color={'#fff'}/> : <ShoppingBagIcon size={25} color={'#fff'}/>;
          } else if (route.name === 'accountspage') {
            iconName = focused ? <UserCircleIconMini size={25} color={'#fff'}/> : <UserCircleIcon size={25} color={'#fff'}/>;
          }

          // Render icons from Ionicons
          // return <Ionicons name={iconName} size={20} color={color} />;
          return iconName
        },
        tabBarActiveTintColor: '#fff', // White color for active icons
        tabBarInactiveTintColor: '#fff', // White color for inactive icons
        tabBarShowLabel: false, // Hide labels to match the provided image
      })}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="WishList" component={WishList} />
      <Tab.Screen name="MyCart" component={MyCart} />
      <Tab.Screen name="accountspage" component={AccountpageRoutes} />
    </Tab.Navigator>
  );
}

export default MainTabBar;
