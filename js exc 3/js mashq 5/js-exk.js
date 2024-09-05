const son1 = +prompt('son 1');

let day;

if (!son1 % 2 === 0 ){
  if (son1 % 7 === 0 && son1 % 3 === 0) {
    const num1 = son1 / 3;
    const num2 = son1 / 7;
    day = `7ga va 3ga bo'lina oladi
            javoblar: ${num2} va ${num1}`
  } else if (son1 % 3 === 0) {
    const num1 = son1 / 3;
    day = `3 ga bo'lina oladi
            javob: ${num1}`
  } else if (son1 % 7 === 0) {
    const num1 = son1 / 7;
    day = `7 ga bo'lina oladi
            javob: ${num1}`;
  } 
}

document.querySelector('.box').innerHTML =
`<p> ${day} </p>`; 