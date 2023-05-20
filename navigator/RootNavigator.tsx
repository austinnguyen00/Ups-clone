import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
	Main: undefined;
	MyModal: { userOd: string; name: string };
	Order: { order: any };
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<RootStack.Navigator>
			{/* `Group` components are used to to group several screens
    inside a navigator */}
			<RootStack.Group>
				<RootStack.Screen
					name='Main'
					component={TabNavigator}
				></RootStack.Screen>
			</RootStack.Group>
		</RootStack.Navigator>
	);
};

export default RootNavigator;
