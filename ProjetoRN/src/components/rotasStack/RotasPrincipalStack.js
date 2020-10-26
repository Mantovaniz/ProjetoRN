import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../../views/Inicial/Inicial';
import Temas from '../../views/Temas/Temas';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator();

const RotasPincipalStack = () => {
    return (
        <Stack.Navigator initialRouteName="Inicial"> 
            <Stack.Screen 
                name="Inicial" component={Inicial}
                options={ { cardStyle: estiloRotasStack.screenInicial,
                            headerShown: false } } />
        </Stack.Navigator>
    //se der erro colocar Colecao(tema) e Item(sla)
    );
}
export default RotasPrincipalStack;