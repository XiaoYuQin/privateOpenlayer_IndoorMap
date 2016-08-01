//添加标签
var iconFeature = new ol.Feature(new ol.geom.Point([1713, -1966]));
iconFeature.set('style', createStyle("/privateOpenlayer_IndoorMap/sxkeda/resource/icon/icon.png", undefined));
var vectorLayar = new ol.layer.Vector(
{
	style : function(feature)
	{
		return feature.get('style');
	},
	source : new ol.source.Vector(
	{
		features : [iconFeature]
	})
});
function createStyle(src, img)
{
	return new ol.style.Style(
	{
		image : new ol.style.Icon(/** @type {olx.style.IconOptions} */(
			{
				anchor : [0.5, 0.96],
				src : src,
				img : img,
				imgSize : img ? [img.width, img.height] : undefined
			}))
	});
}
