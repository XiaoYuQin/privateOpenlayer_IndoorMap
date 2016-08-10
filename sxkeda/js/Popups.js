var popups = new Array();
var popupsCount = 0;
function popup()
{
	var objdiv = document.createElement("DIV");
	var objname = "shop_" + i;
	objdiv.id = objname;
	objdiv.class = "ol-popup";
	objdiv.innerHTML = "SHOP_" + i;
	
	document.body.appendChild(objdiv);
	
}

function fillPopups()
{

}

