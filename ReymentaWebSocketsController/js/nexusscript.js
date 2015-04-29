nx.onload = function () {


	nx.colorize("#00CCFF"); // sets accent (default)
	nx.colorize("border", "#222222");
	nx.colorize("fill", "#222222");
	button1.on('press', function (data) {
		console.log(data);
		if (ws) ws.send("button1");
	})
	position1.on('*', function (data) {
		console.log(data);
		if (ws) ws.send("{\"colors\" :[{\"name\" : 1,\"value\" : " + data.x + "}]}");

		// data will be a float equal to the x coordinate of the 2D Position widget.
	})

}