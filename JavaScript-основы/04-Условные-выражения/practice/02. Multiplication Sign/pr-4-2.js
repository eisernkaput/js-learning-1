let numbers = ['5', '-2', '0'];
let a = numbers[0],  b = numbers[1], c = numbers[2];

if ((a * b * c) > 0) {
    console.log("+")
} else {
   console.log("-") 
}

if (a == 0||b == 0||c == 0) {
    console.log("zero") 
} else if (a < 0 && b > 0 && c > 0) {   // -a , b , c //
    console.log("-")
} else if (a > 0 && b < 0 && c > 0) {   // a , -b , c //
    console.log("-")
} else if (a > 0 && b > 0 && c < 0) {   // a , b , -c //
    console.log("-")
} else if (a < 0 && b < 0 && c > 0) {   // -a , -b , c //
    console.log("+")
} else if (a > 0 && b < 0 && c < 0) {   // a , -b , -c //
    console.log("+")
} else if (a < 0 && b < 0 && c < 0) {   // -a , -b , -c //
    console.log("-")
} else if (a > 0 && b > 0 && c > 0) {   // a , b , c //
    console.log("+")
};



if (a == 0||b == 0||c == 0) {        //0//
    console.log("zero")
} else if (                          //+//
        (a > 0 && b < 0 && c < 0)||  // -a , -b , c //
        (a > 0 && b < 0 && c < 0)||  // a , -b , -c //
        (a > 0 && b > 0 && c > 0)    // a , b , c //
    ) {console.log("+")
} else if (                          //-//
        (a < 0 && b > 0 && c > 0)||  // -a , b , c //
        (a > 0 && b < 0 && c > 0)||  // a , -b , c //
        (a > 0 && b > 0 && c < 0)||  // a , b , -c //
        (a < 0 && b < 0 && c < 0)    // -a , -b , -c //
    ) {console.log("-")
}
        