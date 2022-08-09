
//Rest Country Flag Details:

let result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v2/all");
result.onload = function () {
   // console.log(result.response);
    let res = JSON.parse(result.response);


    for (let index = 0; index < res.length; index++) {

        console.log('Flag Details:'+res[index].flag);
    }

}
result.onerror = function () {
    console.log("Something went Wrong");
}

result.send();

//Rest Country All Details:


let restCountry = new XMLHttpRequest();

restCountry.open("GET", "https://restcountries.com/v2/all");

restCountry.onload = function () {
    console.log(restCountry.response);
    let countryRest = JSON.parse(restCountry.response);

    for (let index = 0; index < countryRest.length; index++) {
        console.log("Country Name:"+countryRest[index].name);
        console.log("Region:"+countryRest[index].region);
        console.log("Subregion:"+countryRest[index].subregion);
        console.log("Population:"+countryRest[index].population);
    }

    restCountry.onerror = function () {
        console.log("Something Went Wrong");

    }
}

restCountry.send();