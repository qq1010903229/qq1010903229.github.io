if(!localStorage.l2dv){
	localStorage.l2dm='/kasumievent130.json';
	localStorage.l2dv='1';
}
localStorage.l2dm=localStorage.l2dm || '/kasumievent130.json';
function initl2d(){
$("#live2d").attr("width",300);
$("#live2d").attr("height",375);
$(".waifu").css("right",'0px');
$('.waifu-tool').show();
$(".waifu-tips").width('250px');
$(".waifu-tips").height('100px');
$(".waifu-tips").css("top",'-15px');
$(".waifu-tips").css("font-size",'15px');
$(".waifu-tool").css("font-size",'16px');
$(".waifu-tool span").css("line-height",'20px');
$("#live2d")[0].addEventListener("click",l2dclick);
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
	'你知道吗？我会跳舞！<a href="https://www.bilibili.com/video/BV14S4y177bd">看一下我跳的《千本桜》吧！</a>',
	'你知道吗？我会跳舞！<a href="https://www.bilibili.com/video/BV14S4y177bd">看一下我跳的《千本桜》吧！</a>',
	'你知道吗？我已经打出了《HELL! or HELL?》Special难度的ALL PERFECT！',
	'你知道吗？我已经打出了loader3229的qualia -ideaesthesia- [ANOTHER]（Bestdori ID 73910）的ALL PERFECT！',
	'你知道吗？我的手指每秒可以点击屏幕15次，而loader3229的手指每秒可以点击屏幕9.6次。',
	'你知道吗？我会弹任何型号的吉他，包括RANDOM STAR。',
	'你知道吗？把我的Live2D服装切换到国服2021愚人节，再点一次这个按钮，就会发生不同的事情哦！',
	'你知道吗？Kirakira就是Kirakira，而Dokidoki就是Dokidoki！',
	'你知道吗？loader3229正在为我制作一个特别的RANDOM STAR。',
	'你知道吗？我知道，你已经点了'+chat_times+'次这个按钮。（本计数在刷新或离开页面后重置）',
	],5000,true);
});
$('.waifu-tool .fui-star').hover(function (){
	showMessage('想让我做Live2D动作吗？',3000);
});
$('.waifu-tool .fui-star').click(function (){
	window.l2de.startMotion('c',0);
});
$('.waifu-tool .fui-image').hover(function (){
	showMessage('想看一下loader3229给我拍的照片吗？',3000);
});
$('.waifu-tool .fui-image').click(function (){
	window.open('/ksm/MMDPic'+Math.floor(Math.random()*2)+'.png');
});
$('.waifu-tool .fui-gear').hover(function (){
	showMessage('想切换我的Live2D服装吗？',3000);
});
$('.waifu-tool .fui-gear').click(function (){
	loadlive2d('live2d', localStorage.l2dm=['/kasumi.json','/kasumievent130.json','/kasumi2star1.json','/kasumi2star2.json','/kasumicasual.json','/kasumi19af.json'][Math.floor(Math.random()*5.05)], null);
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
});
loadlive2d('live2d', localStorage.l2dm, null);
showMessage('我是闪闪发光、心动不已的户山香澄！而且，因为loader3229，我和其他的户山香澄不一样！（点击我右边最下面的按钮或上面“Live2D模型显示不正常修复”修复我的Live2D模型显示问题）',5000);
}
function setl2dm(a){
loadlive2d('live2d', localStorage.l2dm=a, null);
}
function l2dclick(){
	
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
