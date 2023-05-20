import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';

export type TabStackParamList = {
	Customers: undefined;
	Orders: undefined;
};

// A simple tab bar on the bottom of the screen
// that lets you switch between different routes
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
	const navigation = useNavigation();

	// `useLayoutEffect` is a version of `useEffect` that
	// fires before the browser repaints the screen
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Customers'
				component={CustomerScreen}
			></Tab.Screen>
			<Tab.Screen
				name='Orders'
				component={OrderScreen}
			></Tab.Screen>
		</Tab.Navigator>
	);
};

export default TabNavigator;
