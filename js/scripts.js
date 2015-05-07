var webpage = "";
function supportstorage() {
	if (typeof window.localStorage=='object') 
		return true;
	else
		return false;		
}

function handleSaveLayout() {
	var e = $(".demo").html();
	if (!stopsave && e != window.demoHtml) {
		stopsave++;
		window.demoHtml = e;
		saveLayout();
		stopsave--;
	}
}

var layouthistory; 
function saveLayout(){
	var data = layouthistory;
	if (!data) {
		data={};
		data.count = 0;
		data.list = [];
	}
	if (data.list.length>data.count) {
		for (i=data.count;i<data.list.length;i++)
			data.list[i]=null;
	}
	data.list[data.count] = window.demoHtml;
	data.count++;
	if (supportstorage()) {
		localStorage.setItem("layoutdata",JSON.stringify(data));
	}
	layouthistory = data;
	//console.log(data);
	/*$.ajax({  
		type: "POST",  
		url: "/build/saveLayout",  
		data: { layout: $('.demo').html() },  
		success: function(data) {
			//updateButtonsVisibility();
		}
	});*/
}

 function downloadLayout(){
	$.ajax({  
		type: "POST",  
		url: "/build/downloadLayout",  
		data: { layout: $('#download-layout').html() },  
		success: function(data) { window.location.href = '/build/download'; }
	});
}

function downloadHtmlLayout(){
	$.ajax({  
		type: "POST",  
		url: "/build/downloadLayout",  
		data: { layout: $('#download-layout').html() },  
		success: function(data) { window.location.href = '/build/downloadHtml'; }
	});
}

function undoLayout() {
	var data = layouthistory;
	//console.log(data);
	if (data) {
		if (data.count<2) return false;
		window.demoHtml = data.list[data.count-2];
		data.count--;
		$('.demo').html(window.demoHtml);
		if (supportstorage()) {
			localStorage.setItem("layoutdata",JSON.stringify(data));
		}
		return true;
	}
	return false;
	/*$.ajax({  
		type: "POST",  
		url: "/build/getPreviousLayout",  
		data: { },  
		success: function(data) {
			undoOperation(data);
		}
	});*/
}

function redoLayout() {
	var data = layouthistory;
	if (data) {
		if (data.list[data.count]) {
			window.demoHtml = data.list[data.count];
			data.count++;
			$('.demo').html(window.demoHtml);
			if (supportstorage()) {
				localStorage.setItem("layoutdata",JSON.stringify(data));
			}
			return true;
		}
	}
	return false;
	/*
	$.ajax({  
		type: "POST",  
		url: "/build/getPreviousLayout",  
		data: { },  
		success: function(data) {
			redoOperation(data);
		}
	});*/
}

