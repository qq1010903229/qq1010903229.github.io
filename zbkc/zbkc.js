var exp=967,hp=100,atk=10,def=10,luk=0,points=40,energy=30,progress=0,pp=0,highest_progress=0;
var tower=0,tp=0;
var energyc=1;
var battling=0;
var eqtab=0;
var equipments=[[],[],[],[],[],[],[],[],[],[]];
var eqlevels=[[],[],[],[],[],[],[],[],[],[]];
var chall=0;
var challlvs=[];

var equipment_data=[
[0,0,1],[1,0,1],[0,0,4],[1,0,4],[2,0,0.5],
[0,1,0.2],[1,1,0.2],[0,1,0.6],[1,1,0.6],[3,0,0.1],
[0,2,0.1],[1,2,0.1],[0,2,0.3],[1,2,0.3],[0,3,0.02],
[2,1,0.1],[1,3,0.05],[0,4,0.2],[1,3,0.2],[3,1,0.02],
[2,2,0.05],[1,4,0.02],[0,5,0.05],[1,4,0.05],[1,5,0.01],
[0,6,0.02],[1,5,0.02],[0,6,0.05],[1,5,0.05],[3,0,0.5],
[2,3,0.01],[1,4,0.1],[0,5,0.2],[1,6,0.03],[3,1,0.05],
[1,4,0.2],[1,6,0.05],[0,4,0.8],[2,3,0.03],[3,0,2],
[0,7,0.003],[1,7,0.003],[0,7,0.01],[1,7,0.01],[3,2,0.003],
[0,8,0.001],[1,8,0.001],[0,8,0.003],[1,8,0.003],[3,1,0.3],
[0,7,0.03],[1,7,0.03],[0,7,0.06],[2,4,0.01],[3,0,5],
[0,8,0.01],[1,8,0.01],[0,8,0.02],[2,4,0.05],[3,3,0.001],
[0,9,1e-4],[1,9,1e-4],[0,8,0.03],[1,8,0.03],[3,1,5],
[0,9,3e-4],[1,9,3e-4],[3,0,10],[1,7,0.06],[3,1,20],
[0,9,0.001],[1,9,0.001],[2,5,1e-4],[1,10,3e-5],[3,2,0.005],
[0,8,0.05],[1,8,0.05],[3,0,20],[1,10,1e-4],[3,1,50],
[0,10,1e-5],[2,6,1e-5],[0,10,3e-5],[2,6,3e-5],[3,4,1e-5],
[0,7,0.1],[1,11,1e-5],[0,7,0.3],[1,11,3e-5],[3,0,50],
[0,9,0.003],[1,9,0.003],[3,5,1e-5],[2,7,1e-5],[3,5,3e-5],
[0,11,1e-6],[3,6,1e-6],[0,11,3e-6],[3,6,3e-6],[3,6,1e-5],

[0,0,10],[1,0,10],[0,0,40],[1,0,40],[3,2,0.007],
[0,1,2],[1,1,2],[0,1,6],[1,1,6],[3,7,1e-7],
[0,2,1],[1,2,1],[0,2,3],[1,2,3],[0,3,0.3],
[2,1,1],[1,3,1],[0,4,2],[1,3,2],[3,1,200],
[0,5,1],[1,4,1],[0,5,2],[1,4,2],[3,8,1e-7],
[0,6,0.2],[1,5,0.2],[0,6,0.5],[1,5,0.5],[3,8,1e-6],
[3,0,200],[1,4,5],[0,5,5],[1,6,0.3],[3,1,500],
[1,4,10],[1,6,0.5],[0,4,5],[2,3,0.1],[3,0,500],
[0,7,0.5],[1,7,0.5],[0,7,1],[1,7,1],[3,2,0.01],
[0,8,0.1],[1,8,0.1],[0,8,0.3],[1,8,0.3],[3,9,1e-7],
[0,12,1e-8],[1,12,1e-8],[0,12,3e-8],[1,12,3e-8],[3,3,0.01],
[0,12,1e-7],[1,12,1e-7],[0,12,3e-7],[1,12,3e-7],[3,5,1e-4],
[0,9,0.01],[1,9,0.01],[0,8,1],[1,8,1],[3,8,1e-5],
[0,9,0.03],[1,9,0.03],[0,7,3],[1,7,3],[3,8,1e-4],
[0,9,0.1],[1,9,0.1],[1,10,1e-3],[1,10,3e-3],[3,10,1e-9],
[0,8,3],[1,8,3],[1,10,5e-3],[1,10,0.01],[3,1,1500],
[0,10,1e-4],[2,6,1e-4],[0,10,3e-4],[2,6,3e-4],[3,4,1e-4],
[0,10,1e-3],[1,11,1e-4],[0,10,3e-3],[1,11,3e-4],[3,4,1e-3],
[0,11,1e-5],[3,7,1e-6],[0,11,3e-5],[3,7,3e-6],[3,5,3e-4],
[0,11,1e-4],[3,6,3e-5],[0,11,3e-4],[3,6,1e-4],[3,6,3e-4],

[0,0,100],[1,0,100],[0,0,400],[1,0,400],[3,0,500],
];
equipment_data.tower=[0,0,0];
var equipment_data_extra={
4:[4,0,1e-4],9:[4,0,1e-4],
14:[4,1,4e-5],19:[4,1,4e-5],
24:[4,2,2e-5],29:[4,2,2e-5],
34:[4,3,1e-5],39:[4,3,1e-5],
44:[4,4,4e-6],49:[4,4,4e-6],
54:[4,5,1e-6],59:[4,5,1e-6],
64:[4,6,4e-7],69:[4,6,4e-7],
74:[4,7,1e-7],79:[4,7,1e-7],
84:[4,8,2e-8],89:[4,8,2e-8],
94:[4,9,4e-9],99:[4,9,4e-9],
104:[4,0,1e-3],109:[4,0,1e-3],
114:[4,1,4e-4],119:[4,1,4e-4],
124:[4,2,2e-4],129:[4,2,2e-4],
134:[4,3,1e-4],139:[4,3,1e-4],
144:[4,4,4e-5],149:[4,4,4e-5],
154:[4,5,1e-5],159:[4,5,1e-5],
164:[4,6,4e-6],169:[4,6,4e-6],
174:[4,7,1e-6],179:[4,7,1e-6],
184:[4,8,2e-7],189:[4,8,2e-7],
194:[4,9,4e-8],199:[4,9,4e-8],
};
var hpdata=[
50,200,600,1000,2333,
1500,2000,3000,4000,10000,
5.5e3,6.5e3,7.5e3,1.0e4,7.0e4/3,
1.3e4,1.7e4,2.5e4,3.5e4,1.0e5,
5.5e4,7.0e4,9.0e4,1.1e5,7.0e5/3,
1.6e5,2.0e5,3.5e5,6.0e5,1.0e6,
1.4e6,2.2e6,3.0e6,5.0e6,1.0e7,
8.0e6,1.2e7,2.0e7,3.0e7,3.0e4,
4.0e7,5.0e7,8.0e7,1.0e8,1.0e8,
1.0e8,1.4e8,2.0e8,2.0e8,7.0e8/3,
3.0e8,4.0e8,5.0e8,7.0e8,7.0e9/3,
2.5e9,4.0e9,5.0e9,1.5e10,7.0e10/3,
5.0e10,1.0e11,2.0e11,1.0e11,7.0e11/3,
2.0e11,8.0e11,6.0e11,1.0e12,1.0e7,
1.0e12,1.5e12,5.0e12,3.0e12,1.0e13/3,
3.0e13,5.0e13,1.0e14,6.0e14,5.0e3,
1.0e16,1.0e16,1.0e16,2.0e16,7.0e16/3,
5.0e16,5.0e16,5.0e16,5.0e16,7.0e17/3,
2.0e17,2.0e17,2.0e17,2.0e17,2.0e18/3,
5.0e17,5.0e17,5.0e17,5.0e17,2.0e20/3,
5.0e18,2.0e19,6.0e19,1.0e20,7.0e20/3,
1.5e20,2.0e20,3.0e20,4.0e20,1.0e21,
6.0e20,7.0e20,8.0e20,1.0e21,7.0e21/3,
1.6e21,2.0e21,3.5e21,6.0e21,1.0e22,
1.4e22,2.2e22,3.0e22,5.0e22,1.0e23,
8.0e22,1.2e23,2.0e23,3.0e23,1.0e24,
4.0e23,5.0e23,8.0e23,1.0e24,7.0e24/3,
1.0e24,1.2e24,2.0e24,3.0e24,1.0e14,
4.0e24,5.0e24,8.0e24,1.0e25,7.0e25/3,
1.0e25,1.5e25,2.0e25,3.0e25,1.0e26,
3.0e25,4.0e25,5.0e25,7.0e25,7.0e26/3,
2.5e26,4.0e26,5.0e26,1.5e27,7.0e27/3,
2.5e27,5.0e27,1.0e28,5.0e27,7.0e28/3,
2.0e27,8.0e27,6.0e27,1.0e28,2.0e15/3,
1.0e28,1.5e28,5.0e28,3.0e28,1.0e28,
3.0e28,5.0e28,1.0e29,6.0e29,1.0e4,
1.0e29,1.0e29,1.0e29,2.0e29,7.0e29/3,
5.0e29,5.0e29,5.0e29,5.0e29,7.0e30/3,
2.0e30,2.0e30,2.0e30,2.0e30,7.0e31/3,
2.0e31,2.0e31,2.0e31,2.0e31,7.0e32/3,
5.0e34,2.0e35,6.0e35,1.0e36,7.0e36/3,
];
var atkdata=[
12,25,40,60,75,
100,125,150,250,240,
300,400,500,650,600,
800,1000,1200,1400,1500,
1500,1800,2000,2200,2200,
2500,3000,3500,3750,4000,
5000,5500,6000,7000,7000,
8.0e3,9.0e3,1.0e4,1.2e4,1.0e4,
1.5e4,2.0e4,2.2e4,2.5e4,3.1e4,
3.5e4,4.0e4,4.5e4,6.0e4,5.5e4,
1.2e5,1.6e5,2.0e5,2.4e5,2.4e5,
4.0e5,4.5e5,7.0e5,7.5e5,8.0e5,
2.0e6,2.5e6,3.0e6,7.0e6,6.0e6,
2.0e7,1.7e7,3.0e7,3.5e7,4.0e7,
1.0e8,1.5e8,1.5e8,3.0e8,2.0e8,
5.0e8,1.1e9,1.5e9,9.0e8,7.0e8,
2.5e9,5.0e9,7.5e9,1.0e10,2.5e10,
2.0e11,3.0e11,5.0e11,7.0e11,4.0e5,
2.5e12,4.0e12,5.5e12,7.0e12,1.5e6,
3.0e13,5.0e13,7.0e13,1.0e14,0.1,
1.2e14,2.5e14,4.0e14,6.0e14,7.5e14,
1.0e15,1.5e15,2.0e15,2.5e15,2.4e15,
3.0e15,4.0e15,5.0e15,6.5e15,8.0e15,
8.0e15,1.0e16,1.2e16,1.4e16,1.5e16,
3.0e16,3.6e16,4.0e16,4.4e16,5.5e16,
2.5e17,3.0e17,3.5e17,4.0e17,4.0e17,
1.0e18,1.1e18,1.2e18,1.4e18,1.4e18,
2.4e18,2.7e18,3.0e18,3.6e18,5.0e18,
1.5e19,2.0e19,2.2e19,2.5e19,3.1e19,
3.5e19,4.0e19,4.5e19,6.0e19,5.5e19,
1.2e20,1.6e20,2.0e20,2.4e20,2.4e20,
4.0e20,4.5e20,7.0e20,7.5e20,8.0e20,
2.0e21,2.5e21,3.0e21,7.0e21,6.0e21,
2.0e22,1.7e22,3.0e22,3.5e22,4.0e22,
1.0e23,1.5e23,1.5e23,3.0e23,2.0e23,
5.0e23,1.1e24,1.5e24,9.0e23,7.0e23,
2.5e24,5.0e24,7.5e24,1.0e25,2.5e25,
2.0e26,3.0e26,5.0e26,7.0e26,3.0e16,
2.0e27,3.0e27,5.0e27,7.0e27,9.0e11,
3.0e28,5.0e28,7.0e28,1.0e29,9,
1.2e30,2.5e30,4.0e30,6.0e30,7.5e30,
];
var exp_data=[
10,11,12,13,15,
15,16,18,13,21,
22,21,21,20,30,
26,25,25,26,30,
38,36,37,38,45,
44,40,39,43,48,
42,44,46,44,53,
52,52,54,50,81,
55,45,50,52,48,
51,51,52,42,61,
23,18,15,14,17,
10,11,7,8,9,
3,4,5,2,4,
1,2,2,3,4,
3,3,4,3,5,
3,2,2,5,10,
6,6,7,8,5,
6,7,8,9,10,
11,12,13,14,13,
14,15,16,17,21,
20,22,24,26,30,
30,32,36,38,42,
42,42,42,40,40,
46,45,45,46,50,
48,46,47,48,50,
44,40,39,43,48,
42,44,46,44,53,
52,52,54,50,50,
35,35,35,35,35,
41,41,42,42,51,
43,38,35,34,37,
30,31,27,28,29,
23,24,25,22,24,
21,22,22,23,24,
18,18,19,18,20,
13,12,12,15,20,
11,11,12,13,10,
11,12,13,14,15,
16,17,18,19,18,
19,20,21,22,26,
30,33,36,39,45,
];
var pu=[];
function softreset(s){
	if(battling){
		alert(i18n.battling);
		return;
	}
	if(!s && !confirm(i18n.softreset))return;
	pp+=getpp();
	exp=967,hp=100,atk=10,def=10,luk=0,points=10*(4+(pu[7]||0)),energy=30+(pu[1]||0)+(challeff(2)),progress=0;
	if(highest_progress>=120)energy+=(pu[1]||0);
	battling=0;
	eqtab=0;
	equipments=[[],[],[],[],[],[],[],[],[],[]];
	chall=0;
	if(pu[0]){
		var level1=getlv().lv;
		exp+=1000*((Math.pow(4,pu[0])-1)*(3+(pu[0]**pu[0])*2));
		var level2=getlv().lv;
		hp+=(level2-level1)*10;
		atk+=(level2-level1);
		def+=(level2-level1);
		points+=(level2-level1)*(4+(pu[7]||0));
	}
	for(var i=4;i<highest_progress;i+=5)document.getElementById("b"+i).style.display="none";
	if(highest_progress>=100 && chall!=2){
		progress=100;
		energy+=60;
	}
	if(chall==2){
		document.getElementById("diff1_chall2").style.display="inline";
		document.getElementById("diff2_chall2").style.display="inline";
	}else{
		document.getElementById("diff1_chall2").style.display="none";
		document.getElementById("diff2_chall2").style.display="none";
	}
}
function reset(){
	if(battling){
		alert(i18n.battling);
		return;
	}
	if(!confirm(i18n.hardreset1()))return;
	if(!confirm(i18n.hardreset2))return;
	exp=967,hp=100,atk=10,def=10,luk=0,points=40,energy=30,progress=0,pp=0;
	tower=0,tp=0;
	highest_progress=0;pu=[];
	battling=0;
	eqtab=0;
	equipments=[[],[],[],[],[],[],[],[],[],[]];
	eqlevels=[[],[],[],[],[],[],[],[],[],[]];
	chall=0;
	challlvs=[];
	localStorage.zbkc=exportsave();
	document.location.reload();
}
function rand_2(){
	return Math.random()*0.3+0.85;
}
function getlv(){
	if(chall==3){
		var tmp=Math.log10(exp)**2+1;
		return {"lv":Math.floor(tmp),"progress":tmp-Math.floor(tmp),"next":10**((Math.floor(tmp))**0.5)-exp,"step":10**((Math.floor(tmp))**0.5)-10**((Math.floor(tmp)-1)**0.5)};
	}
	if(Math.floor(Math.pow(exp,0.335))>=1e8){
		return {"lv":Math.floor(Math.pow(exp,0.335)),"progress":Math.pow(exp,0.335)-Math.floor(Math.pow(exp,0.335)),"next":(Math.floor(Math.pow(exp,0.335)+1)**(1/0.335))-exp,"step":(Math.pow(exp,0.665)/0.335)};
	}
	return {"lv":Math.floor(Math.pow(exp,0.335)),"progress":Math.pow(exp,0.335)-Math.floor(Math.pow(exp,0.335)),"next":(Math.floor(Math.pow(exp,0.335)+1)**(1/0.335))-exp,"step":(Math.floor(Math.pow(exp,0.335)+1)**(1/0.335))-(Math.floor(Math.pow(exp,0.335))**(1/0.335))};
}
function gethp(){
	if(chall==1)return 1;
	let temp=Math.floor(hp*geteqeffs(3,1)*geteqeffs(3,3)*geteqeffs(3,4)*geteqeffs(3,6)*geteqeffs(3,8)*geteqeffs(3,9)*geteqeffs(3,10)*geteqeff(4)*Math.pow(1.25,(pu[3]||0))*Math.pow((pu[3]||0)+1,highest_progress>=190?3.5:highest_progress>=130?3:highest_progress>=100?2:highest_progress>=70?1:0.5)*challeff(1)*(1+tower*1.5/100));
	if(chall==6)return Math.floor(temp**0.5);
	return temp;
}
function getatk(){
	let temp=atk*geteqeff(0)*geteqeff(4)*challeff(5);
	if(chall==6)return Math.floor(temp**0.5);
	return temp;
}
function getdef(){
	let temp=def*geteqeff(1)*geteqeff(4)*challeff(6);
	if(chall==6)return Math.floor(temp**0.5);
	return temp;
}
function getpower(){
	let temp=geteqeffs(3,2);
	let temp2=temp;
	if(temp>=3)temp2=2+2*(temp-3);
	if(temp>=5)temp2=6+3*(temp-5);
	if(temp>=7)temp2=12+4*(temp-7);
	if(temp>=9)temp2=20;
	return Math.floor((gethp()*getatk()*getdef())**(1/3)/2*temp2);
}
function gettowerpower(){
	if(tower>=90)return (getehp('tower')*geteatk('tower')*getedef('tower'))**(1/3)/1.25;
	if(tower>=70)return (getehp('tower')*geteatk('tower')*getedef('tower'))**(1/3)/1.5;
	return (getehp('tower')*geteatk('tower')*getedef('tower'))**(1/3);
}
function getehp(x){
	if(x=='tower'){
		if(tower>=180)return Infinity;
		if(tower>=41)return 5e21*Math.pow(1.15,tower**0.75)*((tower-9)**4);
		if(tower>=33)return 5e21*Math.pow(1.15,tower**0.75)*((tower-25)**5);
		if(tower>=17)return 5e21*Math.pow(1.15,tower**0.75)*((tower-1)**3);
		if(tower>=13)return 5e21*Math.pow(1.15,tower**0.75)*((tower-9)**4);
		return 5e21*Math.pow(1.15,tower**0.75)*((tower+3)**2);
	}
	if(x%5==4)return Math.floor(hpdata[x]);
	return hpdata[x]*rand_2();
}
function geteatk(x){
	if(x=='tower'){
		if(tower>=100&&highest_progress<195)return 3e13*(tower**6)*Math.pow(1.15,tower**0.75);
		if(tower>=70)return 1e13*(tower**6)*Math.pow(1.15,tower**0.75);
		if(tower>=50)return 4e14*(tower**5)*Math.pow(1.15,tower**0.75);
		if(tower>=25)return 2e16*(tower**4)*Math.pow(1.15,tower**0.75);
		if(tower>=20)return 5e17*(tower**3)*Math.pow(1.15,tower**0.75);
		if(tower>=10)return 1e19*(tower**2)*Math.pow(1.15,tower**0.75);
		return 1e21*Math.pow(1.15,tower**0.75);
	}
	if(x%5==4)return atkdata[x];
	return atkdata[x]*rand_2();
}
function getedef(x){
	if(x=='tower'){
		if(tower>=100&&highest_progress<195)return 5e13*(tower**6)*Math.pow(1.15,tower**0.75);
		if(tower>=70)return 2e13*(tower**6)*Math.pow(1.15,tower**0.75);
		if(tower>=50)return 8e14*(tower**5)*Math.pow(1.15,tower**0.75);
		if(tower>=25)return 4e16*(tower**4)*Math.pow(1.15,tower**0.75);
		if(tower>=20)return 1e18*(tower**3)*Math.pow(1.15,tower**0.75);
		if(tower>=10)return 2e19*(tower**2)*Math.pow(1.15,tower**0.75);
		return 2e21*Math.pow(1.15,tower**0.75);
	}
	if(x%5==4)return atkdata[x];
	return atkdata[x]*rand_2();
}
function eqlevel_exp(){
	let temp=0.5+0.1*(pu[5]||0);
	if(temp>=1.6)temp=1.27+0.03*(pu[5]||0);
	return temp;
}
function geteqeffs(x,i){
	if(x==3&&i==0){
		let temp=1+Math.log(1+(equipments[x][i]||0))/10*(1+(eqlevels[x][i]||0)**(eqlevel_exp())/10);
		if(temp>=16&&highest_progress<150)temp=Math.log2(temp)*4;
		else if(temp>=16&&highest_progress<190)temp=Math.log2(temp)**2;
		return temp;
	}
	if(x==3&&i==2){
		let temp=1+Math.log(1+(equipments[x][i]||0))/10*(1+(eqlevels[x][i]||0)**(eqlevel_exp())/10);
		if(temp>=4)temp=Math.log2(temp-2)**0.75+3;
		if(temp>=5)temp=Math.log2(temp-3)**0.75+4;
		return temp;
	}
	if(x==3&&i==5){
		let temp=(equipments[x][i]||0);
		if(highest_progress>=160)temp+=1000;
		if(highest_progress>=195)temp+=99000;
		return 1+Math.log(1+(temp||0))/10*(1+(eqlevels[x][i]||0)**(eqlevel_exp())/10);
	}
	if(x==3&&i==7)return 1+Math.sqrt(Math.log(1+(equipments[x][i]||0))*(1+(eqlevels[x][i]||0)**(eqlevel_exp())/10))/50000;
	return 1+Math.log(1+(equipments[x][i]||0))/10*(1+(eqlevels[x][i]||0)**(eqlevel_exp())/10);
}
function geteqeff(x){
	var result=1;
	for(var i=0;i<equipment_names[x].length;i++){
		result*=geteqeffs(x,i);
	}
	if(x==2)result=result**0.5;
	if(x==2&&result>=2)result=Math.log2(result)**0.6+1;
	if(x==4)result=result**0.2;
	if(x==4&&highest_progress>=70)result=result**1.5;
	if(x==4&&highest_progress>=90)result=result**1.1;
	
	if(x==4&&result>=2&&highest_progress<90)result=Math.log2(result)**0.6+1;
	
	if(x==4&&result>=3&&highest_progress<130)result=Math.log2(result-1)**0.6+2;
	else if(x==4&&result>=3&&highest_progress<150)result=Math.log2(result-1)**0.8+2;
	else if(x==4&&result>=3&&highest_progress<180)result=Math.log2(result-1)+2;
	
	if(x==4&&result>=4)result=Math.log2(result-2)**0.6+3;
	
	if(x==4&&result>=7)result=7;
	return result;
}
function add(x,y){
	y=Math.floor(y*points);
	points-=y;
	if(x==1)hp+=y*(4+(pu[2]||0));
	if(x==1&&highest_progress>=80)hp+=y*(pu[2]||0);
	if(x==1&&highest_progress>=90)hp+=y*(pu[2]||0);
	if(x==1&&highest_progress>=110)hp+=y*(pu[2]||0)*2;
	if(x==1&&highest_progress>=180)hp+=y*(pu[2]||0)*Math.max(Math.floor((pu[2]||0)**0.8-5),3);
	if(x==2)atk+=y;
	if(x==3)def+=y;
	if(x==4)luk+=y;
}
function exportsave(){
	return btoa(exp+","+hp+","+atk+","+def+","+luk+","+points+","+btoa(JSON.stringify(equipments))+","+energy+","+progress+","+pp+","+highest_progress+","+btoa(JSON.stringify(pu))+","+btoa(JSON.stringify(eqlevels))+","+chall+","+btoa(JSON.stringify(challlvs))+","+tower+","+tp);
}
function importsave(a){
	if(!a)return;
	a=atob(a).split(",");
	if(!a[8])return;
	exp=parseFloat(a[0]);
	hp=parseFloat(a[1]);
	atk=parseFloat(a[2]);
	def=parseFloat(a[3]);
	luk=parseFloat(a[4]);
	points=parseFloat(a[5]);
	equipments=JSON.parse(atob(a[6]));
	energy=parseFloat(a[7]);
	progress=parseFloat(a[8]);
	if(!a[9])return;
	pp=parseFloat(a[9]);
	if(!a[11])return;
	highest_progress=parseInt(a[10]);
	pu=JSON.parse(atob(a[11]));
	if(!a[12])return;
	eqlevels=JSON.parse(atob(a[12]));
	if(!a[13])return;
	chall=parseInt(a[13]);
	challlvs=JSON.parse(atob(a[14]));
	if(!a[15])return;
	tower=parseInt(a[15]);
	if(!a[16])return;
	tp=parseFloat(a[16]);
}
function load(){
	if(battling){
		alert(i18n.battling);
		return;
	}
	importsave(prompt(i18n.inputsave));
	localStorage.zbkc=exportsave();
	document.location.reload();
}
/*function update(){
	document.getElementById("lv").innerHTML=format(getlv().lv)+" 经验值："+format(getlv().step-getlv().next)+"/"+format(getlv().step);
	if(getlv().lv>=1e8)document.getElementById("lv").innerHTML=format(getlv().lv)+" &nbsp;&nbsp;"+format(getlv().step)+"经验值升1级";
	document.getElementById("power").innerHTML=format(getpower());
	document.getElementById("energy").innerHTML=energy;
	document.getElementById("hp").innerHTML=format(hp)+" ("+format(gethp())+")";
	document.getElementById("atk").innerHTML=format(atk)+" ("+format(getatk())+")";
	document.getElementById("def").innerHTML=format(def)+" ("+format(getdef())+")";
	document.getElementById("prestige").innerHTML=format(pp)+" (+"+format(getpp())+")";
	if(highest_progress>=200)document.getElementById("prestige").innerHTML+=" 超越点："+format(tp)+" (+"+format(gettp())+")";
	document.getElementById("prestige2").innerHTML=format(getpp());
	document.getElementById("prestige3").innerHTML=format(pp);
	document.getElementById("prestige_eff").innerHTML=Math.floor(prestige_eff()*100)/100;
	if(prestige_eff()>=10000)document.getElementById("prestige_eff").innerHTML=format(prestige_eff());
	document.getElementById("luk").innerHTML=format(luk);
	document.getElementById("points").innerHTML=format(points);
	document.getElementById("save").value=exportsave();
	localStorage.zbkc=exportsave();
	for(var i=4;i<progress;i+=5)document.getElementById("b"+i).style.display="inline";
	
	var eq_log="";
	if(eqtab==0){
		eq_log=eq_log+"你的武器提供了"+format((geteqeff(0)-1)*100)+"%的额外攻击，你有：";
	}
	if(eqtab==1){
		eq_log=eq_log+"你的防具提供了"+format((geteqeff(1)-1)*100)+"%的额外防御，你有：";
	}
	if(eqtab==2){
		eq_log=eq_log+"你的鞋子提供了"+format((geteqeff(2)-1)*100)+"%的额外战斗速度，你有：";
	}
	if(eqtab==4){
		eq_log=eq_log+"你的徽章提供了"+format((geteqeff(4)-1)*100)+"%的额外生命值、攻击、防御";
		if(highest_progress>=185)eq_log=eq_log+"、经验值";
		eq_log=eq_log+"和转生点，你有：";
	}
	for(var i=0;i<equipment_names[eqtab].length;i++){
		if((equipments[eqtab][i]||0)>0 || (eqlevels[eqtab][i]||0)>0){
			eq_log=eq_log+"<br>"+equipment_names[eqtab][i]+((eqlevels[eqtab][i]||0)>0?"+"+eqlevels[eqtab][i]:"")+"x"+format(equipments[eqtab][i]||0);
			if(eqtab==3&&i==0)eq_log=eq_log+"(+"+format((geteqeffs(3,0)-1)*100)+"%转生点)";
			if(eqtab==3&&i==1)eq_log=eq_log+"(+"+format((geteqeffs(3,1)-1)*100)+"%生命值)";
			if(eqtab==3&&i==2)eq_log=eq_log+"(+"+format((geteqeffs(3,2)-1)*100)+"%暴击率)";
			if(eqtab==3&&i==3)eq_log=eq_log+"(+"+format((geteqeffs(3,3)-1)*100)+"%生命值)";
			if(eqtab==3&&i==4)eq_log=eq_log+"(+"+format((geteqeffs(3,4)-1)*100)+"%生命值)";
			if(eqtab==3&&i==5&&highest_progress>=160)eq_log=eq_log+"+1000";
			if(eqtab==3&&i==5&&highest_progress>=195)eq_log=eq_log+"00";
			if(eqtab==3&&i==5)eq_log=eq_log+"(+"+format((geteqeffs(3,5)-1)*100)+"%经验值)";
			if(eqtab==3&&i==6)eq_log=eq_log+"(+"+format((geteqeffs(3,6)-1)*100)+"%生命值)";
			if(eqtab==3&&i==7)eq_log=eq_log+"(+"+((geteqeffs(3,7)-1)*100).toFixed(4)+"%吸血)";
			if(eqtab==3&&i==8)eq_log=eq_log+"(+"+format((geteqeffs(3,8)-1)*100)+"%生命值)";
			if(eqtab==3&&i==9)eq_log=eq_log+"(+"+format((geteqeffs(3,9)-1)*100)+"%生命值)";
			if(eqtab==3&&i==10)eq_log=eq_log+"(+"+format((geteqeffs(3,10)-1)*100)+"%生命值)";
			if(highest_progress>=50){
				eq_log=eq_log+" <a href=\"javascript:eqlevelup("+eqtab+","+i+");\">强化（需要"+format(eqlevel_cost(eqtab,i))+"个"+equipment_names[eqtab][i]+"）</a>";
			}
		}
	}
	if(document.getElementById("eq").innerHTML!=eq_log)document.getElementById("eq").innerHTML=eq_log;
	if(highest_progress<progress)highest_progress=progress;
	if(highest_progress>=10){
		document.getElementById("pu2").style.display="inline";
		var temp="";
		if(highest_progress>=180)temp="+4";
		else if(highest_progress>=110)temp="+3";
		else if(highest_progress>=90)temp="+2";
		else if(highest_progress>=80)temp="+1";
		document.getElementById("pu2").innerHTML="生命加点提升"+temp+"（"+(pu[2]||0)+"级，升级需"+format(prestige_cost(2))+"转生点）";
	}
	if(highest_progress>=20){
		document.getElementById("pu1").style.display="inline";
		var temp="";
		if(highest_progress>=120)temp="+1";
		document.getElementById("pu1").innerHTML="初始能量提升"+temp+"（"+(pu[1]||0)+"级，升级需"+format(prestige_cost(1))+"转生点）";
	}
	if(highest_progress>=30){
		document.getElementById("pu0").style.display="inline";
		document.getElementById("pu0").innerHTML="初始等级提升（"+(pu[0]||0)+"级，升级需"+format(prestige_cost(0))+"转生点）";
	}
	if(highest_progress>=40){
		document.getElementById("pu3").style.display="inline";
		var temp="";
		if(highest_progress>=190)temp="+4";
		else if(highest_progress>=130)temp="+3";
		else if(highest_progress>=100)temp="+2";
		else if(highest_progress>=70)temp="+1";
		document.getElementById("pu3").innerHTML="生命值提升"+temp+"（"+(pu[3]||0)+"级，升级需"+format(prestige_cost(3))+"转生点）";
	}
	if(highest_progress>=50){
		document.getElementById("pu4").style.display="inline";
		var temp="";
		if(highest_progress>=150)temp="+1";
		document.getElementById("pu4").innerHTML="BOSS额外掉落"+temp+"（"+(pu[4]||0)+"级，升级需"+format(prestige_cost(4))+"转生点）";
	}
	if(pu[4]>=3){
		document.getElementById("eq_4").style.display="inline";
	}
	if(highest_progress>=60){
		document.getElementById("pu5").style.display="inline";
		document.getElementById("pu5").innerHTML="强化的效果提升（"+(pu[5]||0)+"级，升级需"+format(prestige_cost(5))+"转生点）";
	}
	if(highest_progress>=70){
		document.getElementById("pu6").style.display="inline";
		var temp="";
		if(highest_progress>=170)temp="+1";
		document.getElementById("pu6").innerHTML="多倍能量消耗设定"+temp+"（"+(pu[6]||0)+"级，升级需"+format(prestige_cost(6))+"转生点）";
	}
	if(pu[6]>=1){
		document.getElementById("energyc").style.display="inline";
		var mxenergyc=Math.floor(pu[6]**(highest_progress>=170?1.5:1))+1;
		if(mxenergyc>=8&&highest_progress>=170)mxenergyc=pu[6]+5;
		else if(mxenergyc>=9)mxenergyc=9;
		document.getElementById("energycinput").max=Math.ceil(mxenergyc);
		energyc=parseInt(document.getElementById("energycinput").value);
		if(energyc<0)energyc=0;
		if(energyc>=9)energyc=Math.floor((energyc-5)**1.5+1);
		if(energyc>Math.floor(pu[6]**(highest_progress>=170?1.5:1))+1)energyc=Math.floor(pu[6]**(highest_progress>=170?1.5:1))+1;
		document.getElementById("energyc_eff").innerHTML="消耗"+energyc+"能量，得到"+energyc_eff().toFixed(2)+"倍经验和装备";
	}else energyc=1;
	if(highest_progress>=75){
		document.getElementById("chall").style.display="inline";
		document.getElementById("chall").innerHTML="你当前在挑战"+chall+"中";
		document.getElementById("chall_tab").style.display="inline";
		if(!challlvs[chall] || challlvs[chall]<getlv().lv){
			challlvs[chall]=getlv().lv;
		}
		document.getElementById("chall0").style.display="block";
		document.getElementById("chall0lv").innerHTML=format(challlvs[0]||0);
		document.getElementById("chall0eff").innerHTML=format((challeff(0)-1)*100);
		document.getElementById("chall1").style.display="block";
		document.getElementById("chall1lv").innerHTML=format(challlvs[1]||0);
		document.getElementById("chall1eff").innerHTML=format((challeff(1)-1)*100);
	}
	if(highest_progress>=80){
		document.getElementById("pu7").style.display="inline";
		document.getElementById("pu7").innerHTML="升级可得属性点提升（"+(pu[7]||0)+"级，升级需"+format(prestige_cost(7))+"转生点）";
	}
	if(highest_progress>=85){
		document.getElementById("chall2").style.display="block";
		document.getElementById("chall2lv").innerHTML=format(challlvs[2]||0);
		document.getElementById("chall2eff").innerHTML=format(challeff(2));
	}
	if(highest_progress>=90){
		document.getElementById("chall3").style.display="block";
		document.getElementById("chall3lv").innerHTML=format(challlvs[3]||0);
		document.getElementById("chall3eff").innerHTML=format((challeff(3)-1)*100);
	}
	if(highest_progress>=95){
		document.getElementById("chall4").style.display="block";
		document.getElementById("chall4lv").innerHTML=format(challlvs[4]||0);
		document.getElementById("chall4eff").innerHTML=format((challeff(4)-1)*100);
	}
	if(highest_progress>=100){
		document.getElementById("diffselect").style.display="block";
		document.getElementById("diff0_disp").style.display="inline";
		for(var i=0;i*100<=highest_progress;i++)document.getElementById("diff"+i).style.display="inline";
	}
	if(highest_progress>=100){
		document.getElementById("pu8").style.display="inline";
		document.getElementById("pu8").innerHTML="经验值提升（"+(pu[8]||0)+"级，升级需"+format(prestige_cost(8))+"转生点）";
	}
	if(highest_progress>=105){
		document.getElementById("chall5").style.display="block";
		document.getElementById("chall5lv").innerHTML=format(challlvs[5]||0);
		document.getElementById("chall5eff").innerHTML=format((challeff(5)-1)*100);
	}
	if(highest_progress>=125){
		document.getElementById("pu9").style.display="inline";
		document.getElementById("pu9").innerHTML="战斗速度提升（"+(pu[9]||0)+"级，升级需"+format(prestige_cost(9))+"转生点）";
	}
	if(highest_progress>=150){
		document.getElementById("tower_tab").style.display="inline";
		document.getElementById("challtower").style.display="block";
		document.getElementById("tower_floor").innerHTML=tower;
		document.getElementById("tower_floor2").innerHTML=tower*1.5;
		document.getElementById("tower_battle").innerHTML="挑战第"+(tower+1)+"层（战力"+format(gettowerpower())+"）";
	}
	if(highest_progress>=170){
		document.getElementById("chall6").style.display="block";
		document.getElementById("chall6lv").innerHTML=format(challlvs[6]||0);
		document.getElementById("chall6eff").innerHTML=format((challeff(6)-1)*100);
	}
	if(highest_progress>=190){
		document.getElementById("pu10").style.display="inline";
		document.getElementById("pu10").innerHTML="装备掉落提升（"+(pu[10]||0)+"级，升级需"+format(prestige_cost(10))+"转生点）";
	}
	if(highest_progress>=200){
		document.getElementById("trans_tab").style.display="inline";
		document.getElementById("transcend2").innerHTML=format(gettp());
		document.getElementById("transcend3").innerHTML=format(tp);
		document.getElementById("transcend_eff").innerHTML=Math.floor(transcend_eff()*100)/100;
	}
}*/
function settab(x){
	if(battling){
		alert(i18n.battling);
		return;
	}
	document.getElementById("tab0").style.display="none";
	document.getElementById("tab1").style.display="none";
	document.getElementById("tab2").style.display="none";
	document.getElementById("tab3").style.display="none";
	document.getElementById("tab4").style.display="none";
	document.getElementById("tab5").style.display="none";
	document.getElementById("tab6").style.display="none";
	document.getElementById("battlelog").style.display="none";
	document.getElementById("tab"+x).style.display="block";
}
function setdiff(x){
	if(battling){
		alert(i18n.battling);
		return;
	}
	document.getElementById("diff0div").style.display="none";
	document.getElementById("diff1div").style.display="none";
	document.getElementById("diff2div").style.display="none";
	document.getElementById("diff"+x+"div").style.display="block";
	if(chall==2){
		document.getElementById("diff"+x+"_chall2").style.display="inline";
	}else{
		document.getElementById("diff"+x+"_chall2").style.display="none";
	}
}
/*function battle(x){
	if(battling){
		alert(i18n.battling);
		return;
	}
	if(energy<energyc && x!='tower'){
		alert("能量不足，请转生！");
		return;
	}
	if(chall==2&&energyc<=0 && x!='tower'){
		alert("由于挑战2的限制，战斗必须消耗至少1能量！");
		return;
	}
	battling=1;
	document.getElementById("tab0").style.display="none";
	document.getElementById("tab1").style.display="none";
	document.getElementById("tab2").style.display="none";
	document.getElementById("tab3").style.display="none";
	document.getElementById("tab4").style.display="none";
	document.getElementById("battlelog").style.display="block";
	var curhp=gethp();
	var enemyhp=getehp(x);
	var enemyhp2=enemyhp;
	var enemyatk=geteatk(x);
	var enemydef=getedef(x);
	var mult=1;
	var battle_status={"log":"你遇到了怪物<br>","interval":-1};
	if(x%5==4)battle_status.log="你遇到了BOSS，BOSS有"+format(enemyhp)+"点生命值<br>";
	if(x==39||x==69||x==139||x==169)battle_status.log+="BOSS特性：受到的伤害开方<br>";
	if(x==49||x==99||x==149||x==199)battle_status.log+="BOSS特性：23.33%暴击率<br>";
	if(x==59||x==99||x==159||x==199)battle_status.log+="BOSS特性：23.33%闪避率<br>";
	if(x==74&&chall==5)battle_status.log+="BOSS特性：BOSS的第二次攻击为必杀<br>";
	else if(x==74)battle_status.log+="BOSS特性：一击必杀<br>";
	if(x==174&&chall==5)battle_status.log+="BOSS特性：BOSS的第二次攻击为必杀<br>";
	else if(x==174)battle_status.log+="BOSS特性：一击必杀<br>";
	if(x==79&&chall==1)battle_status.log+="BOSS特性：受到的伤害变为原来的0.25次方<br>";
	else if(x==79)battle_status.log+="BOSS特性：受到的伤害取自然对数<br>";
	if(x==179&&chall==1)battle_status.log+="BOSS特性：受到的伤害变为原来的0.25次方<br>";
	else if(x==179)battle_status.log+="BOSS特性：受到的伤害取自然对数<br>";
	if(x==84||x==184)battle_status.log+="BOSS特性：你的能量越多，BOSS越强<br>",enemyatk*=(1+0.15*energy),enemydef*=(1+0.15*(energy**1.5));
	if(x==89||x==99||x==189||x==199)battle_status.log+="BOSS特性：你的等级越高，BOSS越强<br>",enemyatk*=(getlv().lv),enemydef*=(getlv().lv);
	if(x==94||x==99||x==194||x==199)battle_status.log+="BOSS特性：你的武器和防具越多，BOSS越强<br>",enemyatk*=(geteqeff(1)),enemydef*=(geteqeff(0));
	var ename="怪物";
	if(x%5==4)ename="BOSS";
	if(chall==5&&x!='tower'){
		var damage2=Math.floor(1+enemyatk*enemyatk/getdef()*rand_2()*mult);
		damage2=Math.floor(1+damage2*(Math.log10(damage2)**1.5)*1.5);
		curhp-=damage2;if(curhp<=0){
			clearInterval(battle_status.interval);
			battle_status.log+=ename+"对你造成了"+format(damage2)+"点伤害，你倒下了<br><a href=\"javascript:battle("+x+");\">再次战斗</a>";
			battling=0;
		}else battle_status.log+=ename+"对你造成了"+format(damage2)+"点伤害，你还剩"+format(curhp)+"点生命值<br>";
	}
	document.getElementById("battlelog").innerHTML=battle_status.log;
	var battle_turn=function(){
		document.getElementById("tab0").style.display="none";
		document.getElementById("tab1").style.display="none";
		document.getElementById("battlelog").style.display="block";
		var damage1=Math.floor(1+getatk()*getatk()/enemydef*rand_2()*mult);
		var damage2=Math.floor(1+enemyatk*enemyatk/getdef()*rand_2()*mult);
		if(chall==5&&x!='tower')damage2=Math.floor(1+damage2*(Math.log10(damage2)**1.5));
		if(Math.random()+1<geteqeffs(3,2)){
			if(Math.random()+2<geteqeffs(3,2)){
				damage1*=2;battle_status.log+="超级";
			}
			damage1*=2;battle_status.log+="暴击";
			if(Math.random()+3<geteqeffs(3,2)){
				damage1*=1.5;battle_status.log+="+";
			}
			if(Math.random()+4<geteqeffs(3,2)){
				damage1*=1.5;battle_status.log+="+";
			}
			if(Math.random()+5<geteqeffs(3,2)){
				damage1*=(4/3);battle_status.log+="+";
			}
			if(Math.random()+6<geteqeffs(3,2)){
				damage1*=(4/3);battle_status.log+="+";
			}
			if(Math.random()+7<geteqeffs(3,2)){
				damage1*=1.25;battle_status.log+="+";
			}
			battle_status.log+="！";
		}
		var damage1_disp=damage1;
		if(x==39||x==69||x==139||x==169)damage1=Math.floor(damage1**0.5);
		if(x==79&&chall==1)damage1=Math.floor(damage1**0.25);
		else if(x==79)damage1=Math.log(damage1);
		if(x==179&&chall==1)damage1=Math.floor(damage1**0.25);
		else if(x==179)damage1=Math.log(damage1);
		if((x==59||x==99||x==159||x==199) && Math.random()<7/30)damage1=0;
		enemyhp-=damage1;
		if(x==39||x==69||x==79||x==139||x==169||x==179)battle_status.log+="你对"+ename+"造成了"+format(damage1_disp)+"点伤害<br>";
		if(enemyhp<=0){
			if(x==79&&chall!=1)battle_status.log+="由于BOSS的特性，实际造成了"+damage1.toFixed(2)+"点伤害，"+ename+"被击败了<br>";
			else if(x==179&&chall!=1)battle_status.log+="由于BOSS的特性，实际造成了"+damage1.toFixed(2)+"点伤害，"+ename+"被击败了<br>";
			else if(x==39||x==69||x==79||x==139||x==169||x==179)battle_status.log+="由于BOSS的特性，实际造成了"+format(damage1)+"点伤害，"+ename+"被击败了<br>";
			else battle_status.log+="你对"+ename+"造成了"+format(damage1)+"点伤害，"+ename+"被击败了<br>";
			clearInterval(battle_status.interval);
			var exp_base=Math.pow(enemyatk*enemydef,0.75);
			if(exp_base>=9e10&&highest_progress>=170)exp_base=((exp_base**1.5)*9e10)**0.4;
			else if(exp_base>=9e10)exp_base=(exp_base*9e10)**0.5;
			if(exp_base>=3e13)exp_base=(exp_base*3e13)**0.5;
			if(highest_progress>=170&&x<=100){
				exp_base*=(exp_data[x]+(100-x)/2);
			}else if(highest_progress>=140&&x<=100){
				exp_base*=(exp_data[x]+(100-x)/5);
			}else{
				exp_base*=exp_data[x];
			}
			if(highest_progress>=185)exp_base*=geteqeff(4);
			var exp_give=Math.floor(exp_base*rand_2()*geteqeffs(3,5)*prestige_eff()*energyc_eff()*challeff(3)*Math.pow(1.2,(pu[8]||0))*(1+tower*1.5/100)*transcend_eff());
			if(x=='tower')exp_give=0;
			battle_status.log+="战斗胜利，你得到了"+format(exp_give)+"经验<br>";
			var level1=getlv().lv;
			exp+=exp_give;
			var level2=getlv().lv;
			if(level2>level1)battle_status.log+="你升了"+format(level2-level1)+"级<br>";
			hp+=(level2-level1)*10;
			atk+=(level2-level1);
			def+=(level2-level1);
			points+=(level2-level1)*(4+(pu[7]||0));
			var give_equipments=Math.floor(equipment_data[x][2]*(luk**0.5)*(1+(eqlevels[equipment_data[x][0]][equipment_data[x][1]]||0)*0.15)*Math.random()*prestige_eff()*energyc_eff()*challeff(4)*Math.pow(1.2,(pu[10]||0))*transcend_eff());
			if(chall==4||x=='tower')give_equipments=0;
			if(give_equipments>0){
				battle_status.log+=ename+"掉落了"+format(give_equipments)+"个"+equipment_names[equipment_data[x][0]][equipment_data[x][1]];
				equipments[equipment_data[x][0]][equipment_data[x][1]]=(equipments[equipment_data[x][0]][equipment_data[x][1]]||0)+give_equipments;
			}
			if(x%5==4){
				document.getElementById("b"+x).style.display="inline";
				while(progress<x){
					energy+=3;
					if(chall==2)energy-=2;
					progress+=5;
				}
				if(x==69&&highest_progress<69)battle_status.log+="<br>由于你第一次打败山脉BOSS2，转生升级“生命值提升”的效果增加了，同时徽章的效果增加了。";
				if(x==79&&highest_progress<79)battle_status.log+="<br>由于你第一次打败天空BOSS2，转生升级“生命加点提升”的效果增加了。";
				if(x==89&&highest_progress<89)battle_status.log+="<br>由于你第一次打败火山BOSS2，转生升级“生命加点提升”的效果增加了，同时徽章的效果增加了。";
				if(x==99&&highest_progress<99)battle_status.log+="<br>由于你第一次打败城堡BOSS2，转生升级“生命值提升”的效果增加了，同时解锁了新难度！";
				if(x==109&&highest_progress<109)battle_status.log+="<br>由于你第一次打败普通新手村外BOSS，转生升级“生命加点提升”的效果增加了。";
				if(x==119&&highest_progress<119)battle_status.log+="<br>由于你第一次打败普通草原BOSS2，转生升级“初始能量提升”的效果增加了。";
				if(x==129&&highest_progress<129)battle_status.log+="<br>由于你第一次打败普通森林BOSS2，转生升级“生命值提升”的效果增加了，同时徽章的效果增加了。";
				if(x==139&&highest_progress<139)battle_status.log+="<br>由于你第一次打败普通沙漠BOSS2，简单难度怪物获得的经验值得到了不同程度的增加。";
				if(x==149&&highest_progress<149)battle_status.log+="<br>由于你第一次打败普通洞穴BOSS2，转生升级“BOSS额外掉落”的效果增加了，同时徽章的效果增加了。";
				if(x==159&&highest_progress<159)battle_status.log+="<br>由于你第一次打败普通海洋BOSS2，你得到了1000个永久性的经验宝石（不可用于强化）。";
				if(x==169&&highest_progress<169)battle_status.log+="<br>由于你第一次打败普通山脉BOSS2，转生升级“多倍能量消耗设定”的效果增加了，同时你得到的经验值提升了。";
				if(x==179&&highest_progress<179)battle_status.log+="<br>由于你第一次打败普通天空BOSS2，转生升级“生命加点提升”的效果增加了，同时徽章的效果增加了。";
				if(x==184&&highest_progress<184)battle_status.log+="<br>由于你第一次打败普通火山BOSS1，转生升级“初始等级提升”的效果在挑战3中生效，同时徽章的效果开始对经验值生效。";
				if(x==189&&highest_progress<189)battle_status.log+="<br>由于你第一次打败普通火山BOSS2，转生升级“生命值提升”的效果增加了。";
				if(x==194&&highest_progress<194)battle_status.log+="<br>由于你第一次打败普通城堡BOSS1，你得到了99000个永久性的经验宝石（不可用于强化），且通天塔的怪物强度降低了。";
				if(x==199&&highest_progress<199)battle_status.log+="<br>由于你第一次打败普通城堡BOSS2，你解锁了超越（一个新的重置层）。";
				if(pu[4]){
					var rate2=1-Math.pow(0.85,pu[4]**0.75);
					if(highest_progress>=150)rate2=1-Math.pow(0.85,pu[4]**0.85);
					for(var j=x-((pu[4]>=6&&x>=pu[4])?pu[4]:(pu[4]>=6)?x:(pu[4]>=2&&x>=5)?5:4);j<=x;j++){
						give_equipments=Math.floor(equipment_data[j][2]*(luk**0.5)*(1+(eqlevels[equipment_data[j][0]][equipment_data[j][1]]||0)*0.15)*Math.random()*prestige_eff()*energyc_eff()*rate2*challeff(4)*Math.pow(1.2,(pu[10]||0))*transcend_eff());
						if(chall==4)give_equipments=0;
						if(give_equipments>0)battle_status.log+="<br>由于转生升级“BOSS额外掉落”的效果，"+ename+"额外掉落了"+format(give_equipments)+"个"+equipment_names[equipment_data[j][0]][equipment_data[j][1]];
						if(give_equipments>0)equipments[equipment_data[j][0]][equipment_data[j][1]]=(equipments[equipment_data[j][0]][equipment_data[j][1]]||0)+give_equipments;
					}
					if(pu[4]>=2+x/10){
						give_equipments=Math.floor(equipment_data_extra[x][2]*(luk**0.5)*(1+(eqlevels[equipment_data_extra[x][0]][equipment_data_extra[x][1]]||0)*0.15)*Math.random()*prestige_eff()*energyc_eff()*challeff(4)*Math.pow(1.2,(pu[10]||0))*transcend_eff());
						if(highest_progress>=150)give_equipments=Math.floor(give_equipments*1.5);
						if(chall==4)give_equipments=0;
						if(give_equipments>0){
							battle_status.log+="<br>由于转生升级“BOSS额外掉落”的效果，"+ename+"额外掉落了"+format(give_equipments)+"个"+equipment_names[equipment_data_extra[x][0]][equipment_data_extra[x][1]];
							equipments[equipment_data_extra[x][0]][equipment_data_extra[x][1]]=(equipments[equipment_data_extra[x][0]][equipment_data_extra[x][1]]||0)+give_equipments;
						}
					}
				}
			}
			if(x!='tower')battle_status.log+="<br><a href=\"javascript:battle("+x+");\">再次战斗</a>";
			if(x!='tower')energy-=energyc;else tower++;
			battling=0;
		}else{
			if((x==59||x==99||x==159||x==199) && damage1==0)battle_status.log+=ename+"闪避，"+ename+"还剩"+format(enemyhp)+"点生命值<br>";
			else if(x==79&&chall!=1)battle_status.log+="由于BOSS的特性，实际造成了"+damage1.toFixed(2)+"点伤害，"+ename+"还剩"+format(enemyhp)+"点生命值<br>";
			else if(x==179&&chall!=1)battle_status.log+="由于BOSS的特性，实际造成了"+damage1.toFixed(2)+"点伤害，"+ename+"还剩"+format(enemyhp)+"点生命值<br>";
			else if(x==39||x==69||x==79||x==139||x==169||x==179)battle_status.log+="由于BOSS的特性，实际造成了"+format(damage1)+"点伤害，"+ename+"还剩"+format(enemyhp)+"点生命值<br>";
			else if(x%5==4)battle_status.log+="你对"+ename+"造成了"+format(damage1)+"点伤害，"+ename+"还剩"+format(enemyhp)+"点生命值<br>";
			else battle_status.log+="你对"+ename+"造成了"+format(damage1)+"点伤害，"+ename+"还剩"+Math.ceil(enemyhp/enemyhp2*100)+"%生命值<br>";
			let lifesteal=damage1*(geteqeffs(3,7)-1);
			if(lifesteal>gethp()-curhp)lifesteal=gethp()-curhp;
			curhp+=lifesteal;
			if(lifesteal>0)battle_status.log+="你吸取了"+format(lifesteal)+"点生命值，你还剩"+format(curhp)+"点生命值<br>";
			if((x==49||x==99||x==149||x==199) && Math.random()<7/30){
				damage2*=2;battle_status.log+="BOSS暴击！";
			}
			if(x==74||x==174)damage2=Infinity;
			curhp-=damage2;
			if(curhp<=0){
				clearInterval(battle_status.interval);
				if(x!='tower')battle_status.log+=ename+"对你造成了"+format(damage2)+"点伤害，你倒下了<br><a href=\"javascript:battle("+x+");\">再次战斗</a>";
				else battle_status.log+=ename+"对你造成了"+format(damage2)+"点伤害，你倒下了";
				battling=0;
			}else battle_status.log+=ename+"对你造成了"+format(damage2)+"点伤害，你还剩"+format(curhp)+"点生命值<br>";
		}
		document.getElementById("battlelog").innerHTML=battle_status.log;
		mult=mult*1.01;
		if(mult>1.2)mult=mult*1.01;
	}
	if(curhp>0)battle_status.interval=setInterval(battle_turn,777/(geteqeff(2)+(pu[9]||0)));
}*/


