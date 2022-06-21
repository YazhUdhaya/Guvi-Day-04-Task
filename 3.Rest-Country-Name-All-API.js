let restCountry = new XMLHttpRequest();

restCountry.open("GET", "https://restcountries.com/v2/all");

restCountry.onload = function () {
    console.log(restCountry.response);
    let countryRest = JSON.parse(restCountry.response);

    for (let index = 0; index < countryRest.length; index++) {
        console.log(countryRest[index].name);
        console.log(countryRest[index].region);
        console.log(countryRest[index].subregion);
        console.log(countryRest[index].population);
    }

    restCountry.onerror = function () {
        console.log("Something Went Wrong");

    }
}

restCountry.send();