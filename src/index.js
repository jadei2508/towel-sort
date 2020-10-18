
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || matrix.hasOwnProperty('[]')) {
        return [];
    }
  return matrix.reduce((arr,element,index) => {
      if(index % 2 === 0) {
          arr.push(...element);
      } else {
          arr.push(...element.reverse());
      }
      return arr;
  }, []);
}

