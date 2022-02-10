function demo(array,typeOrder){
    if(typeOrder=='asc'){
        array=array.sort((a,b)=>a-b);
    }else if(typeOrder=='desc'){
        array=array.sort((a,b)=>b-a);
    }
   return array;
}
demo([14, 7, 17, 6, 8], 'asc');
demo([14, 7, 17, 6, 8], 'desc');