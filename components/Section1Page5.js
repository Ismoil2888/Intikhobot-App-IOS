import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section1Page5 = () => {
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
        {language === 'Тоҷики' ? 'Моддаи 23. Рӯйхати интихобкунандагон ва тарзи тартиб додани он' : 'Статья 23. Список избирателей и порядок его составления'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? ' Рӯйхати интихобкунандагон оид ба интихоботи вакилони Маҷлиси намояндагон дар ҳар участкаи интихобот тартиб дода мешавад ва ба он раис ва котиби комиссияи участкавии интихобот имзо ва муҳр мегузоранд. Комиссияи участкавии интихобот барои тартиб додани рӯйхат намояндагони аҳли ҷамъиятро ҷалб карда метавонад. Мақомоти иҷроияи маҳаллии ҳокимияти давлатӣ шумораи интихобкунандагонро ба ҳисоб гирифта, ба комиссияҳои участкавии интихобот дар бораи интихобкунандагоне, ки дар ҳудуди дахлдор зиндагӣ мекунанд, барои тартиб додани рӯйхати интихобкунандагон маълумоти даркорӣ медиҳад. Барои дохил кардан ба рӯйхати интихобкунандагон дар ҳавзаи муайяни интихобот далели истиқомат дар ҳудуди ҳавзаи интихобот асос мебошад. Рӯйхати интихобкунандагон аз рӯи алифбо ё тарзи дигар, ки барои овоздиҳӣ муносиб аст, тартиб дода мешавад. Дар рӯйхат насаб, ном ва номи падар, соли таваллуд (синни 18-сола бо иловаи рӯзу моҳи таваллуд) ва суроғаи интихобкунанда нишон дода мешавад. Рӯйхати интихобкунандагон камаш 15 рӯз баъд аз ташкили комиссияҳои участкавии интихобот тартиб дода мешавад. Рӯйхати вакилони интихобкунандаро комиссияи ҳавзавии интихобот оид ба интихоботи аъзои Маҷлиси миллӣ бо пешниҳоди раисони Вилояти Мухтори Кӯҳистони Бадахшон, вилоятҳо, шаҳри Душанбе, шаҳру ноҳияҳои тобеи ҷумҳурӣ 15 рӯз пеш аз интихобот тартиб дода, ба он раис ва котиби комиссия имзо ва муҳр мегузоранд. Рӯйхати вакилони интихобкунанда аз рӯи алифбо ё тарзи дигар тартиб дода шуда, дар он ному насаб, соли таваллуд, номи мақомоте, ки интихобкунанда вакили он мебошад ва суроғаи вакили интихобкунанда нишон дода мешавад. Ба рӯйхати интихобкунандагон баъди саршавии ҳисобкунии овозҳо тағйирот даровардан манъ аст. Рӯйхати интихобкунандагоне, ки низомиёни қисмҳои ҳарбӣ мебошанд, инчунин аъзои оилаҳои низомиён ва интихобкунандагони дигар, ки дар маҳалли қисмҳои ҳарбӣ истиқомат доранд, дар асоси маълумоти пешниҳодкардаи командирони қисмҳои ҳарбӣ тартиб дода мешавад. Низомиёне, ки берун аз қисмҳои ҳарбӣ истиқомат доранд, ба рӯйхати интихобкунандагони маҳалли истиқомат дар асосҳои умумӣ дохил карда мешаванд. Рӯйхати интихобкунандагони участкаҳои интихобот, ки дар назди намояндагиҳои Ҷумҳурии Тоҷикистон дар давлатҳои хориҷӣ, дар санаторияҳо ва хонаҳои истироҳат, беморхонаҳо ва табобатгоҳҳои дигари доимӣ ташкил шудаанд, дар асоси маълумотҳое тартиб дода мешавад, ки роҳбарони муассисаҳои мазкур пешниҳод кардаанд.' : 'Список избирателей по выборам депутатов Маджлиси намояндагон составляется по каждому избирательному участку и подписывается председателем, секретарём участковой избирательной комиссии и закрепляется печатью. Для участия в работе по составлению списка участковая избирательная комиссия может привлекать представителей общественности. Местные исполнительные органы государственной власти обеспечивают учёт избирателей и передают участковым избирательным комиссиям сведения об избирателях, проживающих на соответствующей территории, необходимые для составления списков избирателей. Основанием для включения в список избирателей в определенном избирательном округе является факт проживания избирателя на территории избирательного округа. Список избирателей составляется в алфавитном или ином, удобном для проведения голосования порядке. В списке указываются фамилия, имя, отчество, год рождения (18-летним с указанием дополнительно дня и месяца рождения) и адрес избирателя. Списки избирателей составляются не позднее 15 дней после создания участковых избирательных комиссий. Список выборщиков окружная избирательная комиссия по выборам членов Маджлиси милли составляет по представлению председателей Горно-Бадахшанской автономной области, областей, города Душанбе, городов и районов республиканского подчинения за 15 дней до проведения выборов, который подписывается председателем, секретарем окружной избирательной комиссии и закрепляется печатью. Список кандидатов в депутаты составляется в алфавитном или ином порядке, где указывается фамилия, имя, отчество, год рождения, наименование органа, кандидатом которого является депутат, и адрес кандидата. Запрещается вносить изменения в списки избирателей после начала подсчета голосов. Списки избирателей-военнослужащих, находящихся в воинских частях, а также членов семей военнослужащих и других избирателей, если они проживают в районах расположения воинских частей, составляются на основе данных, представляемых командирами воинских частей. Военнослужащие, проживающие вне воинских частей, включаются в списки избирателей по месту жительства на общих основаниях. Списки избирателей по избирательным участкам, образованным при представительствах Республики Таджикистан в иностранных государствах, в санаториях и домах отдыха, больницах и других стационарных лечебных учреждениях, составляются на основе данных, представляемых руководителями указанных учреждений.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 24. Тартиби ба рӯйхати интихобкунандагон дохил намудани шаҳрвандон' : 'Статья 24. Порядок включения граждан в список избирателей'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? 'Ба рӯйхати интихобкунандагон ҳамаи шаҳрвандони Ҷумҳурии Тоҷикистон, ки то рӯзи интихобот 18-сола шудаанду ҳангоми тартиб додани рӯйхат дар ҳудуди участкаи дахлдори интихобот ба таври доимӣ ё муваққатӣ истиқомат мекунанд ва ҳуқуқи интихоботӣ доранд, дохил карда мешаванд. Интихобкунанда ба рӯйхати интихобкунандагони фақат як участкаи интихобот дохил карда мешавад. Интихобкунандае, ки дар ҳудуди участкаи дахлдори интихобот истиқомат мекунаду бо ягон сабаб ба рӯйхат дохил карда нашудааст, бо қарори комиссияи участкавии интихобот ба он дохил карда мешавад. Ба рӯйхати вакилони интихобкунанда оид ба интихоботи Маҷлиси миллӣ вакилони мақомоти зерин дохил карда мешаванд: \n 1) вакилони Маҷлисҳои вакилони халқи ноҳияҳо ва шаҳрҳои дар ҳудуди Вилояти Мухтори Кӯҳистони Бадахшон, вилоятҳо воқеъбуда, ҳамчунин вакилони Маҷлисҳои вакилони халқи Вилояти Мухтори Кӯҳистони Бадахшон ва вилоятҳо; \n 2) вакилони Маҷлисҳои вакилони халқи ноҳияҳои дар ҳудуди шаҳри Душанбе воқеъбуда ва вакилони Маҷлиси вакилони халқи шаҳри Душанбе; \n 3) вакилони Маҷлисҳои вакилони халқи шаҳрҳо ва ноҳияҳои тобеи ҷумҳурӣ.' : 'В список избирателей включаются все граждане Республики Таджикистан, достигшие ко дню выборов 18 лет, постоянно или временно проживающие к моменту составления списка на территории данного избирательного участка и имеющие право участвовать в голосовании. Избиратель может быть включён в список избирателей только на одном избирательном участке. Избиратели, проживающие на территории данного избирательного участка, и по каким–либо причинам пропущенные в списке, включаются в него по решению участковой избирательной комиссии. В списки депутатов – выборщиков по выборам в Маджлиси милли включаются депутаты следующих органов: \n 1) депутаты Маджлисов народных депутатов районов и городов, находящихся на территории Горно-Бадахшанской автономной области и областей, а также депутаты Маджлисов народных депутатов Горно-Бадахшанской автономной области и областей; \n 2) депутаты Маджлисов народных депутатов районов, расположенных на территории города Душанбе и депутаты Маджлиса народных депутатов города Душанбе; \n 3) депутаты Маджлисов народных депутатов городов и районов республиканского подчинения.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 25. Бо рӯйхати интихобкунандагон шиносонидани шаҳрвандон ва ҳуқуқи шикоят кардан аз хусуси саҳву хатои рӯйхат' : 'Статья 25. Ознакомление граждан со списками избирателей и право на обжалование неточностей в списке избирателей'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? 'Рӯйхати интихобкунандагон барои шиносоии умумӣ понздаҳ рӯз пеш аз интихобот ва дар участкаҳои интихобот, ки дар назди намояндагиҳои Ҷумҳурии Тоҷикистон дар давлатҳои хориҷӣ, дар санаторияҳо ва хонаҳои истироҳат, беморхона ва табобатгоҳҳои дигари доимӣ, дар маҳалҳои дурдасту душворгузар ташкил гардидаанд, панҷ рӯз пеш аз интихобот пешниҳод карда мешавад. Рӯйхати вакилони интихобкунанда оид ба интихоботи аъзои Маҷлиси миллӣ барои шиносоӣ тавассути воситаҳои ахбори маҳаллӣ ҳафт рӯз пеш аз интихобот пешниҳод карда мешавад. Ба шаҳрвандон имконият дода мешавад, ки бо рӯйхати интихобкунандагон дар бинои комиссияи интихобот шинос шуда, дуруст тартиб дода шудани онро тафтиш кунанд. Ба ҳар шаҳрванд ҳуқуқ дода мешавад, ки аз хусуси ба рӯйхат дохил нашудан, нодуруст ба рӯйхат дохил кардан ё аз рӯйхат баровардан, инчунин аз хусуси саҳву хатои маълумот оид ба интихобкунанда шикоят кунад. Комиссияи участкавии интихобот аризаро дар бораи саҳву хатои рӯйхат баррасӣ мекунад ва он вазифадор аст, ки аризаро дар давоми ду рӯз ва дар арафа ва рӯзи интихобот бошад, фавран дида баромада, ба рӯйхат ислоҳоти зарурӣ дохил кунад ё ба аризадиҳанда нусхаи қарори асоснокро аз хусуси рад карда шудани аризааш супорад. Аз хусуси қарори комиссияи участкавии интихобот бо тартиби муқаррашуда ба суд шикоят кардан мумкин аст. Қарори суд қатъист. Комиссияи участкавии интихобот мувофиқи қарори суд ба рӯйхати интихобкунандагон ислоҳ медарорад.' : 'Списки избирателей представляются для всеобщего ознакомления за пятнадцать дней до выборов, а на избирательных участках, образованных при представительствах Республики Таджикистан в иностранных государствах, в санаториях и домах отдыха, больницах и других стационарных лечебных учреждениях, в отдаленных и труднодоступных населенных пунктах, за 5 дней до выборов. Списки депутатов – выборщиков по выборам членов Маджлиси милли публикуются для ознакомления в средствах местной печати за 7 дней до выборов. Гражданам обеспечивается возможность ознакомиться со списком избирателей и проверить правильность его составления в помещении участковой избирательной комиссии. Каждому гражданину предоставляется право обжаловать не-включение, неправильное включение в список или исключение из списка, а также допущенные в нем неточности в указании данных об избирателе. Заявление об ошибках и неточностях в списке рассматривается участковой избирательной комиссией, которая обязана не позднее чем в двухдневный срок, а накануне и в день выборов немедленно рассмотреть заявление, внести необходимые исправления в список либо выдать заявителю копию мотивированного решения об отклонении его заявления. Решение участковой избирательной комиссии может быть обжаловано в суд в установленном порядке. Решение суда окончательно. Исправление в списке избирателей в соответствии с решением суда производится участковой избирательной комиссией.'}
        </Text>
        <Text style={styles.listItem}>
          {language === 'Тоҷики' ? 'Моддаи 26. Таъмини ҳуқуқи интихоботии шаҳрвандон дар вақти дигар кардани маҳалли зист' : 'Статья 26. Обеспечение избирательного права граждан при перемене места жительства'}
        </Text>
        <Text style={styles.textItem}>
          {language === 'Тоҷики' ? 'Агар интихобкунанда дар давраи барои шиносоии умумӣ пешниҳод кардани рӯйхати интихобкунандагон ва то рӯзи интихобот имконият надошта бошад, ки дар маҳалли зисташ бошад (дар сафари хизматӣ, табобатгоҳ рафтан ва ҳамин гуна сабабҳои дигар), ҳуқуқ дорад бо пешниҳоди шиноснома ё ҳуҷҷати дигаре, ки шахсияти вайро тасдиқ мекунад, аз комиссияи ҳавзавии интихобот бюллетени интихоботро талаб намояд, нисбати номзад иродаи худро изҳор кунад, лифофаи сарбастаро ба комиссияи ҳавзавии интихобот супорад. Комиссияи ҳавзавии интихобот инро дар рӯйхати интихобкунандагон бо зикри сана қайд мекунад. Лифофаи сарбаста дар ҳузури интихобкунанда муҳр карда мешавад. Комиссияи ҳавзавии интихобот барои сариштаи лифофа масъул аст.' : 'В период после представления для всеобщего ознакомления списков избирателей и до дня выборов избиратель, не имеющий возможности в день выборов находиться по месту своего жительства (выезд в командировку, направление в лечебное учреждение и другие аналогичные причины), имеет право по предъявлении паспорта или иного документа, удостоверяющего его личность, затребовать у окружной избирательной комиссии избирательный бюллетень, принять решение в отношении кандидата и передать окружной избирательной комиссии запечатанный в конверт избирательный бюллетень. Об этом в списке избирателей окружная избирательная комиссия делает соответствующую отметку с указанием даты. Запечатанный конверт в присутствии избирателя скрепляется печатью. Окружная избирательная комиссия несет ответственность за сохранность конверта.'}
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
    paddingBottom: "70px",
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
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  textItem: {
    fontSize: 20,
    marginBottom: 15,
  },
});

export default Section1Page5;