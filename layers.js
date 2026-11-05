var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TitikRumahDosenJurusanGeografiFMIPAUNM_1 = new ol.format.GeoJSON();
var features_TitikRumahDosenJurusanGeografiFMIPAUNM_1 = format_TitikRumahDosenJurusanGeografiFMIPAUNM_1.readFeatures(json_TitikRumahDosenJurusanGeografiFMIPAUNM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRumahDosenJurusanGeografiFMIPAUNM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRumahDosenJurusanGeografiFMIPAUNM_1.addFeatures(features_TitikRumahDosenJurusanGeografiFMIPAUNM_1);
var lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRumahDosenJurusanGeografiFMIPAUNM_1, 
                style: style_TitikRumahDosenJurusanGeografiFMIPAUNM_1,
                popuplayertitle: 'Titik Rumah Dosen Jurusan Geografi FMIPA UNM',
                interactive: true,
                title: '<img src="styles/legend/TitikRumahDosenJurusanGeografiFMIPAUNM_1.png" /> Titik Rumah Dosen Jurusan Geografi FMIPA UNM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1];
lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Foto Rumah': 'Foto Rumah', });
lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Foto Rumah': 'ExternalResource', });
lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Foto Rumah': 'no label', });
lyr_TitikRumahDosenJurusanGeografiFMIPAUNM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});