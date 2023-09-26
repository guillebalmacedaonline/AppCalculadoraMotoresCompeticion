import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'

const CCV = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [diamtroValvula, onChangeDiametroValvula] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularVenturi = () => {
    console.log('¡La función ha sido llamada!');
    resultadoTemp = parseFloat(diamtroValvula.replace(",", ".")) * 0.85;
    onChangeResultado(resultadoTemp+" mm");    
  };

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>Cálculo Venturi del Casquillo </Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeDiametroValvula}
        value={diamtroValvula}
        placeholder="Diámetro de la válvula"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Introducir diámetro de la válvula medida en mm.</Text> 
      

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          calcularVenturi();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </View>
  );
};


export default CCV;