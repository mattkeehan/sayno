// order the list by sizes, with letter suffixes following their unsuffixed number - 
// - eg., 28, 28S, 28M, 28L

const getOrderedSizes = (items) => {
  return items.map(item => {
    return item
      .replaceAll('S', '.1')
      .replaceAll('R', '.2')
      .replaceAll('L', '.3')
  }).map(item => Number(item)
  ).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }).map(item => {
    item = String(item);
    return item
      .replaceAll('.1', 'S')
      .replaceAll('.2', 'R')
      .replaceAll('.3', 'L')
  });
};

const sizes = ['28L', '77', '4', '8', '10S', '28R', '12', '24', '28S', '44L'];
console.log(getOrderedSizes(sizes));
/* result [
  '4',   '8',   '10S',
  '12',  '24',  '28S',
  '28R', '28L', '44L',
  '77'
]
*/
