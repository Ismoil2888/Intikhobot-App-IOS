import React, { useEffect, useState } from "react";
import { Platform, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Animatable from "react-native-animatable";
import AppNavigator from "./navigate";

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker зарегистрирован:", registration);
      })
      .catch((error) => {
        console.error("Ошибка при регистрации Service Worker:", error);
      });
  });
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isCustomSplashVisible, setCustomSplashVisible] = useState(true);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      await SplashScreen.hideAsync();

      await new Promise((resolve) => setTimeout(resolve, 3500));
      setCustomSplashVisible(false);

      setAppReady(true);
    };

    initializeApp();
  }, []);

  useEffect(() => {
    // Выполняем только для веб-версии
    if (Platform.OS === "web") {
      // Отключение pull-to-refresh
      const disablePullToRefresh = () => {
        let touchStartY = 0;
        let touchEndY = 0;

        const onTouchStart = (event) => {
          touchStartY = event.touches[0].clientY;
        };

        const onTouchMove = (event) => {
          touchEndY = event.touches[0].clientY;

          if (touchEndY > touchStartY && window.scrollY === 0) {
            event.preventDefault();
          }
        };

        document.addEventListener("touchstart", onTouchStart);
        document.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
          document.removeEventListener("touchstart", onTouchStart);
          document.removeEventListener("touchmove", onTouchMove);
        };
      };

      // Блокировка контекстного меню
      const disableContextMenu = () => {
        const onContextMenu = (event) => event.preventDefault();
        document.addEventListener("contextmenu", onContextMenu);

        return () => {
          document.removeEventListener("contextmenu", onContextMenu);
        };
      };

      // Блокировка выделения текста
      const disableTextSelection = () => {
        const onSelectStart = (event) => event.preventDefault();
        document.addEventListener("selectstart", onSelectStart);

        return () => {
          document.removeEventListener("selectstart", onSelectStart);
        };
      };

      const cleanupPullToRefresh = disablePullToRefresh();
      const cleanupContextMenu = disableContextMenu();
      const cleanupTextSelection = disableTextSelection();

      // Очистка событий при размонтировании
      return () => {
        cleanupPullToRefresh();
        cleanupContextMenu();
        cleanupTextSelection();
      };
    }
  }, []);

  if (isCustomSplashVisible) {
    return (
      <View style={styles.customSplash}>
        <Animatable.Text
          animation="fadeInLeft"
          duration={1600}
          style={styles.customText}
        >
          Хуш омадед
        </Animatable.Text>

        <Animatable.Text
          animation="fadeInUp"
          duration={1600}
          style={styles.customText}
        >
          ба замимаи мобилии
        </Animatable.Text>

        <Animatable.Text
          animation="fadeInRight"
          duration={2000}
          style={styles.customText}
        >
          "Интихоботи вакилони халқ - 2025"
        </Animatable.Text>

        <Animatable.Image
          animation="zoomIn"
          duration={2000}
          delay={500}
          source={require("./assets/appbasiclogo.png")}
          style={styles.image}
        />
      </View>
    );
  }

  if (!appReady) {
    return null;
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  customSplash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  customText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3F0DD1",
    textAlign: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    textShadowColor: "grey",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  image: {
    width: 155,
    height: 155,
    resizeMode: "contain",
  },
});