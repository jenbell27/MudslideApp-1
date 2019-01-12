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
    'esri/WebMap'
]).then(([
    MapView, 
    WebMap
])=>{

    const MapControl = function(MapControlOptions={
        container: '',
        webmapID: ''
    }){

        let mapView = null;

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

            // and we show that map in a container w/ id #viewDiv
            mapView = MapView({
                map: webmap,
                container: MapControlOptions.container
            });

        };

        return {
            init
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