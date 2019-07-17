$(function () {


    $.ajax({
        type: 'get',
        data: {
            page: 1,
            pageSize: 10
        },
        url: '/user/queryUser',
        success: function (res) {

            console.log(res);

            let html = template("user-tpl", res)
            console.log(html);
            $('#user-box').html(html)
        }
    })


    $('#user-box').on('click', '#delete-btn', function () {
        var id = $(this).attr('data-id')
        var isDelete = Number($(this).attr('data-isDelete')) ? 0 : 1;
        $.ajax({
            url: "/user/updateUser",
            type: "post",
            data: {
                id,
                isDelete
            },
            success: function (res) {
                if (res.success) {
                    location.reload()
                } else {
                    if (res.error) {
                        alert(res.message);
                    }
                }
            }
        })
    })





})