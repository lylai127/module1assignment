var wms_layers = [];

var lyr_currentmap_merged_clipped_translated_resampled4_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'current map_merged_clipped_translated_resampled4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/currentmap_merged_clipped_translated_resampled4_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12680383.459340, 2541152.613469, 12685649.155036, 2545665.133720]
        })
    });
var lyr_HistoricalMap_1_cropped_translated_resample3_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Historical Map_1_cropped_translated_resample3<br />\
    <img src="styles/legend/HistoricalMap_1_cropped_translated_resample3_1_0.png" /> 30<br />\
    <img src="styles/legend/HistoricalMap_1_cropped_translated_resample3_1_1.png" /> 206<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HistoricalMap_1_cropped_translated_resample3_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12682457.064784, 2544971.227948, 12683636.124177, 2545655.551419]
        })
    });
var lyr_HistoricalMap_2_cropped_translated_resampled3_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Historical Map_2_cropped_translated_resampled3<br />\
    <img src="styles/legend/HistoricalMap_2_cropped_translated_resampled3_2_0.png" /> 19<br />\
    <img src="styles/legend/HistoricalMap_2_cropped_translated_resampled3_2_1.png" /> 221<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HistoricalMap_2_cropped_translated_resampled3_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12681150.527338, 2541192.061872, 12682100.745790, 2541836.242731]
        })
    });
var format_1992_3 = new ol.format.GeoJSON();
var features_1992_3 = format_1992_3.readFeatures(json_1992_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1992_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1992_3.addFeatures(features_1992_3);
cluster_1992_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_1992_3
});
var lyr_1992_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_1992_3, 
                style: style_1992_3,
                popuplayertitle: '1992年東涌考察 (沙咀頭及大圍坑)',
                interactive: true,
    title: '1992年東涌考察 (沙咀頭及大圍坑)<br />\
    <img src="styles/legend/1992_3_0.png" /> 大圍坑<br />\
    <img src="styles/legend/1992_3_1.png" /> 沙咀頭<br />\
    <img src="styles/legend/1992_3_2.png" /> 彌勒山<br />\
    <img src="styles/legend/1992_3_3.png" /> <br />' });

lyr_currentmap_merged_clipped_translated_resampled4_0.setVisible(true);lyr_HistoricalMap_1_cropped_translated_resample3_1.setVisible(true);lyr_HistoricalMap_2_cropped_translated_resampled3_2.setVisible(true);lyr_1992_3.setVisible(true);
var layersList = [lyr_currentmap_merged_clipped_translated_resampled4_0,lyr_HistoricalMap_1_cropped_translated_resample3_1,lyr_HistoricalMap_2_cropped_translated_resampled3_2,lyr_1992_3];
lyr_1992_3.set('fieldAliases', {'照片流水號': '照片流水號', 'box no.': 'box no.', '照片總編號': '照片總編號', '指攝日期': '指攝日期', '底片編號': '底片編號', 'notes': 'notes', '拍攝者': '拍攝者', '經手人': '經手人', '整理日期': '整理日期', 'photo path': 'photo path', 'Location Precision': 'Location Precision', 'lattitude': 'lattitude', 'longtitude': 'longtitude', 'Place Name': 'Place Name', 'Photo Subject': 'Photo Subject', 'Location Information': 'Location Information', 'Photo Notes': 'Photo Notes', 'Source of Photo': 'Source of Photo', });
lyr_1992_3.set('fieldImages', {'照片流水號': 'TextEdit', 'box no.': 'TextEdit', '照片總編號': 'TextEdit', '指攝日期': 'TextEdit', '底片編號': 'TextEdit', 'notes': 'TextEdit', '拍攝者': 'TextEdit', '經手人': 'TextEdit', '整理日期': 'TextEdit', 'photo path': 'ExternalResource', 'Location Precision': 'TextEdit', 'lattitude': 'TextEdit', 'longtitude': 'TextEdit', 'Place Name': 'TextEdit', 'Photo Subject': 'TextEdit', 'Location Information': 'TextEdit', 'Photo Notes': 'TextEdit', 'Source of Photo': 'TextEdit', });
lyr_1992_3.set('fieldLabels', {'照片流水號': 'no label', 'box no.': 'no label', '照片總編號': 'no label', '指攝日期': 'no label', '底片編號': 'no label', 'notes': 'no label', '拍攝者': 'no label', '經手人': 'no label', '整理日期': 'no label', 'photo path': 'no label', 'Location Precision': 'no label', 'lattitude': 'no label', 'longtitude': 'no label', 'Place Name': 'no label', 'Photo Subject': 'no label', 'Location Information': 'no label', 'Photo Notes': 'no label', 'Source of Photo': 'no label', });
lyr_1992_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});