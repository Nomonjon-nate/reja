// MITASK-A :

// function counting(letter, word) {
//     let count = 0;

//     for(let i = 0; i < word.length; i++) {
//         if(word[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(counting("n", "nomonjon"));

// MITASK-B :

function countDigits(number) {
    let count = 0;

    for (let i=0; i < number.length; i++) {
        if(number[i] >= "0" && number[i] <= "9") {
            count++;
        }
    }

    return count;
}

console.log(countDigits("dh2837ydhe42iff47rtgd37"));