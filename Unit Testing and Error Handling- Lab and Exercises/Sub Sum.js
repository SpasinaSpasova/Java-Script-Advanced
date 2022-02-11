function solve(array,start,end){
    if(!Array.isArray(array)){
        return NaN;
    }
    if(start<0){
        start=0;
    }
    if(end>array.length){
        end=array.length-1;
    }
    
    let sum=array.slice(start,end+1).map((x)=>Number(x)).reduce((a,i)=>a+i,0);
   return sum;
}
solve('text', 0, 2);