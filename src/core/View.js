import CardView from '../components/CardView';
import CardPanel from '../components/CardPanel';

export default function(){

    let cardPanel = new CardPanel('cardPanel');

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