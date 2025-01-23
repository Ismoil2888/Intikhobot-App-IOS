import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Aboutsection7 = () => {
const { language } = useLanguage();

return(
      <ScrollView>
  <View style={Platform.OS === 'web' ? styles.webcontainer : styles.container}>
    <Image
      source={require('../images/parcham.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    />
    <View style={styles.overlay} />

      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 27. Ҷавобгарӣ барои риоя накардани талаботи Қонуни мазкур' : 'Статья 27. Ответственность за несоблюдение требований настоящего Закона'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Шахсони воқеӣ ва ҳуқуқӣ барои риоя накардани талаботи Қонуни мазкур бо тартиби муқаррарнамудаи қонунгузории Ҷумҳурии Тоҷикистон ба ҷавобгарӣ кашида мешаванд.' : ' Физические и юридические лица за несоблюдение требований настоящего Закона привлекаются к ответственности в порядке, установленном законодательством Республики Таджикистан.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 28. Тартиби мавриди амал қарор додани Қонуни мазкур' : 'Статья 28. Порядок введения в действие настоящего Закона'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Қонуни мазкур пас аз интишори расмӣ мавриди амал қарор дода шавад.' : ' Настоящий Закон ввести в действие после его официального опубликования.'}
        </Text>
        <View style={{width: "100%", marginTop: 30, display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between"}}>
        <Text style={{fontSize: 17.5, fontWeight: "bold"}}>
          {language === 'Тоҷики' ? 'Президенти \nҶумҳурии Тоҷикистон' : 'Президент Республики \nТаджикистан'}
        </Text>
        <Text style={{fontSize: 17, fontWeight: "bold"}}>
          {language === 'Тоҷики' ? 'Эмомалӣ Раҳмон' : 'Эмомали Рахмон'}
        </Text>
        </View>

<View style={styles.line}>
  <Image
    source={require('../images/goldenornament.png')}
    style={{ height: 40, width: '95%' }}
  />
</View>

      </View>
  </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  webcontainer:{
    height: '100vh',
    overflow: 'scroll',
    paddingBottom: "20px",
    overflowX: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backgroundImage: {
    position: 'absolute',
    top: '30%',
    width: '150%',
    left: -50,
    height: '40%',
    opacity: 0.4,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  line: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },  
  listContainer: {
    alignItems: 'flex-start',
  },
  listItem: {
    fontSize: 23.6,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  textItem: {
    fontSize: 23,
    marginBottom: 15,
  },
});

export default Aboutsection7;