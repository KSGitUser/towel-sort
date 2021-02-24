
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let temp = [];
  const sortFunction = (a, b, index) => (index + 1) % 2 > 0 ? a - b : b - a; 
  (matrix || []).map(
    (arr, index) => temp = [...temp, ...arr.sort((a,b) => sortFunction(a,b,index))]
    );
  return temp;
}
