const path = require('path');
module.exports = {
  mode: 'production',
  // entry: path.join(__dirname, 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', 'js'],
  },
};
