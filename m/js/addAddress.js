$(function () {
    //初始实例化
    let picker = new mui.PopPicker({ layer: 3 })
    let isEdit = Number(getParamsByUrl(location.href, "isEdit"))



    //为picker选择器添加数据
    picker.setData(cityData);

    $('#editForm').on('tap', '#selectCity', function () {
        //弹出选择框
        picker.show(function (selectItems) {
            let address = '';
            for (var i = 0; i < selectItems.length; i++) {
                address += selectItems[i].text
            }
            $('#selectCity').val(address)
        })
    })


    $('#editForm').on('tap', '#addAddress', function () {

        var username = $.trim($("[name='recipients']").val());
        var postCode = $.trim($("[name='postcode']").val());
        var city = $.trim($("[name='address']").val());
        var detail = $.trim($("[name='addressDetail']").val());

        if (!username) {
            mui.toast("请输入收货人姓名");
            return;
        }

        if (!postCode) {
            mui.toast("请输入邮政编码");
            return;
        }

        var data = {
            address: city,
            addressDetail: detail,
            recipients: username,
            postcode: postCode
        };
        if (isEdit) {
            //编辑操作
            var url = '/address/updateAddress'
            data.id = address.id;
        } else {
            //添加操作
            var url = '/address/addAddress'
        }
        $.ajax({
            url: url,
            type: 'post',
            data: data,
            success: function (res) {

                if (isEdit) {
                    mui.toast('修改成功')
                } else {
                    if (!res.success) {
                        mui.toast('新增失败')
                        return
                    }
                    mui.toast('新增成功')
                }

                setTimeout(function () {
                    location.href = "address.html";
                }, 500)

            }
        })
    })


    if (isEdit) {
        let addressObj = {}
        let editAddressStr = localStorage.getItem('editAddress')
        console.log(editAddressStr);

        addressObj = JSON.parse(editAddressStr)
        // }
        let html = template('editTpl', addressObj)


        $("#editForm").html(html)
    } else {
        let html = template('editTpl', {})


        $("#editForm").html(html)
    }

})