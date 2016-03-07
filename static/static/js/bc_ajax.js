/*
 *  依赖：[user.js];
 *
 *
 */
    
/* url 签名 */
function encodeURL(url) {
    var
        debug = true;
    if(debug) {
        return url;
    }else{
        return url;
    }
}

// 摇一摇领取奖品
function ajaxPostOpenPrize(data, succ, fail) {
    Zepto.ajax({
        type: "POST",
        url: encodeURL("/wx/shake/openPrize.htm"),
        data: data,
        async: false,
        dataType: 'text',
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        success: function(msg){
            succ(msg);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            fail(textStatus); // 调用本次AJAX请求时传递的options参数
        }
    });
}


