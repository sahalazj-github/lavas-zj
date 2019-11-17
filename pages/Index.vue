<template>
    <div id="viewDiv"></div>
</template>

<script>
import esriLoader from 'esri-loader'
function setState(store) {}

const options = {
    url: 'https://js.arcgis.com/4.13/'
}
const cityMap = {
    'wuhan':'248aed894a504e30ac5fea4771d82c4a',
    '武汉':'248aed894a504e30ac5fea4771d82c4a',
    'beijing':'5cb4f64a2af3411c88e99f40ee96224b',
    '北京':'5cb4f64a2af3411c88e99f40ee96224b'

}


esriLoader.loadCss('https://js.arcgis.com/4.13/esri/themes/light/main.css')
esriLoader.loadModules ([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/FeatureLayer",
    "esri/WebMap",
    "esri/widgets/Search"
], options)
    .then (([
                Map, MapView, Graphic, FeatureLayer, WebMap,Search
            ]) => {
        var map = new Map({
            basemap: "hybrid"
        });

        var webMap = new WebMap({
            portalItem: {
                // autocasts as new PortalItem
                id: "5cd32b831bfb43d08e5ee75e7b40d53d"
            }
        })
        var view = new MapView({
            container: "viewDiv",
            map: webMap,
            zoom:3
        });

        var searchWidget = new Search({
            view: view,
            autoSelect:false
        });
        view.ui.add(
            searchWidget,
            "top-right"
        );
        view.on("click", function(event){
            // event is the event handle returned after the event fires.
            console.log(event.mapPoint.x,event.mapPoint.y);
        });
        function queryFeature(layer) {
            layer.queryFeatures().then(function (results) {
                // prints an array of all the features in the service to the console
                var len = results.features.length
                var point = len > 0 ? results.features[0] : {};
                var extent = point.geometry && point.geometry.extent;
                var latitude = extent.center && extent.center.latitude
                var longitude = extent.center && extent.center.longitude
                drawDot(latitude, longitude)
            });

        }
        function drawDot(x,y) {
            console.log('x is',x,'y is',y)
            var point = {
                type: "point", // autocasts as new Point()
                longitude: y,
                latitude: x
            };

            // Create a symbol for drawing the point
            var markerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40],
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 2
                }
            };

            // Create a graphic and add the geometry and symbol to it
            var pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol
            });
            view.graphics.addMany([pointGraphic]);
        }
            searchWidget.on("search-blur", function(event){
                let value = event.target.searchTerm;
                if(!cityMap[value]){
                    return
                }
                view.zoom = 3
                webMap.layers.removeAll();
                view.graphics.removeAll()
                const layer = new FeatureLayer({
                    portalItem: {
                        // autocasts as new PortalItem
                        id: cityMap[value]
                    },
                    renderer: {
                        type: "simple", // autocasts as new SimpleRenderer()
                        symbol: {
                            type: "simple-line", // autocasts as new SimpleMarkerSymbol()
                            color: "rgba(0,100,0,0.6)",
                            size: 3,
                            outline: {
                                color: [0, 0, 0, 0.1],
                                width: 0.5
                            }
                        }
                    },
                    outFields: ["*"]
                });
                webMap.layers.add(layer);
                queryFeature(layer)
            });


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
