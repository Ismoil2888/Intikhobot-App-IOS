import React from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section2Page1 = () => {
const { language } = useLanguage();

return(
  <View style={Platform.OS === 'web' ? styles.webcontainer : styles.container}>
    <View style={styles.listContainer}>
      <Text style={styles.listItem}>
      {language === 'Тоҷики' ? 'ҚОНУНИ КОНСТИТУТСИОНИИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'КОНСТИТУЦИОННЫЙ ЗАКОН РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
      <Text style={styles.listItem}>
      {language === 'Тоҷики' ? 'ДАР БОРАИ ИНТИХОБОТИ ВАКИЛОН БА МАҶЛИСҲОИ МАҲАЛЛИИ ВАКИЛОНИ ХАЛҚ' : 'О ВЫБОРАХ ДЕПУТАТОВ В МЕСТНЫЕ МАДЖЛИСЫ НАРОДНЫХ ДЕПУТАТОВ'}
      </Text>
      <Text style={styles.textItem}>
      {language === 'Тоҷики' ? ' (Ахбори Маҷлиси Олии Ҷумҳурии Тоҷикистон, с.1999, № 12, мод. 298; с.2007, №5, мод.353; с.2012,№8, мод.813; с.2014, №7, қ.1, мод.383; №11, мод.640; с.2017, №5, қ.1, мод.269; с.2019, №7, мод. 461; с.2024 №1 - 2, мод. 1)' : ' (Ахбори Маджлиси Оли Республики Таджикистан 1999 год, № 12, ст.298; 2007 год, №5, ст.353; 2012 год, №8, ст.813; 2014 год, №7, ч.1, ст.383; №11, ст.640, 2017 год, №5, ч.1, ст.269; 2019 год, №7, ст. 461 КЗРТ от 3 января 2024 года, №2016)'}
      </Text>
    </View>

    <View style={styles.flagContainer}>
      <ImageBackground
        source={require('../images/parcham.png')}
        style={styles.flag}
        resizeMode="contain"
      >
        <View style={styles.overlay} />
      </ImageBackground>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  webcontainer:{
    paddingTop: 20,    
    overflowX: "hidden",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A148C',
    marginTop: 20,
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '30',
},
listItem: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  textItem: {
    fontSize: 21,
  },
  flagContainer: {
    width: '100%',
    alignItems: 'center',
  },
  flag: {
    width: '130%',
    height: 300,
    justifyContent: 'center',
    marginRight: '70'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default Section2Page1;