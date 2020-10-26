import { StyleSheet } from 'react-native';

const estiloCadastro = StyleSheet.create({
    container: {   
      flex: 1,
      backgroundColor: '#EAE9E6',
      width: '100%',
   },
   header: {
       height: 40,
       backgroundColor: '#BF0404',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
    borda: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 35,
        paddingBottom: 20,
    },
    texto: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    textoP: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        padding: 8,
    },
    textoP1: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        paddingTop: 40,
        padding: 8,
    },
    botaoContainer: {
        borderRadius: 5,
        height: 300,
        width: 300,
        alignItems: 'center',
    },
    fundo: {
        height: 200,
        marginTop: 20,
        marginBottom: 20,
   },

});

export default estiloCadastro;