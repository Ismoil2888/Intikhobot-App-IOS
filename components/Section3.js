import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useLanguage } from '../LanguageContext';


const Section3 = ({ navigation }) => {
        const { language } = useLanguage();

    return(
  <View style={styles.container}>

    <View style={styles.listContainer}>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3Page1')}>
      {language === 'Тоҷики' ? 'МАЪЛУМОТИ УМУМӢ' : 'ОБЩАЯ ИНФОРМАЦМЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3Page2')}>
      {language === 'Тоҷики' ? 'ҚОИДАҲОИ УМУМӢ' : 'ОБЩИЕ ПОЛОЖЕНИЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3Page3')}>
      {language === 'Тоҷики' ? 'ТАШКИЛ, ВАКОЛАТҲО ВА ФАЪОЛИЯТИ МАҚОМОТИ ХУДИДОРАКУНИИ ШАҲРАК ВА ДЕҲОТ' : 'ОРГАНИЗАЦИЯ, ПОЛНОМОЧИЯ И ДЕЯТЕЛЬНОСТЬ ОРГАНОВ САМОУПРАВЛЕНИЯ ПОСЁЛКОВ И СЁЛ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3Page4')}>
      {language === 'Тоҷики' ? 'АСОСҲОИ ИҚТИСОДИ ВА МОЛИЯВИИ ФАЪОЛИЯТИ МАҚОМОТИ ХУДИДОРАКУНИИ ШАҲРАК ВА ДЕҲОТ' : 'ЭКОНОМИЧЕСКИЕ И ФИНАНСОВЫЕ ОСНОВЫ ДЕЯТЕЛЬНОСТИ ОРГАНОВ САМОУПРАВЛЕНИЯ ПОСЁЛКОВ И СЁЛ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3Page5')}>
      {language === 'Тоҷики' ? 'ИНТИХОБОТИ ВАКИЛОНИ ҶАМОАТ' : 'ВЫБОРЫ ДЕПУТАТОВ ДЖАМОАТА'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3Page6')}>
      {language === 'Тоҷики' ? 'МУҚАРРАРОТИ ХОТИМАВӢ ВА ИНТИҚОЛӢ' : 'ЗАКЛЮЧИТЕЛЬНЫЕ И ПЕРЕХОДНЫЕ ПОЛОЖЕНИЯ'}
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

export default Section3;