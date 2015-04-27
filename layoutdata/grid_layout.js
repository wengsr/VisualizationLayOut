/**
 * Created by wengs_000 on 2015/4/14 0014.
 */

if(typeof (layOutData)=='undefined'){
    layOutData=[];
}
layOutData.push(
    {
        name: 'gridSystem',
        containerId:'gridSystemLayOuts',
        titleInfo:'布局设置',
        helpInfo:'在这里设置你的栅格布局, 栅格总数默认为12, 用空格分割每列的栅格值, 如果您需要了解更多信息，请访问 <a target="_blank" href="http://v3.bootcss.com/getting-started">Bootstrap栅格系统</a>',
        layOuts:[
            {
                buttons:'',
                preview:'<input value="12" type="text">',
                view:'<div class="row clearfix"><div class="col-md-12 column"></div></div>'
            }
        ]
    }
);