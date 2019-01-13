import './style.scss'

export default function(options={
    containerID: 'cardPanel',
    onClickHandler: null
}){
    const container = document.getElementById(options.containerID);

    const render = (addressData=[])=>{

        var cardsHtml = '';

        addressData.forEach(function(address, index){


            // const html = `
            //     <div>
            //         <span class="fonct-size--1 js-show-address" data-index='${index}'>
            //             ${address.address.LongLabel}
            //         </span>
            //         <hr class="new">
            //     </div>
            // `;

            const html = `
                <div>
                    <p class="fonct-size--1 js-show-address span-white pointer" data-index='${index}'>
                        ${address.address.LongLabel}
                    </p>
                    <hr class="new">
                </div>
            `;

            //#212121 hex value for Card background
            //white text and white line

            cardsHtml+= html;
        });

        container.innerHTML = cardsHtml;
        
        initClickListener(addressData);
    };

    const initClickListener = function(addressData){
        container.addEventListener('click', function(evt){

            if(evt.target.classList.contains('js-show-address')){
                const targetData  = addressData[+evt.target.dataset.index];
                options.onClickHandler(targetData);
            }

        });
    }

    return {
        render
    };
}