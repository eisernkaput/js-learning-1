const N = 1;
let result = ' ';

for(let row = 100; row >= N; row += 1) {
    for(let column = 1; column <= row; column += 1) {
        result += column + ' ';
    }
    result += '\n ';
}
console.log(result);
