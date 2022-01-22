function demo(n,k){
    let array=[];
    array.length=n;
    array.fill(0);
    array.push(1);
    for(let i = 1;i<n;i++)
    {
        for(let l=1;l<=k;l++)
        {
            if((i-l)<0){
                continue;
            }
            array[i]+=Number(array[i-l]);
        }
    }
    return array;
}
console.log(demo(8,2));