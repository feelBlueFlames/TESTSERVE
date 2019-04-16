module.exports = [{
    'type': 'FeatureCollection',
    defType: 'weather',
    visible: true,
    features: [{
        'type': 'Feature',
        defType: 'weather',
        'properties': {
            'popupContent': 'Coors Field',
            style: {
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, 0]
            },
            type: 'weather',
            url: 'http://www.shipxy.com/Content/js/elanemap/images/yin.png'
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [112.5, 20.5]
        }
    }]
}]