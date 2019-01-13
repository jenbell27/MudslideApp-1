import $ from 'jquery';

import CardPanel from '../components/CardPanel';

export default function () {

    let addressCardOnClickHandler = null;
    let searchAreaBtnOnClickHandler = null;
    let downloadCsvOnClickHandler = null;

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

        searchAreaBtnOnClickHandler = options.searchAreaBtnOnClickHandler || null;

        downloadCsvOnClickHandler = options.downloadCsvOnClickHandler || null;


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
        toggleControlBtnContainerVisibility(false);
        
    };

    const initEventHandlersForSplash = () => {
        // const splashCancelButton = document.querySelector('')

        $('.js-hide-splash').on('click', function (evt) {
            toggleSplashVisibility(false);
        });
    };

    //toggle visibility for splash window
    const toggleSplashVisibility = (isVisible) => {
        document.getElementById('splashWindowWrap').classList.toggle('hide', !isVisible);
    };

    //toggle visibility for Loader
    const toggleLoaderVisibility = (isVisible) => {
        document.getElementById('loaderComponent').classList.toggle('hide', !isVisible);
    };

    //toggle visibility for control button container
    const toggleControlBtnContainerVisibility = (isVisible) => {
        document.getElementById('demoInfo-container-wrap').classList.toggle('hide', !isVisible);
    };


    const initEventHandlerForControlBtns = () => {
        // $('.js-sideBar-control-btn-1').click(function () {
        //     console.log("The button is: Download Addresses");

        //     //open the container
        //     $('#js-controlButton-container-wrap').show();
        // });

        $('.js-open-demo-container').click(function () {
            console.log("The button is: Population Affected");
            toggleControlBtnContainerVisibility(true);
        });

        $('.js-download-csv').on('click', function(){
            // console.log('click js-download-csv');
            if(downloadCsvOnClickHandler){
                downloadCsvOnClickHandler();
            }
        });
    };

    const initEventHandlerForSearchBtn = () => {
        $('.js-searchTheArea-btn').click(function () {
            console.log("The button is: Search This Area");

            if(searchAreaBtnOnClickHandler){
                searchAreaBtnOnClickHandler();
            }
        });
    };

    
    return {
        init,
        cardPanel,
        toggleLoaderVisibility
    };
}