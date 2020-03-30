module.exports = function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
};
