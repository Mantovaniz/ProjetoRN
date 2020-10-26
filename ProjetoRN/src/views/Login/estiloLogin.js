import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({

    container: {
        flex:1,
    },
    borda: {
        justifyContent: 'center',
        backgroundColor: '081a31',
        width: '100%',
        height: '100%',
    },
    fundo: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 150,
        alignItems: 'center',
    },
    textoContainer: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    campo: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
    },
    botaoContainer: {
        marginTop: 60,
        marginBottom: 35,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 20,
        height: 40,
        width: 250,
        borderWidth: 2,
        borderColor: '#D93B3B',
        backgroundColor: '#D93B3B',
        alignItems: 'center',
    },
    campoContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    texto: {
        fontSize: 36,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        alignItems: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },

});

export default estiloLogin;