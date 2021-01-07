// import allWords from './words';

const enCategories = {
  id: 1,
  language: 'en-my',
  categories: [
    { id: 1, categoryName: 'mix' },
    { id: 2, categoryName: 'occupation' },
    { id: 3, categoryName: 'sport' },
  ],
};

const zhCategories = {
  id: 2,
  language: 'zh-my',
  categories: [
    { id: 1, categoryName: '大汇集' },
    { id: 2, categoryName: '职业' },
    { id: 3, categoryName: '运动' },
  ],
};

const allCategories = {
  enCategories,
  zhCategories,
};

export default allCategories;
