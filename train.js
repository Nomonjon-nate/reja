// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", // 21-30
//     "o'zingizga ishlashingizni boshlang", // 31-40
//     "siz kuchli bo'lgan narsalarni qiling", // 41-50
//     "yoshlarga investitsiya qiling", // 51-60
//     "endi dam oling, foydasi yo'q endi", // 60-...
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else {
//     console.log("javob:", data);
//     }
// });
// console.log('passed here 1');

// MITASK-A :

function counting(letter, word) {
    let count = 0;

    for(let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            count++;
        }
    }

    return count;
}

console.log(counting("n", "nomonjon"));