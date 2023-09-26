import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {styles, buttonSeleccionarStyles, scroll} from '../../complements/GeneralStyle'

const CVC = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [cilindrada, onChangeCilindrada] = React.useState('');
  const [RPMM, onChangeRpmm] = React.useState('');
  const [velocidad, onChangeVelocidad] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularVelocidadConducto = () => {
    console.log('¡La función ha sido llamada!');
    primerParte = parseFloat(cilindrada.replace(",", ".")) * parseFloat(RPMM.replace(",", "."));
    segundaParte = Math.PI * parseFloat(velocidad.replace(",", ".")) * 750;
    terceraParte = primerParte / segundaParte;
    resultadoTemp = Math.sqrt(terceraParte) * 10;
    onChangeResultado(resultadoTemp.toFixed(2)+" mm diámetro de la válvula.");    
  };

  return (
    <ScrollView style={scroll.container}>
        
      <Text style={styles.title}>Cálculo Velocidad de Conducto </Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeCilindrada}
        value={cilindrada}
        placeholder="Cilindrada"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Introducir cilindradas.</Text> 

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeRpmm}
        value={RPMM}
        placeholder="Rpm Max"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Introducir RPM máx.</Text> 

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeVelocidad}
        value={velocidad}
        placeholder="Velocidad"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Introducir velocidad variable.</Text> 
      

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          calcularVelocidadConducto();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </ScrollView>
  );
};


export default CVC;