import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'

const VMP = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [carrera, onChangeCarrera] = React.useState('');
  const [rpm, onChangeRpm] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularVelocidadMediaPiston = () => {
    console.log('¡La función ha sido llamada!');
    resultadoTemp = parseFloat(carrera.replace(",", ".")) * parseFloat(rpm) / 30000;
    onChangeResultado(resultadoTemp+" M/S");    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo Velocidad Media Piston </Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeCarrera}
        value={carrera}
        placeholder="Carrera del piston"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Carrera del Piston en cm</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeRpm}
        value={rpm}
        placeholder="RPM"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>RPM a las que llegaria el motor</Text>      

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