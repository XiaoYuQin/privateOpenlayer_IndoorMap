var imageStyle = new ol.style.Style(
{
	image : new ol.style.Circle(
	{
		radius : 5,
		snapToPixel : false,
		fill : new ol.style.Fill(
		{
			color : 'yellow'
		}),
		stroke : new ol.style.Stroke(
		{
			color : 'red',
			width : 1
		})
	})
});

var headInnerImageStyle = new ol.style.Style(
{
	image : new ol.style.Circle(
	{
		radius : 2,
		snapToPixel : false,
		fill : new ol.style.Fill(
		{
			color : 'blue'
		})
	})
});

var headOuterImageStyle = new ol.style.Style(
{
	image : new ol.style.Circle(
	{
		radius : 5,
		snapToPixel : false,
		fill : new ol.style.Fill(
		{
			color : 'black'
		})
	})
});

function handleDynamicData(map)
{
	var n = 100;
	var omegaTheta = 30000;
	// Rotation period in ms
	// var R = 7e6;
	// var r = 2e6;
	// var p = 2e6;

	var R = 200;
	var r = 200;
	var p = 0;

	map.on('postcompose', function(event)
	{
		// debug.i("postcompose");
		var vectorContext = event.vectorContext;
		var frameState = event.frameState;
		var theta = 2 * Math.PI * frameState.time / omegaTheta;
		var coordinates = [];
		var i;
		for ( i = 0; i < n; ++i)
		{
			var t = theta + 2 * Math.PI * i / n;
			var x = (R + r) * Math.cos(t) + p * Math.cos((R + r) * t / r);
			var y = (R + r) * Math.sin(t) + p * Math.sin((R + r) * t / r);
			// 1713, -1966
			coordinates.push([x + 1713, y - 1966]);
		}
		// vectorContext.setStyle(imageStyle);
		// vectorContext.drawGeometry(new ol.geom.MultiPoint(coordinates));

		var headPoint = new ol.geom.Point(coordinates[coordinates.length - 1]);

		vectorContext.setStyle(headOuterImageStyle);
		vectorContext.drawGeometry(headPoint);

		vectorContext.setStyle(headInnerImageStyle);
		vectorContext.drawGeometry(headPoint);

		map.render();
	});
	map.render();
}

