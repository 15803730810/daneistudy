//求1-100之间的和，当值大于4000时停止求和
for(let i=1,sum=0;i<=100;i++){
	sum+=i;
	if (sum > 4000) {
		console.log(i,sum);
		break;
	}
}
// 打印本世纪前十个闰年
for(let year=2000,count=0;year<=2100;year++){
	if (year%4===0 && year%100!==0 || year%400===0) {
		console.log(year+'是闰年');
		count++;
		if (count===10) {
			break;
		}
	}
}














