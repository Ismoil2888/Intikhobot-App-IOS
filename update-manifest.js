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