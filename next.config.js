/**
 * https://github.com/zeit/next.js#custom-configuration
 * https://github.com/zeit/next-plugins
 * https://github.com/cyrilwanner/next-compose-plugins
 */

const withPlugins = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withSize = require('next-size');
require('dotenv').config();

const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME;
const AUTH0_CALLBACK_URL = HEROKU_APP_NAME ? `https://${HEROKU_APP_NAME}.herokuapp.com/api/auth` : process.env.AUTH0_CALLBACK_URL;
const AUTH0_LOGOUT_URL = HEROKU_APP_NAME ? `https://${HEROKU_APP_NAME}.herokuapp.com/` : process.env.AUTH0_LOGOUT_URL;

// Variables exposed at build-time
const nextConfig = {
  env: {
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      appId: process.env.ALGOLIA_APP_ID,
      index_1: process.env.ALGOLIA_INDEX_1,
      index_2: process.env.ALGOLIA_INDEX_2,
      index_3: process.env.ALGOLIA_INDEX_3,
      index_4: process.env.ALGOLIA_INDEX_4,
      placesId: process.env.ALGOLIA_PLACES_ID,
      placesKey: process.env.ALGOLIA_PLACES_KEY,
    },
    auth0: {
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: AUTH0_CALLBACK_URL,
      logoutURL: AUTH0_LOGOUT_URL,
      domain: process.env.AUTH0_DOMAIN,
    },
    googleAPIKey: process.env.GOOGLE_API_KEY,
    googleTimeZoneKey: process.env.GOOGLE_TIME_ZONE_KEY,
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
    nodeEnv: process.env.NODE_ENV,
    segmentAnalyticsWriteKey: process.env.SEGMENT_ANALYTICS_WRITE_KEY,
    sentryDSN: process.env.SENTRY_DSN,
  },
};

const analyzer = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
    },
    browser: {
      analyzerMode: 'static',
    }
  }
};

module.exports = withPlugins([
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[local]___[hash:base64:5]',
    },
    [PHASE_PRODUCTION_BUILD]: {
      cssLoaderOptions: {
        localIdentName: '[hash:base64:3]',
      },
    },
  }],
  withCSS,
  withImages,
  withSize,
  [withBundleAnalyzer, analyzer],
], nextConfig);

