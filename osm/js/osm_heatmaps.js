window.onload = function(){

// here is our dataset
// important: a datapoint now contains lat, lng and count property!
    var testData={
        max: 46,
        data: [{lat: 33.5363, lng:-117.044, count: 1},{lat: 33.5608, lng:-117.24, count: 1},{lat: 38, lng:-97, count: 1},{lat: 38.9358, lng:-77.1621, count: 1}]
    };
    var transformedTestData = { max: testData.max , data: [] },
        data = testData.data,
        datalen = data.length,
        nudata = [];

// in order to use the OpenLayers Heatmap Layer we have to transform our data into
// { max: , data: [{lonlat: , count: },...]}
    while(datalen--){
        nudata.push({
            lonlat: new OpenLayers.LonLat(data[datalen].lon, data[datalen].lat),
            count: data[datalen].count
        });
    }
    transformedTestData.data = nudata;
    var map = new OpenLayers.Map('map_canvas');
    var layer = new OpenLayers.Layer.OSM();
// create our heatmap layer
    var heatmap = new OpenLayers.Layer.Heatmap( "Heatmap Layer", map, layer, {visible: true, radius:10}, {isBaseLayer: false, opacity: 0.3, projection: new OpenLayers.Projection("EPSG:4326")});
    map.addLayers([layer, heatmap]);
    map.zoomToMaxExtent();
    heatmap.setDataSet(transformedTestData);
};