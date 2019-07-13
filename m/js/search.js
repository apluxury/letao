$(function () {
    let keyArr = []
    const storageKey = 'keyArr'
    $('#button').on('click', function () {
        let keyWord = $('#text').val()
        if (!keyWord) {
            alert('请输入关键字')
            return
        }

        location.href = "search-list.html?key=" + keyWord;
        keyArr.push(keyWord)
        localStorage.setItem(storageKey, JSON.stringify(keyArr))

    })
    //清空的回调函数
    $('#clear-btn').on('click', function () {
        //清空数组
        keyArr = []
        //清空html
        $('#history-box').html('')
        //清空localstorage
        localStorage.removeItem(storageKey)
    })

    if (localStorage.getItem(storageKey)) {
        keyArr = JSON.parse(localStorage.getItem('keyArr'))
        console.log(keyArr);
        let html = template('history-tpl', {
            result: keyArr
        })
        $('#history-box').html(html)
    }





})