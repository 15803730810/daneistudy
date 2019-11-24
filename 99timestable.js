// 打印99乘法表
// 外层循环控制行数
for (var i = 1; i <= 9; i++) {
    // 内层循环控制列数
    for (var j = 1, str = ''; j <= i; j++) {
        str += j + '*' + i + '=' + i * j + ' ';
    }
    // 每循环一次打印一次
    console.log(str);
}