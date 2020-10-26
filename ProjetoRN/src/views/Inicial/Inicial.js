import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const IsDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!IsDrawerOpen){
            navigation.openDrawer();
        }      
    }

    const abrirTemas = () => {
        navigation.navigate('Temas')
    }
    
    const abrirCadastro = () => {
        navigation.navigate('Cadastro')
    }
    
    return (
        <View style={estiloInicial.container}>

                <View style={estiloInicial.header}>
                    <TouchableOpacity onPress={exibirDrawer}>
                        <AntDesign name="menu-fold" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                
                <ImageBackground source={require('../../../assets/imagens/fundo.jpeg')} style={estiloInicial.fundo}>

                </ImageBackground>
        </View>
    )
}

export default Inicial;