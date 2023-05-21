import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import {
	CompositeNavigationProp,
	useNavigation,
} from '@react-navigation/native';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from '@rneui/themed';
import { Input } from '@rneui/base';

// As we having nesting navigators in the `CustomerScreen`
// we need to combine navigation props that are available on this screen

// `CompositeNavigtaionProp` takes 2 parameters,
// first parameter is the type of props for the primary navigation
// which is the type for the navigator that owns this screen, in our case
// tab navigator which contains the `Customer` screen
// second parameter is the type of props for secondary navigation (type for a parent navigator)
export type CustomerScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, 'Customers'>,
	NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
	const tw = useTailwind();
	const navigation = useNavigation<CustomerScreenNavigationProp>();
	const [input, setInput] = useState<string>('');
	return (
		<ScrollView style={{ backgroundColor: '#59c1cc' }}>
			<Image
				source={{ uri: 'https://links.papareact.com/3jc' }}
				containerStyle={tw('w-full h-64')}
				// Showing whether the page is loading at the top
				PlaceholderContent={<ActivityIndicator />}
			/>
			<Input
				placeholder='Search by Customer'
				value={input}
				onChangeText={setInput}
				containerStyle={tw('bg-white pt-5 pb-0 px-10')}
			/>
		</ScrollView>
	);
};

export default CustomerScreen;
