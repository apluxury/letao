$(function () {
    let page = 1
    let key = getParamsByUrl(location.href, "keyword")
    let html = '';
    let priceSort = 1;
    let This = null;

    mui.init({
        pullRefresh: {
            container: "#refresh",//注意：container应设置为区域滚动组件
            up: {
                height: 50,//可选.默认50.触发上拉加载拖动距离
                auto: true,//可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getData//回调函数getData,当上拉加载时调用getData
            }
        }
    });


    function getData() {
        if (!This) {
            This = this
        }

        $.ajax({
            url: '/product/queryProduct',
            type: 'get',
            data: {
                page: page++,
                pageSize: 3,
                proName: key,
                price: priceSort
            },
            success: function (res) {
                if (res.data.length > 0) {
                    html += template('search-tpl', res)
                    console.log(html);
                    $('#search-box').html(html);
                    This.endPullupToRefresh(false);
                } else {
                    This.endPullupToRefresh(true);
                }

            }
        })
    }

    $('#priceSort').on('tap', function () {
        priceSort = priceSort == 1 ? 2 : 1;
        html = '';
        page = 1;
        mui('#refresh').pullRefresh().refresh(true);
        getData()
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