import React from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useLanguage } from '../LanguageContext';


const Section1 = ({ navigation }) => {
        const { language } = useLanguage();

    return(
  <View style={styles.container}>

    <View style={styles.listContainer}>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page1')}>
      {language === 'Тоҷики' ? 'МАЪЛУМОТИ УМУМӢ' : 'ОБЩАЯ ИНФОРМАЦМЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page2')}>
      {language === 'Тоҷики' ? 'ҚОИДАҲОИ УМУМӢ' : 'ОБЩИЕ ПОЛОЖЕНИЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page3')}>
      {language === 'Тоҷики' ? 'КОМИССИЯҲОИ ИНТИХОБОТ' : 'ИЗБИРАТЕЛЬНЫЕ КОМИССИИ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page4')}>
      {language === 'Тоҷики' ? 'ҲАВЗАҲО ВА УЧАСТКАҲОИ ИНТИХОБОТ' : 'ИЗБИРАТЕЛЬНЫЕ ОКРУГ И УЧАСТКИ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page5')}>
      {language === 'Тоҷики' ? 'РӮЙХАТИ ИНТИХОБКУНАНДАГОН' : 'СПИСКИ ИЗБИРАТЕЛЕЙ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page6')}>
      {language === 'Тоҷики' ? 'ПЕШБАРӢ, БАҚАЙДГИРӢ ВА КАФОЛАТҲОИ ФАЪОЛИЯТИ НОМЗАДҲО' : 'ВЫДВИЖЕНИЕ, РЕГИСТРАЦИЯ И ГАРАНТИИ ДЕЯТЕЛЬНОСТИ КАНДИДАТОВ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page7')}>
      {language === 'Тоҷики' ? 'ТАШКИЛ ВА ТАРТИБИ ОВОЗДИҲӢ' : 'ОРГАНИЗАЦИЯ И ПОРЯДОК ГОЛОСОВАНИЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1Page8')}>
      {language === 'Тоҷики' ? 'МУАЙЯН КАРДАНИ НАТИҶАҲОИ ИНТИХОБОТ' : 'ОПРЕДЕЛЕНИЕ РЕЗУЛЬТАТОВ ВЫБОРОВ'}
      </Text>
    </View>

    <View style={Platform.OS === 'web' ? styles.webflagContainer : styles.flagContainer}>
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
  webflagContainer:{
    marginTop: 0,
    width: '100%',
    alignItems: 'center',
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

export default Section1;