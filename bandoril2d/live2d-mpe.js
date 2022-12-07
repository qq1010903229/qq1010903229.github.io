if(localStorage.l2dv!='2'){
	localStorage.l2dm='/kasumievent130.json';
	localStorage.l2dv='2';
}
localStorage.l2dm=localStorage.l2dm || '/kasumievent130.json';
function initl2d(){
$("#live2d").attr("width",300);
$("#live2d").attr("height",375);
$(".waifu").css("right",'0px');
$('.waifu-tool').show();
$(".waifu-tips").width('250px');
$(".waifu-tips").height('120px');
$(".waifu-tips").css("top",'-15px');
$(".waifu-tips").css("font-size",'15px');
$(".waifu-tool").css("font-size",'16px');
$(".waifu-tool span").css("line-height",'20px');
$('.waifu-tool .fui-star').hover(function (){
	showMessage('Do you want to trigger my Live2D motion?',3000);
});
$('.waifu-tool .fui-star').click(function (){
	let id=Math.floor(Math.random()*5+1);
	if(id==1)window.l2de.startMotion('c7',0);
	if(id==2)window.l2de.startMotion('c',0);
	if(id==3)window.l2de.startMotion('c4',0);
	if(id==4)window.l2de.startMotion('c2',0);
	if(id==5)window.l2de.startMotion('c3',0);
	window.l2da.src="/bandoril2d/systemProfile_001_"+id+".mp3";
	window.l2da.currentTime=0;
	window.l2da.play();
	currentevent="systemProfile_001_"+id;
});
$('.waifu-tool .fui-gear').hover(function (){
	showMessage('Do you want to change my costume?',3000);
});
$('.waifu-tool .fui-gear').click(function (){
	loadlive2d('live2d', localStorage.l2dm=['/kasumi.json','/kasumievent130.json','/kasumievent168.json','/kasumi2star1.json','/kasumi2star2.json','/kasumicasual.json','/kasumi19af.json'][Math.floor(Math.random()*6.06)], null);
	window.l2da.currentTime=0;
	window.l2da.pause();
});
$('.waifu-tool .fui-cmd').hover(function (){
	showMessage('Do you want to fix the display of my Live2D model?',3000);
});
$('.waifu-tool .fui-cmd').click(function (){
	loadlive2d('live2d', localStorage.l2dm, null);
	window.l2da.currentTime=0;
	window.l2da.pause();
});
loadlive2d('live2d', localStorage.l2dm, null);
showMessage('Sparkling and Heart-Pounding, I\'m Kasumi Toyama! (Press the button at the right-down corner to fix the display of my Live2D model)',3000,true);
}
function setl2dm(a){
	loadlive2d('live2d', localStorage.l2dm=a, null);
	window.l2da.currentTime=0;
	window.l2da.pause();
}
setTimeout(initl2d,500);
//window.l2de.startMotion('c',0);


function showMessage(text, timeout, flag) {
    if(flag || sessionStorage.getItem('waifu-text') === '' || sessionStorage.getItem('waifu-text') === null){
        if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
        console.log('[Message]', text.replace(/<[^<>]+>/g,''));
        
        if(flag) sessionStorage.setItem('waifu-text', text);
        
        $('.waifu-tips').stop();
        $('.waifu-tips').html(text).fadeTo(200, 1);
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}

function hideMessage(timeout) {
    $('.waifu-tips').stop().css('opacity',1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem('waifu-text')}, timeout);
    $('.waifu-tips').delay(timeout).fadeTo(200, 0);
}

window.l2da=new Audio();
window.l2da.src="/bandoril2d/systemProfile_001_1.mp3";
window.timeout0=0;
currentevent="systemProfile_001_1";
function syncupdate(){
	window.l2de.setLipSync(null);
	var arr=lipSyncValues[currentevent];
	if(arr){
		var index=Math.floor(window.l2da.currentTime*20+2.5);
		if(arr[index])window.l2de&&window.l2de.setLipSyncValue(arr[index]);
		else window.l2de&&window.l2de.setLipSyncValue(0);
	}else window.l2de&&window.l2de.setLipSyncValue(0);
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
xhr.open("GET","/bandoril2d/"+a+".txt",true);
xhr.send();
}
getLSV("systemProfile_001_1",11);
getLSV("systemProfile_001_2",11);
getLSV("systemProfile_001_3",11);
getLSV("systemProfile_001_4",11);
getLSV("systemProfile_001_5",11);