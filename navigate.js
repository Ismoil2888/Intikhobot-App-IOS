import React, { useState } from 'react';
import Main from './components/Main';
import Info from './components/Info';
import About from './components/About';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section1Page1 from './components/Section1Page1';
import Section1Page2 from './components/Section1Page2';
import Section1Page3 from './components/Section1Page3';
import Section1Page4 from './components/Section1Page4';
import Section1Page5 from './components/Section1Page5';
import Section1Page6 from './components/Section1Page6';
import Section1Page7 from './components/Section1Page7';
import Section1Page8 from './components/Section1Page8';
import Section2Page1 from './components/Section2Page1';
import Section2Page2 from './components/Section2Page2';
import Section2Page3 from './components/Section2Page3';
import Section2Page4 from './components/Section2Page4';
import Section2Page5 from './components/Section2Page5';
import Section2Page6 from './components/Section2Page6';
import Section2Page7 from './components/Section2Page7';
import Section2Page8 from './components/Section2Page8';
import Section2Page9 from './components/Section2Page9';
import Section2Page10 from './components/Section2Page10';
import Section3Page1 from './components/Section3Page1';
import Section3Page2 from './components/Section3Page2';
import Section3Page3 from './components/Section3Page3';
import Section3Page4 from './components/Section3Page4';
import Section3Page5 from './components/Section3Page5';
import Section3Page6 from './components/Section3Page6';
import Section7Page1 from './components/Section7Page1';
import Section7Page2 from './components/Section7Page2';
import Aboutsection1 from './components/Aboutsection1';
import Aboutsection2 from './components/Aboutsection2';
import Aboutsection3 from './components/Aboutsection3';
import Aboutsection4 from './components/Aboutsection4';
import Aboutsection5 from './components/Aboutsection5';
import Aboutsection6 from './components/Aboutsection6';
import Aboutsection7 from './components/Aboutsection7';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const MenuButton = () => {
  const navigation = useNavigation();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  const languages = [
    { id: '1', label: 'Тоҷики' },
    { id: '2', label: 'Русский' },
  ];

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const changeLanguage = async (lang) => {
    try { 
      await AsyncStorage.setItem('appLanguage', lang);
      toggleLanguage(lang);
      setLanguageModalVisible(false);
    } catch (error) {
      console.error('Ошибка при сохранении языка:', error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
        <Text style={styles.menuText}>⋮</Text>
      </TouchableOpacity>
      {isMenuVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isMenuVisible}
          onRequestClose={toggleMenu}
        >
          <TouchableOpacity
            style={styles.menuOverlay}
            onPress={toggleMenu}
          >
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  toggleMenu();
                  navigation.navigate('Main');
                }}
              >
                <Text style={styles.menuItemText}>
                  {language === 'Тоҷики' ? 'Асоси' : 'Главная'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  toggleMenu();
                  setLanguageModalVisible(true);
                }}
              >
                <Text style={styles.menuItemText}>
                  {language === 'Тоҷики' ? 'Забон' : 'Язык'}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      <Modal
        visible={isLanguageModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setLanguageModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={() => { }}
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
    </>
  );
};

