import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screen/login";
import DashBoard from "./screen/dashboard";
import Home from "../screens/home";
import History from "../screens/history";

const prefix = Linking.createURL('/');

const Stack = createStackNavigator();




const Routes = (props) => {
    return (
        <NavigationContainer fallback={<Text>Loading...</Text>}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Routes;