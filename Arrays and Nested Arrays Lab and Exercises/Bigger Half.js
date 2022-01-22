function demo(input){
    input.sort((a,b)=>a-b);
    // if(input.length%2==0){
    //     return input.slice(input.length/2)
    // }
    return input.slice(input.length/2);
}
console.log(demo([4, 7, 2, 5]));
console.log(demo([3, 19, 14, 7, 2, 19, 6]));