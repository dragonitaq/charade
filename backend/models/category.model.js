const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  language: {
    type: String,
    lowercase: true,
    required: [true, 'A category must have its language specified.'],
  },
  name: {
    type: String,
    required: [true, 'A category must have a name.'],
    // REVIEW Review max length of category name
    maxlength: [25, 'A category name can only have maximum of 25 characters.'],
  },
  description: {
    type: String,
    required: [true, 'A category must have description.'],
    maxlength: [300, 'Category description can only have maximum of 300 characters.'],
  },
  authorName: {
    type: String,
    required: [true, 'A category must have a author name.'],
  },
  createdAt: {
    type: Date,
    required: [true, 'A category must have date of creation.'],
    default: Date.now(),
  },
  updatedAt: Date,
  likeAmount: Number,
  savedAmount: Number,
  reportedAmount: Number,
  blacklisted: Boolean,
  nsfw: Boolean,
  hidden: Boolean,
  words: {
    type: Array,
    // REVIEW See if we need to have minimum number of array length.
    required: [true, 'Category must contain as many words/phrases as it should.'],
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
