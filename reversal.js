// 翻转数组
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    arr1[i] = arr[arr.length - 1 - i];
}
console.log(arr1);
console.log(arr.reverse());