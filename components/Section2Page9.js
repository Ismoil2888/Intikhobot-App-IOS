import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section2Page9 = () => {
    const { language } = useLanguage();

    return (
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
                        {language === 'Тоҷики' ? 'Моддаи 46. Овоздиҳии такрорӣ' : 'Статья 46. Повторное голосование'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Агар дар ҳавзаи интихоботӣ номзадии беш аз ду кас барои вакил шудан ба овоз монда шуда бошад ва ҳеҷ яке аз онҳо интихоб нагардида бошад, комиссияи ҳавзавии интихобот дар хусуси овоздиҳии такрорӣ дар ҳавза оид ба ду номзад ба вакилӣ, ки овозҳои бештар гирифтаанд, қарор қабул менамояд. Комиссияи ҳавзавӣ дар бораи ин қарор ба комиссияи дахлдори интихобот, ба интихобкунандагони ҳавза хабар медиҳад. Овоздиҳии такрорӣ дар ҳавзаи интихоботӣ дар муҳлати на дертар аз ду ҳафта бо риояи талаботи ҳамин Қонун дар ҳамон участкаҳои интихобот ва аз рӯи ҳамон рӯйхатҳои интихобкунандагон гузаронида мешавад. \n Он номзад ба вакилӣ, ки ҳангоми овоздиҳии такрорӣ нисбат ба номзади дигар миқдори бештари овозҳои интихобкунандагони дар овоздиҳӣ иштироккардаро соҳиб шудааст, интихобшуда ҳисоб меёбад, ба шарте, ки дар овоздиҳӣ на камтар аз нисфи интихобкунандагони дар рӯйхатҳо дохилбуда иштирок карда бошанд. \n Агар ҳангоми овоздиҳии такрорӣ яке аз номзадҳо бо сабабе хориҷ шавад, овоздиҳӣ аз рӯи як номзад сурат мегирад. Зимнан, барои интихоб шудан ба номзад лозим аст, ки беш аз нисфи овозҳои шумораи интихобкунандагони дар овоздиҳӣ ширкатварзидаро гирад. \n Ҳангоми овоздиҳии такрорӣ комиссияи участкавии интихобот метавонад овоздиҳиро кадом соате набошад, тамомшуда эълон намояд, ба шарте, ки ҳамаи интихобкунандагони ба рӯйхат дохилшуда овоз дода бошанд.' : ' Если по избирательному округу баллотировалось более двух кандидатов в депутаты и ни один из них не был избран, окружная избирательная комиссия принимает решение о проведении в округе повторного голосования по двум кандидатам в депутаты, получившим наибольшее число голосов. Об этом решении окружная комиссия сообщает в соответствующую избирательную комиссию и информирует избирателей округа. Повторное голосование в избирательном округе проводится не позднее чем в двухнедельный срок с соблюдением требований настоящего Закона на тех же избирательных участках и по тем же спискам избирателей. \n Избранным считается кандидат в депутаты, получивший при повторном голосовании наибольшее число голосов избирателей, принявших участие в голосовании, по отношению к другому кандидату, при условии, что в голосовании приняло участие не менее половины избирателей, внесенных в списки. \n Если при повторном голосовании один из кандидатов по какой-либо причине выбывает, голосование проводится по одному кандидату. При этом, чтобы быть избранным, кандидату в депутаты необходимо получить более половины голосов от числа избирателей, принявших участие в голосовании. \n При повторном голосовании участковая избирательная комиссия может объявить голосование законченным в любое время, если проголосовали все избиратели, включенные в список.'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Моддаи 47. Интихоботи такрорӣ' : 'Статья 47. Повторные выборы'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Агар дар ҳавзаи интихобтӣ номзадии на бештар аз ду кас барои вакил шудан ба овоз монда шуда бошад ва ҳеч яке аз онҳо интихоб нагардида бошад, ё интихобот дар ҳавзаи интихоботӣ барпонашуда ё беэътибор дониста шуда бошад ва ё овоздиҳии такрорӣ имкон надода бошад, ки вакили интихобшуда муайян гардад, комиссияи дахлдори интихобот ба комиссияи ҳавзавии интихобот супориш медиҳад, ки дар ҳавзаи интихобот интихоботи такрорӣ гузаронад. Дар ин ҳолат вай метавонад дар бораи зарурати гузаронидани интихоботи такрории комиссияҳои ҳавзавӣ ва участкавии интихбот дар ҳайати нав қарор қабул намояд. Овоздиҳӣ дар ҳамон участкаҳои интихобот ва мувофиқи рӯйхатҳои интихобкунандагон, ки барои интихоботи асосӣ тартиб дода шуда буданд, гузаронида мешавад. \n Интихоботи такрорӣ дар муҳлати на дертар аз ду моҳ баъд аз интихоботи асосӣ гузаронида мешавад. Ташкили комиссияҳои интихоботӣ, бақайдгирии номзадҳо ба вакилӣ ва тадбирҳои дигар мувофиқи тартиби муқарраркардаи ҳамин Қонун сурат мегиранд. \n Номзаде, ки дар рафти интихоботи асосӣ миқдори зарурии овозҳоро соҳиб нашудааст, наметавонад дар интихоботи такрорӣ дар ин ҳавза дубора чун номзад пешбарӣ шавад. (ҚКҶТ аз 26.07.14 с., № 1087)' : ' Если по избирательному округу баллотировалось не более двух кандидатов в депутаты и ни один из них не был избран либо выборы по избирательному округу признаны несостоявшимися или недействительными, либо повторное голосование не позволило определить избранного депутата, соответствующая избирательная комиссия поручает окружной избирательной комиссии провести в избирательном округе повторные выборы. При этом она может принять решение о необходимости проведения повторных выборов окружной и участковыми избирательными комиссиями в новом составе. Голосование проводится на тех же избирательных участках и по спискам избирателей, составленным для проведения основных выборов. \n Повторные выборы проводятся не позднее чем в двухмесячный срок после основных общих выборов. Образование избирательных комиссий, регистрация кандидатов в депутаты и другие мероприятия проводятся в порядке, установленном настоящим Законом. \n Кандидат, не набравший необходимого числа голосов в ходе основных выборов, не может вновь баллотироваться в этом округе в случае проведения повторных выборов. (КЗРТ от 26.07.14 г., № 1087)'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Моддаи 48. Гузаронидани интихоботӣ вакилон ба ивази вакилони хориҷшуда' : 'Статья 48. Проведение выборов депутатов вместо выбывших'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Дар сурати аз ҷониби Маҷлиси дахлдори вакилони халқ беэътибор дониста шудани ваколатҳои вакилони алоҳида, бо сабабҳои дигар пеш аз муҳлат қатъ гардидани ваколатҳои вакилон дар ҳавзаи дахлдори интихобот дар мӯҳлати се моҳи баъд аз хориҷ шудани вакил интихоботи дигар гузаронида мешавад. Интихобот аз тарафи Маҷлиси дахлдори вакилони халқ на дертар аз ду моҳи пеш аз гузаронидани он таъин гардида, бо риояи талабҳои ҳамин Қонун ташкил карда мешавад. Дар ин ҳолат, комиссияи ҳавзавии интихобот 50 рӯз пеш, комиссияҳои участкавӣ як моҳ пеш аз интихобот таъсис гардида, бақайдгирии номзадҳо ба вакилӣ як моҳ қабл аз интихобот ба охир мерасад. \n Дар сурати камтар аз як сол қабл аз хатми мӯҳлати ваколатҳои Маҷлиси даҳлдори вакилони халқ хориҷ шудани вакил интихоботи вакили дигар ба ивази вакили хориҷшуда гузаронида намешавад.' : ' В случае признания соответствующим Маджлисом народных депутатов полномочий отдельных депутатов недействительными, досрочного прекращения депутатских полномочий, по другим причинам в соответствующих избирательных округах в трехмесячный срок с момента выбытия депутата проводятся новые выборы. Выборы назначаются соответствующим Маджлисом народных депутатов не позднее чем за два месяца до их проведения и организуются с соблюдением требований настоящего конституционного Закона. При этом окружная избирательная комиссия образуется за 50 дней, участковые - за месяц до выборов, регистрация кандидатов в депутаты заканчивается за месяц до выборов. \n В случае выбытия депутата менее чем за год до истечения срока полномочий соответствующего Маджлиса народных депутатов выборы нового народного депутата вместо выбывшего не проводятся.'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Моддаи 48\u00B9. Интихобот дар воҳидҳои марзию маъмурии навташкил' : 'Статья 48\u00B9. Проведение выборов во вновь образуемых административно-территориальных единицах'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Интихоботи вакилон ба Маҷлисҳои маҳаллии вакилони халқ дар воҳидҳои марзию маъмурии навташкил дар сурате гузаронида мешавад, ки даъвати Маҷлиси маҳаллӣ вобаста ба иштирок надоштан ва ё шумораи ками вакилони Маҷлиси вакилони халқи дахлдор, ки ба ҳайати воҳиди марзию маъмурии навташкил дохил мешаванд, ғайриимкон аст. \n Интихоботи вакилони Маҷлисҳои маҳаллии вакилони халқ аз тарафи комиссияҳои интихоботии вилоятӣ, шаҳрӣ ва ноҳиявӣ на дертар аз ду моҳи баъди ташкил шудани воҳиди марзию маъмурӣ, бо тартиби муқаррарнамудаи Қонуни конститутсионии мазкур гузаронида мешавад.' : ' Выборы депутатов в местные Маджлисы народных депутатов во вновь образуемых административно-территориальных единицах проводятся в случае, если нет возможности созыва местного Маджлиса из-за неучастия или участия малого количества депутатов соответствующего Маджлиса народных депутатов, входящих в состав вновь образованной административно-территориальной единицы. \n Выборы депутатов в местные Маджлисы народных депутатов проводятся не позднее двух месяцев после образования административно–территориальной единицы областными, городскими и районными избирательными комиссиями в порядке, установленном настоящим конституционным Законом.'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Моддаи 49. Маблағгузории интихобот' : 'Статья 49. Финансирование выборов'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Маблағгузории ташкил ва гузаронидани интихобот ба Маҷлисҳои маҳаллии вакилони халқ аз ҳисоби Буҷети давлатии Ҷумҳурии Тоҷикистон амалӣ мегардад. \n Шахсони воқеӣ ва ҳуқуқии Ҷумҳурии Тоҷикистон метавонанд ихтиёрӣ гузаронидани интихоботро маблағгузорӣ намоянд. Ин маблағ барои истифода дар ташкил ва гузаронидани интихобот аз ҷониби комиссияҳои интихоботии Вилояти Мухтори Кӯҳистони Бадахшон, вилоятӣ, шаҳри Душанбе, шаҳрӣ ва ноҳиявӣ қабул карда мешавад. \n Назорати истифодаи маблағе, ки ба комиссияи интихоботии дахлдор ҷудо шудааст, инчунин назорат оид ба воридшавӣ ва сарчашмаҳои маблағгузориро комиссияи интихоботии Вилояти Мухтори Кӯҳистони Бадахшон, вилоятӣ, шаҳри Душанбе, шаҳрӣ ва ноҳиявӣ амалӣ менамояд.' : ' Организация и проведение выборов в местные Маджлисы народных депутатов финансируются за счет Государственного бюджета Республики Таджикистан. \n Физические и юридические лица Республики Таджикистан могут добровольно финансировать проведение выборов. Эти средства принимаются для организации и проведения выборов избирательными комиссиями Горно-Бадахшанской автономной области, областей, города Душанбе, городов и районов. \n Контроль использования средств, выделенных соответствующим избирательным комиссиям, а также контроль поступления и источников финансирования осуществляется избирательными комиссиями Горно-Бадахшанской автономной области, областей, города Душанбе, городов и районов.'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Моддаи 50. Ҷавобгарӣ барои риоя накардани талаботи Қонуни конститутсионии мазкур' : 'Статья 50. Ответственность за несоблюдение требований настоящего конституционного Закона'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Шахсони воқеӣ ва ҳуқуқӣ барои риоя накардани талаботи Қонуни конститутсионии мазкур бо тартиби муқаррарнамудаи қонунгузории Ҷумҳурии Тоҷикистон ба ҷавобгарӣ кашида мешаванд.' : ' Физические и юридические лица за несоблюдение требований настоящего конституционного Закона привлекаются к ответственности в порядке, установленном законодательством Республики Таджикистан.'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Моддаи 51. Дар бораи аз эътибор сокит дониста шудани Қонуни Ҷумҳурии Тоҷикистон «Дар бораи интихоботӣ вакилон ба Маҷлисҳои маҳаллии вакилони халқ»' : 'Статья 51. О признании утратившим силу Закона Республики Таджикистан «О выборах депутатов в местные Маджлисы народных депутатов»'}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Аз рӯзи мавриди амал қарор додани ин Қонуни конститутсионӣ Қонуни Ҷумҳурии Тоҷикистон аз 1 декабри соли 1994 «Дар бораи интихоботи вакилон ба Маҷлисхои маҳаллии вакилони халқ» (Ахборӣ Шӯроӣ Олии Ҷумҳурии Тоҷикистон, соли 1994, № 23-24) аз эътибор соқит дониста шавад' : ' Закон Республики Таджикистан от 1 декабря 1994 года "О выборах депутатов в местные Маджлисы народных депутатов" (Ведомости Верховного Совета Республики Таджикистан, 1994 г., №23-24) признать утратившим силу со дня вступления в силу настоящего конституционного Закона Республики Таджикистан.'}
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

export default Section2Page9;