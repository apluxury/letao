
$(function () {
    let page = 1
    let pagesize = 5
    let totalpage = 0
    //渲染第一页
    getDate()
    //渲染上一页

    $('#prevBtn').on('click', function () {
        page--;
        
        if (page < 1) {
            page = 1
            alert('已经到了第一页');
            return;
        }
        getDate()
    })
    //渲染下一页
    $('#nextBtn').on('click', function () {
        page++;
        
        if (page > totalpage) {
            page = totalpage
            alert('已经到了最后一页');
            return
        }
        getDate()
    })



    function getDate() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "get",
            data: {
                page: page,
                pageSize: pagesize
            },
            success: function (res) {

                totalpage = Math.ceil(res.total / pagesize);
                let html = template('category-second-tpl', res)
                $('.table').html(html)
            }
        })
    }




})