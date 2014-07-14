function init() {
    var map = new OpenLayers.Map("canvas");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);

    var lonLat = new OpenLayers.LonLat(139.76, 35.68)
        .transform(
        new OpenLayers.Projection("EPSG:4326"),
        new OpenLayers.Projection("EPSG:900913")
    );
    map.setCenter(lonLat, 15);
}
