module.exports = [{
    'type': 'FeatureCollection',
    defType: 'typhoon',
    name: '1',
    'features': [
        {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [116, 20],
                    [115.8, 20.2],
                    [115.6, 20.4],
                    [115.4, 20.6]
                ]
            },
            'properties': {
                'popupContent': 'This is a free bus line that will take you across downtown.',
                'underConstruction': false,
                style: {
                    color: "blue"
                }
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [115.4, 20.6],
                    [115.2, 20.8],
                    [115, 21],
                    [114.8, 21.2],
                    [114.6, 21.4]
                ]
            },
            'properties': {
                style: {
                    color: "red"
                }
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "blue",
                    color: "blue",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [116, 20],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "blue",
                    color: "blue",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [115.8, 20.2],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "blue",
                    color: "blue",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [115.6, 20.4],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "blue",
                    color: "blue",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [115.4, 20.6],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "red",
                    color: "red",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [115.2, 20.8],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "red",
                    color: "red",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [115, 21],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "red",
                    color: "red",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [114.8, 21.2],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "yellow",
                    color: "yellow",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [114.6, 21.4],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 30,
                    fillColor: "#ff7800",
                    color: "yellow",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [114.6, 21.4],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'image',
                url: 'data:image/gif;base64,R0lGODlhKAAoAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNjM1MUNBMDk5ODExRTRBNDM0OTFBMjNDNzk5QTY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzNjM1MUNCMDk5ODExRTRBNDM0OTFBMjNDNzk5QTY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTU1MTlCRUIwOTk3MTFFNEE0MzQ5MUEyM0M3OTlBNjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTU1MTlCRUMwOTk3MTFFNEE0MzQ5MUEyM0M3OTlBNjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJFAABACwAAAAAKAAoAAACvoyPmaDtv4CEtMpZs7tY+8M13PVF2IiOZUCmbuih7Ptm8kwqbQepKsgCnXg6mNFlGPZyx1qHyEjuaDTgZjhB1pKIaJPqhXHH0jAYS7R+z8I0mpHqxsXdcvYn/9FndrP7tneCA7c3GIInxXeYkzfoGKG4ZUhICbXGNvXHdIZlKHK5lXnFOFlJGflw87k5tYQ42XYX5crmyWcDFjubRkuHyGvBVCpkMyoZ9DFbVKiscTi8sKL7iixdB2edrb3tUQAAIfkECRQAAQAsAAAAACgAKAAAAsKMj6nL7Q9jAIqCe6WjCfuvdZzxYdPkhSdSpqKWHW3bRTEJsuhIPub+w81gnJJwFtxkjECkq2Gy/GgyJmMpLYIsrFwlBXbemteoWRzzds9N9JFXxaKH6qP92Z7i79R19g+385ZkJ4j1lWYVJ2e24KL4Fnkz8mhF9TS2OOhUOEmZM8coo7MJeKaV2LXoVkn5hVN6WgilVaoJNIooVbM6qwQZSdbzG9qmEmoaaFMsqFJxwvWp7ExMHbJnXUaY7bjC/Q1RAAAh+QQJFAABACwAAAAAKAAoAAACw4yPqcvtASCY8Nk1c933Zt2FxyeWxhehaWoi6gub7wmjVjSSUj17uqqIMXA7nO3EKYISxJ8TKKFhcpSiEkpZSmlZXsxYHXHB3ms1HLWae9DkmeTVKbdRYG9MRufqXTn1Hda0YnXkcqT1tyJk+CSGh+cHOYYBV5MIEvm49qWRqRnXCUjEJAeqODlUuEk218CWOKlKacra1WHKtZPms3hFN0TKEoQ16spYoVioB4wWdxzSCblcfFs23HJJjYRdos39DY5dAAAh+QQJFAABACwAAAAAKAAoAAACw4yPqcvdEKCbNNqKGZBq+50tIPKVZRiNh/mlXvgarLmq0ztfcuzeI0u68HQaCOjkOg05HWVsRlsVcU8o0kc9XmstRzerXXanRjCUy2xKrOdkGr1jA91kt3g+1lW3cVqetDfUl0QnAxgmSNiytfb1R0eVUoPWyAMUafPjJ1epBbhjx1loI4nIyeGYEBm6GCjV1MNa5mqoludIW2v7aDf4KpIza7lEcdrJ9EaW00eKIjvnrKGYGO1FXb2L3WGxrC3tDZ5RAAAh+QQFFAABACwAAAAAKAAoAAACv4yPqcvtBwKY8VlGc75cz1VxoCZ2iEeGpRGiESqtqsdKrurMG3uTj/6xpYQ+TIvC2yVgxmSlKDxBIc/dpucMSrPEHtIGXn5SXlpQywMjy69rWzxes4lhNLmt7HLD3JvCqgRUFYe2Fyglx4SY2AI3ONU12ACo6JKU88VGE1Xj+OhH+ZOH5fY1OYRX6oSxWEb3aqG5CklF5TWbx1pbI6hWOPIITNaRKctJrHmEczEntgIR+Wv6LPJLHbt8naPNzVEAADs='
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [114.6, 21.4],
            }
        },
        {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [114.6, 21.4],
                            [114.2, 21.2],
                            [114, 21]
                        ]
                    },
                    'properties': {
                        style: {
                            color: "yellow",
                            dashArray: [5, 5]
                        }
                    }
                }
            ]
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "yellow",
                    color: "yellow",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [114.2, 21.2]
            }
        }, {
            'type': 'Feature',
            'properties': {
                'popupContent': 'Coors Field',
                type: 'point',
                style: {
                    radius: 4,
                    fillColor: "yellow",
                    color: "yellow",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                }
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [114, 21]
            }
        }
    ]
}]