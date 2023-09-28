import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {styles, buttonSeleccionarStyles} from '../../complements/GeneralStyle'
import RPMM from './CalculoMaximasRPM';

const CMC = ({ navigation }) => {
  const [selectedValue, seleccionItem] = useState(null);

  const [carrera, onChangeCarrera] = React.useState('');
  const [RPMM, onChangeRpmm] = React.useState('');
  const [velocidad, onChangeVelocidad] = React.useState('');
  const [diametroPiston, onChangeDiametroPiston] = React.useState('');
  const [resultado, onChangeResultado] = React.useState('SIN CALCULAR');
  const inputRef = useRef(null);

  const calcularMedidaConducto = () => {
    console.log('¡La función ha sido llamada!');
    var resultadoTemp = 'SIN CALCULAR';
    resultadoTemp = (parseFloat(diametroPiston.replace(",", ".")) * parseFloat(diametroPiston.replace(",", ".")) * parseFloat(RPMM.replace(",", ".")) * parseFloat(carrera.replace(",", "."))) / (parseFloat(velocidad.replace(",", ".") * 30000));
    resultadoTemp = Math.sqrt(resultadoTemp);
    onChangeResultado(resultadoTemp.toFixed(2)+" mm");    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Medida del Conducto (TAPA) </Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeDiametroPiston}
        value={diametroPiston}
        placeholder="Diametro Piston"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Diametro del piston en Cm</Text>    

      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={onChangeRpmm}
        value={RPMM}
        placeholder="RPM Max"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>RPM Maximas que llegaria el motor.</Text>    
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeCarrera}
        value={carrera}
        placeholder="Carrera del piston"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Carrera del Piston en cm</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeVelocidad}
        value={velocidad}
        placeholder="Velocidad"
        keyboardType="numeric"
      />
      <Text style={styles.textDetail}>Velocidad que se obtiene como resultado de la formula Velocidad de Conducto.</Text>        

      <TouchableOpacity
        style={buttonSeleccionarStyles.button}
        onPress={() => {
          // Coloca aquí la función que se ejecutará cuando se presione el botón
          calcularMedidaConducto();
          inputRef.current.blur();
        }}
      >
       <Text style={buttonSeleccionarStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.textResultado}>RESULTADO: <Text>{resultado}</Text></Text>
      
    </View>
  );
};

export default CMC;