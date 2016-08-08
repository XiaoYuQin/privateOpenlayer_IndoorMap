function handleDynamicData(map)
{
	var imageStyle = new ol.style.Circle(
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

	var headOuterImageStyle = new ol.style.Circle(
	{
		radius : 5,
		snapToPixel : false,
		fill : new ol.style.Fill(
		{
			color : 'black'
		})
	});

	var n = 2;
	var omegaTheta = 30000;
	// Rotation period in ms
	var R = 200;
	var r = 200;
	var p = 0;
	map.on('postcompose', function(event)
	{
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
			coordinates.push([x + 1713, y - 1966]);
		}
		vectorContext.setImageStyle(imageStyle);
		vectorContext.drawMultiPointGeometry(new ol.geom.MultiPoint(coordinates), null);

		var headPoint = new ol.geom.Point(coordinates[coordinates.length - 1]);
		var headFeature = new ol.Feature(headPoint);
		vectorContext.drawFeature(headFeature, headInnerImageStyle);

		vectorContext.setImageStyle(headOuterImageStyle);
		vectorContext.drawMultiPointGeometry(headPoint, null);

		map.render();
	});
	map.render();
}