var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CITYBOUNDARY_1 = new ol.format.GeoJSON();
var features_CITYBOUNDARY_1 = format_CITYBOUNDARY_1.readFeatures(json_CITYBOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CITYBOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CITYBOUNDARY_1.addFeatures(features_CITYBOUNDARY_1);
var lyr_CITYBOUNDARY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CITYBOUNDARY_1, 
                style: style_CITYBOUNDARY_1,
                interactive: false,
                title: '<img src="styles/legend/CITYBOUNDARY_1.png" /> CITY BOUNDARY'
            });
var lyr_REFERENCE_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "REFERENCE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/REFERENCE_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4075000.206831, -161661.236187, 4132028.096240, -124698.334926]
                            })
                        });
var lyr_SENTINEL2_UNET_PREDICTION_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "SENTINEL2_UNET_PREDICTION",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SENTINEL2_UNET_PREDICTION_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [4075039.713687, -161614.451096, 4132009.713687, -124745.111878]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_CITYBOUNDARY_1.setVisible(true);lyr_REFERENCE_2.setVisible(true);lyr_SENTINEL2_UNET_PREDICTION_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CITYBOUNDARY_1,lyr_REFERENCE_2,lyr_SENTINEL2_UNET_PREDICTION_3];
lyr_CITYBOUNDARY_1.set('fieldAliases', {'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'validOn': 'validOn', 'rasterize': 'rasterize', 'area': 'area', });
lyr_CITYBOUNDARY_1.set('fieldImages', {'ADM1_EN': '', 'ADM1_PCODE': '', 'validOn': '', 'rasterize': '', 'area': '', });
lyr_CITYBOUNDARY_1.set('fieldLabels', {'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'validOn': 'no label', 'rasterize': 'no label', 'area': 'no label', });
lyr_CITYBOUNDARY_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});