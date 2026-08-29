console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boshliq tanlang va ko'proq xato qiling", // 21-30
    "o'zingizga ishlashingizni boshlang", // 31-40
    "siz kuchli bo'lgan narsalarni qiling", // 41-50
    "yoshlarga investitsiya qiling", // 51-60
    "endi dam oling, foydasi yo'q endi", // 60-...
];

// ASYNC function
async function maslahatBering(a) {
    if(typeof a !== 'number') throw new Error("insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        // return list[5];
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                 resolve(list[5]);
            }, 5000);
        });

        // setTimeout(function() {
        //     return list[5];
        // }, 5000);
    }
}

// call via then/catch
// console.log('passed here 0');
// maslahatBering(25).then(data => {
//     console.log("javob:", data);
// }).catch(err => {
//     console.log("ERROR:", err);
// })

// console.log('passed here 1');

// call via async/await
async function run() {
    let javob = await maslahatBering(25);
    console.log(javob);
    javob = await maslahatBering(75);
    console.log(javob);
    javob = await maslahatBering(45);
    console.log(javob);
}
run();