import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
       
        if (login == '' || senha == '') {
            Alert.alert(
                'Preencha os campos login e senha!',
                [
                    { text: 'OK' },
                ],
            );

        } else {
            navigation.replace('Inicial');
        }
    }
   //Arrumar design
    return (
        <View style={estiloLogin.container}>
            <ImageBackground source={require('../../../assets/imagens/fundo2.jpg')} style={estiloLogin.fundo}>

                <View style={estiloLogin.textoContainer}>
                    <Text style={estiloLogin.texto}>Login</Text>
                </View>
                
                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="person" size={24} color="white" padding="5" />
                        <TextInput
                        style={estiloLogin.campo}
                        placeholder="Login"
                        onChangeText={login => setLogin(login)}
                        value={login} 
                        />
                </View>

                <View style={estiloLogin.campoContainer}>
                    <MaterialIcons name="vpn-key" size={24} color="white" padding="5" />
                        <TextInput
                        style={estiloLogin.campo}
                        placeholder="Senha"
                        onChangeText={senha => setSenha(senha)}
                        value={senha} 
                        />
                </View>

                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}> 
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default Login;