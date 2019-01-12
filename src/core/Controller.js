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
    };

    return {
        init
    };
    
}