import $ from 'jquery';

import CardPanel from '../components/CardPanel';

export default function () {

    let addressCardOnClickHandler = null;

    let cardPanel = new CardPanel({
        containerID: 'cardPanel',
        onClickHandler: function (addressPlusLocation) {
            // console.log(addressPlusLocation);

            if (addressCardOnClickHandler) {
                addressCardOnClickHandler(addressPlusLocation);
            }
        }
    });

    const init = (options) => {
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
        initEventHandlerForControlBtns();
        initEventHandlerForSearchBtn();
    };

    const initEventHandlersForSplash = () => {
        // const splashCancelButton = document.querySelector('')

        $('.js-hide-splash').on('click', function (evt) {
            toggleSplashVisibility(false);
        });
    };

    const toggleSplashVisibility = (isVisible) => {
        document.getElementById('splashWindowWrap').classList.toggle('hide', !isVisible);
    };

    const initEventHandlerForControlBtns = () => {
        $('.js-sideBar-control-btn-1').click(function () {
            console.log("The button is: Download Addresses");
        });

        $('.js-sideBar-control-btn-2').click(function () {
            console.log("The button is: Population Affected");
        });
    };

    const initEventHandlerForSearchBtn = () => {
        $('.js-searchTheArea-btn').click(function () {
            console.log("The button is: Search This Area");
        });
    };

    return {
        init,
        cardPanel
    };
}