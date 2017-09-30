var arr1 = ['5'], 
    a = +arr1[0];

var len1, 
    strA = " ",
    arr2 = new Array(5);

for (let b = 1; b <= a; b+= 1) {
   strA +=  b + " "
}

var arr3 = arr2.splice(0,4,strA);

console.log(arr3);




