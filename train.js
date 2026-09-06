// MITASK-C :

const moment = require("moment");

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq() {
        const vaqt = moment().format("HH:mm");
        console.log(`Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}kg lagmon va ${this.cola}ta cola mavjud!`);
    };

    sotish(product, quantity) {
        console.log(`${product}dan ${quantity}ta sotildi!`);
        if(product === "non") {
            this.non -= quantity;
        } else if(product === "lagmon") {
            this.lagmon -= quantity;
        } else if(mahsulot === "cola") {
            this.cola -= quantity;
        }
    }

    qabul(product, quantity) {
        console.log(`${product}dan ${quantity}ta qabul qilindi!`);
        if(product === "non") {
            this.non += quantity;
        } else if(product === "lagmon") {
            this.lagmon += quantity;
        } else if(product === "cola") {
            this.cola += quantity;
        } 
    }

}

const market = new Shop(12, 15, 8);

market.qoldiq();

market.sotish("non", 6);
market.qabul("cola", 7);

market.qoldiq();


// MITASK-A :

// function name(x, y) {
//     let count = 0;

//     for(let i = 0; i < y.length; i++) {
//         if(y[i] === x) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(name("n", "nomonjon"));

// MITASK-B :

// function countDigits(number) {
//     let count = 0;

//     for (let i=0; i < number.length; i++) {
//         if(number[i] >= "0" && number[i] <= "9") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countDigits("dh2837ydhe42iff47rtgd37"));



// LOOPS: while, for 


// while

// let x = 10;            // variable qiymat
// while(x >= 0) {        // LOOP ochip va shart
//     console.log(x);    // variable ni chaqiryapti
//     x -=3              // qaysi qiymatda ozgarishi
// }
 

// for
     // var.qimati.   //sharti.     //qaysi qiymatda ozgar..
// for ( let x = 10;      x > 0;       x -=2 ) {
//     console.log(x)
// }


