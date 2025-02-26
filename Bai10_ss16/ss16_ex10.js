let num1 = prompt("Mời bạn nhập số thứ nhất")
let num2 = prompt("Mời bạn nhập số thứ hai")

let max = Math.max(num1,num2)
let min = Math.min(num1,num2)

let about = Math.floor(Math.random()*(max - min + 1)) + min

let num_random = `Số ngẫu nhiên trong khoảng từ ${min} -> ${max} là: ${about}`
alert(num_random)