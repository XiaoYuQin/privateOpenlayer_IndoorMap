var TrackLights =
{
	new : function(vectorLayer){
		var instence = {};
		instence.trackLights = new Array();
		instence.vectorLayer = vectorLayer;

		instence.debug = function(info)
		{
			if(isDebugTrackLights == false) return;
			instence.debug(info);
		}

		
		instence.setScale = function(scale)
		{
			for (var i = 0; i < trackLights.length; i++)
			{
				trackLights[i].iconStyle.getImage().setScale(scale);
				trackLights[i].scale = scale;
			}
		}
		instence.add = function(id,x,y)
		{
			var index = instence.trackLights.length;
			var tracklight = TrackLight.createNew(id,x,y);
			instence.debug("111 name "+tracklight.iconFeature.get("name"));
			instence.debug("111 id "+tracklight.id);
			instence.trackLights.push(tracklight);
			instence.debug("index = "+index);
			instence.debug("len = "+instence.trackLights.length);
			instence.debug("name "+instence.trackLights[index].id);
			instence.vectorLayer.getSource().addFeature(instence.trackLights[index].iconFeature);
		}
		instence.remove = function(id)
		{
			instence.debug("trackLights length = "+instence.trackLights.length);
			for (var i = 0; i < instence.trackLights.length; i++)
			{
				instence.debug(" name "+instence.trackLights[i].iconFeature.get("name"));
				if(instence.trackLights[i].iconFeature.get("name") == "trackLight_"+id)
				{
					instence.debug("delete");
					instence.vectorLayer.getSource().removeFeature(instence.trackLights[i].iconFeature);
					instence.trackLights.splice(i);			
					break;					
				}
			}					
		}
		instence.setColor = function(id,color)
		{
			for (var i = 0; i < trackLights.length; i++)
			{
				if(instence.trackLights[i].iconFeature.get("name") == "trackLight_"+id)
				{
					if(color == "red")
					{
						instence.trackLights[i].setStyle(instence.trackLights[i].redStyle);
					}
					else if(color == "green")
					{
						instence.trackLights[i].setStyle(instence.trackLights[i].greenStyle);
					}
					else if(color == "yellow")
					{
						instence.trackLights[i].setStyle(instence.trackLights[i].yellow);
					}
					break;
				}
			}			
		}
		instence.setSchedule = function(id,timeMs)
		{
			instence.debug("TrackLights setSchedule");
			for (var i = 0; i < instence.trackLights.length; i++)
			{
				instence.debug(" name "+instence.trackLights[i].iconFeature.get("name"));
				if(instence.trackLights[i].iconFeature.get("name") == "trackLight_"+id)
				{
					instence.trackLights[i].setTimer(timeMs);
					break;
				}
			}			
		}
		instence.displayAllTraceLight = function()
		{
			for (var i = 0; i < instence.trackLights.length; i++)
			{
				instence.debug(" name "+instence.trackLights[i].iconFeature.get("name"));				
			}	
		}


		return instence;
	}
};
