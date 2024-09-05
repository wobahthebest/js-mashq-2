const ball = [
     63,
     71,
     92,
];

let day;

for (let i = 0; i < ball.length; i++) {
   if (ball[i] > 55 && ball[i] < 70) {
      day = "___Jamshid: Qonqarsiz_3_ <br>";
   } else if (ball[i] > 69 && ball[i] < 88) {
      day += "___Shuhrat: Qonqarli_4_ <br>";
   } else if (ball[i] > 87 && ball[i] < 100) {
      day += "___Anvar: alo_5_ <br>";
   } else {
      console.log("baho yetarli emas")
   }
}

document.querySelector('.box').innerHTML =
`<p> ${day} </p>`; 



