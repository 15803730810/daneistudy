var word = 'hOw aRe yOU';
//按照空格将字符串切割为数组
var arr = word.split(' ');
//遍历数组，获取每个单词
for (let i = 0; i < arr.length; i++) {
    let first = arr[i].slice(0, 1).toUpperCase();
    let other = arr[i].slice(1).toLowerCase();
    arr[i] = first + other;
}
let str=arr.join(' ');
console.log(str);