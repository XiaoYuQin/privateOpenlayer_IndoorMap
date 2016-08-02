
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
