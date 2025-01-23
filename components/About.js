import React, { useState, useEffect } from 'react';
import { Platform, View, StatusBar, Text, Modal, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const About = ({ navigation }) => {
  const { language } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);

      useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
          e.preventDefault();
              navigation.navigate('Main');
        });
        return unsubscribe;
      }, [navigation]);

  return (

        <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={Platform.OS === 'web' ? styles.webcontainer : styles.mobilecontainer}>
      <StatusBar backgroundColor="#3F0DD1" barStyle="light-content" />
      
      <View style={styles.listContainer}>
        <TouchableOpacity
          style={styles.glassButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.listItem}>
            {language === 'Тоҷики' ? 'Комиссияи марказии интихобот ва раъйпурсии Ҷумҳурии Тоҷикистон' : 'Центральная комиссия по выборам и референдуму Республики Таджикистан'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionsContainer}>
  {[
    {
      ru: "Общие положения",
      tj: "Муқаррароти умумӣ",
      route: "Aboutsection1", 
    },
    {
      ru: "Порядок образования и состав комиссии",
      tj: "Тартиби таъсис ва ҳайати комиссия",
      route: "Aboutsection2", 
    },
    {
      ru: "Правовой статус комиссии, председеталя, заместителя, секретаря и члена комиссии",
      tj: "Вазъи ҳуқуқии комиссия, раис, муовин, котиб, котиб ва узви комиссия",
      route: "Aboutsection3", 
    },
    {
      ru: "Организация деятельности",
      tj: "Ташкили фаъолияти комиссия",
      route: "Aboutsection4", 
    },
    {
      ru: "Международное сотрудничество комиссии",
      tj: "Ҳамкории байналмилалии комиссия",
      route: "Aboutsection5", 
    },
    {
      ru: "Аппарат комиссии и материально-финансовое обеспечение деятельности комиссии",
      tj: "Дастгоҳи комиссия ва таъминоти моддию молиявии фаъолияти комиссия",
      route: "Aboutsection6", 
    },
    {
      ru: "Заключительные положения",
      tj: "Муқаррароти хотимавӣ",
      route: "Aboutsection7", 
    },
  ].map((section, index) => (
    <TouchableOpacity
      key={index}
      style={Platform.OS === 'web' ? styles.websectionCard : styles.sectionCard}
      onPress={() => navigation.navigate(section.route)}
    >
      {Platform.OS === 'web' ? (
      <ImageBackground
      source={require('../images/emblema.png')}
      style={styles.cardBackground}
      imageStyle={{ borderRadius: 15, resizeMode: 'contain', left: "auto", right: "auto",  width: '150px', height: "150px" }}
    >
      <View style={styles.overlay} />
      <Text style={styles.sectionText}>
        {language === 'Тоҷики' ? section.tj : section.ru}
      </Text>
    </ImageBackground>
) : (
  <ImageBackground
  source={require('../images/emblema.png')}
  style={styles.cardBackground}
  imageStyle={{ borderRadius: 15, resizeMode: 'contain'}}
>
  <View style={styles.overlay} />
  <Text style={styles.sectionText}>
    {language === 'Тоҷики' ? section.tj : section.ru}
  </Text>
</ImageBackground>
)}
    </TouchableOpacity>
  ))}
</View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.textItem}>
              {language === 'Тоҷики' ? 'Аъзои Комиссияи марказии интихобот ва раъйпурсии Ҷумҳурии Тоҷикистон санаи 25 октябри соли 2019 бо пешниҳоди Президенти Ҷумҳурии Тоҷикистон аз ҷониби Маҷлиси намояндагони Маҷлиси Олии Ҷумҳурии Тоҷикистон тасдиқ шуда, аз Раис, муовини Раис ва 5 аъзо иборат мебошад' : 'Состав Центральной комиссии по выборам и референдуму Республики Таджикистан утвержден 25 октября 2019 года по представлению Президента Республики Таджикистан Маджлиси намояндагон Маджлиси Оли Республики Таджикистан и состоит из председателя , заместитель председателя и 5 членов.'}
            </Text>
            <Text style={styles.textItem}>
              {language === 'Тоҷики' ? 'Суроға: ш. Душанбе, хиёбони Рӯдакӣ 42' : 'Адрес: ш. Душанбе, проспект Рудаки 42'}
            </Text>
            <Text style={styles.textItem}>
              {language === 'Тоҷики' ? 'Веб сайт: www.kmir.tj' : 'Веб сайт: www.kmir.tj'}
            </Text>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>
              {language === 'Тоҷики' ? 'Бозгашт' : 'Закрыть'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  webcontainer:{
    height: '100vh',
    overflow: 'scroll',
    padding: '10px',
    paddingBottom: "65px",
  },
  mobilecontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    width: '100%',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: '#fff',
    borderRadius: 15,
  },  
  listItem: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgb(56, 56, 188)',
    marginBottom: 15,
  },
  glassButton: {
    backgroundColor: 'rgba(121, 178, 213, 0.18)',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 1 }],
    transition: 'all 0.3s ease-in-out',
  },
  textItem: {
    fontSize: 21,
    paddingBottom: 15,
  },
  sectionsContainer: {
    marginTop: 12,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  websectionCard:{
    width: '48%',
    height: 140,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: 'white',
  },
  sectionCard: {
    width: '48%',
    height: 140,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.73)',
  },
  sectionText: {
    fontSize: 16.3,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    paddingHorizontal: 10, 
    zIndex: 1,
  },  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#3F0DD1',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default About;