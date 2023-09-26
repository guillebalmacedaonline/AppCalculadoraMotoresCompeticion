import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-web';
import MainStack from './navigator/MainStack';

const App = () => {
  return (
      <MainStack></MainStack>
  );
};

export default App;