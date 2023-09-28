import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/Home";
import VelocidadMediaPiston from '../screen/formulas/VelocidadMediaPiston';
import CalculoMaximasRPM from '../screen/formulas/CalculoMaximasRPM';
import CasquillosCalculoVenturi from '../screen/formulas/CasquillosCalculoVenturi';
import CalculoVelocidadConductos from '../screen/formulas/CalculoVelocidadConductos';
import CalculoCilindrada from '../screen/formulas/CalculoCilindrada';
import CalculoMedidaConducto from '../screen/formulas/CalculoMedidaConducto';
import CalculoAreaPiston from '../screen/formulas/CalculoAreaPiston';
import CalculoRelacionCompresion from '../screen/formulas/CalculoRelacionCompresion';

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
                <Stack.Screen name="CC" component={ CalculoCilindrada } />
                <Stack.Screen name="CMC" component={ CalculoMedidaConducto } />
                <Stack.Screen name="CAP" component={ CalculoAreaPiston } />
                <Stack.Screen name="CRC" component={ CalculoRelacionCompresion } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;