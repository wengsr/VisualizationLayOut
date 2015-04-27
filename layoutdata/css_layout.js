/**
 * Created by wengs_000 on 2015/4/14 0014.
 */

if(typeof (layOutData)=='undefined'){
    layOutData=[];
}
layOutData.push(
    {
        name: 'css',
        containerId:'cssLayOuts',
        titleInfo:'CSS样式',
        helpInfo:'<a target="_blank" href="http://getbootstrap.com/css">基础CSS.</a>',
        layOuts:[
            {
                buttons:'<span class="configuration"><button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑 </button> <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">对齐 <span class="caret"></span></a> <ul class="dropdown-menu"> <li class="active"><a href="#" rel="">默认</a></li> <li class=""><a href="#" rel="text-left">靠左</a></li> <li class=""><a href="#" rel="text-center">居中</a></li> <li class=""><a href="#" rel="text-right">靠右</a></li> </ul> </span> <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">标记 <span class="caret"></span></a> <ul class="dropdown-menu"> <li class="active"><a href="#" rel="">默认</a></li> <li class=""><a href="#" rel="muted">禁用</a></li> <li class=""><a href="#" rel="text-warning">警告</a></li> <li class=""><a href="#" rel="text-error">错误</a></li> <li class=""><a href="#" rel="text-info">提示</a></li> <li class=""><a href="#" rel="text-success">成功</a></li> </ul> </span> </span>',
                preview:'标题',
                view:'<h3 contenteditable="true">h3. Lorem ipsum dolor sit amet.</h3>'
            },
            {
                buttons: '',
                preview: "TAB页",
                view: '<ul class="nav nav-tabs">            <li role="presentation" class="active"><a href="#">Home</a></li>            <li role="presentation"><a href="#">Profile</a></li>            <li role="presentation"><a href="#">Messages</a></li>            </ul>'
            }
        ]
    }
);