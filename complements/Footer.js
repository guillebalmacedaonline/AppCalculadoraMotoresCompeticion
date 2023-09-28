import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>- Desarrollado por Uniting Software Argentina -</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333', // Cambia el color de fondo según tus preferencias
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, // Cambia la altura según tus necesidades
  },
  footerText: {
    color: '#fff', // Cambia el color del texto según tus preferencias
  },
});

export default Footer;