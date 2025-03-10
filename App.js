import React, { useEffect, useState } from "react";
import { Platform, View, StyleSheet, Button, Text, Alert, TouchableOpacity } from "react-native";
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
  const [showPwaPrompt, setShowPwaPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

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
    if (Platform.OS === "web") {
      const checkPwaInstalled = () => {
        const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
        if (!isStandalone) {
          setShowPwaPrompt(true);
        }
      };

      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowPwaPrompt(true);
      };

      const handleAppInstalled = () => {
        console.log("PWA установлено");
        Alert.alert("Успех", "Приложение успешно установлено!");
        setShowPwaPrompt(false);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.addEventListener("appinstalled", handleAppInstalled);

      checkPwaInstalled();

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        window.removeEventListener("appinstalled", handleAppInstalled);
      };
    }
  }, []);

  const handleInstallPwa = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            Alert.alert("Успех", "Приложение успешно установлено!");
          } else {
            Alert.alert("Отмена", "Установка была отклонена.");
          }
          setDeferredPrompt(null);
        })
        .catch((error) => {
          console.error("Ошибка при обработке PWA установки:", error);
          Alert.alert("Ошибка", "Не удалось обработать установку.");
        });
    } else {
      Alert.alert(
        "Установка недоступна",
        "Событие установки не вызвано браузером. Возможно, приложение уже установлено."
      );
    }
  };

  const handleSkipPwaPrompt = () => {
    setShowPwaPrompt(false);
  };

  useEffect(() => {
    // Выполняем только для веб-версии
    if (Platform.OS === "web") {
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

      const cleanupContextMenu = disableContextMenu();
      const cleanupTextSelection = disableTextSelection();

      // Очистка событий при размонтировании
      return () => {
        cleanupContextMenu();
        cleanupTextSelection();
      };
    }
  }, []);

  if (isCustomSplashVisible) {
    return (
      <View style={styles.customSplash}>
        <Animatable.Text animation="fadeInLeft" duration={1600} style={styles.customText}>
          {Platform.OS === "web" ? "Хуш омадед" : "Хуш омадед"}
        </Animatable.Text>
        <Animatable.Text animation="fadeInUp" duration={1600} style={styles.customText}>
          {Platform.OS === "web" ? "ба сомонаи" : "ба замимаи мобилии"}
        </Animatable.Text>
        <Animatable.Text animation="fadeInRight" duration={2000} style={styles.customText}>
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

  if (showPwaPrompt) {
    return (
      <View style={styles.pwaPrompt}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkipPwaPrompt}>
          <Text style={styles.skipButtonText}>Пропустить</Text>
        </TouchableOpacity>
        <Text style={styles.promptText}>
          Установите приложение <Text style={{ color: "#3F0DD1", fontWeight: "bold" }}>"Интихоботи вакилони халқ - 2025"</Text> для <Text style={{ color: "#148f77", fontWeight: "bold" }}>IOS</Text>!
        </Text>
        <Button title="Скачать (1 MB)" onPress={handleInstallPwa} />
      </View>
    );
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
  },
  image: {
    width: 155,
    height: 155,
    resizeMode: "contain",
  },
  pwaPrompt: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    position: "relative",
  },
  promptText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  skipButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
});






// import React, { useEffect, useState } from "react";
// import { Platform, View, StyleSheet, Button, Text, Alert } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
// import * as Animatable from "react-native-animatable";
// import AppNavigator from "./navigate";

// if (typeof window !== "undefined" && "serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/service-worker.js")
//       .then((registration) => {
//         console.log("Service Worker зарегистрирован:", registration);
//       })
//       .catch((error) => {
//         console.error("Ошибка при регистрации Service Worker:", error);
//       });
//   });
// }

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [isCustomSplashVisible, setCustomSplashVisible] = useState(true);
//   const [appReady, setAppReady] = useState(false);
//   const [showPwaPrompt, setShowPwaPrompt] = useState(false);
//   const [deferredPrompt, setDeferredPrompt] = useState(null);

//   useEffect(() => {
//     const initializeApp = async () => {
//       await SplashScreen.hideAsync();

//       await new Promise((resolve) => setTimeout(resolve, 3500));
//       setCustomSplashVisible(false);

//       setAppReady(true);
//     };

//     initializeApp();
//   }, []);

//   useEffect(() => {
//     if (Platform.OS === "web") {
//       const checkPwaInstalled = () => {
//         const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
//         if (!isStandalone) {
//           setShowPwaPrompt(true);
//         }
//       };

