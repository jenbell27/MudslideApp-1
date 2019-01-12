import './style.scss'

export default function(elementId){
    const container = document.getElementById(elementId);

    // const data = [
    //     {
    //         'address': '123 Foo Street',
    //         'city': 'Redlands',
    //         'state': "CA",
    //         'zip': '92350'
    //     },
    //     {
    //         'address': '989 Bar Dr.',
    //         'city': 'Yucaipa',
    //         'state': "CA",
    //         'zip': '92399'
    //     },
    //     {
    //         'address': 'Muscoy Street',
    //         'city': 'San Bernardino',
    //         'state': "CA",
    //         'zip': '92407'
    //     }
    // ]

    const render = (addressData=[])=>{

        var cardsHtml = '';

        addressData.forEach(function(address){

            const html = `
                    <h1 id=addr class="trailer-half">${address.address}</h1>
                        <p class"fonct-size--1>
                            ${address.city}
                            ${address.state},
                            ${address.zip}
                        </p>
                    <hr>
            `;

            cardsHtml+= html;
        });

        container.innerHTML = cardsHtml;

        // container.innerHTML = 
        // '<div class="card card-wide">'+
        //     '<div class="card-content">'+
        //         '<h1 id=addr class="trailer-half">'+ addressData.address +'</h1>'+
        //             '<p id=city class="font-size--1 trailer-half">'+ addressData.city +'</p>'+
        //             '<p id=state class="font-size--1 trailer-half">'+ addressData.state +'</p>'+
        //             '<p id=zip class="font-size--1 trailer-half">'+ addressData.zip +'</p>';
        
        // initClickListener();
    };



    return {
        render
    };
}