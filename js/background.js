/**
 * Created by 张弛 on 2016/10/31.
 */
var text = {}
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message)
    if (message == 'hello') {
        sendResponse(text);
    }
    if (message.msg === 'slectedText') {
        text.content = message.content
        sendResponse('text')
    }

});
