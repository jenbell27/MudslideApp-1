import CardView from '../components/CardView';
import CardPanel from '../components/CardPanel';

export default function(){

    let cardPanel;
       const data = [
        {
            'address': '123 Foo Street',
            'city': 'Redlands',
            'state': "CA",
            'zip': '92350'
        },
        {
            'address': '989 Bar Dr.',
            'city': 'Yucaipa',
            'state': "CA",
            'zip': '92399'
        },
        {
            'address': 'Muscoy Street',
            'city': 'San Bernardino',
            'state': "CA",
            'zip': '92407'
        }
    ]

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
        cardPanel = new CardPanel('cardPanel');
        cardPanel.render(data);

    };

    return {
        init,
        cardPanel
    };
}