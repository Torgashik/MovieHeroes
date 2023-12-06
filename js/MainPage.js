function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function() {
        notification.style.top = "30px";
    }, 100);
}

function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.top = "-100px";
    setTimeout(function() {
        notification.style.display = "none";
    }, 500);
}

document.getElementById("articleBtn").onclick = function() {
    window.location.href = "../HTML/NewForm.html";
};

document.getElementById("closeBtn").onclick = function() {
    closeNotification();
};

setInterval(showNotification, 10000);