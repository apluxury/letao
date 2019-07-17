$(function () {

    //渲染管理页面
    $.ajax({
        type: 'get',
        data: {
            page: 1,
            pageSize: 10
        },
        url: '/product/queryProductDetailList',
        success: function (res) {
            let html = template('productTpl', res)
            $('.table').html(html)
        }
    })
    //渲染 添加 第一类 选项

    $.ajax({
        type: '',
        data: {},
        url: '/category/querySecondCategoryPaging',
        success: function (res) {

        }
    })



})


