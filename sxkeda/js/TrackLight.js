var TrackLight = 
{
	createNew: function(id,x,y)
	{
		var instence={};
		instence.id = id;
		instence.x = x;
		instence.y = y; 
		instence.scale = 1;
		instence.color = "none";
		instence.timer;
		instence.timeout  = false; //启动及关闭按钮 

		instence.debug = function(info)
		{
			if(isDebugTrackLight == false) return;
			instence.debug(info);
		}

		instence.iconFeature = new ol.Feature(
		{
			geometry : new ol.geom.Point([instence.x, instence.y]),
			name : 'trackLight_' + instence.id
		});
		instence.iconStyle = new ol.style.Style(
		{
			image : new ol.style.Icon(/** @type {olx.style.IconOptions} */(
			{
				anchor : [1, 1],
				anchorXUnits : 'pixels',
				anchorYUnits : 'fraction',
				opacity : 10,
				rotateWithView : true,
				scale : instence.scale,
				src : 'sxkeda/resource/icon/trackLight_90_39.png'
			}))
		});
		instence.redStyle = new ol.style.Style(
		{
			image : new ol.style.Icon(/** @type {olx.style.IconOptions} */(
			{
				anchor : [1, 1],
				anchorXUnits : 'pixels',
				anchorYUnits : 'fraction',
				opacity : 10,
				rotateWithView : true,
				scale : instence.scale,
				src : 'sxkeda/resource/icon/trackLightRed.png'
			}))
		});
		instence.greenStyle = new ol.style.Style(
		{
			image : new ol.style.Icon(/** @type {olx.style.IconOptions} */(
			{
				anchor : [1, 1],
				anchorXUnits : 'pixels',
				anchorYUnits : 'fraction',
				opacity : 10,
				rotateWithView : true,
				scale : instence.scale,
				src : 'sxkeda/resource/icon/trackLightGreen.png'
			}))
		});
		instence.yellowStyle = new ol.style.Style(
		{
			image : new ol.style.Icon(/** @type {olx.style.IconOptions} */(
			{
				anchor : [1, 1],
				anchorXUnits : 'pixels',
				anchorYUnits : 'fraction',
				opacity : 10,
				rotateWithView : true,
				scale : instence.scale,
				src : 'sxkeda/resource/icon/trackLightYellow.png'
			}))
		});
		instence.setStyle = function(style)
		{

			instence.iconFeature.setStyle(style);
		}	

		instence.setStyle(instence.iconStyle);
		
		function setColor()
		{
			instence.debug("trackLight "+instence.id+" color = "+instence.color);
			if(instence.color == "none")
			{
				instence.color = "red";
				instence.setStyle(instence.redStyle);
			}
			else if(instence.color == "red")
			{
				instence.color = "green";
				instence.setStyle(instence.greenStyle);
			}
			else if(instence.color == "green")
			{
				instence.color = "yellow";
				instence.setStyle(instence.yellowStyle);
			}
			else if(instence.color == "yellow")
			{
				instence.color = "red";
				instence.setStyle(instence.redStyle);
			}
			
		}
		instence.cancelTimer = function()
		{
			instence.timeout = true;
		}
		instence.startTimer = function()
		{
			if(instence.timeout) return;  
			setColor();  
			setTimeout(instence.startTimer,instence.timer); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒  					
		}
		instence.setTimer = function(timeMs)
		{
			instence.debug("id = "+instence.id+"  setTimer("+timeMs+")");
			instence.timer = timeMs;
			instence.timeout = false;
			instence.startTimer();					
			// window.setInterval(setColor(), 1000);
		}

		// instence.iconFeature.setStyle(instence.iconStyle);
		return instence;
	}			
};