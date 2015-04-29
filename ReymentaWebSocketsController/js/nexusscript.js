nx.onload = function () {

	nx.colorize("#0ac")
	button1.on('press', function (data) {
		console.log(data);
		ws.send("button1");
	})
	position1.on('*', function (data) {
		console.log(data);
		// data will be a float equal to the x coordinate of the 2D Position widget.
	})

}