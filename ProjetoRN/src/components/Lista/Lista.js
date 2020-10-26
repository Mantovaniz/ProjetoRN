import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [tema, setTema ] = useState(data);

    return (
        <View style={estiloLista.areaTemas}>

            <LinearGradient colors={['#1C1F26', '#1C1F26', '#2D3340']}>
                <Text style={estiloLista.temaTitulo}> {tema.titulo} </Text>
            </LinearGradient>
            <Text style={estiloLista.temaSubTitulo}> {tema.descricao} {tema.autor} {tema.data} </Text>
            
            <LinearGradient colors={['#2D3340', '#2D3340', '#1C1F26']}>
                <Image 
                    style={estiloLista.temaFoto}
                    source={tema.foto}  
                    resizeMode='contain' />
            </LinearGradient>
        </View>
    );
}

export default Lista;