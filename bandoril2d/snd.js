window.l2da=new Audio();
window.timeout0=0;
stime=1e100;
currentevent="";
function playmodelsound(a,b){
	stime=1e100;
	window.l2da.pause();
	clearTimeout(window.timeout0);
	if(window.l2de.live2DModel){
		currentevent=a+"-"+b;
		setTimeout("window.l2de.startMotion('wtev"+a+"-"+b+"',0)",300);
		if(a==1&&b==0)window.timeout0=setTimeout("window.l2de.startMotion('wtev1-0a',0)",2800);
		if(a==16&&b==0)window.timeout0=setTimeout("window.l2de.startMotion('wtev16-0a',0)",2600);
		stime=Date.now()+300;
	}else{
		setTimeout(playmodelsound.bind(null,a,b),50);
	}
}
function syncupdate(){
	window.l2de.setLipSync(null);
	var ti=Date.now()-stime;
	var arr=lipSyncValues[currentevent];
	if(arr){
		var index=Math.floor(ti/50);
		if(arr[index])window.l2de&&window.l2de.setLipSyncValue(arr[index]);
		else window.l2de&&window.l2de.setLipSyncValue(0);
	}
}
setInterval(syncupdate,50);

lipSyncValues={};

function getLSV(a,b){
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=(function(xhr,a){
if(xhr.readyState==4 && xhr.status == 200){
var resp=xhr.responseText.split("\n");
var result=[];
for(var i=1;i<resp.length;i++){
if(result[Math.floor(i/50)]===undefined)result[Math.floor(i/50)]=0;
var temp=parseFloat(resp[i]);
if(temp!=temp)temp=0;
result[Math.floor(i/50)]+=(temp/b);
}
result.push(0);
lipSyncValues[a]=result;
}
}).bind(null,xhr,a);
xhr.open("GET","bandori-l2d-api/get/"+a+".txt",true);
xhr.send();
}
getLSV("1-0",13);
getLSV("1-1",13);
getLSV("16-0",12);
getLSV("16-1",12);
