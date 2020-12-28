import allWords from './words';

const enCategories = [
  { categoryName: 'mix', words: allWords.mixtureWords },
  { categoryName: 'occupation', words: allWords.occupationWords },
  { categoryName: 'sport', words: allWords.sportWords },
];

const cnCategories = [
  { categoryName: '大汇集', words: allWords.大汇集词汇 },
  { categoryName: '职业', words: allWords.大汇集词汇 },
  { categoryName: '运动', words: allWords.运动词汇 },
];

export default allCategories = {
  enCategories,
  cnCategories,
};
