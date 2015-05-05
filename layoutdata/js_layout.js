/**
 * Created by wangfeng_000 on 2015/5/4 0000.
 */

if(typeof (layOutData)=='undefined'){
    layOutData=[];
}
layOutData.push(
    {
        name: 'js',
        containerId:'jsLayOuts',
        titleInfo:'交互组件',
        helpInfo:'拖放组件到布局容器。拖入后, 你可以配置显示样式。详见<a target="_blank" href="http://twitter.github.io/bootstrap/javascript.html">JavaScript.</a>',
        layOuts:[
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'导航栏',
                view:'<nav class="navbar navbar-default" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#">网站名</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li class="active"><a href="#">主页</a></li><li><a href="#">链接</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">下拉菜单<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">执行动作1</a></li><li><a href="#">执行动作2</a></li><li><a href="#">其他动作</a></li><li class="divider"></li><li><a href="#">其他环节</a></li><li class="divider"></li><li><a href="#">另外的环节</a></li></ul></li></ul><form class="navbar-form navbar-left" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="搜索"></div><button type="submit" class="btn btn-default">提交</button></form><ul class="nav navbar-nav navbar-right"><li><a href="#">链接</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">下拉菜单<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">执行动作1</a></li><li><a href="#">执行动作2</a></li><li><a href="#">其他的动作</a></li><li class="divider"></li><li><a href="#">其他环节</a></li></ul></li></ul></div></nav>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs">	<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式<span class="caret"></span></a><ul class="dropdown-menu"><li class=""><a href="#" rel="alert-success">Success</a></li><li class=""><a href="#" rel="alert-info">Info</a></li><li class=""><a href="#" rel="alert-warning">Warning</a></li><li class=""><a href="#" rel="alert-danger">Danger</a></li></ul></span></span>',
                preview:'提示框',
                view:'<div class="alert alert-success alert-dismissable" contenteditable="true"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><h4>提示!</h4>	<strong>警告!</strong> 请注意，该操作可能存在不安全因素！<a href="#" class="alert-link">弹出链接</a></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'遮罩窗口',
                view:'<button id="myModalLink" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal11">弹出遮罩窗口</button> <div class="modal fade" id="myModal11" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel11">窗口标题</h4></div><div class="modal-body">窗口内容...</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button><button type="button" class="btn btn-primary">保存</button></div></div></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'选项卡',
                view:'<div class="tabbable" id="myTabs"><ul class="nav nav-tabs"><li class=""><a href="#panel-596431" data-toggle="tab" contenteditable="true">选项卡 #1</a></li><li class="active"><a href="#panel-380299" data-toggle="tab" contenteditable="true">选项卡 #2</a></li></ul><div class="tab-content"><div class="tab-pane" id="panel-596431">					<p contenteditable="true">选项卡1中的内容</p>				</div>				<div class="tab-pane active" id="panel-380299">					<p contenteditable="true">选项卡2中的内容</p>				</div>			</div>		</div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'手风琴',
                view:'<div class="panel-group" id="myAccordion"><div class="panel panel-default"><div class="panel-heading"><a class="panel-title collapsed" data-toggle="collapse" data-parent="#panel-125560" href="#panel-element-137133" contenteditable="true">Collapsible Group Item #1</a></div><div id="panel-element-137133" class="panel-collapse collapse" style="height:0"><div class="panel-body" contenteditable="true">Anim pariatur cliche...</div></div></div><div class="panel panel-default"><div class="panel-heading"><a class="panel-title" data-toggle="collapse" data-parent="#panel-125560" href="#panel-element-197669" contenteditable="true">Collapsible Group Item #2</a></div><div id="panel-element-197669" class="panel-collapse in" style="height:auto"><div class="panel-body" contenteditable="true">A000000nim pariatur cliche...</div></div></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'轮换图',
                view:'<div class="carousel slide"id="myCarousel"><ol class="carousel-indicators"><li class="active"data-slide-to="0"data-target="#carousel-674057"></li><li data-slide-to="1"data-target="#carousel-674057"class=""></li><li data-slide-to="2"data-target="#carousel-674057"class=""></li></ol><div class="carousel-inner"><div class="item active"><img alt=""src="img/1.jpg"><div class="carousel-caption"><h4>这是第一张图片</h4><p>这是对第一张图片的描述</p></div></div><div class="item"><img alt=""src="img/2.jpg"><div class="carousel-caption"><h4>这是第二张图片</h4><p>这是对第二张图片的描述</p></div></div><div class="item"><img alt=""src="img/3.jpg"><div class="carousel-caption"><h4>这是第三张图片</h4><p>这是对第三张图片的描述</p></div></div></div><a class="left carousel-control"href="#carousel-674057"data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control"href="#carousel-674057"data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a></div>'
            }
        ]
    }
);