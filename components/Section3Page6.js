import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section3Page6 = () => {
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
          {language === 'Тоҷики' ? 'Моддаи 43. Шикоят намудан нисбати санадҳои мақомоти худидоракунии шаҳрак ва деҳот' : 'Статья 43. Жалобы по актам органов самоуправления посёлков и сёл'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Шахсони воқеӣ ва ҳуқуқӣ метавонанд тибқи тартиби муқаррарнамудаи санадҳои меъёрии ҳуқуқии Ҷумҳурии Тоҷикистон оид ба санадҳои мақомоти худидоракунии шаҳрак ва деҳот ба суд шикоят намоянд. \n Санадҳои Ҷамоат, ки аз рўи он прокурор эътироз овардааст, дар маҷлиси Ҷамоат баррасӣ карда мешаванд. \n Санадҳои Шўрои Ҷамоат, ки ба онҳо прокурор эътироз овардааст, аз ҷониби Шўрои Ҷамоат баррасӣ карда мешаванд. (ҚҶТ аз 30.05.17с., №1431) \n Санадҳои раиси Ҷамоат, ки оид ба онҳо прокурор эътироз овардаст, аз ҷониби раис баррасӣ карда мешаванд. \n Дар сурати қонеъ нагардидани эътироз, прокурор метавонад нисбати санадҳои Шўрои Ҷамоат ва раиси Ҷамоат ба Ҷамоат муроҷиат намояд. (ҚҶТ аз 30.05.17с., №1431) \n Ҳангоми қонеъ нагардидани эътирозҳои зикргардида прокурор метавонад ба суд муроҷиат намояд.' : ' Физические и юридические лица имеют право обращаться в суд с жалобой в порядке, установленном нормативными правовыми актами Республики Таджикистан, по решениям органов самоуправления посёлков и сёл. \n Акты Джамоата, по которым прокурор выносит протест, рассматриваются на собрании Джамоата. \n Акты совета Джамоата, по которым прокурор выносит протест, рассматриваются на совете Джамоата. \n Акты председателя Джамоата, по которым прокурор выносит протест, рассматриваются председателем Джамоата. \n В случае неудовлетворения протеста по актам совета Джамоата и председателя Джамоата прокурор вправе обратиться в Джамоат. \n В случае неудовлетворения указанных протестов прокурор вправе обратиться в суд.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 44. Ҷавобгарӣ барои вайрон кардани Қонуни мазкур' : 'Статья 44. Ответственность за нарушение настоящего Закона'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Шахсони воқеӣ ва ҳуқуқӣ барои вайрон кардани Қонуни мазкур мутобиқи қонунгузории Ҷумҳурии Тоҷикистон ба ҷавобгарӣ кашида мешаванд.' : ' Физические и юридические лица за нарушение настоящего Закона привлекаются к ответственности в соответствии с законодательством Республики Таджикистан.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 45. Муқаррароти интиқолӣ' : 'Статья 45. Переходные положения'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Муқаррароти Қонуни мазкур дар қисми интихоботи вакилони Ҷамоат аз соли 2010 ва қабули буҷети шаҳрак ва деҳот аз соли 2011 оғоз меёбад. \n Ваколатҳои пешбининамудаи Қонуни мазкурро мақомоти худидоракунии шаҳрак ва деҳот то интихоботи Ҷамоати нав амалӣ мекунад. Ваколатҳои Шўрои Ҷамоатро то интихоби аъзои он раиси Ҷамоат амалӣ менамояд. (ҚҶТ аз 30.05.12с., №827)' : ' Положения настоящего Закона в части выборов депутатов Джамоата вступают в силу с 2010 года, а в части принятия бюджета поселка и села - с 2011 года. \n Предусмотренные настоящим Законом полномочия органы самоуправления посёлков и сёл исполняют до выборов нового Джамоата. Полномочия совета Джамоата до выбора его членов исполняет председатель Джамоата.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 46. Аз эътибор соқит донистани қонуни Ҷумҳурии Тоҷикистон «Дар бораи мақомоти худидоракунии шаҳрак ва деҳот»' : 'Статья 46. О признании недействительным Закона Республики Таджикистан «Об органах самоуправления поселка и села»'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Қонуни Ҷумҳурии Тоҷикистон аз 1 декабри соли 1994 «Дар бораи мақомоти худидоракунии шаҳрак ва деҳот» (Ахбори Шўрои Олии Ҷумҳурии Тоҷикистон, соли 1994, № 23–24, мод. 450; Ахбори Маҷлиси Олии Ҷумҳурии Тоҷикистон, соли 2008, № 6, мод. 468, 470) аз эътибор соқит дониста шавад.' : 'Закон Республики Таджикистан от 1 декабря 1994 года «Об органах самоуправления поселка и села» (Ведомости Верховного Совета Республики Таджикистан, 1994 г. № 23-24, ст. 450; Ахбори Маджлиси Оли Республики Таджикистан, 2008 г., № 6, ст. ст. 468, 470) считать недействительным.'}
        </Text>
              <Text style={styles.listItem}>
              {language === 'Тоҷики' ? 'Моддаи 47. Мавриди амал қарор додани Қонуни мазкур' : 'Статья 47. Введение в действие настоящего Закона'}
            </Text>
            <Text style={styles.textItem}>
              {language === 'Тоҷики' ? ' Қонуни мазкур пас аз интишори расмӣ мавриди амал қарор дода шавад.' : ' Настоящий Закон ввести в действие после его официального опубликования.'}
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
    overflowX: "hidden",
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
    fontSize: 22,
    marginBottom: 15,
  },
});

export default Section3Page6;