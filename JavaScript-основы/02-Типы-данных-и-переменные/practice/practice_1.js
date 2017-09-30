var vInt = 10, vFloat = 5.56;
    let floatSum = vInt + vFloat;
    console.log(parseInt(floatSum));
    
    console.log("\n-------------\n---------------\n");

let a = 12, b = 13;
    let equalityAb = (a !== b );
    console.log(equalityAb);
    
    console.log("\n-------------\n---------------\n");

var vString = "Shalom", vName = " uvazhaemyi";
    let string1 = vString + vName;
    console.log(string1 + " !");
    
    console.log("\n-------------\n---------------\n");

let x;
    console.log(x);
let y = null;
    console.log(y+x);
let z = -5 / 0;
    console.log(z);
    
    console.log("\n-------------\n---------------\n");
    
console.log(typeof x + " \n" +  typeof y + " \n" + typeof floatSum + " \n" +typeof equalityAb + " \n" +typeof vString);

    console.log("\n-------------\n---------------");
    
let str0 = 1234, str1 = "1238abc", str2 =  0.15, str3 = "3.14ivan", str4 = "Infinity", str5 = 99999999999999999999;

let piStr0 = parseInt(str0), pfStr0 = parseFloat(str0), nStr0 = Number(str0), plusStr0 = +str0, zStr0 = str0|0;

let piStr1 = parseInt(str1), pfStr1 = parseFloat(str1), nStr1 = Number(str1), plusStr1 = +str1, zStr1 = str1|0; 

let piStr2 = parseInt(str2), pfStr2 = parseFloat(str2), nStr2 = Number(str2), plusStr2 = +str2, zStr2 = str2|0;

let piStr3 = parseInt(str3), pfStr3 = parseFloat(str3), nStr3 = Number(str3), plusStr3 = +str3, zStr3 = str3|0;

let piStr4 = parseInt(str4), pfStr4 = parseFloat(str4), nStr4 = Number(str4), plusStr4 = +str4, zStr4 = str4|0;

let piStr5 = parseInt(str5), pfStr5 = parseFloat(str5), nStr5 = Number(str5), plusStr5 = +str5, zStr5 = str5|0;

console.log("str, ", "parseInt(str), ", "parseFloat(str), ", "Number(str), ", "+str, ", "str|0.");
console.log(str0, piStr0, pfStr0, nStr0, plusStr0, zStr0);
console.log(str1, piStr1, pfStr1, nStr1, plusStr1, zStr1);
console.log(str2, piStr2, pfStr2, nStr2, plusStr2, zStr2);
console.log(str3, piStr3, pfStr3, nStr3, plusStr3, zStr3);
console.log(str4, piStr4, pfStr4, nStr4, plusStr4, zStr4);
console.log(str5, piStr5, pfStr5, nStr5, plusStr5, zStr5);