import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'

const CC = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [carrera, onChangeCarrera] = React.useState('');
  const [diametroPiston, onChangeDiametroPiston] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularCilindrada = () => {
    console.log('¡La función ha sido llamada!');
    var resultadoTemp = 'SIN CALCULAR';
    console.log(Math.PI / 4);
    console.log(parseFloat(carrera.replace(",", ".")));
    console.log( parseFloat(diametroPiston.replace(",", ".")) * parseFloat(diametroPiston.replace(",", ".")));
    resultadoTemp = (Math.PI / 4) * parseFloat(carrera.replace(",", ".")) * parseFloat(diametroPiston.replace(",", ".")) * parseFloat(diametroPiston.replace(",", "."));
    onChangeResultado((resultadoTemp / 1000).toFixed(2)+" Cm3");    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Cilindrada </Text>
      
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
        onChangeText={onChangeDiametroPiston}
        value={diametroPiston}
        placeholder="Diametro Piston"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Diametro del piston en Cm</Text>      

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          calcularCilindrada();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </View>
  );
};

export default CC;