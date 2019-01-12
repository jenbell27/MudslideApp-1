import CardView from '../components/CardView';
import CardPanel from '../components/CardPanel';

export default function(){

    let addressCardOnClickHandler = null;

    let cardPanel = new CardPanel({
        containerID: 'cardPanel',
        onClickHandler: function(addressPlusLocation){
            // console.log(addressPlusLocation);

            if(addressCardOnClickHandler){
                addressCardOnClickHandler(addressPlusLocation);
            }
        }
    });

    const init = (options)=>{
        console.log('initiating app view');

        addressCardOnClickHandler = options.addressCardOnClickHandler || null;

        
        // const cardview = new CardView({
        //     conatinerID: 'cardViewDiv',
        //     onClickHandler: (message)=>{
        //         console.log(message)
        //     }
        // });
        
        // cardview.render();

        //renders the CardPanel 
        // cardPanel = ;
        // cardPanel.render(data);

    };

    return {
        init,
        cardPanel
    };
}