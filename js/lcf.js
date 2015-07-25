/**
 * Created by polarsky on 15/7/24.
 */
function qqjump(){
    var p = {
        url:location.href,
        desc:'你不再需要的,却是他们渴求的!百姓网邀您加入\"让衣物飞\"公益活动,让您的闲置物品飞到山区,让孩子们脸上的笑容更灿烂!|在中国的偏远地区,有这样一群孩子急需我们的关注和呵护,百姓网携手全国各工艺NGO组织,邀您参与\"让衣物飞\"公益活动',
        title:'\"让衣物飞\"爱心公益活动',
        summary:'在中国的偏远地区,有这样一群孩子急需我们的关注和呵护,百姓网携手全国各工艺NGO组织,邀您参与\"让衣物飞\"公益活动',
        pics:'fly.png',
        flash: '',
        site:'QQ分享',
        style:'103',
        width:50,
        height:16
    };
    var s = [];
    for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
    }
    var url="http://connect.qq.com/widget/shareqq/index.html?"+s.join('&')+'';
    window.open(url);
}


function wbjump(){
    $("#wbjump");
}