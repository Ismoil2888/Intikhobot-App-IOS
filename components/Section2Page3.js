import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section2Page3 = () => {
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
          {language === 'Тоҷики' ? 'Моддаи 7. Ташкил кардани ҳавзаҳои интихобот' : 'Статья 7. Образование избирательных округов'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Барои интихоботи вакилон миқдори зерини ҳавзаҳои ҳудудии интихобот ташкил карда мешаванд: \n 1) ба Маҷлисҳои вакилони халқи Вилояти Мухтори Кӯҳистони Бадахшон, вилоятҳо ва шаҳри Душанбе - на бештар аз 70 ҳавзаи интихобот; \n 2) ба Маҷлисҳои вакилони халқи шаҳр, ноҳия - на бештар аз 40 ҳавзаи интихобот. \n Аз ҳар ҳавзаи интихобот як вакил ба Маҷлиси дахлдори вакилони халқ, интихоб карда мешавад. \n Миқдори ҳавзаҳои интихоботро барои интихоботи Маҷлисҳои маҳаллии вакилони халқ ба ҳадди меъёри муқарраркардаи ҳамин Қонун Маҷлиси дахлдор бо назардошти шумораи интихобкунандагон, ҳудуд ва шароити дигари маҳаллӣ муқаррар менамояд. \n Ҳавзаҳои интихоботро комиссияи дахлдори интихоботи Вилояти Мухтори Кӯҳистони Бадахшон, вилоят, шаҳр, ноҳия одатан бо шумораи баробари интихобкунандагон ташкил медиҳад. Ҳудуди ҳавзаҳои интихобот бо назардошти сохтори ҳудудии вилоят, шаҳри Душанбе, шаҳру ноҳияҳо бо ризоияти раисони дахлдор муайян карда мешавад. \n Рӯйхати ҳавзаҳои интихоботро, ки дар он ҳудуд ва шумораи интихобкунандагон зикр ёфтааст, комиссияи дахлдори интихобот на дертар аз 15 рӯзи баъди таъин гардидани интихобот чоп мекунад. (ҚКҶТ аз 26.07.14 с., № 1087)' : ' Для выборов депутатов образуется следующее количество территориальных избирательных округов: \n 1) в Маджлис народных депутатов Горно-Бадахшанской автономной области, областные и Душанбинский городской Маджлис народных депутатов – не более 70 избирательных округов; \n 2) в городские и районные Маджлисы народных депутатов - не более 40 избирательных округов. \n От каждого избирательного округа избирается один депутат соответствующего Маджлиса народных депутатов. \n В пределах норм, установленных настоящим Законом, число избирательных округов для выборов в местные Маджлисы народных депутатов устанавливается соответствующим Маджлисом народных депутатов, исходя из численности избирателей, территории и других местных условий. \n Избирательные округа образуются соответствующей избирательной комиссией Горно-Бадахшанской автономной области, города Душанбе, областей, города и района, как правило, с равной численностью избирателей. Границы избирательных округов определяются с учетом территориального устройства области, города Душанбе, города и района по согласованию с соответствующими председателями. \n Списки избирательных округов с указанием их границ и численности избирателей публикуются соответствующей избирательной комиссией не позднее пятнадцати дней после назначения выборов. (КЗРТ от 26.07.14 г., № 1087)'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 8. Тартиб ва меъёри ташкил кардани участкаҳои интихобот' : 'Статья 8. Порядок и норма образования избирательных участков'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Участкаҳои интихобот бо назардошти ҳудуди шаҳру ноҳияҳо, ноҳияҳои шаҳр бо мақсади муҳайё сохтани шароити муносиб барои интихобкунандагон ташкил карда мешаванд. \n Участкаҳои интихобот дар санаторияву хонаҳои истироҳат, беморхонаҳо ва табобатгоҳҳои дигари доимӣ, дар ноҳияҳои дурдасту душворгузари маҳаллӣ, маҳалли сукунати шаҳрвандон ташкил шуда метавонанд. Ин участкаҳои интихобот ба ҳавзаҳои интихоботи маҳалли ҷойгиршавии онҳо дохил мешаванд. \n Участкаҳои интихобот аз тарафи комиссияҳои интихоботи шаҳр, ноҳия бо пешниҳоди раисони шаҳру ноҳияҳо ташкил карда мешаванд. \n Участкаҳои интихобот на дертар аз рӯзи бисту панҷуми баъди таъин гардидани интихобот ташкил карда мешаванд. Дар ноҳияҳои дурдаст ва душворгузар участкаҳои интихобот дар ҳамон мӯҳлат, дар мавридҳои истисно бошад, панҷ рӯз пеш аз интихобот ташкил карда мешаванд. \n Участкаҳои интихобот одатан бо шумораи на камтар аз 20 нафар ва на бештар аз 3000 нафар интихобкунанда ташкил карда мешавад. \n Бинои овоздиҳии ҳар участкаи интихоботро раиси шаҳру ноҳия муайян мекунад. \n Комиссияи интихоботи шаҳру ноҳия участкаи интихоботро рақамгузорӣ мекунад ва ҳудуди ҳар участкаи интихоботро бо зикри маҳалли комиссияи участкавии интихобот ва бинои овоздиҳӣ ба интихобкунандагон хабар медиҳад.' : ' Избирательные участки образуются с учетом границ городов, районов, районов в городах с целью создания максимальных удобств для избирателей. \n Избирательные участки могут быть образованы в санаториях, домах отдыха, в больницах и других стационарных лечебных учреждениях, в местах нахождения граждан, расположенных в отдаленных и труднодоступных районах. Эти избирательные участки входят в избирательные округа по месту их нахождения. \n Избирательные участки образуются городскими, районными избирательными комиссиями по представлению председателей городов, районов. \n Избирательные участки образуются не позднее чем на двадцать пятый день после назначения выборов. В отдаленных и труднодоступных районах избирательные участки образуются в тот же срок, а в исключительных случаях – не позднее чем за пять дней до выборов. \n Избирательные участки образуются, как правило, с числом не менее 20 и не более 3000 избирателей. \n Помещение для организации голосования каждому избирательному участку выделяется председателем города, района. \n Городская, районная избирательная комиссия устанавливает нумерацию избирательных участков и организует оповещение избирателей о границах каждого избирательного участка с указанием места нахождения участковой избирательной комиссии и помещения для голосования.'}
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

export default Section2Page3;