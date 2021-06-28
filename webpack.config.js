const path = require('path');

module.exports = {
    mode:"development",
  entry: "D:\\The_Odin_Project\\Practice_FullStack\\EcmaScript2015\\src\\index.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};