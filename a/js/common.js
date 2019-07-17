
//验证登录状态
$.ajax({
    url: '/employee/checkRootLogin',
    type: 'get',
    sanyc: false,
    success: function (res) {
        if (!res.error && res.error == 400) {
            location = "login.html"
            return
        }
    }
})



$(function () {

    //退出功能
    $('.login_out_bot').on('click', function () {
        if (!confirm('确定要退出吗')) {
            return
        }
        $.ajax({
            url: "/employee/employeeLogout",
            type: "get",
            success: function (res) {
                if (!res.success) {
                    alert(res.message)
                    return
                }
                location.href = 'login.html'
            }
        })
    })







    var navLi = $('.navs li')

    navLi.on('click', function () {

        $(this).find('ul').slideToggle();

    });

});