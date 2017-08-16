var a,b,c,d,e,f,g;
function startTime(){
  interval=setInterval("calc()",1);
}
function calc(){
	n=0,t=0,f1=document.charges,f2=document.allTotals;
	d=Number(f1.total.value);//convert value to a number
	if(isNaN(d))d=0;//if not a number, use zero
	n+=d;//add to total
	d=Number(f1.grats.value);//convert value to a number
	if(isNaN(d))d=0;//if not a number, use zero
	n+=-d;//subtract from total
	f1.sales.value=n.toFixed(2);//output total
	
	a=Number(f2.orders.value);
	if(isNaN(a))a=0;
	t+=a;
	var b=Number(f1.total.value);
	if(isNaN(b))b=0;
	f2.credit.value=b.toFixed(2);
	
	c=Number(f2.payout.value);
	if(isNaN(c))c=0;
	d=(b+c);
	f2.plus.value=d.toFixed(2);
	e=(a-d);
	if(isNaN(e))e=0;
	f2.minus.value=e.toFixed(2);
	f=Number(f2.cash.value);
	if(isNaN(f))f=0;
	g=(e-f);
	f2.differ.value=g.toFixed(2);

	//d=Number(f2.plus.value);
	
}
function stop_Time(){
  clearInterval(interval);
}
//function carryValue(n){
//	d=Number(f1.total.value);
//	n+=d;
//	f2.credit.value=n.toFixed(2);
//}

/*
/^[0-9]*(\.[0-9]+)?$/
	if(n!=parseInt(n)||isNaN(n)){
		alert('The value you entered is \"Not a Number\"!\n\nPlease try again.');
		return number;
	}else{
*/