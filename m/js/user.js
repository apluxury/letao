let userInfo = null;
$.ajax({
    url: "/user/queryUserMessage",
    type: "get",
    async: false,
    success: function (res) {
        if (res.error && res.error == 400) {
            location.href = "login.html"
        }
        userInfo = res;
    }
})




$(function () {
    //退出登录
    $('#logout').on('click', function () {
        $.ajax({
            url: '/user/logout',
            post: 'get',
            success: function (res) {
                if (res.success) {
                    mui.toast('退出成功')
                    setTimeout(function () {
                        location.href = "index.html"
                    }, 2000)
                }
            }
        })
    })


    let html = template('userTpl', userInfo)
    $('#userInfoBox').html(html)



})