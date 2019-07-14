//注册页面

$(function () {
    // return true


    $('#register-btn').on('tap', function () {
        let username = $('[name="username"]').val();
        let mobile = $('[name="mobile"]').val();
        let password = $('[name="password"]').val();
        let againPass = $('[name="againPass"]').val();
        let vCode = $('[name="vCode"]').val();

        if (!username) {
            mui.toast('请输入用户名')
            return false;
        }

        if (mobile.length < 11) {
            mui.toast("请输入合法的手机号");
            return false;
        }

        if (password != againPass) {
            mui.toast("两次输入的密码不一样");
            return false;
        }

        if (vCode.length !== 6) {
            mui.toast('验证码位数不对')
            return false
        }

        $.ajax({
            url: '/user/register',
            data: {
                username,
                mobile,
                password,
                vCode
            },
            type: 'post',
            success: function (res) {
                if (!res.success) {
                    alert(res.error)
                }
                setTimeout(() => {
                    location.href = 'login.html'
                }, 2000)
            }
        })


    })

    $('#getCode').on('tap', function () {
        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function (response) {
                console.log(response.vCode);
            }
        })
    })
})