$(function () {
    let address = null;
    $.ajax({
        url: '/address/queryAddress',
        success: function (res) {
            address = res
            let html = template('addressTpl', { result: res })
            $('#address-box').html(html)
        }
    })

    $('#address-box').on('tap', ".delete-btn", function () {
        let id = $(this).attr('data-id')
        mui.confirm('确定要删除吗？', function (message) {
            if (message.index === 0) {
                return
            }
            $.ajax({
                url: '/address/deleteAddress',
                type: 'post',
                data: { id },
                success: function (res) {
                    if (!res.success) {
                        return
                    }
                    location.reload()
                }
            })
        })
    })


    $('#address-box').on('tap', '.edit-btn', function () {


        let id = Number($(this).attr('data-id'))


        let data = null;
        for (var i = 0; i < address.length; i++) {
            if (address[i].id === id) {
                data = address[i];

            }
            localStorage.setItem('editAddress', JSON.stringify(data))
            // location = 'addAddress.html?isEdit=1'
            console.log(data);
            break

        }
        location.href = "addAddress.html?isEdit=1"
        // console.log(data);

    })



})