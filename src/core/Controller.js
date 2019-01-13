import $ from 'jquery';

export default function(options={
    mapControl: null,
    view: null
}){

    const mapControl = options.mapControl;
    const view = options.view;

    const init = ()=>{

        console.log('initiating app controller');

        mapControl.init();
        
        view.init({
            addressCardOnClickHandler: (data)=>{
                mapControl.zoomToAddress(data);
            }
        });

        // findBuildingAddresses();

        // findAddressesInRiskAreas();

        console.log(view);
    };

    // return all building addresses inside of the input geometry
    const findBuildingAddresses = (geometry)=>{

        geometry = geometry || {"spatialReference":{"latestWkid":3857,"wkid":102100},"rings":[[[-13195122.995916035,4035604.5419347575],[-13195066.72976617,4035677.7940990073],[-13194995.600881053,4035648.06859206],[-13194932.964857338,4035518.550277944],[-13195096.455273116,4035486.7015100867],[-13195122.995916035,4035604.5419347575]]]};

        $.ajax({
            method: "GET",
            url: "https://hack2019.vannizhang.com/queryBuildings",
            data: { 
                geometry, 
            }
        })
        .done(function( res ) {
            console.log( "findBuildingAddresses", res);
            // view.cardPanel.render(res);
            // mapControl.showAddresses(res);
        });
    };

    const findAddressesInRiskAreas = (extent)=>{

        extent = extent || {"xmin": -13322883.293076182,"ymin": 4084351.745245313,"xmax": -13314704.531049678,"ymax": 4089281.9335697,"spatialReference":{"wkid":102100,"latestWkid":3857}};

        $.ajax({
            method: "GET",
            url: "http://localhost:8500/queryAddressesInRiskAreas",
            data: { 
                extent, 
            }
        })
        .done(function( results ) {
            console.log( "findAddressesInRiskAreas results", results);
            view.cardPanel.render(results);
            mapControl.showAddresses(results);
        });

    }

    return {
        init
    };
    
}