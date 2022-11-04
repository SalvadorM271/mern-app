const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;
const uri = process.env.URI || "s9mxdyu";
const uridb = `mongodb+srv://admin:admin@${environment}-db.${uri}.mongodb.net/${environment}?retryWrites=true&w=majority` // working format
//const uridb = `mongodb+srv://admin:admin@development-db.${uri}.mongodb.net/development?retryWrites=true&w=majority` // working format  
//dburi = "mongodb+srv://esc-app-dbcluster-devel.b59mwv7.mongodb.net" --- format from terraform
//"mongodb+srv://admin:admin@development-db.qntsjuk.mongodb.net/development?retryWrites=true&w=majority"

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