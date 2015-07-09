window.WebSocket = window.WebSocket || window.MozWebSocket;
var url = "ws://172.16.7.131:9092/";
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
		log("msg");
	}
	ws.onclose = function () {
		log("socket closed");
	}
}