function handleJsIds() {
	handleModalIds();
	handleAccordionIds();
	handleCarouselIds();
	handleTabsIds()
}
function handleAccordionIds() {
	var e = $(".demo #myAccordion");
	var t = randomNumber();
	var n = "accordion-" + t;
	var r;
	e.attr("id", n);
    console.info(e.find(".panel-default").length);//.panel-group
	e.find(".panel-default").each(function(e, t) {//.accordion-group
		r = "panel-element-" + randomNumber();//accordion-element-
		$(t).find(".panel-title").each(function(e, t) {//.accordion-toggle
			$(t).attr("data-parent", "#" + n);
			$(t).attr("href", "#" + r)
		});
		$(t).find(".panel-collapse").each(function(e, t) {//.accordion-body
			$(t).attr("id", r)
		})
	})
}
function handleCarouselIds() {
	var e = $(".demo #myCarousel");
	var t = randomNumber();
	var n = "carousel-" + t;
	e.attr("id", n);
	e.find(".carousel-indicators li").each(function(e, t) {
		$(t).attr("data-target", "#" + n)
	});
	e.find(".left").attr("href", "#" + n);
	e.find(".right").attr("href", "#" + n)
}
function handleModalIds() {
	var e = $(".demo #myModalLink");
	var t = randomNumber();
	var n = "modal-container-" + t;
	var r = "modal-" + t;
	e.attr("id", r);
	//e.attr("href", "#" + n);
    e.attr("data-target", "#" + n);
	e.next().attr("id", n)
}
function handleTabsIds() {
	var e = $(".demo #myTabs");
	var t = randomNumber();
	var n = "tabs-" + t;
	e.attr("id", n);
	e.find(".tab-pane").each(function(e, t) {
		var n = $(t).attr("id");
		var r = "panel-" + randomNumber();
		$(t).attr("id", r);
		$(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
	})
}
function randomNumber() {
	return randomFromInterval(1, 1e6)
}
function randomFromInterval(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e)
}
function gridSystemGenerator() {
	$(".lyrow .preview input").bind("keyup", function() {
		var e = 0;
		var t = "";
		var n = $(this).val().split(" ", 12);
		$.each(n, function(n, r) {
			e = e + parseInt(r);
			t += '<div class="col-md-' + r + ' column"></div>'
		});
		if (e == 12) {
			$(this).parent().next().children().html(t);
			$(this).parent().prev().show()
		} else {
			$(this).parent().prev().hide()
		}
	})
}
function configurationElm(e, t) {
	$(".demo").delegate(".configuration > a", "click", function(e) {
		e.preventDefault();
		//var t = $(this).parent().next().next().children();
        var t = $(this).parent().next().next().next().next().children();
		$(this).toggleClass("active");
        t.toggleClass($(this).attr("rel"));
	});
	$(".demo").delegate(".configuration .dropdown-menu a", "click", function(e) {
		e.preventDefault();
		var t = $(this).parent().parent();
		//var n = t.parent().parent().next().next().children();
        var n = t.parent().parent().next().next().next().next().children();
		t.find("li").removeClass("active");
		$(this).parent().addClass("active");
		var r = "";
		t.find("a").each(function() {
			r += $(this).attr("rel") + " "
		});
		t.parent().removeClass("open");
		n.removeClass(r);
		n.addClass($(this).attr("rel"))
	})
}
function removeElm() {
	$(".demo").delegate(".remove", "click", function(e) {
		e.preventDefault();
		$(this).parent().remove();
		if (!$(".demo .lyrow").length > 0) {
			clearDemo()
		}
	})
}
function clearDemo() {
	$(".demo").empty();
	layouthistory = null;
	if (supportstorage())
		localStorage.removeItem("layoutdata");
}
function removeMenuClasses() {
	$("#menu-layoutit li button").removeClass("active")
}
function changeStructure(e, t) {
	$("#download-layout ." + e).removeClass(e).addClass(t)
}
function cleanHtml(e) {
	$(e).parent().append($(e).children().html())
}
function downloadLayoutSrc() {
	var e = "";
	$("#download-layout").children().html($(".demo").html());
	var t = $("#download-layout").children();
	t.find(".preview, .configuration, .drag, .remove").remove();
	t.find(".lyrow").addClass("removeClean");
	t.find(".box-element").addClass("removeClean");
	t.find(".lyrow .lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".lyrow .removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".removeClean").each(function() {
		cleanHtml(this)
	});
	t.find(".removeClean").remove();
	$("#download-layout .column").removeClass("ui-sortable");
	$("#download-layout .row-fluid").removeClass("clearfix").children().removeClass("column");
	if ($("#download-layout .container").length > 0) {
		changeStructure("row-fluid", "row")
	}
	formatSrc = $.htmlClean($("#download-layout").html(), {
		format: true,
		allowedAttributes: [
			["id"],
			["class"],
			["data-toggle"],
			["data-target"],
			["data-parent"],
			["role"],
			["data-dismiss"],
			["aria-labelledby"],
			["aria-hidden"],
			["data-slide-to"],
			["data-slide"]
		]
	});
	$("#download-layout").html(formatSrc);
	$("#downloadModal textarea").empty();
	$("#downloadModal textarea").val(formatSrc)
	webpage = formatSrc;
}

var currentDocument = null;
var timerSave = 1000;
var stopsave = 0;
var startdrag = 0;
var demoHtml = $(".demo").html();
var currenteditor = null;
$(window).resize(function() {
	$("body").css("min-height", $(window).height() - 90);
	$(".demo").css("min-height", $(window).height() - 160)
});

function restoreData(){
	if (supportstorage()) {
		layouthistory = JSON.parse(localStorage.getItem("layoutdata"));
		if (!layouthistory) return false;
		window.demoHtml = layouthistory.list[layouthistory.count-1];
		if (window.demoHtml) $(".demo").html(window.demoHtml);
	}
}

function initContainer(){
	$(".demo, .demo .column").sortable({
		connectWith: ".column",
		opacity: .35,
		handle: ".drag",
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		stop: function(e,t) {
			if(stopsave>0) stopsave--;
			startdrag = 0;
		}
	});
	configurationElm();
}

/**
 * 上方导航栏按钮切换时样式处理
 * @param downBtn 被按下的按钮
 * @param upBtn   弹起的按钮
 * @author wangfeng
 */
function btnClassToggle(downBtn, upBtn){
    $.each(downBtn,function(i,dBtn){
        $(dBtn).addClass("active");
    });
    $.each(upBtn,function(i,uBtn){
        $(uBtn).removeClass("active");
    });
}

