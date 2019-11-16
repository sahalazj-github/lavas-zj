<template>
    <div id="viewDiv"></div>
</template>

<script>
import esriLoader from 'esri-loader'
function setState(store) {}

const options = {
    url: 'https://js.arcgis.com/4.13/'
}



esriLoader.loadCss('https://js.arcgis.com/4.13/esri/themes/light/main.css')
esriLoader.loadModules ([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/FeatureLayer",
    "esri/WebMap"
], options)
    .then (([
                Map, MapView, Graphic, FeatureLayer, WebMap
            ]) => {
        var map = new Map({
            basemap: "hybrid"
        });
        const layer = new FeatureLayer({
            portalItem: {
                // autocasts as new PortalItem
                id: "248aed894a504e30ac5fea4771d82c4a"
            },
            renderer: {
                type: "simple", // autocasts as new SimpleRenderer()
                symbol: {
                    type: "simple-line", // autocasts as new SimpleMarkerSymbol()
                    color: "rgba(0,100,0,0.6)",
                    text: "首都",
                    size: 3,
                    outline: {
                        color: [0, 0, 0, 0.1],
                        width: 0.5
                    }
                }
            },
            outFields: ["*"]
        });
        var view = new MapView({
            center: [117, 30],
            container: "viewDiv",
            map: new WebMap({
                portalItem: {
                    // autocasts as new PortalItem
                    id: "5cd32b831bfb43d08e5ee75e7b40d53d"
                },
                layers: [layer]
            }),
            zoom: 6
        });

        view.on("click", function(event){
            // event is the event handle returned after the event fires.
            console.log(event.mapPoint.y,event.mapPoint.x);
        });
        layer.queryFeatures().then(function(results) {
            // prints an array of all the features in the service to the console
            console.log(results.features);
            var len = results.features.length
            var point = len>0?results.features[0]:{};
            var rings = point.geometry&&point.geometry.rings;
            rings=rings[0];
            var coordi = rings.length>0?rings[0]:[];
            if(coordi){
                var xCoordi = parseInt(coordi[0]/100000);
                var yCoordi = parseInt(coordi[1]/100000);
            }
            console.log(xCoordi,yCoordi)
            drawTriangle(xCoordi,yCoordi)
        });
        function drawTriangle(x,y) {
            var polygon = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [x, y],
                    [x+15, y+15],
                    [x-15, y+15],
                    [x, y]
                ]
            };

            // Create a symbol for rendering the graphic
            var fillSymbol = {
                type: "simple-line", // autocasts as new SimpleFillSymbol()
                color: [226, 119, 40],
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            };

            // Add the geometry and symbol to a new graphic
            var polygonGraphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
            view.graphics.addMany([polygonGraphic]);
        }

    }, reason => {
        console.log (reason);
    })



export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    }
};
</script>

<style lang="stylus" scoped>

.page-index
    display flex
    justify-content center
    align-items center
    flex-direction column
.map
    width: 100%;
    height: 100%;
#viewDiv
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;


</style>
