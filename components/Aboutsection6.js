import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Aboutsection6 = () => {
const { language } = useLanguage();

return(
  <View style={Platform.OS === 'web' ? styles.webcontainer : styles.container}>
    <Image
      source={require('../images/parcham.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    />
    <View style={styles.overlay} />

    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 25. Дастгоҳи Комиссия' : 'Статья 25. Аппарат Комиссии'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' 1) Барои таъмини фаъолияти Комиссия дастгоҳи Комиссия таъсис дода мешавад. \n 2) Кормандони дастгоҳи Комиссия хизматчиёни давлатӣ мебошанд. \n 3) Дастгоҳи Комиссия тибқи Низомномаи он таъминоти ташкилӣ-методӣ, иттилоотӣ-таҳлилӣ ва моддӣ-техникии фаъолияти Комиссияро амалӣ менамояд. Комиссия Низомномаи Дастгоҳи Комиссияро тасдиқ менамояд. \n 4) Сохтор ва шумораи воҳидҳои кории дастгоҳи Комиссия бо пешниҳоди раиси Комиссия аз тарафи Президенти Ҷумҳурии Тоҷикистон тасдиқ карда мешавад.' : ' 1) Для обеспечения деятельности Комиссии создается аппарат Комиссии. \n 2) Сотрудники аппарата Комиссии являются государственными служащими. \n 3) Аппарат Комиссии в соответствии с его Положением обеспечивает организационно – методическую, информационно–аналитическую и материально – техническую деятельность Комиссии. Положение аппарата Комиссии утверждается Комиссией. \n 4) Структура и штатная численность аппарата Комиссии утверждается Президентом Республики Таджикистан по представлению председателя Комиссии.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 26. Маблағгузории фаъолияти Комиссия' : 'Статья 26. Финансирование деятельности Комиссии'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' 1) Маблағгузории фаъолияти Комиссия аз ҳисоби буҷети давлатии Ҷумҳурии Тоҷикистон амалӣ карда мешавад. \n 2) Дар буҷети давлатии Ҷумҳурии Тоҷикистон ҳар сол дар сатри алоҳида маблағҳои зарурии таъмини фаъолияти Комиссия пешбинӣ карда мешавад. \n 3) Молу мулке, ки барои фаъолияти Комиссия зарур аст, дар идоракунии оперативии Комиссия буда, моликияти Ҷумҳурии Тоҷикистон мебошад.' : ' 1) Финансирование деятельности Комиссии осуществляется за счет государственного бюджета Республики Таджикистан. \n 2) В государственном бюджете Республики Таджикистан ежегодно предусматриваются отдельной строкой средства, необходимые для обеспечения деятельности Комиссии. \n 3) Имущество, необходимое Комиссии для осуществления своей деятельности, находится в оперативном управлении Комиссии и является собственностью Республики Таджикистан.'}
        </Text>
      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  webcontainer:{
    height: '100vh',
    overflow: 'scroll',
    paddingBottom: "20px",
    overflowX: 'hidden',
  },
  container: {
    flex: 1,
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
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

export default Aboutsection6;