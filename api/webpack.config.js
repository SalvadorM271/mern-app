const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;
const uridb = process.env.URI; //"mongodb+srv://admin:admin@cluster0.s9mxdyu.mongodb.net/mernapp-prod?retryWrites=true&w=majority"

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify(environment),
  'process.env.PORT': JSON.stringify('80'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify(uridb)
};



module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};