if(localStorage.l2dv!='3'){
	localStorage.l2dm='/kasumik.json';
	localStorage.l2dv='3';
}
localStorage.l2dm=localStorage.l2dm || '/kasumik.json';
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
$('.waifu-tool .fui-chat').hover(function (){
	showMessage('想要了解不一样的我吗？',3000);
});
var chat_times=0;
$('.waifu-tool .fui-chat').click(function (){
	chat_times++;
	if(localStorage.l2dm.indexOf('kasumi19af')!=-1){
	showMessage([
	'你知道吗？我，名侦探香澄，很快就找出了丸之山上的许多线索！'
	],5000,true);
	}else showMessage([
	'你知道吗？我会跳舞！<a href="https://www.bilibili.com/video/BV14S4y177bd">看一下我跳的《千本桜》吧！</a>',
	'你知道吗？我会跳舞！<a href="https://www.bilibili.com/video/BV14S4y177bd">看一下我跳的《千本桜》吧！</a>',
	'你知道吗？我会跳舞！<a href="https://www.bilibili.com/video/BV1hv4y1i7EM">看一下我跳的《スターナイトスノー》吧！</a>',
	'你知道吗？我会跳舞！<a href="https://www.bilibili.com/video/BV1hv4y1i7EM">看一下我跳的《スターナイトスノー》吧！</a>',
	'你知道吗？我已经打出了《HELL! or HELL?》Special难度的ALL PERFECT！',
	'你知道吗？我已经打出了《SENSENFUKOKU》Special难度的ALL PERFECT！',
	'你知道吗？我已经打出了loader3229的qualia -ideaesthesia- [ANOTHER]（Bestdori ID 73910）的ALL PERFECT！',
	'你知道吗？我的手指每秒可以点击屏幕15次，而loader3229的手指每秒可以点击屏幕9.6次。',
	'你知道吗？我会弹任何型号的吉他，包括RANDOM STAR。',
	'你知道吗？把我的Live2D服装切换到国服2021愚人节，再点一次这个按钮，就会发生不同的事情哦！',
	'你知道吗？Kirakira就是Kirakira，而Dokidoki就是Dokidoki！',
	'你知道吗？loader3229正在为我制作一个特别的RANDOM STAR。',
	'你知道吗？我知道，你已经点了'+chat_times+'次这个按钮。（本计数在刷新或离开页面后重置）',
	'你知道吗？我有许多不同的版本，包括Live2D版，MikuMikuDance版，MV版等等。',
	'你知道吗？在loader3229的MikuMikuDance 7.39里面，可以同时存在至少10个我。',
	'你知道吗？<a href="/gt.pdf">这个吉他谱</a>我可以完美弹出来，而其他的香澄应该不行。',
	],5000,true);
});
$('.waifu-tool .fui-star').hover(function (){
	showMessage('想让我做Live2D动作吗？',3000);
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
$('.waifu-tool .fui-image').hover(function (){
	showMessage('想看一下loader3229给我拍的照片吗？',3000);
});
$('.waifu-tool .fui-image').click(function (){
	window.open('/ksm/MMDPic'+Math.floor(Math.random()*2)+'.png');
});
$('.waifu-tool .fui-folder').hover(function (){
	showMessage('想看一下我的档案吗？',3000);
});
$('.waifu-tool .fui-folder').click(function (){
	document.location.href='/ksm/';
});
$('.waifu-tool .fui-gear').hover(function (){
	showMessage('想切换我的Live2D服装吗？',3000);
});
$('.waifu-tool .fui-gear').click(function (){
	loadlive2d('live2d', localStorage.l2dm=['/kasumi.json','/kasumik.json','/kasumievent130.json','/kasumievent168.json','/kasumi2star1.json','/kasumi2star2.json','/kasumicasual.json','/kasumi19af.json'][Math.floor(Math.random()*7.07)], null);
	window.l2da.currentTime=0;
	window.l2da.pause();
});
$('.waifu-tool .fui-info-circle').hover(function (){
	showMessage('想看关于我的信息吗？',3000);
});
$('.waifu-tool .fui-info-circle').click(function (){
	if(window.confirm("点“确定”进入看板娘的萌娘百科页面，“取消”进入如何添加看板娘页面"))window.open('https://zh.moegirl.org.cn/zh-cn/户山香澄');
	else window.open('https://www.fghrsh.net/post/123.html');
});
$('.waifu-tool .fui-cmd').hover(function (){
	showMessage('想修复我的Live2D模型显示问题吗？',3000);
});
$('.waifu-tool .fui-cmd').click(function (){
	loadlive2d('live2d', localStorage.l2dm, null);
	window.l2da.currentTime=0;
	window.l2da.pause();
});
loadlive2d('live2d', localStorage.l2dm, null);
if(document.location.href.startsWith(document.location.origin+"/ksm/?")||document.location.href==document.location.origin+"/ksm/")showMessage('你进入了我的档案页，是想更多的了解我吗？（点击我右边最下面的按钮或上面“Live2D模型显示不正常修复”修复我的Live2D模型显示问题）',3000,true);
else showMessage('我是闪闪发光、心动不已的户山香澄！而且，因为loader3229，我和其他的户山香澄不一样！（点击我右边最下面的按钮或上面“Live2D模型显示不正常修复”修复我的Live2D模型显示问题）',3000,true);
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