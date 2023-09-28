import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      marginTop: 100,
    },
  
    title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
  
    selector:{
      fontSize: 16, // Cambia el tamaño del texto dentro del select
      paddingTop: 12, // Añade espacio superior
      paddingBottom: 12, // Añade espacio inferior
      paddingHorizontal: 10, // Añade espacio horizontal
      borderWidth: 1, // Añade un borde
      borderColor: 'gray', // Color del borde
      borderRadius: 4, // Borde redondeado
      backgroundColor: 'white', // Color de fondo
      color: 'black', // Color del texto
      width: 200, // Ancho del select
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  
    textDetail: {
      margin: 15
    },
  
    textResultado: {
      fontSize: 25,
      margin: 15,
      fontWeight: 'bold', 
      color: 'darkred'
    },

    footer: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
  
  export const buttonSeleccionarStyles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      margin: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export const scroll = StyleSheet.create({
    container: {
      flex: 1
    },
  });
  