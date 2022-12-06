require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI =
  'mongodb+srv://Xdrabbit_user:rtmAFippEERqqcEY@xdrabbitcluster.qhea93l.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err));
