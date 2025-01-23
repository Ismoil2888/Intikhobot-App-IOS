import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Language = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Language Screen</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text>ДАР БОРА</Text>
     </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Language;