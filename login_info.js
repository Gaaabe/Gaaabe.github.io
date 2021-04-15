const data = require('./data.json');

function login_info() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    localStorage["username"] = "<li><div class=\"event bg-success\">" + user + "</div></li>";
    localStorage["password"] = "<li><div class=\"event bg-success\">" + pass + "</div></li>";
    localStorage["test"] = data;
}
