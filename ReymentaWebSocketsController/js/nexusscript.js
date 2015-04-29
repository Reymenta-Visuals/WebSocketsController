nx.onload = function () {

	nx.colorize("#0ac")
	ghost1.watch()

	tabs1.options = ["linear", "bounce", "random", "wander", "pattern"]
	tabs1.init();

	tabs1.on('*', function (data) {
		ghost1.mode = data.text;
	})

	dial7.on('*', function (data) {
		ghost1.rate = data.value;
	})

	dial8.on('*', function (data) {
		ghost1.noise = data.value;
	})

	range2.on('*', function (data) {
		ghost1.start = data.start;
		ghost1.end = data.stop;
	})

	position1.on('*', function (data) {
		//	console.log(data);
	})

}