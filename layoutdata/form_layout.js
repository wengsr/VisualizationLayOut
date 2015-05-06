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
                preview:'带标题文本框',
                view:'<div class="form-group"><label class="col-sm-2 control-label" style="margin-top: 6px;"><span style="float:right">标题</span></label><div class="col-sm-10"><input type="text" class="form-control" placeholder="请填写内容"></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题密码框',
                view:'<div class="form-group"><label class="col-sm-2 control-label" style="margin-top: 6px;"><span style="float:right">标题</span></label><div class="col-sm-10"><input type="password" class="form-control" placeholder="请填写内容"></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题下拉框',
                view:'<div class="form-group"><label class="col-sm-2 control-label"><span style="float:right; margin-top: 6px;">下拉</span></label><div class="col-sm-4"><select class="form-control"><option value="" selected="">--请选择--</option><option value="选项1">选项1</option><option value="选项2">选项2</option></select></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题文本框*2',
                view:'<div class="form-group"><label class="col-sm-2 control-label"><span style="float:right; margin-top: 6px;">标题1</span></label><div class="col-sm-4"><input type="text" class="form-control" placeholder="请填写内容1"></div><label class="col-sm-2 control-label"><span style="float:right; margin-top: 6px;">标题2</span></label><div class="col-sm-4"><input type="text" class="form-control" placeholder="请填写内容2"></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题下拉框*2',
                view:'<div class="form-group"><label class="col-sm-2 control-label"><span style="float:right; margin-top: 6px;">下拉1</span></label><div class="col-sm-4"><select class="form-control"><option value="" selected="">--请选择--</option><option value="选项1">选项1</option><option value="选项2">选项2</option></select></div><label class="col-sm-2 control-label"><span style="float:right; margin-top: 6px;">下拉2</span></label><div class="col-sm-4"><select class="form-control"><option value="" selected="">--请选择--</option><option value="选项1">选项1</option><option value="选项2">选项2</option></select></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题文本&下拉',
                view:'<div class="form-group"><label class="col-sm-2 control-label" style="margin-top: 6px;"><span style="float:right">标题</span></label><div class="col-sm-4"><input type="text" class="form-control" placeholder="请填写内容"></div><label class="col-sm-2 control-label"><span style="float:right; margin-top: 6px;">下拉1</span></label><div class="col-sm-4"><select class="form-control"><option value="" selected="">--请选择--</option><option value="选项1">选项1</option><option value="选项2">选项2</option></select></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题文本框按钮',
                view:'<div class="form-group"><label class="col-sm-2 control-label" style="margin-top: 6px;"><span style="float:right">标题</span></label><div class="col-sm-10"><div class="input-group"><input type="text" class="form-control" placeholder="输入UIM卡号"><span class="input-group-btn"><button class="btn btn-default" type="button">校验</button></span></div></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题单选',
                view:'<div class="form-group"><label class="col-sm-2 control-label"><span style="float:right">标题</span></label><div class="col-sm-10"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3</label></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题多选',
                view:'<div class="form-group"><label class="col-sm-2 control-label"><span style="float:right">标题</span></label><div class="col-sm-10"><p><label class="checkbox-inline"><input id="inlineCheckbox1" type="checkbox" value="option1"> 1</label><label class="checkbox-inline"><input id="inlineCheckbox2" type="checkbox" value="option2"> 2</label><label class="checkbox-inline"><input id="inlineCheckbox3" type="checkbox" value="option3"> 3</label></p></div></div>'
            },
            {
                buttons:'<span class="configuration"><button class="btn btn-xs btn-default" href="#" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> </span>',
                preview:'带标题按钮',
                view:'<div class="form-group"><label class="col-sm-2 control-label"><span style="float:right">标题</span></label><div class="col-sm-10"><button class="btn btn-default" contenteditable="true" type="button">按钮</button></div></div>'
            }



        ]
    }
);