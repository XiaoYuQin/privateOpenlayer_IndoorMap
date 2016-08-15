var Popups = 
{
	new:function(map)
	{
		var instence = {};
		instence.popupArray = new Array();
		instence.map = map;

		//初始化
		instence.init = function(map)
		{
			instence.map = map;
		};
		//自动从列表中添加一个气泡
		instence.add = function(id,x,y)
		{
			var popup = Popup.new();
			popup.init(instence.map,id);
			popup.setPosition(x,y);
			instence.popupArray.push(popup);
		}
		//从地图中删除一个气泡
		instence.remove = function(id)
		{
			for (var i = 0; i < instence.popupArray.length; i++)
			{
				if(instence.popupArray[i].id == id)
				{
					instence.popupArray[i].removeOvelayFromMap();
					instence.popupArray.splice(i);
					break;
				}
			}					
		}
		return instence;
	}
}




