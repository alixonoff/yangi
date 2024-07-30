// let age= 14
// if (age <13) {
//     console.log("Mening yoshim "+ age);
// } else if (age <18) {
//     console.log("Yoshing "+ age);
// } else {
//     console.log("Mening yoshim unday emas")
// }
// let name = prompt("Ismingizni kiriting: ")
// let age = prompt("Yoshingizniizni kiriting: ")
// let num = Number(age)
// alert(
//   "Sizning ismingiz: " +
//     name +
//     (" Sizning yoshingiz: " + num) +
//     (" Siz: " + (2024 - num) + " yilda tug'ilgansiz")
// );
let names = prompt("Malumot kiriting kiriting: ")
let name = typeof names == String
let num = Number(names)
if (num < 100000009) {
    alert(`Sizning ismingiz: ${names}, siz ${2024-num} yilda tug'ilgansiz. `);
} else if (!num < 100000009) {
  alert("Sizning ismingiz " + names);
}