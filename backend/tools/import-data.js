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
    // These are to deal with deprecation warning
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    // mongoose connect will return an promise object.
  })
  .then(() => {
    console.log('Database is connected!');
  });

const importData = () => {
  categories.forEach(async (category, i) => {
    try {
      await Category.create(category);
      console.log(`categories data ${i} imported`);
    } catch (error) {
      console.log(error);
    }
  });
};

importData();
