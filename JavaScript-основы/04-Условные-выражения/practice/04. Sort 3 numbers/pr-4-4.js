let numbers = ['5', '6', '2'];
let a = numbers[0],  b = numbers[1], c = numbers[2];

/// a,b,c ///
/// a,c,b ///
/// b,a,c ///
/// b,c,a ///
/// c,a,b ///
/// c,b,a ///
if ((a < b) && (b < c)) {
    console.log(a + " " + b + " " + c)
} else if ((a < c) && (c < b)) {
    console.log(a + " " + c + " " + b)
} else if ((b < a) && (a < c)) {
    console.log(b + " " + a + " " + c)
} else if ((b < c) && (c < a)) {
    console.log(b + " " + c + " " + a)
} else if ((c < a) && (a < b)) {
    console.log(c + " " + a + " " + b)
} else if ((c < b) && (b < a)) {
    console.log(c + " " + b + " " + a)
};