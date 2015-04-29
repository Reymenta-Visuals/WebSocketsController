window.WebSocket = window.WebSocket || window.MozWebSocket;
var url = "ws://192.168.3.220:9002/";
var ws;

function doSend() {
	var clt = document.getElementById("cltText");
	var text = clt.value;
	log("sending text to server: " + text);
	ws.send(text);
}
function log(message) {
	var res = document.getElementById("results");
	res.innerHTML += message + "<br/>";
}
function wsConnect() {
	ws = new WebSocket(url);
	ws.onopen = function () {
		log("socket opened");
		ws.send("open");
	}
	ws.onmessage = function () {
		//ws.send("msg");
	}
	ws.onclose = function () {
		log("socket closed");
	}
}