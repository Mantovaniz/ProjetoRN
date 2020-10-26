import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   header: {
       height: 100,
       width: '100%',
       backgroundColor: '#BF0404',
       flexDirection: 'row',
       alignItems: 'flex-end',
       paddingBottom: 10,
       paddingTop: 10,
   },
   fundo: {
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       width: '100%',
       height: '100%',
   },
   borda: {   
      backgroundColor: '#081a31',  
      width: '80%',
      height: 230,
      borderRadius: 10,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
});

  export default estiloInicial;