/**
 * 切换主题
 * @author wangfeng
 */
function switchTheme(){
    var themeCss = sessionStorage.themeLinkHref;
    if(themeCss){
        var themeMinHref = themeCss.split("bootstrap.min.css");
        var themeHref = themeMinHref[0]+"bootstrap.css";
        $("#themeMinCss").attr("href",themeCss);
        $("#themeCss").attr("href",themeHref);
    }else{
        $("#themeMinCss").attr("href","css/themeCss/Default/bootstrap.min.css");
        $("#themeCss").attr("href","css/themeCss/Default/bootstrap.css");
    }

    var themeLis = $("li[role=themeLi]");
    $.each(themeLis,function(i,themeLi){
        var themeId = $(themeLi).attr("id");
        var themeNames = themeId.split("theme");
        var realThemeName = themeNames[1];
        $(themeLi).click(function(){
            sessionStorage.themeLinkHref = "css/themeCss/" + realThemeName + "/bootstrap.min.css";
            location.reload();
        });
    });
}

/**
 * 重置帮助弹出提示框位置
 */
function resetHelpTip(){
    var helpInfoIcons = $('i[role=helpInfoIcon]');
    $.each(helpInfoIcons,function(i,helpInfoIcon){
        console.info($(helpInfoIcon));
        $(helpInfoIcon).hover(function(){
            var topValue = $(helpInfoIcon).offset().top;
            topValue = topValue - 16;
            var leftValue = 180;
            $(helpInfoIcon).next().attr("style", "position:fixed; top:"+topValue+"px; left:"+leftValue+"px;");
        });
    });
}

$(document).ready(function() {
    switchTheme();
    //wengsr begin
    if(typeof(layOutData)!='undefined'){
        showLayOutClassList(layOutData,$('#divNaviLeft'));
        resetHelpTip();
    }
    //wengsr end
	CKEDITOR.disableAutoInline = true;
	restoreData();
	var contenthandle = CKEDITOR.replace( 'contenteditor' ,{
        language: 'zh-cn',
        contentsCss: ['css/bootstrap-combined.min.css'],
        allowedContent: true
	});
	$("body").css("min-height", $(window).height() - 50);
	$(".demo").css("min-height", $(window).height() - 130);
	$(".sidebar-nav .lyrow").draggable({
		connectToSortable: ".demo",
        helper: "clone",
		handle: ".drag",
		appendTo: 'body',
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		drag: function(e, t) {
			t.helper.width(400)
		},
		stop: function(e, t) {
			$(".demo .column").sortable({
				opacity: .35,
				connectWith: ".column",
				start: function(e,t) {
					if (!startdrag) stopsave++;
					startdrag = 1;
				},
				stop: function(e,t) {
					if(stopsave>0) stopsave--;
					startdrag = 0;
				}
			});
			if(stopsave>0) stopsave--;
			startdrag = 0;
		}
	});
	$(".sidebar-nav .box").draggable({
		connectToSortable: ".column",
		helper: "clone",
		handle: ".drag",
		appendTo: 'body',
		start: function(e,t) {
			if (!startdrag) stopsave++;
			startdrag = 1;
		},
		drag: function(e, t) {
			t.helper.width(400)
		},
		stop: function() {
			handleJsIds();
			if(stopsave>0) stopsave--;
			startdrag = 0;
		}
	});
	initContainer();
	$('body.edit .demo').on("click","[data-target=#editorModal]",function(e) {
        e.preventDefault();
		currenteditor = $(this).parent().parent().find('.view');
		var eText = currenteditor.html();
		contenthandle.setData(eText);
	});
	$("#savecontent").click(function(e) {
		e.preventDefault();
		currenteditor.html(contenthandle.getData());
	});
	$("[data-target=#downloadModal]").click(function(e) {

		e.preventDefault();
		downloadLayoutSrc();
	});
	$("[data-target=#shareModal]").click(function(e) {
		e.preventDefault();
		handleSaveLayout();
	});
	$("#download").click(function() {
		downloadLayout();
		return false
	});
	$("#downloadhtml").click(function() {
		downloadHtmlLayout();
		return false
	});
	$("#edit").click(function() {
		$("body").removeClass("devpreview sourcepreview");
		$("body").addClass("edit");
		removeMenuClasses();
        btnClassToggle(["#edit"], ["#devpreview", "#sourcepreview"]);
		return false
	});
	$("#clear").click(function(e) {
		e.preventDefault();
		clearDemo()
	});
	$("#devpreview").click(function() {
		$("body").removeClass("edit sourcepreview");
		$("body").addClass("devpreview");
		removeMenuClasses();
        btnClassToggle(["#devpreview"], ["#edit", "#sourcepreview"]);
		return false
	});
	$("#sourcepreview").click(function() {
		$("body").removeClass("edit");
		$("body").addClass("devpreview sourcepreview");
		removeMenuClasses();
        btnClassToggle(["#sourcepreview"], ["#edit", "#devpreview"]);
		return false
	});
	$("#fluidPage").click(function(e) {
		e.preventDefault();
		changeStructure("container", "container-fluid");
		$("#fixedPage").removeClass("active");
		$(this).addClass("active");
		downloadLayoutSrc()
	});
	$("#fixedPage").click(function(e) {
		e.preventDefault();
		changeStructure("container-fluid", "container");
		$("#fluidPage").removeClass("active");
		$(this).addClass("active");
		downloadLayoutSrc()
	});
	$(".nav-header").click(function() {
		$(".sidebar-nav .boxes, .sidebar-nav .rows").hide();
		$(this).next().slideDown()
	});
	$('#undo').click(function(){
		stopsave++;
		if (undoLayout()) initContainer();
		stopsave--;
	});
	$('#redo').click(function(){
		stopsave++;
		if (redoLayout()) initContainer();
		stopsave--;
	});
	removeElm();
	gridSystemGenerator();
	setInterval(function() {
		handleSaveLayout()
	}, timerSave)
})

