export const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};


export const encodeText = (str) => {
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/[\s+ :.,()&/\/]/g, `-`);
};
