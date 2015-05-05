/**
 * Created by wangfeng_000 on 2015/5/5 0000.
 */

if(typeof (layOutData)=='undefined'){
    layOutData=[];
}
layOutData.push(
    {
        name: 'form',
        containerId:'formLayOuts',
        titleInfo:'表单常用组件',
        helpInfo:'表单常用组件',
        layOuts:[
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本框',
                view:'<input type="text" class="form-control" placeholder="文本框中的提示内容">'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'密码框',
                view:'<input type="password" class="form-control" placeholder="文本框中的提示内容">'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'固定内容文本框',
                view:'<div class="input-group"><span class="input-group-addon">www.</span><input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"><span class="input-group-addon">.com</span></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带按钮文本框',
                view:'<div class="col-lg-6"><div class="input-group"><input type="text" class="form-control" placeholder="要查找的内容..."><span class="input-group-btn"><button class="btn btn-default" type="button">查找</button></span></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带下拉文本框',
                view:'<div class="col-lg-6"><div class="input-group"><input type="text" class="form-control" aria-label="..."><div class="input-group-btn"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action<span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right" role="menu"><li><a href="#">动作1</a></li><li><a href="#">动作2</a></li><li><a href="#">其他动作</a></li><li class="divider"></li><li><a href="#">链接</a></li></ul></div></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'按钮',
                view:'<button type="button" class="btn btn-default navbar-btn">登录</button>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本',
                view:'<p class="navbar-text">这是一条文本信息</p>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'文本域',
                view:'<textarea class="form-control" rows="3" placeholder="请输入文本信息"></textarea>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'被禁用的文本框',
                view:'<input class="form-control" id="disabledInput" type="text" placeholder="文本框被禁用了" disabled>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'单选按钮',
                view:'<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3</label>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'多选按钮',
                view:'<label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox1" value="option1"> 1</label><label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox2" value="option2"> 2</label><label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox3" value="option3"> 3</label>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'下拉列表',
                view:'<select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>'
            }






            //单选 下拉

        ]
    }
);