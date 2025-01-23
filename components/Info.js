import React, { useEffect } from 'react';
import { Platform, View, Text, StyleSheet, Image, StatusBar, ImageBackground } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Info = ({ navigation }) => {
    const { language } = useLanguage();

    useEffect(() => {
      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        navigation.navigate('Main');
      });
      return unsubscribe;
    }, [navigation]);
    
    return(
  <View style={Platform.OS === 'web' ? styles.webcontainer : styles.container}>
        <Image
            source={require('../images/parcham.png')}
            style={styles.backgroundImage}
            resizeMode="contain"
          />
          <View style={styles.overlay} />
    <StatusBar backgroundColor="#3F0DD1" barStyle="light-content" />
    <View style={styles.listContainer}>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section1')}>
      {language === 'Тоҷики' ? 'ИНТИХОБОТИ МАҶЛИСИ ОЛИИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'О ВЫБОРАХ МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
      <View style={styles.line}>
        <Image style={styles.ornament} source={require("../images/lineornament2.png")}></Image>
      </View>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section2')}>
      {language === 'Тоҷики' ? 'ИНТИХОБОТИ ВАКИЛОНИ МАҶЛИСҲОИ МАҲАЛЛИИ ВАКИЛОНИ ХАЛҚ' : 'О ВЫБОРАХ ДЕПУТАТОВ В МЕСТНЫЕ МАДЖЛИСЫ НАРОДНЫХ ДЕПУТАТОВ'}
      </Text>
        <View style={styles.line}>
        <Image style={styles.ornament} source={require("../images/lineornament2.png")}></Image>
      </View>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section3')}>
      {language === 'Тоҷики' ? 'ИНТИХОБОТИ ВАКИЛОНИ ҶАМОАТ' : 'ВЫБОРЫ ДЕПУТАТОВ В ДЖАМОАТАХ'}
      </Text>
        <View style={styles.line}>
        <Image style={styles.ornament} source={require("../images/lineornament2.png")}></Image>
      </View>
      <Text style={styles.listItemAnother}>
      {language === 'Тоҷики' ? 'ДИГАР МАВОДҲО' : 'ДРУГИЕ МАТЕРИАЛЫ'}
      </Text>
        <View style={styles.line}>
        <Image style={styles.ornament} source={require("../images/lineornament2.png")}></Image>
      </View>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section6')}>
      {language === 'Тоҷики' ? 'ҶАРАЁНИ ОМОДАГӢ БА ИНТИХОБОТ' : 'ПРОЦЕСС ПОДГОТОВКИ К ВЫБОРАМ'}
      </Text>
      <View style={styles.line}>
        <Image style={styles.ornament} source={require("../images/lineornament2.png")}></Image>
      </View>
      <Text style={styles.listItem} onPress={() => navigation.navigate('Section7')}>
      {language === 'Тоҷики' ? 'ТАРТИБИ ПЕШБАРӢ ВА БАҚАЙДГИРИИ НОМЗАДҲО' : 'ПОРЯДОК ВЫДВИЖЕНИЯ И РЕГИСТРАЦИИ КАНДИДАТОВ'}
      </Text>
      <View style={styles.line}>
        <Image style={styles.ornament} source={require("../images/lineornament2.png")}></Image>
      </View>
    </View>
  </View>
    );
};

const styles = StyleSheet.create({
  webcontainer:{
    height: "100vh",
    paddingTop: "15px",
    paddingHorizontal: 20,
    overflow: 'hidden',
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
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '30',
  },
  listItem: {
    fontSize: 17.5,
    fontWeight: 'bold',
    color: '#000',
  },
  line:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ornament:{
    width: 150,
    height: 1,
    paddingBottom: 35,
    color: "white",
  },
  listItemAnother:{
    fontSize: 16,
    color: 'grey',
    textAlign: "center",
    marginBottom: 17,
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

export default Info;