// LocalStorage JavaScript functionality

window.onload = function() {
    if(localStorage.getItem("counter") != null)
    {
        document.getElementById('counter').innerHTML = localStorage.getItem("counter");
    }
    if(localStorage.getItem("text") != null) {
        document.getElementById('saved-text').innerHTML = "<strong>Saved:</strong> " + localStorage.getItem("text");
    }
    if (localStorage.getItem("messages") != null) {
        displayMessages();
    }
}

function increaseCounter() {
    if(localStorage.getItem("counter") == null)
    {
        localStorage.setItem("counter",0);
    }
    else
    {
        localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + 1);
    }
    document.getElementById('counter').innerHTML = localStorage.getItem("counter");
}

function resetCounter() {
    localStorage.setItem("counter", 0);
    document.getElementById('counter').innerHTML = localStorage.getItem("counter");
}

function saveText() {
    var text = document.getElementById('text-input').value;
    localStorage.setItem("text", text);
    document.getElementById('saved-text').innerHTML = "<strong>Saved:</strong> " + text;
    document.getElementById('text-input').value = "";
}

function saveMessage() {
    // save a new message to the array of messages
    var message = document.getElementById('message-input').value;
    document.getElementById('message-input').value = "";

    if (localStorage.getItem("messages") != null) {
        var messages = JSON.parse(localStorage.getItem("messages"));
    } else {
        // no messages yet.
        messages = [];
    }
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages();
}

function displayMessages() {
    var messages = JSON.parse(localStorage.getItem("messages"));
    document.getElementById('messages-output').innerHTML = "";

    for (var i = 0; i < messages.length; i++)
    {
        document.getElementById('messages-output').innerHTML += "<li>" + messages[i] + "</li>";
    }
}

function clearMessages() {
    localStorage.removeItem("messages");
}