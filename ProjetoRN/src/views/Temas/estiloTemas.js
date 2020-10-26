import { StyleSheet } from 'react-native';

const estiloTemas = StyleSheet.create({
   container: {   
      flex: 1,
   },
   header: {
       height: 40,
       backgroundColor: '#BF0404',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
   texto: {
       fontSize: 24,
       color: '#FFFFFF',
       fontWeight: 'bold',
   },
});

  export default estiloTemas;