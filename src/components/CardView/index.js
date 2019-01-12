import './style.scss';

export default function(options={
    conatinerID: 'foobar',
    onClickHandler: null
}){

    console.log(options);


    var conatiner = document.getElementById(options.conatinerID);

    var render = function(){
        conatiner.innerHTML = `
            <div class='foobar-card'>
                I am a card
            
            <div>
        `;

        initEventHandler();

    };

    var initEventHandler = function(){
        conatiner.addEventListener('click', function(evt){
            // console.log('clicked the card view');

            options.onClickHandler('some one clicked me');
        })
    }

    return {
        render
    };
}