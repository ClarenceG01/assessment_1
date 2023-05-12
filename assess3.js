function createArr(arr){
    let n = arr.length;
    let new_arr=[]
    new_arr.push(arr[0]);
    new_arr.push(arr[n-1]);
    console.log(new_arr);
}

createArr([1,2,4,5]);