function saveHtml() 
			{
			webpage = '<html>\n<head>\n<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/jquery-2.0.0.min.js"></script>\n<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/jquery-ui"></script>\n<link href="http://www.francescomalagrino.com/BootstrapPageGenerator/3/css/bootstrap-combined.min.css" rel="stylesheet" media="screen">\n<script type="text/javascript" src="http://www.francescomalagrino.com/BootstrapPageGenerator/3/js/bootstrap.min.js"></script>\n</head>\n<body>\n'+ webpage +'\n</body>\n</html>'
			/* FM aka Vegetam Added the function that save the file in the directory Downloads. Work only to Chrome Firefox And IE*/
			if (navigator.appName =="Microsoft Internet Explorer" && window.ActiveXObject)
			{
			var locationFile = location.href.toString();
			var dlg = false;
			with(document){
			ir=createElement('iframe');
			ir.id='ifr';
			ir.location='about.blank';
			ir.style.display='none';
			body.appendChild(ir);
			with(getElementById('ifr').contentWindow.document){
			open("text/html", "replace");
			charset = "utf-8";
			write(webpage);
			close();
			document.charset = "utf-8";
			dlg = execCommand('SaveAs', false, locationFile+"webpage.html");
			}
    return dlg;
			}
			}
			else{
			webpage = webpage;
			var blob = new Blob([webpage], {type: "text/html;charset=utf-8"});
			saveAs(blob, "webpage.html");
		}
		}

//wengsr
var showLayOutList = function(layoutName, layOutList,container){
    var layoutDivClass;
    if('gridSystem'===layoutName){
        layoutDivClass = "lyrow ui-draggable";
    }else{
        layoutDivClass = "box box-element ui-draggable";
    }
    $.each(layOutList,function(i,layout){
        var previewDiv = $('<div class="preview">').append(layout.preview);
        var viewDiv = $('<div class="view">').append(layout.view);
        var layOutDiv = $('<div class="' + layoutDivClass + '">').append(layout.buttons).append('<a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i>删除</a> <span class="drag label label-default"><i class="glyphicon glyphicon-move"></i>拖动</span>').append(previewDiv).append(viewDiv);
        container.append(layOutDiv);
    });
};
var showLayOutClassList = function(layOutClassList,container){
    $.each(layOutClassList,function(i,layOutClass){
        var ulNavTmp = $('<ul class="nav nav-list accordion-group">');
        var liHeaderTmp = $('<li class="nav-header">');
        var divHelpTmp = '<div class="pull-right popover-info"><i role="helpInfoIcon" class="glyphicon glyphicon-question-sign"></i>' +
            '<div class="popover fade right"><div class="arrow"></div><h3 class="popover-title">帮助</h3>' +
            '<div class="popover-content">' + layOutClass.helpInfo +
            '</div></div></div>';
        liHeaderTmp.append(divHelpTmp).append('<i class="glyphicon-plus glyphicon"></i>').append(layOutClass.titleInfo);
        var liContainerTmp = $('<li style="display:'+(i==0?'list-item':'none')+';" class="rows" id="'+layOutClass.containerId+'">');
        showLayOutList(layOutClass.name, layOutClass.layOuts, liContainerTmp);
        ulNavTmp.append(liHeaderTmp).append(liContainerTmp).appendTo(container);
    });
}