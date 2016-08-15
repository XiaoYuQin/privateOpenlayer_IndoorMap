function setIconRoationAngle(vectorContext,feature,style,angle)
{
	style.getImage().setRotation((Math.PI/180)*angle);
	vectorContext.drawFeature(feature, style);
}
