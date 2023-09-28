import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'

const CRC = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [cilindrada, onChangeCilindrada] = React.useState('');
  const [camaraCombustion, onChangeCamaraCombustion] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularRelacionCompresion = () => {
    console.log('¡La función ha sido llamada!');
    var resultadoTemp = 'SIN CALCULAR';
    resultadoTemp = (parseFloat(cilindrada.replace(",", ".")) + parseFloat(camaraCombustion.replace(",", "."))) / parseFloat(camaraCombustion.replace(",", "."));
    onChangeResultado(resultadoTemp.toFixed(2)+" :1");    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Relación de Compresión </Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeCilindrada}
        value={cilindrada}
        placeholder="Cilindrada"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Cilindrada obtenido del cálculo de cilindrada.</Text>     

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeCamaraCombustion}
        value={camaraCombustion}
        placeholder="Cámara de Combustión"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Cm3 que ingresan en la Cámara de Combustión.</Text>      

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          calcularRelacionCompresion();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </View>
  );
};

export default CRC;