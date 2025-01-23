import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLanguage } from '../LanguageContext';

const Main = ({ navigation }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isModalVisible, setModalVisible] = useState(false);

  const languages = [
    { id: '1', label: 'Тоҷики' },
    { id: '2', label: 'Русский' },
  ];

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('appLanguage');
        if (storedLanguage) {
          toggleLanguage(storedLanguage);
        }
      } catch (error) {
        console.error('Ошибка при загрузке языка:', error);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    try {
      await AsyncStorage.setItem('appLanguage', lang);
      toggleLanguage(lang);
      setModalVisible(false);
    } catch (error) {
      console.error('Ошибка при сохранении языка:', error);
    }
  };

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#40B2E8" barStyle="light-content" />
      <Image
        source={require('../images/parlament.png')}
        style={styles.topImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>
        {language === 'Тоҷики' ? 'ИНТИХОБОТИ ВАКИЛОНИ ХАЛҚ - 2025' : 'ВЫБОРЫ НАРОДНЫХ ДЕПУТАТОВ - 2025'}
      </Text>

      <Image
        source={require('../images/basiclogomainpage.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          {language === 'Тоҷики' ? 'ЗАБОНИ БАРНОМА' : 'ЯЗЫК ПРИЛОЖЕНИЯ'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Info')}>
        <Text style={styles.buttonText}>
          {language === 'Тоҷики' ? 'МАЪЛУМОТ' : 'ИНФОРМАЦИЯ'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>
          {language === 'Тоҷики' ? 'ДАР БОРАИ МО' : 'О НАС'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Text style={styles.modalTitle}>
              {language === 'Тоҷики' ? 'Интихоби забон' : 'Выберите язык'}
            </Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => changeLanguage(item.label)}
                >
                  <Text style={styles.languageText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    overflow: 'auto',
  },
  topImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3F0DD1',
    textAlign: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 160,
    marginBottom: 20,
  },
  button: {
    width: '68%',
    paddingVertical: 15,
    backgroundColor: '#3F0DD1',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  languageOption: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  languageText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Main;