import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section3Page1 = () => {
const { language } = useLanguage();

return(
  <View style={styles.container}>
       <Image
          source={require('../images/parcham.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <View style={styles.overlay} />
    <View style={styles.listContainer}>
      <Text style={styles.listItem}>
      {language === 'Тоҷики' ? 'ҚОНУНИ ҶУМҲУРИИ ТОҶИКИСТОН' : 'ЗАКОН РЕСПУБЛИКИ ТАДЖИКИСТАН'}
      </Text>
      <Text style={styles.listItem}>
      {language === 'Тоҷики' ? 'ДАР БОРАИ МАҚОМОТИ ХУДИДОРАКУНИИ ШАҲРАК ВА ДЕҲОТ' : 'ОБ ОРГАНАХ САМОУПРАВЛЕНИЯ ПОСЁЛКОВ И СЁЛ'}
      </Text>
      <Text style={styles.textItem}>
      {language === 'Тоҷики' ? ' (Ахбори Маҷлиси Олии Ҷумҳурии Тоҷикистон, соли 2009, №7-8, мод.503; соли 2012,№4,мод.277; №8,мод.833;соли 2015,№11,мод.964; соли 2017, №5 қ1, мод.288; соли 2019, №4-5, мод.226) \n Қонуни мазкур муносибатҳои ҷамъиятиро оид ба ташкил, ваколат ва фаъолияти мақомоти худидоракунии шаҳрак ва деҳот танзим намуда, асосҳои ҳуқуқӣ, иқтисодӣ ва молиявии онро муайян менамояд.' : '(Ахбори Маджлиси Оли Республики Таджикистан, 2009 год, №7-8, ст. 503; 2012 год, №4,ст.277; №8,ст.833; 2015 год, №11,ст.964; 2017 год, №5 ч1, ст.288; 2019г., №4-5, ст.226) \n Настоящий Закон регулирует общественные отношения по организации, полномочиям и деятельности органов самоуправления посёлков и сёл и определяет их правовые, экономические и финансовые основы.'}
      </Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    overflowX: "hidden",
  },
  listContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: '20',
},
listItem: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  textItem: {
    fontSize: 22,
  },
  backgroundImage: {
    position: 'absolute',
    top: '30%',
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

export default Section3Page1;