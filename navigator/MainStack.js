import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/Home";
import VelocidadMediaPiston from '../screen/formulas/VelocidadMediaPiston';
import CalculoMaximasRPM from '../screen/formulas/CalculoMaximasRPM';
import CasquillosCalculoVenturi from '../screen/formulas/CasquillosCalculoVenturi';
import CalculoVelocidadConductos from '../screen/formulas/CalculoVelocidadConductos';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ Home } />
                <Stack.Screen name="VMP" component={ VelocidadMediaPiston } />
                <Stack.Screen name="RPMM" component={ CalculoMaximasRPM } />
                <Stack.Screen name="CCV" component={ CasquillosCalculoVenturi } />
                <Stack.Screen name="CVC" component={ CalculoVelocidadConductos } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;