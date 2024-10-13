$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var passTarget = null;
	var passLock = false;

	// initial tab for IE problem
	$(".nav-tabs a:eq(0)").trigger("click");
	$(".nav-tabs a:eq(1)").trigger("blur");

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
//			setheight = $(window).height();
//			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
				$(".music-intro-dummy-1").show();
				$(".music-intro-dummy-2").show();
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$(".music-intro-dummy-1").hide();
				$(".music-intro-dummy-2").hide();
			}
		}
		ori_width = width;
	}

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 12;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	$(".music-cover").on("click tap", function() {

		if (passLock) {
			return;
		}
		passLock = true;
		passTarget = $(this);
		var coverTL1 = new TimelineMax({ onComplete:nextCover });
		coverTL1.to(passTarget, 0.5, { scale: 0.2 })
		.to(passTarget, 0.3, { x: -200, autoAlpha: 0 });
	});

	function nextCover() {

		passTarget.hide();
		var coverTL2 = new TimelineMax({ onComplete:finishCover });
		var target = passTarget.parents(".music-items").find(".music-intro-1");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 });
		target = passTarget.parents(".music-items").find(".music-intro-2");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 }, "-=1");
		target = passTarget.parents(".music-items").find(".music-intro-3");
		target.show();
		coverTL2.from(target, 1, { x: 200, autoAlpha: 0 }, "-=1");
		resize();
		$("html, body").animate({scrollTop: $("#" + passTarget.parents(".music-items").attr("id")).offset().top}, 500);
	}

	function finishCover() {
		passLock = false;
	}

	$(".music-extra-back a").on("click tap", function() {
		var urlParam = window.location.search.split("back=")[1] ? window.location.search.split("back=")[1] : "no";

		if (urlParam != "no") {
			var mainClass = urlParam.split("-")[0] ? urlParam.split("-")[0] : "no";
			var subClass = urlParam.split("-")[1] ? urlParam.split("-")[1] : "no";
			var itemClass = urlParam.split("-")[2] ? urlParam.split("-")[2] : "no";
			if (mainClass != "no" && subClass != "no" && itemClass != "no") {
				var targetClass = "";
				if (mainClass == "") {
					
				} else {
					targetClass = "music";
				}
				if (subClass == "2016") {
					location.replace("https://garymomo" + subClass + ".github.io/redirection/" + targetClass + "?item=" + itemClass);
				} else {
					location.replace("https://garymomo" + subClass + ".github.io/" + targetClass + "?item=" + itemClass);
				}
			} else {
				location.replace("https://garymomoindex.github.io/?visit=true");
			}
		} else {
			location.replace("https://garymomoindex.github.io/?visit=true");
		}
	});

	$(".btn-modal").on("click tap", function() {
		var htmlIframe1 = '<iframe src="https://www.youtube.com/embed/';
		var htmlIframe2 = '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		var htmlIframeSrc = '';
		var chkId = $(this).attr("id");
		if (chkId == 'adModalb1-1') {
			htmlIframeSrc = 'QM4FNsa7S1Y';
		} else if (chkId == 'adModalb1-2') {
			htmlIframeSrc = 'kw1meVVXtxI';
		} else if (chkId == 'adModalb1-3') {
			htmlIframeSrc = '16jLUePq3aw';
		} else if (chkId == 'adModalb1-4') {
			htmlIframeSrc = 'oOnhe2P6B80';
		} else if (chkId == 'adModala1-1') {
			htmlIframeSrc = 'LnLLA3ffzMA';
		} else if (chkId == 'adModala1-2') {
			htmlIframeSrc = 'i0am7RH5VwA';
		} else if (chkId == 'adModala1-3') {
			htmlIframeSrc = '1u1TuZF8_5M';
		} else if (chkId == 'adModala1-4') {
			htmlIframeSrc = 'vzK1FSzY2jo';
		} else if (chkId == 'adModala1-5') {
			htmlIframeSrc = 'NuyEXiMNwtI';
		} else if (chkId == 'adModala1-6') {
			htmlIframeSrc = 'P32lhKiYeBY';
		} else if (chkId == 'adModala2-1') {
			htmlIframeSrc = 'nY-RM0U3mgk';
		} else if (chkId == 'adModala2-2') {
			htmlIframeSrc = 'q7Pc6fpSWvo';
		} else if (chkId == 'adModala3-1') {
			htmlIframeSrc = '4yT9cL5XwN8';
		} else if (chkId == 'adModala3-2') {
			htmlIframeSrc = 'LtY-jWeEQhQ';
		} else if (chkId == 'adModala4-1') {
			htmlIframeSrc = 'rEcSCmXkZpc';
		} else if (chkId == 'adModala4-2') {
			htmlIframeSrc = 'SCKXf6IbXEk';
		} else if (chkId == 'adModala4-3') {
			htmlIframeSrc = 'qXKLh8_zvmM';
		} else if (chkId == 'adModala101') {
			htmlIframeSrc = 'dK4x8Aqo0CA';
		} else if (chkId == 'adModalc1-1') {
			htmlIframeSrc = '2UQ6QaE1bb0';
		} else if (chkId == 'adModalc1-2') {
			htmlIframeSrc = 'JITXhFprusQ';
		} else if (chkId == 'adModalb5-1') {
			htmlIframeSrc = '7HGrHkw1P7Y';
		} else if (chkId == 'adModalb5-2') {
			htmlIframeSrc = 'KBkfFPX8WdU';
		}
		$("#adModal").find("#video-block").append(htmlIframe1 + htmlIframeSrc + htmlIframe2);
	});

	$("#adModal").on("hide.bs.modal", function() {
		$(this).find("#video-block").empty();
	});
});

$(window).on("load", function() {

	$(".loader").hide();

	var extraTL = new TimelineMax();

	extraTL.from($(".music-extra-title"), 1, { y: -200, autoAlpha: 0 })
	.from($(".music-extra-audit"), 1, { x: 400, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-video"), 1, { scale: 0.1, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-detail"), 1, { x: -200, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-line-ext"), 0.3, { autoAlpha: 0 })
	.from($(".music-extra-line"), 1, { autoAlpha: 0 });
});