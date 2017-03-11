(function() {
	slider();
	function slider() {
		var slider = document.getElementById("j_slider");
		var sliImg = document.getElementById("j_slider_img");
		var imgLis = sliImg.children;
		var sliPointer = document.getElementById("j_slider_pointer");
		var pntLis = sliPointer.children;
//		console.log(pntLis.length);
		for (var i = 0; i < pntLis.length; i++) {
			pntLis[i].index = i;
			pntLis[i].onmouseenter = function(){
				for(var j = 0;j<pntLis.length;j++) {
					pntLis[j].className = "";
				}
				this.className = "point_current";
				end = -this.index*1920;
			}
		}
		/*定时器*/
		var leader = 0,end = 0;
		setInterval(play,30);
		function play(){
			leader = leader+(end-leader)/10;
			sliImg.style.left = leader + "px";
		}
		//		console.log(imgLis.length);
	}
	/*菜单栏*/

	munes();

	function munes() {
		var dls = document.getElementById("munes").getElementsByTagName("dl");
		var dds = document.getElementById("munes").getElementsByTagName("dd");
		var mun = document.getElementById("munes");
		for (var i = 0; i < dls.length; i++) {
			dls[i].index = i;
			dls[i].onmousemove = function() {
				for (var i = 0; i < dls.length; i++) {
					dds[i].style.display = "none";
				}
				dds[this.index].style.display = "block";
			}
			dls[i].onmouseout = function() {
				dds[this.index].style.display = "none";
			}
		}
	}

		/*leftFixed*/
	leftFixed();

	function leftFixed() {
		var share = $("#j_share");
		var share_ul = $("#j_share ul");
		var open = $("#j_share_open");
		open.on("mouseenter", function() {
			share_ul.css("display", "block");
		});
		share.on("mouseleave", function() {
			share_ul.css("display", "none");
		});
	}

	/*rightFixed*/
	rightFixed();

	function rightFixed() {
		/*回到顶部*/
		var j_navTop = $("#j_navTop");
		$(window).scroll(function() {
			var distance = $(document).scrollTop();
			$(document).scroll(function() {
				if (distance > 500) {
					j_navTop.show();
				} else {
					j_navTop.hide();
				}
				/*console.log(distance);*/

			});
		});
		/*手机二维码*/
		var j_moblie = $("#j_moblie");
		j_moblie.on("mouseenter",function(){
			$(this).animate({
				"width":"150px",
				"height":"150px"
			},500);
		});
		j_moblie.on("mouseleave",function(){
			$(this).animate({
				"width":"60px",
				"height":"60px"
			},500);
		});

	}
}());
