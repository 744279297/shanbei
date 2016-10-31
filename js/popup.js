/**
 * Created by chizhang on 2016/10/30.
 */
var db = {
    y: new Boolean(localStorage.dby).valueOf()
}
var hua = {
    y: new Boolean(localStorage.huay).valueOf()
}

var dby = document.getElementById('dby'),
    dbn = document.getElementById('dbn'),
    huay = document.getElementById('huay'),
    huan = document.getElementById('huan')

if (db.y === true) dby.checked = 'checked'
else dbn.checked = 'checked'
if (hua.y === true) huay.checked = 'checked'
else huan.checked = 'checked'
document.getElementById('options_right').onclick = function (e) {
    document.getElementById('options_pop').style.display = 'block'
    document.getElementById('popup').style.display = 'none'

}
document.getElementById('return').addEventListener('click', function () {
    document.getElementById('options_pop').style.display = 'none'
    document.getElementById('popup').style.display = 'block'

})
document.getElementById('ok').onclick = function () {
    if (dby.checked) localStorage.dby = 1
    else localStorage.dby = "" , db.y = false
    if (huay.checked) localStorage.huay = 1
    else localStorage.huay = "" , hua.y = false

}
console.log(new Boolean('').valueOf())