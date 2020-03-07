var searchMsg = document.getElementById("searchMsg");

//点击百度一下按钮跳转到相应的页面
btn.onclick = function() {
    window.open('http://www.baidu.com/s?wd='+searchMsg.value)
}

document.onkeydown = function (e) { // 回车提交表单
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13 && searchMsg.value != '') {
         window.open('http://www.baidu.com/s?wd='+searchMsg.value)
    }
}
