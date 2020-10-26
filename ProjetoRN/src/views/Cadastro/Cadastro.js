import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloCadastro from './estiloCadastro';
import { MaterialIcons } from '@expo/vector-icons';

function Cadastro({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
//Arrumar para mostrar informações de perfil
    return (
        <View style={estiloCadastro.container}>
            <View style={estiloCadastro.header}> 
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloCadastro.texto}> Cadastro </Text>
                <MaterialIcons name="arrow-back" size={24} color="#BF0404" />
            </View>
            <View style={estiloCadastro.borda}>
             <ImageBackground source={require('../../../assets/imagens/eu.jpeg')} style={estiloCadastro.botaoContainer}>
             </ImageBackground>
             <Text style={estiloCadastro.textoP1}> Nome: Beatriz de Souza </Text>
             <Text style={estiloCadastro.textoP}> Idade: 17 anos </Text>
             <Text style={estiloCadastro.textoP}> Ocupação: Estudante na instituição de ensino ETEC de Hortolândia</Text>
             <Text style={estiloCadastro.textoP}> Sala: 3º MI-A</Text>
             <Text style={estiloCadastro.textoP}> Frequenta desde: 2018</Text>
             <Text style={estiloCadastro.textoP}> Localização: Rua sla qual</Text>
            </View>

        </View>
    )
}

export default Cadastro;