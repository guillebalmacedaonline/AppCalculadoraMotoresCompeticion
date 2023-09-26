import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'

const VMP = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [carrera, onChangeCarrera] = React.useState('');
  const [ms, onChangeMs] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularVelocidadMediaPiston = () => {
    console.log('¡La función ha sido llamada!');
    resultadoTemp = parseFloat(ms.replace(",", ".")) * 30000 / parseFloat(carrera.replace(",", "."));
    onChangeResultado(resultadoTemp+" RPM Máx");    
  };

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>Calculo Máximas RPM </Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeMs}
        value={ms}
        placeholder="M/S"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>MS obtenido en el calculo de Velocidad Media de Piston.</Text> 
      
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeCarrera}
        value={carrera}
        placeholder="Carrera del piston"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Carrera del Piston en cm</Text>

           

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          calcularVelocidadMediaPiston();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </View>
  );
};


export default VMP;