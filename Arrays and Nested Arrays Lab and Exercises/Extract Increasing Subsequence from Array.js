function demo(array){
    let result=[];
    // for (let curr of array) {
    //     if (result[result.length - 1] <= curr || result.length == 0) {
    //         result.push(curr);
    //     }
    // }
    // return result;

    result.push(array[0]);
    
    for (let i =1; i<array.length;i++){
        if(array[i]>=result[result.length-1]){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(demo([1, 
      3, 
      8, 
      4, 
      10, 
      12, 
      3, 
      2, 
      24]));