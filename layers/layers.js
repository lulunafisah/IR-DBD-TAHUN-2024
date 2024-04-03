var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm_prov__1 = new ol.format.GeoJSON();
var features_adm_prov__1 = format_adm_prov__1.readFeatures(json_adm_prov__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_prov__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_prov__1.addFeatures(features_adm_prov__1);
var lyr_adm_prov__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_prov__1, 
                style: style_adm_prov__1,
                popuplayertitle: "adm_prov_",
                interactive: true,
    title: 'adm_prov_<br />\
    <img src="styles/legend/adm_prov__1_0.png" /> Dibawah IR rata-rata nasional<br />\
    <img src="styles/legend/adm_prov__1_1.png" /> Diatas IR rata-rata nasional<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_adm_prov__1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_adm_prov__1];
lyr_adm_prov__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'IRDBD': 'IRDBD', });
lyr_adm_prov__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'IRDBD': 'TextEdit', });
lyr_adm_prov__1.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'no label', 'IRDBD': 'no label', });
lyr_adm_prov__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});