import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import estiloTemas from './estiloTemas';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Temas({ navigation }) {

    const [temas, setTemas] = useState([
        {
            id: '1',
            titulo: '\n\nTema: As Partes da Missa\n\n',
            descricao: '\n\n\nDescrição: Encontro sobre as partes da missa, nele foi explicado o que acontece em cada parte\n\n',
            autor: 'Apresentador: Gabrielly Jasper\n\n',
            data: 'Data: 20/09/2020',
            foto: require('../../../assets/itens/2.jpeg'),
        },
        {
            id: '2',
            titulo: '\n\nTema: Santa Clara de Assis\n\n',
            descricao: '\n\n\nDescrição: Neste encontro foi apresentado a história de Santa Clara de Assis\n\n',
            autor: 'Apresentador: Bernardo\n\n',
            data: 'Data: 16/08/2020',
            foto: require('../../../assets/itens/3.jpeg'),     
        },
        {
            id: '3',
            titulo: '\n\nTema: Talento\n\n',
            descricao: '\n\n\nDescrição: O que significa ter talento? Qual é o seu? Neste encontro foi nos mostrado a importância do talento\n\n',
            autor: 'Apresentador: Luiz\n\n',
            data: 'Data: 19/07/2020',
            foto: require('../../../assets/itens/4.jpeg')
        }

    ]);
    
    
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloTemas.container}>

            <View style={estiloTemas.header}> 
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloTemas.texto}> Temas </Text>
                <MaterialIcons name="arrow-back" size={24} color="#BF0404" />
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={temas}
                renderItem={ ({item}) => <Lista data={item} /> }
            />
        </View>
    )
}

export default Temas;