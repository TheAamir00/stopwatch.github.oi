window.onload = function (){
    // let houre = 0;
// let second = 0;
// let minute = 0;
// let count = 0;

// let root = document.querySelector("#root");

// setInterval(() => {
//     count++
//     root.innerHTML = count;
// //   if (count == 9){
//  //      count = 0;
//   //     second++;
//  //  }
//  //  if(second == 59){
//  //   second = 0;
//  //   minute++;
// //   }
//  //  if(minute == 59){
//  //   minute = 0;
//  //   houre++;
//  //  }
// }, 100);


let houre = 00;
let minute = 00;
let second = 00;
let count = 00;
let interval;

let countbtn = document.querySelector("#count");
let hourebtn = document.querySelector("#houre");
let minutebtn = document.querySelector("#minute");
let secondbtn = document.querySelector("#second");






let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");



start.addEventListener("click", () => {

    interval = setInterval(() => {
        count++;
        countbtn.innerHTML = "0" + count;
        if (count == 09) {
            count = 00;
            second++;
            result = secondbtn.innerHTML = second;
            if (result < 10) {
                result = secondbtn.innerHTML = "0" + second;
            }
            if (second == 59){
                second = 00;
                minute++;
                result = minutebtn.innerHTML = minute;
                if (result < 10){
                    result = minutebtn.innerHTML = "0" + minute;
                }
            }
            if (minute == 59){
                minute = 00;
                houre++;
                result = hourebtn.innerHTML = houre;
                if (result < 10){
                    result = hourebtn.innerHTML = "0" + houre;
                }

            }

        }
    }, 100);
});






stop.addEventListener("click", () => {
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    clearInterval(interval);

    houre = "00";
    minute = "00";
    second = "00";
    count = "00";

    countbtn.innerHTML = count;
    hourebtn.innerHTML = houre;
    minutebtn.innerHTML = minute;
    secondbtn.innerHTML = second;
    


})
}