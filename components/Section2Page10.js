import React from 'react';
import { Platform, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLanguage } from '../LanguageContext';

const Section2Page10 = () => {
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
                        {language === 'Тоҷики' ? 'Оиди мавриди амал қарор додани Қонуни конститутсионии Ҷумҳурии Тоҷикистон "Дар бораи интихоботи вакилон ба Маҷлисҳои маҳаллии вакилони халқ"' : 'О введении в действие Конституционного Закона Республики Таджикистан "О выборах депутатов в местные Маджлисы народных депутатов"'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? '(Ахбори Маҷлиси Олии Ҷумҳурии Тоҷикистон, соли 1999, № 12, мод. 299)' : ''}
                    </Text>
                    <Text style={styles.textItem}>
                        {language === 'Тоҷики' ? ' Маҷлиси Олии Ҷумҳурии Тоҷикистон қарор мекунад: \n 1) Қонуни конститутсионии Ҷумҳурии Тоҷикистон "Дар бораи интихоботи вакилон ба Маҷлисҳои маҳаллии вакилони халқ" пас аз интишори расми мавриди амал қарор дода шавад. \n 2) Ҳукумати Ҷумҳурии Тоҷикистон: \n - ба Маҷлиси Олии Ҷумҳурии Тоҷикистон оиди ворид намудани тағйироту иловаҳо ба қонунҳои амалкунанда ба муносибати қабули ҳамин Қонуни конститутсиони таклифҳо пешниҳод намояд; \n - карорҳои худро бо ҳамин Қонуни конститутсиони мутобиқ намояд.' : ' Маджлиси Оли Республики Таджикистан п о с т а н о в л я е т: \n 1) Ввести в действие конституционный Закон Республики Таджикистан "О выборах депутатов в местные Маджлиси народных депутатов" после официального опубликования. \n 2) Правительству Республики Таджикистан: внести предложения в Маджлиси Оли Республики Таджикистан о внесении изменений и дополнений в действующее законодательство в связи с принятием настоящего конституционного Закона; привести свои решения в соответствие с настоящим конституционным Законом.'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'Раиси Маҷлиси Олии Ҷумҳурии Тоҷикистон С. РАҶАБОВ' : 'Председатель Маджлиси Оли Республики Таджикистан С.РАДЖАБОВ'}
                    </Text>
                    <Text style={styles.listItem}>
                        {language === 'Тоҷики' ? 'ш. Душанбе, 10 декабри соли 1999, № 858' : 'г.Душанбе 10 декабря 1999 года № 859'}
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

export default Section2Page10;