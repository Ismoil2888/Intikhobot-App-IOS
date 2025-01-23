import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section1Page1 = () => {
const { language } = useLanguage();

return(
  <View style={styles.container}>
    <View style={styles.listContainer}>
      <Text style={styles.listItem}>
      {language === 'Тоҷики' ? 'ҚОНУНИ КОНСТИТУТСИОНИИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'КОНСТИТУЦИОННЫЙ ЗАКОН РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
      <Text style={styles.listItem}>
      {language === 'Тоҷики' ? 'ДАР БОРАИ ИНТИХОБОТИ МАҶЛИСИ ОЛИИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'О ВЫБОРАХ МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
      <Text style={styles.textItem}>
      {language === 'Тоҷики' ? '(Ахбори Маҷлиси Олии Ҷумҳурии Тоҷикистон, с.1999, №12, мод. 296; с.2004, №7, мод.451; с.2007, №5, мод.352; с.2008, №10, мод.797; с.2012, №8, мод.811; с.2014, №3, мод.140; №7, қ.1, мод.382; с.2017, №7-8, мод.562; с.2018, №2, мод.61; №9 – 10, мод.581; с.2019, №7, мод460)' : '(Ахбори Маджлиси Оли Республики Таджикистан, 1999г., № 12, ст. 296, 2004г., № 7, ст.451; 2007г., №5, ст.352; 2008 г., №10, ст.797; 2012 г., №8, ст.811; 2014 г., №3, ст.140, №7, ч.1, ст.382; 2017г., №7-8, ст.562; 2018г., №2, ст.61; №9 – 10, ст.581; 2019 г., №7, ст.460)'}
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
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  textItem: {
    fontSize: 19,
  },
  flagContainer: {
    marginTop: 20,
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

export default Section1Page1;