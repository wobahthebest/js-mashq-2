const ism = prompt('ismingbiz')
const pasword = +prompt('parol')
let day;

if (ism === 'admin' && pasword === 12345) {
  day = `Hush kelibsiz ${ism}`; 
} else {
  day = " noto'g'ri parol yoki ism";
}

document.querySelector('.box').innerHTML =
`<p> ${day} </p>`; 