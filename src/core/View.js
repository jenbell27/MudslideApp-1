import $ from 'jquery';

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

        initEventHandlersForSplash();
    };

    const initEventHandlersForSplash = ()=>{
        // const splashCancelButton = document.querySelector('')

        $('.js-hide-splash').on('click', function(evt){
            toggleSplashVisibility(false);
        });


    };

    const toggleSplashVisibility = (isVisible)=>{
        document.getElementById('splashWindowWrap').classList.toggle('hide', !isVisible);
    }

    return {
        init,
        cardPanel
    };
}