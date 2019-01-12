import {loadModules} from 'esri-loader';
import * as calcite from 'calcite-web';

// import custome modules
import Controller from './core/Controller';
import View from './core/View';

// import other files
import './styles/index.scss';
import config from './config.json';

loadModules([
    'esri/views/MapView', 
    'esri/WebMap',
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/symbols/PictureMarkerSymbol"
]).then(([
    MapView, 
    WebMap,
    GraphicsLayer,
    Graphic,
    PictureMarkerSymbol
])=>{

    const MapControl = function(MapControlOptions={
        container: '',
        webmapID: ''
    }){

        let mapView = null;
        let graphicsLayer = new GraphicsLayer();

        const init = (options)=>{

            console.log('initiating map control');

            initMapView();
        };

        const initMapView = ()=>{
            // then we load a web map from an id
            const webmap = new WebMap({
                portalItem: { // autocasts as new PortalItem()
                    id: MapControlOptions.webmapID
                }
            });
            webmap.add(graphicsLayer);

            // and we show that map in a container w/ id #viewDiv
            mapView = MapView({
                map: webmap,
                container: MapControlOptions.container
            });

        };

        const markerSymbol = {
            type: "picture-marker",
            url:"data:image/png;base64,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"
        };

        let popupTemplate = {
            title: "Address",
            content: ''
        };

        const populateTemplate = (feature)=>{
            popupTemplate.content = `
                <p>Address: ${feature.Address}</p>
                <p>City: ${feature.City}</p>
                <p>Region: ${feature.Region}</p>
                <p>ZIP: ${feature.Postal}</p>
            `;
        };

        const showAddresses = (data)=>{
            console.log('show addresses on map', data);
            
            //make sure to clear any existing graphics
            if(graphicsLayer.graphics.length > 0){
                graphicsLayer.removeAll();
            }

            data.forEach(function(element){
                populateTemplate(element.address);
                displayPoint(element);
                
            });

            mapView.goTo({
                //target: [data.location.x,data.location.y],
                center: [data[0].location.x,data[0].location.y],
                zoom: 12
            });
        };

        const displayPoint = (element)=>{
            let point = {
                type: "point", // autocasts as new Point()
                longitude: element.location.x,
                latitude: element.location.y
            };
            
            let pointGraphic = new Graphic({
                attributes: element.address,
                geometry: point,
                symbol: markerSymbol,
                popupTemplate: popupTemplate
            });

            graphicsLayer.add(pointGraphic);

        }

        const zoomToAddress = (data)=>{
            console.log('zoom to address', data);
            mapView.goTo({
                //target: [data.location.x,data.location.y],
                center: [data.location.x,data.location.y],
                zoom: 18
            });
        }

        return {
            init,
            showAddresses,
            zoomToAddress
        };

    };

    const initApp = ()=>{
        
        const mapControl = new MapControl({
            container: config.MapControl.container,
            webmapID: config.MapControl.webmapID
        });

        const view = new View({});

        // let's use the controller to manager the communication of between map, view and other modules
        const controller = new Controller({
            mapControl,
            view
        });

        controller.init();

    };
    

    initApp();
    calcite.init();
})
.catch(err => {
    // handle any errors
    console.error(err);
});