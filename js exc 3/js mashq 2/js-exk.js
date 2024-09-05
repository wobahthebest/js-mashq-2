const yil = +prompt('yilni kirriting');

let day;

if (yil % 4 === 0) {
  day = 'Kabisa yili';
} else {
  day = 'Kabisa yili emas!';  
}

document.querySelector('.box').innerHTML =
`<p> ${day} </p>`; 



