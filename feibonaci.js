// 计算斐波那契数列第n项的值
// 1  1  2  3  5  8  13  21  34  55  89  ...
function feibo(n){
	let n1=1,n2=1;
	if (n===1 || n===2) {
		return 1;
	}
	for(let i=3;i<=n;i++){
		let a=n1;
		n1=n2;
		n2=a+n2;
	}
	return n2;
}
console.log(feibo(10));
// 使用递归计算
function fei(n){
	if (n===1 || n===2) {
		return 1;
	}
	return fei(n-1)+fei(n-2);
}
console.log(fei(10));
// 使用递归计算前n项的和
function getSum(n){
	if (n===1) {
		return 1;
	}
	return n+getSum(n-1);
}
console.log(100);









