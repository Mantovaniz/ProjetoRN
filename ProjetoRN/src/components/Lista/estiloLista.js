import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaTemas: {
        flex: 1,
        backgroundColor: '#2D3340',
    },
    temaTitulo: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        color: '#FFFFFF',
    },
    temaSubTitulo: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    temaDescricao: {
        fontSize: 16,
        justifyContent: 'center',
        color: '#FFFFFF',
    },
    temaFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20,
    },
});

export default estiloLista;