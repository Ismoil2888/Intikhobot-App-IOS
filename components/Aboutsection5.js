import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Aboutsection5 = () => {
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
          {language === 'Тоҷики' ? 'Моддаи 23. Ҳамкорӣ бо мақомот оид ба интихобот дар давлатҳои хориҷӣ ва созмонҳои (ассотсиатсияҳои) байналмилалӣ' : 'Статья 23. Сотрудничество с избирательными органами иностранных государств и международными организациями (ассоциациями)'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' 1) Комиссия метавонад бо мақомот оид ба интихобот дар давлатҳои хориҷӣ ва созмонҳои (ассотсиатсияҳои) байналмилалӣ оид ба масъалаҳои интихобот ҳамкорӣ намояд. \n 2) Комиссия бо тартиби муқарраргардида метавонад ба созмонҳои (ассотсиатсияҳои) байналмилалии соҳавӣ ҳамроҳ шавад.' : ' 1) Комиссия метавонад бо мақомот оид ба интихобот дар давлатҳои хориҷӣ ва созмонҳои (ассотсиатсияҳои) байналмилалӣ оид ба масъалаҳои интихобот ҳамкорӣ намояд. \n 2) Комиссия бо тартиби муқарраргардида метавонад ба созмонҳои (ассотсиатсияҳои) байналмилалии соҳавӣ ҳамроҳ шавад.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 24. Иштироки узви Комиссия дар ҳайати мушоҳидони байналмилалӣ' : 'Статья 24. Участие члена Комиссии в составе международных наблюдателей'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Узви Комиссия бо тартиби муқарраргардида метавонад ба сифати мушоҳиди байналмилалӣ дар ташкил ва гузаронидани интихобот ва раъйпурсии давлатҳои хориҷӣ иштирок намояд.' : ' Член Комиссии в установленном порядке может принимать участие в качестве международного наблюдателя при подготовке и проведении выборов и референдумов в иностранных государствах.'}
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

export default Aboutsection5;