const son1 = +prompt('son 1');
const son2 = +prompt('son 2');
let day;

if (son1 > 0 && son2 > 0) {
  day = 'ikalasi ham musbat'; 
} else if (son1 < 0 || son2 < 0) {
  day = "manfiy sonlar";
}

document.querySelector('.box').innerHTML =
`<p> ${day} </p>`; 