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
        
        view.init();

        findBuildingAddresses();
    };

    // return all building addresses inside of the input geometry
    const findBuildingAddresses = (geometry)=>{

        geometry = geometry || {"spatialReference":{"latestWkid":3857,"wkid":102100},"rings":[[[-13279757.149503633,4067694.6448237514],[-13279793.775576653,4067655.3646928165],[-13279810.76158193,4067695.7064587628],[-13279786.875010587,4067713.7540899375],[-13279786.875010587,4067713.7540899375],[-13279757.149503633,4067694.6448237514]]]};

        $.ajax({
            method: "GET",
            url: "https://hack2019.vannizhang.com/queryBuildings",
            data: { 
                geometry, 
            }
        })
        .done(function( res ) {
            console.log( "findBuildingAddresses", res);
        });
    };

    return {
        init
    };
    
}