function getpp(){
	var pp=0;
	for(var j=0;j<4;j++)for(var i=0;i<equipment_names[j].length;i++){
		if((equipments[j][i]||0)>0)pp=pp+Math.log(1+(equipments[j][i]||0))*(1+(eqlevels[j][i]||0)/Math.max(20-(pu[5]||0),11));
	}
	pp=pp*Math.log10(getlv().lv);
	if(chall==2)return Math.floor(((pp**1.9)/75) * geteqeffs(3,0) * Math.pow(1.01,progress)*geteqeff(4)*challeff(0));
	if(highest_progress>=150)return Math.floor(((pp**1.9)/75+(progress+(pu[1]||0)*2+challeff(2)-energy-10)/15) * geteqeffs(3,0) * Math.pow(1.01,progress)*geteqeff(4)*challeff(0)*(1+tower*1.5/100)*transcend_eff());
	if(highest_progress>=120)return Math.floor(((pp**1.9)/75+(progress+(pu[1]||0)*2+challeff(2)-energy-10)/15) * geteqeffs(3,0) * Math.pow(1.01,progress)*geteqeff(4)*challeff(0)*transcend_eff());
	if(highest_progress>=100)return Math.floor(((pp**1.9)/75+(progress+(pu[1]||0)+challeff(2)-energy-10)/15) * geteqeffs(3,0) * Math.pow(1.01,progress)*geteqeff(4)*challeff(0)*transcend_eff());
	return Math.floor(((pp**1.9)/75+(30+progress+(pu[1]||0)+challeff(2)-energy)/15) * geteqeffs(3,0) * Math.pow(1.01,progress)*geteqeff(4)*challeff(0)*transcend_eff());
}
function gettp(){
	var tp=Math.pow(Math.log10(pp+getpp()+1)/10,9);
	return Math.floor(tp);
}
function prestige(){
	softreset(true);
}
function transcend(){
	if(!confirm(i18n.transcend))return;
	softreset(true);
	tp+=gettp();
	pp=0;
	pu=[];
	softreset(true);
	pp=0;
}
function prestige_eff(){
	return 1+pp**0.5/5;
}
function transcend_eff(){
	return 1+tp**0.5;
}
function energyc_eff(){
	return energyc**1.2;
}
function prestige_cost(x){
	var pu_max=[12,50,16,26,17,13,7,6,9,9,3];
	if(pu[x] && pu[x]>=pu_max[x])return Infinity;
	if(x==0){
		if(pu[x])return Math.floor(Math.pow(10,3+pu[x])/(pu[x]**2+1));else return 1000;
	}
	if(x==1){
		if(pu[x])return Math.pow(3,pu[x])*100;else return 100;
	}
	if(x==2){
		if(pu[x])return Math.pow(5,pu[x])*10;else return 10;
	}
	if(x==3){
		if(pu[x])return Math.pow(2,pu[x])*10000;else return 10000;
	}
	if(x==4){
		if(pu[x])return Math.pow(3,pu[x])*10000;else return 10000;
	}
	if(x==5){
		if(pu[x]>=10)return Math.floor(Math.pow(1+pu[x]*0.2,pu[x])*(pu[x]**5));
		if(pu[x]>=5)return Math.floor(Math.pow(1+pu[x]*0.2,pu[x])*100000);
		if(pu[x])return Math.pow(2,pu[x])*100000;else return 100000;
	}
	if(x==6){
		if(pu[x])return Math.pow(10,pu[x])*1000000;else return 1000000;
	}
	if(x==7){
		if(pu[x])return Math.pow(8,pu[x])*10000000;else return 10000000;
	}
	if(x==8){
		if(pu[x])return Math.pow(3,pu[x])*100000000;else return 100000000;
	}
	if(x==9){
		if(pu[x])return Math.pow(2,pu[x]**2)*1000000000;else return 1000000000;
	}
	if(x==10){
		if(pu[x])return Math.pow(3,pu[x])*1e11;else return 1e11;
	}
}
function prestige_up(x){
	if(pp<prestige_cost(x))return;
	pp-=prestige_cost(x);
	if(x==0){
		var level1=getlv().lv;
		if(pu[0])exp-=1000*((Math.pow(4,pu[0])-1)*(3+(pu[0]**pu[0])*2));
		else pu[0]=0;
		pu[0]++;
		exp+=1000*((Math.pow(4,pu[0])-1)*(3+(pu[0]**pu[0])*2));
		var level2=getlv().lv;
		hp+=(level2-level1)*10;
		atk+=(level2-level1);
		def+=(level2-level1);
		points+=(level2-level1)*(4+(pu[7]||0));
	}
	if(x==1){
		energy++;
		if(highest_progress>=120)energy++;
		if(pu[1])pu[1]++;else pu[1]=1;
	}
	if(x==2){
		if(pu[2])pu[2]++;else pu[2]=1;
	}
	if(x==3){
		if(pu[3])pu[3]++;else pu[3]=1;
	}
	if(x==4){
		if(pu[4])pu[4]++;else pu[4]=1;
	}
	if(x==5){
		if(pu[5])pu[5]++;else pu[5]=1;
	}
	if(x==6){
		if(pu[6])pu[6]++;else pu[6]=1;
	}
	if(x==7){
		if(pu[7])pu[7]++;else pu[7]=1;
		points+=getlv().lv;
	}
	if(x==8){
		if(pu[8])pu[8]++;else pu[8]=1;
	}
	if(x==9){
		if(pu[9])pu[9]++;else pu[9]=1;
	}
	if(x==10){
		if(pu[10])pu[10]++;else pu[10]=1;
	}
}
function eqlevel_cost(x,i){
	return Math.pow(10,(eqlevels[x][i]||0));
}
function eqlevelup(x,i){
	if((equipments[x][i]||0)<eqlevel_cost(x,i)){
		return;
	}
	equipments[x][i]-=eqlevel_cost(x,i);
	eqlevels[x][i]=(eqlevels[x][i]||0)+1;
}
function startchall(x){
	softreset(true);
	chall=x;
	if(chall==2)energy=1,progress=0,setdiff(0);
	if(chall==3){
		exp=1000,hp=100,atk=10,def=10,luk=0,points=10*(4+(pu[7]||0)),energy=30+(pu[1]||0)+(challeff(2)),progress=0;
		if(highest_progress>=120)energy+=pu[1];
		if(highest_progress>=100){
			progress=100;
			energy+=60;
		}
		if(pu[0]&&highest_progress>=185){
			var level1=getlv().lv;
			exp+=1000*((Math.pow(4,pu[0])-1)*(3+(pu[0]**pu[0])*2));
			var level2=getlv().lv;
			hp+=(level2-level1)*10;
			atk+=(level2-level1);
			def+=(level2-level1);
			points+=(level2-level1)*(4+(pu[7]||0));
		}
	}
}
function challeff(x){
	if(highest_progress<75&&x==2)return 0;
	if(highest_progress<75)return 1;
	var temp=(challlvs[x]||0)+1;
	temp=Math.log10(temp);
	if(x==0)return temp**2/500+1;
	if(x==1){
		if(temp**2>=50)return temp**6/125000+1;
		return temp**2/50+1;
	}
	if(x==2){
		if(temp>=8.4)return Math.floor(temp**3/68);
		if(temp>=6.5)return Math.floor((temp-2.5)**2/4);
		return Math.max(Math.floor((temp-3)**1.1),0);
	}
	if(x==3)return temp**3/50+1;
	if(x==4)return temp**2/100+1;
	if(x==5)return temp**1.5/100+1;
	if(x==6)return temp**2/200+1;
}