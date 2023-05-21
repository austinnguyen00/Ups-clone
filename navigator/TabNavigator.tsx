import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';

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
		// Hiding the `Main` screen name at the top
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		// `screenOptions` configure how the screens inside get presented in the navigator
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: '#59c1cc',
				tabBarInactiveTintColor: 'gray',
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === 'Customers') {
						return (
							<Icon
								name='user'
								type='entypo'
								color={focused ? '#59c1cc' : 'gray'}
							></Icon>
						);
					} else if (route.name === 'Orders') {
						return (
							<Icon
								name='box'
								type='entypo'
								color={focused ? '#EB6A7C' : 'gray'}
							></Icon>
						);
					}
				},
			})}
		>
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
