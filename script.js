const arr = [{ name: "Sakshi", age: 92 }, 
{ name: "Prateek", age: 93}]

// forEach
// arr.forEach(el => {
//   el.good = false;
// })

// console.log(arr)

// map
// const newArr = arr.map(el => {
//   el.good = true;
//   return el;
// })

// console.log(arr)
// console.log(newArr)

// filter
const newArr = arr.filter(el => {
  return el.age < 93;
})
console.log(newArr)

// reduce
const sum = arr.reduce((acc, el) => {
  return acc + el.age;
}, 0);

console.log(sum)