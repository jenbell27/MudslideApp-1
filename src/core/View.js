import CardView from '../components/CardView';
import CardPanel from '../components/CardPanel';

export default function(){

    let cardPanel = new CardPanel({
        containerID: 'cardPanel',
        onClickHandler: function(addressPlusLocation){
            console.log(addressPlusLocation);
        }
    });

    const init = ()=>{
        console.log('initiating app view');

        
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