const withImages = require("next-images")
const withCSS = require("@zeit/next-css")
const withTM = require("next-transpile-modules")(["gsap", "three"])
const withPlugins = require("next-compose-plugins")
const nextTranslate = require("next-translate")

const nextConfig = {
  env: {
    BASE_URI: process.env.BASE_URI,
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    })
    return config
  },
}

module.exports = withPlugins([withCSS, withTM, withImages, nextTranslate], nextConfig)
