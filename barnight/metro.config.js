// const {getDefaultConfig } = require("metro-config");

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-css-transformer")
//     },
//     resolver: {
//       sourceExts: [...sourceExts, "css"]
//     }
//   };
// })();

require('ts-node/register');
module.exports = require('./metro.config.ts');