const AppNavigator = () => {
  const { language } = useLanguage();

  return (
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: {
          animation: 'timing',
          config: { duration: 150 },
        },
        close: {
          animation: 'timing',
          config: { duration: 150 },
        },
      },
      cardStyleInterpolator: ({ current, layouts }) => ({
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      }),
    }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          title: language === 'Тоҷики' ? 'Маълумот' : 'Информация',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: language === 'Тоҷики' ? 'Дар бораи мо' : 'О нас',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection1"
        component={Aboutsection1}
        options={{
          title: language === 'Тоҷики' ? 'Муқаррароти умумӣ' : 'Общие положения',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection2"
        component={Aboutsection2}
        options={{
          title: language === 'Тоҷики' ? 'Тартиби таъсис ва ҳайати комиссия' : 'Порядок образования и состав комиссии',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection3"
        component={Aboutsection3}
        options={{
          title: language === 'Тоҷики' ? 'Вазъи ҳуқуқии комиссия, раис, муовин, котиб, котиб ва узви комиссия' : 'Правовой статус комиссии, председеталя, заместителя, секретаря и члена комиссии',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection4"
        component={Aboutsection4}
        options={{
          title: language === 'Тоҷики' ? 'Ташкили фаъолияти комиссия' : 'Организация деятельности',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection5"
        component={Aboutsection5}
        options={{
          title: language === 'Тоҷики' ? 'Ҳамкории байналмилалии комиссия' : 'Международное сотрудничество комиссии',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection6"
        component={Aboutsection6}
        options={{
          title: language === 'Тоҷики' ? 'Дастгоҳи комиссия ва таъминоти моддию молиявии фаъолияти комиссия' : 'Аппарат комиссии и материально-финансовое обеспечение деятельности комиссии',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Aboutsection7"
        component={Aboutsection7}
        options={{
          title: language === 'Тоҷики' ? 'Муқаррароти хотимавӣ' : 'Заключительные положения',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Section1"
        component={Section1}
        options={{
          title: language === 'Тоҷики' ? 'Интихоботи Маҷлиси Олии Ҷумҳурии Тоҷикистон' : 'О выборах Маджлиси Оли Республики Таджикистан',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Section2"
        component={Section2}
        options={{
          title: language === 'Тоҷики' ? 'Интихоботи вакилони Маҷлисҳои маҳаллии вакилони халқ' : 'О выборах депутатов в местные Маджлисы народных депутатов',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Section3"
        component={Section3}
        options={{
          title: language === 'Тоҷики' ? 'Интихоботи вакилони ҷамоат' : 'Выборы депутатов в джамоатах',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Section6"
        component={Section6}
        options={{
          title: language === 'Тоҷики' ? 'Ҷараёни омодаги ба интихобот' : 'Процесс подготовки к выборам',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
          gestureEnabled: false
        }}
      />
      <Stack.Screen
        name="Section7"
        component={Section7}
        options={{
          title: language === 'Тоҷики' ? 'Тартиби пешбарӣ ва бақайдгирии номзадҳо' : 'Порядок выдвижение и регистрации кандидатов',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />,
        }}
      />
      <Stack.Screen
        name="Section1Page1"
        component={Section1Page1}
        options={{
          title: language === 'Тоҷики' ? 'Маълумоти умумӣ' : 'Общая информация',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page2"
        component={Section1Page2}
        options={{
          title: language === 'Тоҷики' ? 'Қоидаҳои умумӣ' : 'Общие положения',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page3"
        component={Section1Page3}
        options={{
          title: language === 'Тоҷики' ? 'Комиссияҳои интихобот' : 'Избирательные комиссии',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page4"
        component={Section1Page4}
        options={{
          title: language === 'Тоҷики' ? 'Ҳавзаҳо ва участкаҳои интихобот' : 'Избирательные округ и участки',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page5"
        component={Section1Page5}
        options={{
          title: language === 'Тоҷики' ? 'Рӯйхати интихобкунандагон' : 'Списки избирателей',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page6"
        component={Section1Page6}
        options={{
          title: language === 'Тоҷики' ? 'Пешбарӣ, бақайдгирӣ ва кафолатҳои фаъолияти номзадҳо' : 'Выдвижение, регистрация и гарантии деятельности кандидатов',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page7"
        component={Section1Page7}
        options={{
          title: language === 'Тоҷики' ? 'Ташкил ва тартиби овоздиҳи' : 'Организация и порядок голосования',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section1Page8"
        component={Section1Page8}
        options={{
          title: language === 'Тоҷики' ? 'Муайян кардани натиҷаҳои интихобот' : 'Определение результатов выборов',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page1"
        component={Section2Page1}
        options={{
          title: language === 'Тоҷики' ? 'Маълумоти умумӣ' : 'Общая информация',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page2"
        component={Section2Page2}
        options={{
          title: language === 'Тоҷики' ? 'Қоидаҳои умумӣ' : 'Общие положения',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page3"
        component={Section2Page3}
        options={{
          title: language === 'Тоҷики' ? 'Ҳавзаҳо ва участкаҳои интихобот' : 'Избирательные округ и участки',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page4"
        component={Section2Page4}
        options={{
          title: language === 'Тоҷики' ? 'Комиссияҳои интихобот' : 'Избирательные комиссии',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page5"
        component={Section2Page5}
        options={{
          title: language === 'Тоҷики' ? 'Рӯйхати интихобкунандагон' : 'Список избирателей',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page6"
        component={Section2Page6}
        options={{
          title: language === 'Тоҷики' ? 'Пешбарии номзадҳо ба вакилӣ ва ба қайд гирифтани номзадҳо' : 'Выдвижение и регистрация кандидатов в депутаты',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page7"
        component={Section2Page7}
        options={{
          title: language === 'Тоҷики' ? 'Кафолат ба фаъолияти номзадҳо ба вакилӣ' : 'Гарантии деятельности кандидатов в депутаты',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page8"
        component={Section2Page8}
        options={{
          title: language === 'Тоҷики' ? 'Тартиби овоздиҳӣ ва ҷамъбасти натиҷаҳои интихобот' : 'Порядок голосования и подведения итогов выборов',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page9"
        component={Section2Page9}
        options={{
          title: language === 'Тоҷики' ? 'Овоздиҳии такрорӣ, интихоботи такрорӣ ва интихоботи вакилон ба ҷои вакилони хориҷшуда. Интихобот дар воҳидҳои марзию маъмурии навташкил' : 'Повторное голосование, повторные выборы и выборы депутатов вместо выбыхших депутатов. Выборы во внов образованных административно-территориальных единицах',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section2Page10"
        component={Section2Page10}
        options={{
          title: language === 'Тоҷики' ? 'Қарори Маҷлиси Олии Ҷумҳурии Тоҷикистон' : 'Постановление Маджлиси Оли Республики Таджикистан',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section3Page1"
        component={Section3Page1}
        options={{
          title: language === 'Тоҷики' ? 'Маълумоти умумӣ' : 'Общая информация',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section3Page2"
        component={Section3Page2}
        options={{
          title: language === 'Тоҷики' ? 'Қоидаҳои умумӣ' : 'Общие положения',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section3Page3"
        component={Section3Page3}
        options={{
          title: language === 'Тоҷики' ? 'Ташкил, Ваколатҳо ва фаъолияти мақомоти худидоракунии шаҳрак ва деҳот' : 'Организация, полномочия и деятельность органов самоуправления посёлков и сёл',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section3Page4"
        component={Section3Page4}
        options={{
          title: language === 'Тоҷики' ? 'Асосҳои иқтисодӣ ва молиявии фаъолияти мақомоти худидоракунии шаҳрак ва деҳот' : 'Экономические и финансовые основы деятельности органов самоуправления посёлков и сёл',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section3Page5"
        component={Section3Page5}
        options={{
          title: language === 'Тоҷики' ? 'Интихоботи вакилони Ҷамоат' : 'Выборы депутатов Джамоата',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section3Page6"
        component={Section3Page6}
        options={{
          title: language === 'Тоҷики' ? 'Муқаррароти хотимавӣ ва интиқолӣ' : 'Заключительные и переходные положения',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section7Page1"
        component={Section7Page1}
        options={{
          title: language === 'Тоҷики' ? 'Тартиби пешбарӣ ва бақайдгирии номзадҳо 1' : 'Порядок выдвижение и регистрации кандидатов 1',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
      <Stack.Screen
        name="Section7Page2"
        component={Section7Page2}
        options={{
          title: language === 'Тоҷики' ? 'Тартиби пешбарӣ ва бақайдгирии номзадҳо 2' : 'Порядок выдвижение и регистрации кандидатов 2',
          headerTintColor: '#3F0DD1',
          headerRight: () => <MenuButton />
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </LanguageProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  menuIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
    borderRadius: "50%",
    borderColor: 'grey',
    height: 40,
    width: 40,
    paddingBottom: 3,
  },
  menuText: {
    fontSize: 22,
    color: '#3F0DD1',
    fontWeight: "bold",
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#3F0DD1',
    textAlign: 'center',
    fontWeight: "bold",
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