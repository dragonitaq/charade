const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Category = require('../models/category.model');
const User = require('../models/user.model');
const categories = require('../data/categories.data');

dotenv.config({ path: './config.env' });

const db = process.env.MONGODB.replace('<USERNAME>', process.env.MONGODB_USERNAME).replace('<PASSWORD>', process.env.MONGODB_PASSWORD);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database is connected!');
  });

const importData = () => {
  categories.forEach(async (category, ii) => {
    try {
      await Category.create(category);
      console.log(`Category data ${ii} imported`);
    } catch (error) {
      console.log(error);
    }
  });
};

const wipeData = async () => {
  try {
    await Category.deleteMany();
    console.log('All data deleted');
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--wipe') {
  wipeData();
}

/*
Use the following text input to the command line to execute delete or import function.
node ./tools/importDataToDB.js --wipe
node ./tools/importDataToDB.js --import
*/
