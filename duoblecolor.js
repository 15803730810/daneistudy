// 1-33随机生成不重复的6个数字作为红球，从小到大排序，随机生成1-16之中的一个，与之前6个红球组合到一起，并放到最后
// 随机生成1-33个数放入数组
// 声明一个数组用于存放33个数字
let arr = [];
// 声明一个数组用于存放红球
let arr1 = [];
for (var i = 1; i < 34; i++) {
    arr.push(i);
}
//循环取出数组中的6个数字
for (var i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * arr.length);
    arr1.push(arr[index]);
    arr.splice(index, 1);
}
// 声明一个变量用于存放篮球
let blue = Math.floor(Math.random() * 16 + 1);
// 将红球排序
arr1.sort((a, b) => a - b);
// 将红球篮球放一起
arr1.push(blue);
// 打印随机生成的双色球；
console.log(arr1);