/**
 * Created by wangfeng_000 on 2015/5/4 0000.
 */

if(typeof (layOutData)=='undefined'){
    layOutData=[];
}
layOutData.push(
    {
        name: 'component',
        containerId:'componentLayOuts',
        titleInfo:'组件',
        helpInfo:'拖放组件到布局框内。查看这里获取更多帮助 <a target="_blank" href="http://twitter.github.io/bootstrap/components.html">Components.</a>',
        layOuts:[
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">尺寸 <span class="caret"></span></a><ul class="dropdown-menu"><li class="active"><a href="#" rel="">Default</a></li><li class=""><a href="#" rel="btn-group-lg">Large</a></li><li class=""><a href="#" rel="btn-group-md">Medium</a></li><li class=""><a href="#" rel="btn-group-sm">Small</a></li><li class=""><a href="#" rel="btn-group-xs">Extra small</a></li></ul></span> <a class="btn btn-xs btn-default" href="#" rel="btn-group-vertical">垂直排列</a></span>',
                preview:'按钮组',
                view:'<div class="btn-group"><button class="btn btn-default" type="button"><i class="glyphicon glyphicon-align-left"></i> 左边</button><button class="btn btn-default" type="button"><i class="glyphicon glyphicon-align-center"></i> 中间</button><button class="btn btn-default" type="button"><i class="glyphicon glyphicon-align-right"></i> 右边</button><button class="btn btn-default" type="button"><i class="glyphicon glyphicon-align-justify"></i> 居中</button></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <a class="btn btn-xs btn-default" href="#" rel="dropup">方向</a></span>',
                preview:'下拉菜单',
                view:'<div class="btn-group"><button class="btn btn-default" contenteditable="true">动作</button> <button data-toggle="dropdown" class="btn btn-default dropdown-toggle"><span class="caret"></span></button><ul class="dropdown-menu" contenteditable="true"><li><a href="#">动作</a></li><li class="disabled"><a href="#">其他动作</a></li><li class="divider"></li><li><a href="#">在此添加其他动作</a></li></ul></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式 <span class="caret"></span></a><ul class="dropdown-menu"><li class=""><a href="#" rel="nav-tabs">默认</a></li><li class=""><a href="#" rel="nav-pills">块</a></li></ul></span> <a class="btn btn-xs btn-default" href="#" rel="nav-stacked">切换格式</a></span>',
                preview:'导航',
                view:'<ul class="nav nav-tabs" contenteditable="true"><li class="active"><a href="#">首页</a></li><li><a href="#">资料</a></li><li class="disabled"><a href="#">信息</a></li><li class="dropdown pull-right"><a href="#" data-toggle="dropdown" class="dropdown-toggle">下拉 <b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">操作</a></li><li><a href="#">设置栏目</a></li><li><a href="#">更多设置</a></li><li class="divider"></li><li><a href="#">分割线</a></li></ul></li></ul>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'面包导航',
                view:'<ul class="breadcrumb" contenteditable="true"><li><a href="#">主页</a> <span class="divider">/</span></li><li><a href="#">类目</a> <span class="divider">/</span></li><li class="active">主题</li></ul>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">尺寸 <span class="caret"></span></a><ul class="dropdown-menu"><li class=""><a href="#" rel="pagination-lg">Large</a></li><li class="active"><a href="#" rel="">Medium</a></li><li class=""><a href="#" rel="pagination-sm">Small</a></li></ul></span></span>',
                preview:'分页',
                view:'<ul class="pagination" contenteditable="true"><li><a href="#">上一页</a></li><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">下一页</a></li></ul>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式 <span class="caret"></span></a><ul class="dropdown-menu"><li class=""><a href="#" rel="label-default">Default</a></li><li class=""><a href="#" rel="label-primary">Primary</a></li><li class=""><a href="#" rel="label-success">Success</a></li><li class=""><a href="#" rel="label-info">Info</a></li><li class=""><a href="#" rel="label-warning">Warning</a></li><li class="active"><a href="#" rel="label-danger">Danger</a></li></ul></span></span>',
                preview:'标签',
                view:'<span class="label label-default" contenteditable="true">标签</span>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'徽章',
                view:'<ul class="nav nav-pills" contenteditable="true"><li class="active"><a href="#"><span class="badge pull-right">42</span> 主页</a></li><li><a href="#"><span class="badge pull-right">16</span> 更多</a></li></ul>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'超大屏幕',
                view:'<div class="jumbotron" contenteditable="true"><h1>Hello,World!</h1><p>这是一个模板，一个简单的信息网站。在此基础上可以构造更加丰富多彩的网站内容。</p><p><a class="btn btn-primary btn-large" href="#">获取更多信息</a></p></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'页面标题',
                view:'<div class="page-header"><h1 contenteditable="true">页面标题例子 <small>标题的子标题</small></h1></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本',
                view:'<h2 contenteditable="true">标题</h2><p contenteditable="true">本可视化布局程序在HTML5浏览器上运行更加完美, 能实现自动本地化保存, 即使关闭了网页, 下一次打开仍然能恢复上一次的操作..</p><p><a class="btn" href="#" contenteditable="true">查看更多 »</a></p>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'预览列表',
                view:'<div class="row"><div class="col-md-4"><div class="thumbnail"><img alt="300x200" src="img/asiainfo.jpg"><div class="caption" contenteditable="true"><h3>冯诺尔曼结构</h3><p>也称普林斯顿结构，是一种将程序指令存储器和数据存储器合并在一起的存储器结构。程序指令存储地址和数据存储地址指向同一个存储器的不同物理位置。</p><p><a class="btn btn-primary" href="#">浏览</a><a class="btn" href="#">分享</a></p></div></div></div><div class="col-md-4"><div class="thumbnail"><img alt="300x200" src="img/asiainfo.jpg"><div class="caption" contenteditable="true"><h3>哈佛结构</h3><p>哈佛结构是一种将程序指令存储和数据存储分开的存储器结构，它的主要特点是将程序和数据存储在不同的存储空间中，进行独立编址。</p><p><a class="btn btn-primary" href="#">浏览</a><a class="btn" href="#">分享</a></p></div></div></div><div class="col-md-4"><div class="thumbnail"><img alt="300x200" src="img/asiainfo.jpg"><div class="caption" contenteditable="true"><h3>改进型哈佛结构</h3><p>改进型的哈佛结构具有一条独立的地址总线和一条独立的数据总线，两条总线由程序存储器和数据存储器分时复用，使结构更紧凑。</p><p><a class="btn btn-primary" href="#">浏览</a><a class="btn" href="#">分享</a></p></div></div></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <a class="btn btn-xs btn-default" href="#" rel="progress-striped">条纹</a><a class="btn btn-xs btn-default" href="#" rel="active">动画</a></span>',
                preview:'进度条',
                view:'<div class="progress"><div class="progress-bar progress-bar-warning" style="width: 60%;"></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group btn-group-xs open"><a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">样式<span class="caret"></span></a><ul class="dropdown-menu"><li class=""><a href="#" rel="panel-default">Default</a></li><li class=""><a href="#" rel="panel-primary">Primary</a></li><li class=""><a href="#" rel="panel-success">Success</a></li><li class=""><a href="#" rel="panel-info">Info</a></li><li class=""><a href="#" rel="panel-warning">Warning</a></li><li class=""><a href="#" rel="panel-danger">Danger</a></li></ul></span></span>',
                preview:'面板',
                view:'<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title" contenteditable="true">面板标题</h3></div><div class="panel-body" contenteditable="true">面板内容</div><div class="panel-footer" contenteditable="true">面板底部</div></div>'
            }
        ]
    }
);