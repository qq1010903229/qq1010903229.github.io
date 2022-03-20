localStorage.l2dm=localStorage.l2dm || '/saayae145.json';
function initl2d(){
$("#live2d").attr("width",300);
$("#live2d").attr("height",375);
$(".waifu").css("right",'0px');
$("#live2d")[0].addEventListener("click",l2dclick);
loadlive2d('live2d', localStorage.l2dm, null);
}
function setl2dm(a){
loadlive2d('live2d', localStorage.l2dm=a, null);
}
function l2dclick(){
window.l2de.startMotion('c',0);
}
setTimeout(initl2d,500);