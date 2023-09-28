import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'

const CAP = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [diametroPiston, onChangeDiametroPiston] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularAreaPiston = () => {
    console.log('¡La función ha sido llamada!');
    var resultadoTemp = 'SIN CALCULAR';
    resultadoTemp = (Math.PI * parseFloat(diametroPiston.replace(",", ".")) * parseFloat(diametroPiston.replace(",", "."))) / 4;
    onChangeResultado(resultadoTemp.toFixed(2)+" mm3");    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Área de Pistón </Text>

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
          calcularAreaPiston();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </View>
  );
};

export default CAP;