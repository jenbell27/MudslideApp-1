import CardView from '../components/CardView';

export default function(){

    const init = ()=>{
        console.log('initiating app view');

        
        const cardview = new CardView({
            conatinerID: 'cardViewDiv',
            onClickHandler: (message)=>{
                console.log(message)
            }
        });
        
        cardview.render();

    };

    return {
        init
    };
}