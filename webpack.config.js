const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Настройка Workbox для генерации service-worker.js
  config.plugins.push(
    new GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          // Кеширование изображений
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50, // Максимум 50 изображений
              maxAgeSeconds: 30 * 24 * 60 * 60, // Хранить кеш 30 дней
            },
          },
        },
        {
          // Кеширование HTML и других файлов
          urlPattern: /\.(?:html|js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
      ],
    })
  );

  return config;
};