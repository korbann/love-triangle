/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */



module.exports = function getLoveTrianglesCount(a = []) {
  var i;
  var x, y;
  
   
    numb=0;
    for (i=0; i<=a.length; i++){
      x=a[i];
      y=a[x-1];
  
      if (a[i]-1===i){
       a[i] = 0;
      
      }else if (a[y-1]-1===i){
        numb++;
        a[i]=0;
        a[x-1]=0;
        a[y-1]=0;
      }
    }
  return numb;
};
