// primitive
let a = "javascript";
let b = "go lang";
a = b;
b = "typescript";
console.log(a);
console.log(b);

// refernce type value
let arr1 = [99, 89, 87];
let arr2 = [35, 46, 78];
arr1 = arr2;
console.log(arr1);
console.log(arr2);
arr2.push(99);
console.log(arr1);
console.log(arr2);
