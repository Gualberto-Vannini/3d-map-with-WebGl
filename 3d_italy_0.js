// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:3857",wgs84Center:{lat:41.2164130033,lon:14.0812580269},proj:"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",title:"3d_italy",baseExtent:[961119.570056,4655433.84203,2173917.3765,5433196.41421],rotation:0,zShift:0.0,width:100.0,zExaggeration:3.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,type:"dem",name:"Italy maps"}));
