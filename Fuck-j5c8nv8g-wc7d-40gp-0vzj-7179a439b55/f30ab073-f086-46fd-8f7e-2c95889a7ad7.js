function gotop(){$('body,html').animate({scrollTop:0},600);}
function gofooter(){$('body,html').animate({scrollTop:$(document).height()},600);}
function lazy(){$("img.lazy").lazyload({effect : "fadeIn"})}

function desc1(obj){
    $(obj).text() == '倒序 ↑' ? $(obj).text('正序 ↓') : $(obj).text('倒序 ↑');
    let lis =  $("#chapterList1").children();
    $("#chapterList1").empty();
    for(let i = lis.length-1; i >= 0; i--) {
        $("#chapterList1").append(lis.eq(i).clone())
    }
}
function desc2(obj){
    $(obj).text() == '倒序 ↑' ? $(obj).text('正序 ↓') : $(obj).text('倒序 ↑');
    let lis =  $("#chapterList2").children();
    $("#chapterList2").empty();
    for(let i = lis.length-1; i >= 0; i--) {
        $("#chapterList2").append(lis.eq(i).clone())
    }
}
function desc3(obj){
    $(obj).text() == '倒序 ↑' ? $(obj).text('正序 ↓') : $(obj).text('倒序 ↑');
    let lis =  $("#chapterList3").children();
    $("#chapterList3").empty();
    for(let i = lis.length-1; i >= 0; i--) {
        $("#chapterList3").append(lis.eq(i).clone())
    }
}
function desc4(obj){
    $(obj).text() == '倒序 ↑' ? $(obj).text('正序 ↓') : $(obj).text('倒序 ↑');
    let lis =  $("#chapterList4").children();
    $("#chapterList4").empty();
    for(let i = lis.length-1; i >= 0; i--) {
        $("#chapterList4").append(lis.eq(i).clone())
    }
}
function desc5(obj){
    $(obj).text() == '倒序 ↑' ? $(obj).text('正序 ↓') : $(obj).text('倒序 ↑');
    let lis =  $("#chapterList5").children();
    $("#chapterList5").empty();
    for(let i = lis.length-1; i >= 0; i--) {
        $("#chapterList5").append(lis.eq(i).clone())
    }
}
function desc6(obj){
    $(obj).text() == '倒序 ↑' ? $(obj).text('正序 ↓') : $(obj).text('倒序 ↑');
    let lis =  $("#chapterList6").children();
    $("#chapterList6").empty();
    for(let i = lis.length-1; i >= 0; i--) {
        $("#chapterList6").append(lis.eq(i).clone())
    }
}