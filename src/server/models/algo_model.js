const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.mg_uri || null;


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'algo_Tracker'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const algoSchema = new Schema({
  title: String,
  prompt: String,
  code_skeleton: String,
  created: Date,
  completed: Date

});
const Algo = mongoose.model('algo', algoSchema);

module.exports = {
  Algo
};
