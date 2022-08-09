let result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v2/all");
result.onload = function () {
    console.log(result.response);
    let res = JSON.parse(result.response);


    for (let index = 0; index < res.length; index++) {

        console.log(res[index].flag);
    }

}
result.onerror = function () {
    console.log("Something went Wrong");
}

result.send();
