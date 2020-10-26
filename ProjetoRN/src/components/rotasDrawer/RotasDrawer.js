import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Temas from '../../views/Temas/Temas';
import Cadastro from '../../views/Cadastro/Cadastro';
import { MaterialIcons } from '@expo/vector-icons';
import DrawerPersonalizado from './DrawerPersonalizado';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerPersonalizado}>

      <Drawer.Screen name="Inicial" component={Inicial}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name='home' size={size} color={color="#8C160B"} />
            )
        }}
      />
      <Drawer.Screen name="Temas" component={Temas}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name="storage" size={size} color={color="#8C160B"} />
            )
        }}
      />
      <Drawer.Screen name="Cadastro" component={Cadastro}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name='person' size={size} color={color="#8C160B"} />
            )
        }}
      />
    </Drawer.Navigator>
  );
}

export default RotasDrawer;