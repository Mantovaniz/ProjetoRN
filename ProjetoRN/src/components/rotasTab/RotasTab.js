import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from '../../views/Cadastro/Cadastro';
import Temas from '../../views/Temas/Temas';
import Inicial from '../../views/Inicial/Inicial';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {

}

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        style: {backgroundColor: '#000000', borderTopColor: '#000000'},
        showLabel: false,
        activeTintColor: '#FFFFFF' ,
      }
      }
      
     
    >
      <Tab.Screen name="Inicial" component={RotasDrawer} 
        options={{
            unmountOnBlur: true
        }}
      />
      <Tab.Screen name="Temas" component={Temas}  />
      <Tab.Screen name="Cadastro" component={Cadastro} />
    </Tab.Navigator>
  );
}

export default RotasTab;