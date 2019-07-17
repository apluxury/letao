//验证登录状态
$.ajax({
    url: '/employee/checkRootLogin',
    type: 'get',
    sanyc: false,
    success: function (res) {
        if (res.success) {
            location = "user.html"
            return
        }
    }
})



$(function () {
    //登录功能
    $("#login").on("click", function () {
        let username = $.trim($('#username').val())
        let password = $.trim($('#password').val())
        if (!username) {
            alert('请输入用户名')
            return
        }
        if (!password) {
            alert('请输入密码')
            return
        }
        $.ajax({
            url: "/employee/employeeLogin",
            type: "post",
            data: {
                username,
                password
            },
            success: function (res) {
                if (!res.success) {
                    alert(res.message)
                    return
                }
                location.href = 'user.html'
            }
        })
    })
})







