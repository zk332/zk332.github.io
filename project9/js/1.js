var map = new BMap.Map("myMap");
var point = new BMap.Point(120.19, 30.26);
map.centerAndZoom(point, 15);
window.setTimeout(function() {
  map.panTo(new BMap.Point(120.19, 30.26));
}, 2000);
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map
  }
});
local.searchNearby("宾馆","西湖");



var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "transearch"
  }
});
transit.search("杭州师范大学仓前新校区", "西湖，宾馆");

var marker = new BMap.Marker(point);
map.addOverlay(marker);
var schoolmap=[
  [120.015355,30.295605,"小足球场"],
  [120.017924,30.29573, "恕园7号楼食堂"],
  [120.016945,30.297671,"恕园36号楼图书馆"],
  [120.02065,30.297554,"恕园16号楼实验楼"],
  [120.016976,30.295394,"博文苑1号楼便利超市"],
  [120.015413,30.295005,"博文苑4号楼萌站"],
  [120.016239,30.295862,"博文苑6号楼菜鸟驿站"],
  [120.014748,30.295831,"博文苑7号楼医务室"],
  [120.015745,30.296533,"博文苑9号楼学生事务服务中心"],
  [120.013208,30.29502,"田径场"]
];
var opts = {
  width: 400,    
  height: 300,    
  title: "<span style='color:blue'>",    
}
function schoolmarker(){
	for(var i = 0;i < schoolmap.length;i++){
		var point= new BMap.Marker(new BMap.Point(schoolmap[i][0],schoolmap[i][1]));
		var address = schoolmap[i][2];
		map.addOverlay(point);
		OnClick(address,point);
	}
}
function OnClick(address,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var div=document.createElement("div");
	div.style.width='350px';
	div.style.height="250px";
	div.style.border = '1px solid gray';
	var img = document.createElement('img');
	img.style.width='350px';
	img.style.height='250px';
	div.append(img);
	div.append(address);
		var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}
schoolmarker();