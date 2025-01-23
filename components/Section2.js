import React from 'react';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';
import { useLanguage } from '../LanguageContext';


const Section2 = ({ navigation }) => {
        const { language } = useLanguage();

    return(
  <View style={Platform.OS === 'web' ? styles.webcontainer : styles.container}>
     <Image
        source={require('../images/parcham.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.overlay} />
    <View style={styles.listContainer}>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page1')}>
      {language === 'Тоҷики' ? 'МАЪЛУМОТИ УМУМӢ' : 'ОБЩАЯ ИНФОРМАЦМЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page2')}>
      {language === 'Тоҷики' ? 'ҚОИДАҲОИ УМУМӢ' : 'ОБЩИЕ ПОЛОЖЕНИЯ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page3')}>
      {language === 'Тоҷики' ? 'ҲАВЗАҲО ВА УЧАСТКАҲОИ ИНТИХОБОТ' : 'ИЗБИРАТЕЛЬНЫЕ ОКРУГ И ИЗБИРАТЕЛЬНЫЕ УЧАСТКИ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page4')}>
      {language === 'Тоҷики' ? 'КОМИССИЯҲОИ ИНТИХОБОТ' : 'ИЗБИРАТЕЛЬНЫЕ КОМИССИИ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page5')}>
      {language === 'Тоҷики' ? 'РӮЙХАТИ ИНТИХОБКУНАНДАГОН' : 'СПИСОК ИЗБИРАТЕЛЕЙ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page6')}>
      {language === 'Тоҷики' ? 'ПЕШБАРИИ НОМЗАДҲО БА ВАКИЛӢ ВА БА ҚАЙД ГИРИФТАНИ НОМЗАДҲО' : 'ВЫДВИЖЕНИЕ И РЕГИСТРАЦИЯ КАНДИДАТОВ В ДЕПУТАТЫ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page7')}>
      {language === 'Тоҷики' ? 'КАФОЛАТ БА ФАЪОЛИЯТИ НОМЗАДҲО БА ВАКИЛӢ' : 'ГАРАНТИИ ДЕЯТЕЛЬНОСТИ КАНДИДАТОВ В ДЕПУТАТЫ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page8')}>
      {language === 'Тоҷики' ? 'ТАРТИБИ ОВОЗДИҲӢ ВА ҶАМБАСТИ НАТИҶАҲОИ ИНТИХОБОТ' : 'ПОРЯДОК ГОЛОСОВАНИЯ И ПОДВЕДЕНИЯ ИТОГОВ ВЫБОРОВ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page9')}>
      {language === 'Тоҷики' ? 'ОВОЗДИҲИИ ТАКРОРӢ, ИНТИХОБОТИ ТАКРОРӢ ВА ИНТИХОБОТИ ВАКИЛОН БА ҶОИ ВОҲИДҲОИ МАРЗИЮ МАЪМУРИИ НАВТАШКИЛ' : 'ПОВТОРНОЕ ГОЛОСОВАНИЕ, ПОВТОРНЫЕ ВЫБОРЫ И ВЫБОРЫ ДЕПУТАТОВ ВМЕСТО ВЫБЫВШИХ ДЕПУТАТОВ. ВЫБОРЫ ВО ВНОВЬ ОБРАЗОВАННЫХ АДМИНИСТРАТИВНО-ТЕРРИТОРИАЛЬНЫХ ЕДИНИЦАХ'}
      </Text>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2Page10')}>
      {language === 'Тоҷики' ? 'ҚАРОРИ МАҶЛИСИ ОЛИИ ТАРТИБИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'ПОСТАНОВЛЕНИЕ МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
    </View>
  </View>
    )
};

const styles = StyleSheet.create({
  webcontainer:{
    height: '100vh',
    overflow: 'auto',
    overflowX: "hidden",
    paddingHorizontal: 20,
  },
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
    marginTop: 23,
  },
  listItem: {
    fontSize: 17.5,
    fontWeight: 'bold',
    color: '#000',
    // marginBottom: 15,
    paddingBottom: 7,
    paddingTop: 7,
    borderBottomWidth: 0.5,
    width: "100%",
    borderBottomColor: "blue",
  },
  backgroundImage: {
    position: 'absolute',
    top: '20%',
    width: '150%',
    left: -50,
    height: '40%',
    opacity: 0.3,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default Section2;