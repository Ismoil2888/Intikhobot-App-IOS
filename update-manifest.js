// const fs = require("fs");
// const path = require("path");

// const manifestPath = path.join(__dirname, "web-build", "manifest.json");

// // Читаем файл manifest.json
// fs.readFile(manifestPath, "utf8", (err, data) => {
//   if (err) {
//     console.error("Ошибка при чтении manifest.json:", err);
//     return;
//   }

//   try {
//     // Парсим JSON
//     const manifest = JSON.parse(data);

//     // Обновляем start_url
//     manifest.start_url = "/Intikhobot-App-IOS/?utm_source=web_app_manifest";

//     // Добавляем или обновляем theme_color
//     manifest.theme_color = "#3F0DD1";

//     // Сохраняем изменения
//     fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8", (err) => {
//       if (err) {
//         console.error("Ошибка при сохранении manifest.json:", err);
//       } else {
//         console.log("manifest.json успешно обновлён!");
//       }
//     });
//   } catch (parseErr) {
//     console.error("Ошибка при парсинге manifest.json:", parseErr);
//   }
// });





const fs = require("fs");
const path = require("path");

const manifestPath = path.join(__dirname, "web-build", "manifest.json");
const indexPath = path.join(__dirname, "web-build", "index.html");
const pwaIconsSrc = path.join(__dirname, "pwa-icons");
const pwaIconsDest = path.join(__dirname, "web-build", "icons");

// Копирование папки pwa-icons в web-build/icons
const copyFolder = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true }); // Создаём целевую папку, если она не существует
  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, destPath); // Рекурсивное копирование подпапок
    } else {
      fs.copyFileSync(srcPath, destPath); // Копирование файлов
    }
  });
};

// Обновление manifest.json
fs.readFile(manifestPath, "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка при чтении manifest.json:", err);
    return;
  }

  try {
    const manifest = JSON.parse(data);
    manifest.prefer_related_applications = false; // Изменяем prefer_related_applications
    manifest.start_url = "/Intikhobot-App-IOS/?utm_source=web_app_manifest"; // Обновляем start_url
    manifest.theme_color = "#3F0DD1"; // Устанавливаем theme_color

    // Добавляем иконки
    manifest.icons = [
      {
        src: "/Intikhobot-App-IOS/icons/int_pwa_icon_512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/Intikhobot-App-IOS/icons/int_pwa_icon_1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ];

    fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8", (err) => {
      if (err) {
        console.error("Ошибка при сохранении manifest.json:", err);
      } else {
        console.log("manifest.json успешно обновлён!");
      }
    });
  } catch (parseErr) {
    console.error("Ошибка при парсинге manifest.json:", parseErr);
  }
});

// Обновление index.html
fs.readFile(indexPath, "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка при чтении index.html:", err);
    return;
  }

  // Замена обратных слэшей на прямые
  const updatedIndex = data
    .replace(/href="\\Intikhobot-App-IOS\\/g, 'href="/Intikhobot-App-IOS/')
    .replace(/src="\\Intikhobot-App-IOS\\/g, 'src="/Intikhobot-App-IOS/');

  fs.writeFile(indexPath, updatedIndex, "utf8", (err) => {
    if (err) {
      console.error("Ошибка при сохранении index.html:", err);
    } else {
      console.log("index.html успешно обновлён!");
    }
  });
});

// Копируем папку pwa-icons в web-build/icons
try {
  copyFolder(pwaIconsSrc, pwaIconsDest);
  console.log("Папка pwa-icons успешно скопирована в web-build/icons!");
} catch (copyErr) {
  console.error("Ошибка при копировании pwa-icons:", copyErr);
}