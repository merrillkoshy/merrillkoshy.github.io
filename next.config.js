const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: "/merrillkoshy/_next/static/images/",
    },
  ],
  {
    basePath: "/merrillkoshy",
    assetPrefix: "/merrillkoshy/",
  },
]);
