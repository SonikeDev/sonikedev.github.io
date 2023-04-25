$(document).ready(function () {
    var chatBox = $("#chatBox");
    var chatInput = $("#chatInput");
    var lastMessageTime = 0;
    var messageLimit = 500;
    var spamDelay = 500;

    chatInput.on("keydown", function (event) {
        if (event.keyCode === 13) {
            sendMessage();
            sendMessageFirebase();
        }
    });

    function sendMessage() {
        var now = new Date().getTime();
        var message = chatInput.val();

        if (message !== "") {
            if (now - lastMessageTime > messageLimit) {
                if (now - lastMessageTime < spamDelay) {
                    return;
                }
                else {
                    chatBox.append("<p>" + message + "</p>");
                    chatInput.val("");
                    chatBox.scrollTop(chatBox[0].scrollHeight);
                    lastMessageTime = now;
                }
            }
        }
    }
});