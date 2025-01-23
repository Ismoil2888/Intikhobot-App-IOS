import React, { useState } from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
// import Swiper from 'react-native-swiper';
import Swiper from 'react-native-swiper/src'; // Для мобильной версии
import ImageViewer from 'react-native-image-zoom-viewer';
import { useLanguage } from '../LanguageContext';
import Slider from 'react-slick'; // Для веб-версии
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section6 = () => {
  const { language } = useLanguage();

  const images = [
    require('../images/image1.jpg'),
    require('../images/image2.jpg'),
    require('../images/image3.jpg'),
    require('../images/image4.jpg'),
    require('../images/image5.jpg'),
    require('../images/image6.jpg'),
    require('../images/image7.jpg'),
    require('../images/image8.jpg'),
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

    // Конфигурация для веб-слайдера
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

  return (
    <ScrollView>
      <View style={Platform.OS === 'web' ? styles.webcontainer : styles.container}>
        <ImageBackground
          source={require('../images/parcham.png')}
          style={styles.flagBackground}
          resizeMode="cover"
        >
        </ImageBackground>

        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            {language === 'Тоҷики'
              ? 'Семинарҳои омӯзишӣ бо иштироки аъзои Комиссияи марказии интихобот ва раъйпурсии Ҷумҳурии Тоҷикистон дар Вилояти Мухтори Кӯҳистони Бадахшон, вилоятњои Суғду Хатлон, шаҳри Душанбе ва шаҳру ноҳияҳои тобеи ҷумҳурӣ бо иштироки аъзои эҳтимолии комиссияҳои њавзавӣ ва участкавӣ, инчунин вохӯрӣ бо аҳолӣ оид ба масъалаҳои интихобот аз 11.12.24 то 15.12.24'
              : 'Обучающие семинары с участием членов Центральной комиссии по выборам и референдуму Республики Таджикистан в Бадахшанской Горной автономной области, Согдийской Хатлонской области, городе Душанбе и подведомственных городах и районах республики с участием потенциальных членов областных и районных комиссий, а также встреча с населением по вопросам выборов с 11.12.24 по 15.12.24.'}
          </Text>
        </View>

        <View style={Platform.OS === 'web' ? styles.websliderContainer : styles.sliderContainer}>
        {Platform.OS === 'web' ? (
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <View key={index} onClick={() => openModal(index)} style={styles.webSlide}>
                  <img src={image} alt={`Slide ${index}`} style={styles.webImage} />
                </View>
              ))}
            </Slider>
          ) : (
            <Swiper
              autoplay={true}
              autoplayTimeout={3}
              showsPagination={true}
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot}
              loop={true}
            >
              {images.map((image, index) => (
                <TouchableOpacity key={index} onPress={() => openModal(index)} style={styles.slide}>
                  <Image source={image} style={styles.image} />
                </TouchableOpacity>
              ))}
            </Swiper>
          )}
        </View>

        <Text style={{ textAlign: "center", fontSize: 14, bottom: 23, color: "grey" }}>
          {language === 'Тоҷики' ? 'Суратгузориш аз рафти семинарҳои омӯзишӣ' : 'Фотографии с обучающих семинаров'}
        </Text>

        <View style={styles.line}>
          <Image
            source={require('../images/goldenornament.png')}
            style={{ height: 40, width: '95%' }}
          />
        </View>

        {Platform.OS === 'web' ? (
    <Modal visible={isModalVisible} transparent={true} onRequestClose={closeModal}>
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.modalBackground}>
        <View style={styles.webimageViewerContainer}>
            <Image
              source={images[currentIndex]}
              style={styles.fullscreenImage}
              resizeMode="contain"
            />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
) : (
  <Modal visible={isModalVisible} transparent={true} onRequestClose={closeModal}>
  <TouchableWithoutFeedback onPress={closeModal}>
    <View style={styles.modalBackground}>
      <TouchableWithoutFeedback>
        <View style={styles.imageViewerContainer}>
          <ImageViewer
            imageUrls={images.map((image) => ({ url: '', props: { source: image } }))}
            index={currentIndex}
            enableSwipeDown={true}
            onSwipeDown={closeModal}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  </TouchableWithoutFeedback>
</Modal>
)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  webcontainer: {
    height: '100vh',
    overflow: 'scroll',
    paddingBottom: "10px",
    overflowX: "hidden",
  },
  container: {
    flex: 1,
  },
  flagBackground: {
    position: 'absolute',
    width: '84%',
    height: '38%',
    top: 5,
    left: 65,
    zIndex: -1,
  },
  line: {
    height: 45,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 35,
  },
  listContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 130,
    paddingHorizontal: 20,
  },
  listItem: {
    fontSize: 19,
    fontWeight: '500',
  },
  websliderContainer:{
    width: '100%',
    height: 300,
    marginTop: 15,
    marginBottom: 10,
    // paddingLeft: "20px"
  },
  sliderContainer: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },
  webSlide: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  webImage: {
    width: '95%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: 10,
    marginLeft: "10px",
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  webactiveDot:{
    backgroundColor: 'transparent',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  imageViewerContainer: {
    width: '100%',
    height: '100%',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webimageViewerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '90%',
  },
});

export default Section6;