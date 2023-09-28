import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Home = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState("CC");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Técnica para Motores </Text>
      <Text style={styles.title}>de Competición </Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          seleccionItem(itemValue)
        }>
        <Picker.Item label="Cálculo de Cilindrada" value="CC" />
        <Picker.Item label="Velocidad Media Piston" value="VMP" />
        <Picker.Item label="RPM Máximas" value="RPMM" />
        <Picker.Item label="Casquillos - Cálculo de Venturi" value="CCV" />
        <Picker.Item label="Cálculo Velocidad del Conducto / Diámetro de Válvula" value="CVC" />
        <Picker.Item label="Cálculo Medida del Conducto" value="CMC" />
        <Picker.Item label="Cálculo Area de Piston" value="CAP" />
        <Picker.Item label="Cálculo Relación de Compresion" value="CRC" />
      </Picker>

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          console.log("Valor variable"+selectedValue) ;      
          switch (selectedValue) {
            case "VMP":
                navigation.navigate('VMP');
                break;
            case "RPMM":
                navigation.navigate('RPMM');
                break;
            case "CCV":
                navigation.navigate('CCV');
                break;
            case "CVC":
                navigation.navigate('CVC');
                break;
            case "CC":
                navigation.navigate('CC');
                break;
            case "CMC":
                navigation.navigate('CMC');
                break;
            case "CAP":
                navigation.navigate('CAP');
                break;
            case "CRC":
                navigation.navigate('CRC');
                break;
          
            default:
                break;
          }
          
        }}
      >
        <Text style={buttonSeleccionarStyles.buttonText}>Seleccionar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
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
  }
});

const buttonSeleccionarStyles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
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

export default Home;