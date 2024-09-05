const son1 = +prompt('son 1');

let day;

if (son1 % 2 === 0 ){
  day = 'son juft'
} else {
  day = 'son toq'
}
document.querySelector('.box').innerHTML =
`<p> ${day} </p>`; 