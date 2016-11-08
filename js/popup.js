/**
 * Created by chizhang on 2016/10/30.
 */
var db = {
    y: new Boolean(localStorage.dby).valueOf()
}
var hua = {
    y: new Boolean(localStorage.huay).valueOf()
}
var baidu_account = {
    'appid': '20161029000031007',
    'appsecret': 'eJIK5OZfgJuPbK7BgNW8'
}
function senRequest(method, url, data, callback) {
    var request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            console.log(request.responseText)
            callback(JSON.parse(request.responseText))
        }
    }
    request.send(data)
}

chrome.runtime.sendMessage('hello', function (response) {
    //clock_div.innerText = '正在加载' + response.content
    console.log(response.content)
    var url = shanby_url.shanbei_search + response.content
    console.log(url)
    senRequest('GET', url, null, function (text) {

        if (text.msg === 'SUCCESS') {
            origin.innerText = response.content
            translate.innerText = text.data.cn_definition.defn
        }
        else {
            clock_div.innerText = text.msg
        }

    })
})
var dby = document.getElementById('dby'),
    dbn = document.getElementById('dbn'),
    huay = document.getElementById('huay'),
    huan = document.getElementById('huan'),
    options_pop = document.getElementById('options_pop'),
    popup = document.getElementById('popup'),
    clock_div = document.getElementById('clock_div'),
    origin = document.getElementById('origin'),
    translate = document.getElementById('translate')

if (db.y === true) dby.checked = 'checked'
else dbn.checked = 'checked'
if (hua.y === true) huay.checked = 'checked'
else huan.checked = 'checked'
document.getElementById('options_right').onclick = function (e) {
    options_pop.style.display = 'block'
    popup.style.display = 'none'

}
document.getElementById('return').addEventListener('click', function () {
    options_pop.style.display = 'none'
    popup.style.display = 'block'

})
document.getElementById('ok').onclick = function () {
    if (dby.checked) localStorage.dby = 1
    else localStorage.dby = "" , db.y = false
    if (huay.checked) localStorage.huay = 1
    else localStorage.huay = "" , hua.y = false
    options_pop.style.display = 'none'
    popup.style.display = 'block'
}



