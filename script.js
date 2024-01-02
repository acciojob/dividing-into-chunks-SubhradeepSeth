const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[],resarr=[];
  debugger;
  for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<resarr.length;j++){
        sum+=resarr[j];
    }
    if(sum+arr[i]<=n){
        resarr.push(arr[i]);
    }
    else{
        res.push(resarr);
        resarr=[arr[i]];
    }
    k=sum;
}
res.push(resarr);
  return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
