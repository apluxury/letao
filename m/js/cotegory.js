$(function () {

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    //获取一级分类
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function (res) {
            // console.log(res);

            let html = template('category-first', { result: res.rows })
            // console.log(html);
            $('.links').html(html)


            if (res.rows.length) {
                let id = res.rows[0].id
                $('.links').find('a').eq(0).addClass('active')
                getSecondCategory(id)

            }
        }

    })

    //获取二级分类

    $('.links').on('click', 'a', function () {
        let id = $(this).attr("data-id")
        $(this).addClass('active').siblings().removeClass('active')

        getSecondCategory(id)

    })


    function getSecondCategory(id) {
        $.ajax({
            url: '/category/querySecondCategory',
            type: 'get',
            data: {
                id: id
            },
            success: function (res) {
                // console.log(res);
                var html = template('category-second', res)
                console.log(html);
                $('.brand-list').html(html)

            }
        })
    }
})
