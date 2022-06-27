$(function() {

		$('.tab-item').on('click', function () {
				var i = $(this).index();
				$(this).addClass('selected').siblings('.selected').removeClass('selected');
				$('.tab-list').eq(i).addClass('selected').siblings('.selected').removeClass('selected')
		});

		$('.downtab-item').on('click', function () {
				var i = $(this).index();
				$(this).addClass('selected').siblings('.selected').removeClass('selected');
				$('.module-downlist').eq(i).addClass('selected').siblings('.selected').removeClass('selected')
		});

		$(".video-info-content").each(function(){
				var maxwidth=120;
				var text=$(this).text();
				if($(this).text().length>maxwidth){
						$(this).text($(this).text().substring(0,maxwidth));
						$(this).html($(this).html()+"..."+"<a class='more-content'>全文</a>");
				};
				$(this).find(".more-content").click(function(){
						$(this).parent().text(text);
				});
		});

		$('.sort-button').click(function() {
			 if ($(this).hasClass('asc')) {
					 $(this).removeClass('asc').addClass('desc');
			 } else {
					 $(this).removeClass('desc').addClass('asc');
			 }
			 var a = $('.module-list:eq(' + $(this).attr('data') + ') .sort-item');
			 var b = $('.module-list:eq(' + $(this).attr('data') + ') .sort-item a');
			 a.html(b.get().reverse());
	 });

	 $(".search-input").click(function(){
			 $("body").addClass("mobile-open");
			 if ($('.ac_hot').hasClass('none')) {
	         $('.ac_hot').removeClass('none');
					 $('.search-input').addClass('search-focus');
					 $('.search-btn').addClass('search-focus');
	      }
   });
	 $(document).click(function(event){
			 var _con = $('.search-input');
			 if( !_con.is(event.target) ){
	        $('.ac_hot').addClass('none');
					$("body").removeClass("mobile-open");
					$('.search-input').removeClass('search-focus');
					$('.search-btn').removeClass('search-focus');
	      }
	 });

	 $('.gotodownloadlist').click(function(){
		 $('html,body').animate({scrollTop:$('#download-list').offset().top}, 800);
	 });

	 var $h = $("html");
	 var $overlay = $('.module-heading .shortcuts-mobile-overlay');
	 $h.on("click", ".module-tab", function(f) {
			 $(this).toggleClass("module-tab-drop");
			 $("html").addClass("mobile");
			 $overlay.fadeIn(200);
	 });
	 $h.on("click", ".module-sorttab", function(u) {
			 $(this).addClass("module-tab-drop");
	 });
	 $h.on("click", ".module-tab [data-dropdown-value]", function(h) {
			 var g = $(this);
			 var f = g.parents(".module-tab");
			 f.find(".module-tab-input").val(g.data("dropdown-value"));
			 f.find(".module-tab-value").text(g.text())
	 });
	 $h.on("click", function(g) {
			 var f = $(g.target);
			 if (!f.parents().hasClass("module-tab-drop")) {
					 $(".module-tab").removeClass("module-tab-drop");
					 $("html").removeClass("mobile");
					 $overlay.fadeOut(300);
			 }
	 });
	 $(document).on('click','.close-drop',function(){
	     $(this).parents().removeClass("module-tab-drop");
	 		 $("html").removeClass("mobile");
	 });

	 $.fn.extend({
			 "mqUp": function(value) {
					 var docthis = this;
					 value = $.extend({
							 "li_h": "40",
							 "time": 5000,
							 "movetime": 1000
					 },value)
					 function autoani() {
							 $("li:first", docthis).animate({
									 "margin-top": -value.li_h
							 },
							 value.movetime,
							 function() {
									 $(this).css("margin-top", 0).appendTo(".tips-list");
							 })
					 }
					 var anifun = setInterval(autoani, value.time);
					 $(docthis).children("li").hover(function() {
							 clearInterval(anifun);
					 },
					 function() {
							 anifun = setInterval(autoani, value.time);
					 })
			 }
	 });
	 $(".close-btn").click(function(){
		 	$(".tips-box").addClass("up");
   });

	 $(".btn-screen").click(function(){
		 	$('body').append('<div class="popup popup-tips open"><div class="popup-header"><h3 class="popup-title">投屏教程</h3></div><div class="popup-main"><p><strong>第一步</strong><br />将电视/盒子、手机连接到同一WIFI下；</p><p><strong>第二步</strong><br />在视频播放页面，找到 <strong><i class="icon-screen-o"></i></strong> 图标，从列表中选择需要投屏的设备即可投屏成功；</p><p><strong>依然无法连接到电视？</strong><br />请点击下方按钮，查看不同手机和浏览器的投屏教程。</p></div><div class="popup-footer"><a href="/screen.html" class="popup-btn-o">查看详细教程</a></div><div class="close-popup" id="close-popup"><i class="icon-close-o"></i></div></div><div class="shortcuts-mobile-overlay"></div>');
			$("#close-popup").click(function() {
					$('.popup').remove();
			});
   });

	 $(".domain").click(function(){
		 	$('body').append('<div class="popup open"><div class="popup-icon"><img src="/statics/images/backhome.svg?2"></div><div class="popup-header"><h3 class="popup-title">官方网站列表</h3></div><div class="popup-main"><p>目前网络上出现了许多山寨影视的网站，以下是影视官方域名，请认准并保存，以防上当受骗。</p><p>- <a href="//www.fuyuli.com"><strong>影视大全</strong></a><br />- <a href="//www.fuyuli.com"><strong>最新电影</strong></a><br />- <a href="//www.fuyuli.com"><strong>电影大全</strong></a></p></div><div class="popup-footer"><a href="/#/" class="popup-btn-o">查看全部域名</a></div><div class="close-popup" id="close-popup"><i class="icon-close-o"></i></div></div><div class="shortcuts-mobile-overlay"></div>');
			$("#close-popup").click(function() {
					$('.popup').remove();
			});
   });

	 $(".search-input").keydown(function(event) {
			 if (event.keyCode == 13 || event.keyCode == 108) {
					 search();
			 }
	 });
	 $(".search-go").click(search);

	var cookie_pop = '';
	if ($.cookie('cookie_name') == null) {
			$('body').append(cookie_pop);
			setTimeout(function() {
			},500);
	}
	$(document).ready(function(){
	   $("#close-popup").click(function(){
				$(".popup").hide().removeClass("open");
				$.cookie('cookie_name', 'the_value', { expires: 30, path: '/' });
	  });
	});

	var u = navigator.userAgent;
	if(u.indexOf("DianYingIm.com")> -1){
		$(document).ready(function(){
			$(".android").hide();
			$('.app').hide();
			$(".app-footer").removeClass("none");
			$(".popup").hide().removeClass("open");
			$.cookie('cookie_name', 'the_value', { expires: 30, path: '/' });
		});
	} else if(u.indexOf("iPhone")> -1 || u.indexOf("iPad")> -1) {
		 $(document).ready(function(){
			 $(".android").hide();
		 });
	} else {
		 $(document).ready(function(){
			 $('.app-text').removeClass('none');
		 });
	}

});

function search() {
    var key = $(".search-input").val().trim();
    key = key.length > 50 ? key.substr(0, 50) : key;
    if (!key) {
        $(".search-input").focus().text("");
        return;
    }
    var url = document.location.origin;
    url += "/search-";
    url += encodeURIComponent(key) + "-------------/";
    location.href = url;
}

