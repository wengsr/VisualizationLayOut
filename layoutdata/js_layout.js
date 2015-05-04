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
                view:'<div class="navbar"><div class="navbar-inner"><div class="container-fluid"><a data-target=".navbar-responsive-collapse" data-toggle="collapse" class="btn btn-navbar"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></a> <a href="#" class="brand" contenteditable="true">网站名</a><div class="nav-collapse collapse navbar-responsive-collapse"><ul class="nav" contenteditable="true"><li class="active"><a href="#">主页</a></li><li><a href="#">链接</a></li><li><a href="#">链接</a></li><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#">下拉菜单 <b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">下拉导航1</a></li><li><a href="#">下拉导航2</a></li><li><a href="#">其他</a></li><li class="divider"></li><li class="nav-header">标签</li><li><a href="#">链接1</a></li><li><a href="#">链接2</a></li></ul></li></ul><ul class="nav pull-right" contenteditable="true"><li><a href="#">右边链接</a></li><li class="divider-vertical"></li><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#">下拉菜单 <b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">下拉导航1</a></li><li><a href="#">下拉导航2</a></li><li><a href="#">其他</a></li><li class="divider"></li><li><a href="#">链接3</a></li></ul></li></ul></div></div></div></div>'
            }

        ]
    }
);