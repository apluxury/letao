
//解除mui中a链接不能跳转作用

$(function () {
    $('.my-footer').on('tap', 'a', function () {
        mui.openWindow({
            url: $(this).attr('href')
        })
    })
})