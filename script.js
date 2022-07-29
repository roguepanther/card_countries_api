'use strict';

const countriesContainer = document.querySelector('.countries');
const countryInput = document.getElementById('country_name');

countryInput.addEventListener('click', function(){
        const request = new XMLHttpRequest();
        request.open('GET', 'https://restcountries.com/v3.1/name/${countryInput}');
        request.send();

        request.addEventListener('load', function(){
            const [data] = JSON.parse(this.responseText);
            console.log(data);

            const html = `
                <article class="country">
                    <img class="country__img" src="${data.flags.png}" />
                    <div class="country__data">
                        <h3 class="country__name">Country Name: ${data.name.common}</h3>
                        <h4 class="country__region">Region: ${data.region}</h4>
                        <p class="country__row">Population: ${(+data.population / 1000000).toFixed(1)} Million</p>
                        <p class="country__row">Language: ${data.languages.slk}</p>
                        <p class="country__row"> Currency: ${data.currencies[0].name} </p>
                    </div> 
                </article>
            `;

            countriesContainer.insertAdjacentHTML('beforeend', html);
        });
});