//       const handleBeforeInstallPrompt = (e) => {
//         e.preventDefault();
//         setDeferredPrompt(e);
//         setShowPwaPrompt(true);
//       };

//       const handleAppInstalled = () => {
//         console.log("PWA установлено");
//         Alert.alert("Успех", "Приложение успешно установлено!");
//         setShowPwaPrompt(false);
//       };

//       window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
//       window.addEventListener("appinstalled", handleAppInstalled);

//       checkPwaInstalled();

//       return () => {
//         window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
//         window.removeEventListener("appinstalled", handleAppInstalled);
//       };
//     }
//   }, []);

//   const handleInstallPwa = () => {
//     if (deferredPrompt) {
//       console.log("Установка PWA: Показываем prompt");
//       deferredPrompt.prompt();

//       deferredPrompt.userChoice
//         .then((choiceResult) => {
//           if (choiceResult.outcome === "accepted") {
//             console.log("PWA установка принята");
//             Alert.alert("Успех", "Приложение успешно установлено!");
//           } else {
//             console.log("PWA установка отклонена");
//             Alert.alert("Отмена", "Установка была отклонена.");
//           }
//           setDeferredPrompt(null);
//         })
//         .catch((error) => {
//           console.error("Ошибка при обработке PWA установки:", error);
//           Alert.alert("Ошибка", "Не удалось обработать установку.");
//         });
//     } else {
//       console.log("Событие beforeinstallprompt недоступно.");
//       Alert.alert(
//         "Установка недоступна",
//         "Событие установки не вызвано браузером. Возможно, приложение уже установлено."
//       );
//     }
//   };

//   useEffect(() => {
//     // Выполняем только для веб-версии
//     if (Platform.OS === "web") {
//       // Блокировка контекстного меню
//       const disableContextMenu = () => {
//         const onContextMenu = (event) => event.preventDefault();
//         document.addEventListener("contextmenu", onContextMenu);

//         return () => {
//           document.removeEventListener("contextmenu", onContextMenu);
//         };
//       };

//       // Блокировка выделения текста
//       const disableTextSelection = () => {
//         const onSelectStart = (event) => event.preventDefault();
//         document.addEventListener("selectstart", onSelectStart);

//         return () => {
//           document.removeEventListener("selectstart", onSelectStart);
//         };
//       };

//       const cleanupContextMenu = disableContextMenu();
//       const cleanupTextSelection = disableTextSelection();

//       // Очистка событий при размонтировании
//       return () => {
//         cleanupContextMenu();
//         cleanupTextSelection();
//       };
//     }
//   }, []);

//   if (isCustomSplashVisible) {
//     return (
//       <View style={styles.customSplash}>
//         <Animatable.Text
//           animation="fadeInLeft"
//           duration={1600}
//           style={styles.customText}
//         >
//           {Platform.OS === "web" ? "Хуш омадед" : "Хуш омадед"}
//         </Animatable.Text>
  
//         <Animatable.Text
//           animation="fadeInUp"
//           duration={1600}
//           style={styles.customText}
//         >
//           {Platform.OS === "web" ? "ба сомонаи" : "ба замимаи мобилии"}
//         </Animatable.Text>
  
//         <Animatable.Text
//           animation="fadeInRight"
//           duration={2000}
//           style={styles.customText}
//         >
//           "Интихоботи вакилони халқ - 2025"
//         </Animatable.Text>
  
//         <Animatable.Image
//           animation="zoomIn"
//           duration={2000}
//           delay={500}
//           source={require("./assets/appbasiclogo.png")}
//           style={styles.image}
//         />
//       </View>
//     );
//   }  

//   if (!appReady) {
//     return null;
//   }

//   if (showPwaPrompt) {
//     return (
//       <View style={styles.pwaPrompt}>
//         <Text style={styles.promptText}>
//           Установите приложение <Text style={{color: "#3F0DD1", fontWeight: "bold"}}>"Интихоботи вакилони халқ - 2025"</Text> для <Text style={{color: "#148f77", fontWeight: "bold"}}>IOS</Text>!
//         </Text>
//         <Button title="Скачать (1 MB)" onPress={handleInstallPwa} />
//       </View>
//     );
//   }

//   return <AppNavigator />;
// }

// const styles = StyleSheet.create({
//   customSplash: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//   },
//   customText: {
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "#3F0DD1",
//     textAlign: "center",
//   },
//   image: {
//     width: 155,
//     height: 155,
//     resizeMode: "contain",
//   },
//   pwaPrompt: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//   },
//   promptText: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "#000",
//   },
// });