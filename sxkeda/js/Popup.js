var Popup = 
{
	new:function()
	{
		var instence = {};
		instence.map;
		instence.id;
		instence.objdev;

		instence.overlay = new ol.Overlay((
		{
			autoPan : true,
			autoPanAnimation :
			{
				duration : 250
			}
		}));
		//初始化
		instence.init = function(map,id)
		{
			instence.map = map;
			instence.id = id;
			instence.autoCreateDiv();
			instence.addOvelayToMap(instence.map);
			// instence.setPosition(100,100);
		}
		instence.autoCreateDiv = function()
		{
			console.info("autoCreateDiv");
			instence.objdev = document.createElement("DIV");
			instence.objdev.id = 'popup-' + instence.id;;
			instence.objdev.className  = 'ol-popup';

			var idDiv = document.createElement("DIV");
			idDiv.id = "popup-content-"+instence.id;
			idDiv.innerHTML = instence.id;
			idDiv.style.color = "#ffffff";
			instence.objdev.appendChild(idDiv);
			document.body.appendChild(instence.objdev);
		}

		instence.setPosition = function(x,y)
		{
			instence.overlay.setPosition([x,y]);
		}
		instence.addOvelayToMap = function(map)
		{
			instence.overlay.setElement(instence.objdev);
			map.addOverlay(instence.overlay);
		}
		instence.removeOvelayFromMap = function()
		{
			instence.map.removeOverlay(instence.overlay);
		}
		return instence;
	}

}
