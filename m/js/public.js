
//解除mui中a链接不能跳转作用

$(function () {
    $('.my-footer').on('tap', 'a', function () {
        mui.openWindow({
            url: $(this).attr('href')
        })
    })
})


function getParamsByUrl(url, name) {
    let querystr = url.split('?').slice(-1)[0]
    let arr = querystr.split('&')
    console.log(arr);


    for (let i = 0; i < arr.length; i++) {
        let target = arr[i].split('=')
        if (target[0] === name) {

            return target[1]
        }
    }
    return null
}