import React from "react";
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props){
    return (
        <DrawerContentScrollView {...props}>

            <View style={estiloRotasDrawer.fotoContainer}>
                
                <Image style={estiloRotasDrawer.fotoContainer}
                    source={require('../../../assets/imagens/eu.jpeg')}
                />
                <Text style={estiloRotasDrawer.nome}>Beatriz de Souza</Text>
            </View>
                
                <DrawerItemList {...props}/>
        
        </DrawerContentScrollView>
    );
}

export default DrawerPersonalizado;