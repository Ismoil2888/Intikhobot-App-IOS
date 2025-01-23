import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useLanguage } from '../LanguageContext';


const Section7 = ({ navigation }) => {
        const { language } = useLanguage();

    return(
  <View style={styles.container}>

    <View style={styles.listContainer}>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section7Page1')}>
      {language === 'Тоҷики' ? 'ТАРТИБИ ПЕШБАРӢ ВА БАҚАЙДГИРИИ НОМЗАДҲО, КИ АЗ ҶОНИБИ ҲИЗБҲОИ СИЁСӢ БА ВАКИЛИИ МАҶЛИСИ НАМОЯНДАГОНИ МАҶЛИСИ ОЛИИ ҶУМҲУРИИ ТОҶИКИСТОН ПЕШНИҲОД ШУДААНД' : 'ПОРЯДОК ВЫДВИЖЕНИЯ И РЕГИСТРАЦИИ КАНДИДАТОВ, ПРЕДЛАГАЕМЫХ ПОЛИТИЧЕСКИМИ ПАРТИЯМИ НА ДЕПУТАТСТВО В МАДЖЛИСИ НАМОЯНДАГОН МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section7Page2')}>
      {language === 'Тоҷики' ? 'ТАРТИБИ ПЕШБАРӢ ВА БАҚАЙДГИРИИ НОМЗАДҲО БО РОҲИ ХУДПЕШБАРӢ БА ВАКИЛИИ МАҶЛИСИ НАМОЯНДАГОНИ МАҶЛИСИ ОЛИИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'ПОРЯДОК ВЫДВИЖЕНИЯ И РЕГИСТРАЦИИ КАНДИДАТОВ САМОВЫДВИЖЕНЦЕВ НА ДЕПУТАТСТВО В МАДЖЛИСИ НАМОЯНДАГОН МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН'}
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
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    overflowX: "hidden",
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
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 30,
  },
  listItem: {
    fontSize: 17.5,
    fontWeight: 'bold',
    color: '#000',
    // marginBottom: 15,
    paddingBottom: 8,
    paddingTop: 8,
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: "blue",
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

export default Section7;