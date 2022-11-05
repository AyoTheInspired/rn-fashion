import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/Authentication/Onboarding";

const AuthStack = createStackNavigator();

const AuthenticationNavigator = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<AuthStack.Screen name="Onboarding" component={Onboarding} />
		</AuthStack.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<AuthenticationNavigator />
		</NavigationContainer>
	);
}
