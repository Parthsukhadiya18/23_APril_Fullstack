const arr = [19, 31, 0, 41, 51, 61, 71, 29];


const a = 0;
console.log(arr);

// arr.sort();
// console.log(arr.sort());

// console.log(arr);
// // arr.reverse() 
// console.log(arr.reverse());
// arr.pop(); last delete 
// console.log(arr.pop());
// console.log(arr);
// arr.push() last add
// console.log(arr.push('10'));
// console.log(arr);
// arr.shift()
// console.log(arr.shift());
// console.log(arr);
// arr.unshift()
// console.log(arr.unshift('123'));
// console.log(arr);
// arr.concat();
// console.log(arr.concat('123'));
// console.log(arr);
// arr.join()
// console.log(arr.join('*'));
// arr.slice()
// console.log(arr.slice(0,6));
// arr.splice()
// console.log(arr.splice(0,2,2,3));
console.log(arr);
// isArray();
// console.log(Array.isArray(arr));
// console.log(Array.isArray(a));
// indexof ()
const arr1 = ['parth surat', "patel"];
// console.log(arr1.indexOf("patel", 1));

// console.log(arr);
// arr1.lastIndexOf();
console.log(arr1.lastIndexOf("patel", 1));


// arr.includes();
console.log(arr1.includes("Patel"));

// Some()

function check(age) {
    return age >= 18;
}
console.log(arr.some(check));
console.log("arr.every(check)", arr.every(check));

console.log(arr.find(check));
console.log(arr.filter(check));

arr.forEach(element => {
    return element>=18
});
// arr.toString()
// arr.fill("0")
// console.log(arr.fill("0"));
// console.log(arr.fill("0",2));
console.log(arr.fill("0",2,4));










