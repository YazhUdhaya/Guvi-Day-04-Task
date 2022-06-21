//1.Triangle Pattern

let asterisk = "";
let triangle = "#";
let i = 0;
console.log("Triangle Pattern :");
do {
    asterisk += triangle;
    i = i + 1;
    console.log(asterisk);
} while (i < 7);

//2. Iterate the String Print the Given Contents

var strArray = ["<option>Jazz</option>",
    , "<option>Blues</option>",
    , "<option>New Age</option>",
    , "<option>Classical</option>",
    , "<option>Opera</option>"]
for (i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
}

//ARRAY :
//1.Total Array Element Count

var myArray = [11, 22, 33, 44, 55];
let totalArrayCount = [];
for (let arrayElement in myArray) {
    totalArrayElementCount = parseInt(arrayElement) + 1;
}
console.log("1.Total Array Element Count :" + " " + totalArrayElementCount);

//2.Create an array 20 favorite foods 

let bestFoodItems = ['biryani', 'idlySambar', 'thaliMeals', 'chickenCurry',
    'curdRice', 'masalaDosa', 'chickenChettinad', 'meenMurringakkaCurry', 'Pizza',
    'americanHamburger', 'middleEasternFalafel', 'greekGyro', 'middleEasternHummus', 'redRussianCaviar', 'chinesePekingduck',
    'chineseDimSum', 'italianSpaghetti', 'italianLasagne', 'bologneseSauce', 'chickenTandoori']


//3.Find Fifth Favorite Food and Length of Food

for (i = 0; i < bestFoodItems.length; i++) {
    if (i === (5 - 1)) {
        console.log("FifthFavorite Food in Array Item :" + " " + bestFoodItems[i]);
    }
}
console.log("Length Of Array Foods :" + " " + bestFoodItems.length);

//4."Mari" to "Munnabai"

let friends = ['Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'];

function dataHandling(friends) {
    for (var i = 0; i < friends.length; i++) {
        if (friends[i] === 'Mari') {
            friends[i] = 'Munnabai';
            console.log("'Mari' into 'Munnabai':" + " " + friends);
        }
    }
}
dataHandling(friends);


//5. Loop and Print Until CaptianAmerica
const friends1 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
];

function dataHandling(input) {
    let CaptianAmericaIndex = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 'CaptianAmerica') {
            CaptianAmericaIndex = i;
            break;
        }
    }
    for (j = 0; j <= CaptianAmericaIndex; j++) {
        console.log(input[j]);
    }

}
dataHandling(friends1);

//6.Find the person is ur friend or not.

const friends2 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
];

function dataHandling(input, name) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === name) {
            console.log("Jeff Is Our Friend");
        }
    }
}


let friendOrNot = dataHandling(friends2, "Jeff");
console.log(friendOrNot);

//7.Combine and Alphabetically-sorted list

var friends3 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
];

var friends4 = [
    'Gabbar',
    'Rajinikanth',
    'Mass',
    'Spiderman',
    'Jeff',
    'ET'
];

function dataHandling(friends3, friends4) {
    let mergeFriends = friends3.concat(friends4);
    return mergeFriends.sort();

}

let merged = dataHandling(friends3, friends4);
console.log("Merge Two Arrays And Sorted List :" + " " + merged);

// ________________________________________________________________________________________________________________________________
//Array
//1.Get the first item, the middle item and the last item of the array
//TYPE 1:
const flowerItems = ['Rose', 'Lilly', 'Lotus', 'Jasmine', 'Sunflower', 'Daisy', 'Lavender'];
let firstItem = flowerItems[0];
let lastItem = flowerItems[flowerItems.length - 1];
let middleItem = flowerItems[(flowerItems.length - 1) / 2];
console.log("Get FirstItem MiddleItem LastItem :" + " " + firstItem, middleItem, lastItem);


//2.Add your name to the end of the friends array, and add another name to beginning

let friendsName = ['Maya', 'KayalVizhi', 'Arunodhayan', 'Yadhavan', 'YazhIniyan', 'Malavizhi'];
console.log("Original Array Friends Name :" + " " + friendsName);
let endOfAddName = friendsName.push("Yazhini");
console.log("Add LastName of Array :" + " " + friendsName);
let beginAddName = friendsName.unshift("Kathiravan");
console.log("Add FirstName Of Array :" + " " + friendsName);

//3.Add Mr or Ms to the names in the friends array

let friendsName1 = [{ name: 'Maya', G: 'F' }, { name: 'KayalVizhi', G: 'F' }, { name: 'Arunodhayan', G: 'M' }, { name: 'Yadhavan', G: 'M' }, { name: 'YazhIniyan', G: 'M' }, { name: 'Malavizhi', G: 'F' }];
let newFriendsArr = [];
for (i = 0; i < friendsName1.length; i++) {
    if (friendsName1[i].G === 'F') {
        newFriendsArr.push("Ms." + friendsName1[i].name);
        //console.log("Ms." + friendsName1[i].name);
    } else {
        newFriendsArr.push("Mr." + friendsName1[i].name);
        //console.log("Mr." + friendsName1[i].name);
    }

}

console.log(newFriendsArr.join("  "));

//4.Concat all the names the friends array and return as comma “,” seperated string

let stringName = friendsName.join(",");
console.log(stringName);

//5.Find the friends names who has letter ‘a’ and return the list


let newFriendsNameOfA = [];
for (let i = 0; i < friendsName.length; i++) {
    for (let j = 0; j < friendsName[i].length; j++) {
        if (friendsName[i][j] === 'a') {
            newFriendsNameOfA.push(friendsName[i]);
            break;
        }
    }
}
console.log(newFriendsNameOfA.join(" "));

//6.Find the avg length of all the friends names. Get the individual length of the names and do the avg
let getTotalLength = 0;
let avgLength;
for (i = 0; i < friendsName.length; i++) {
    getTotalLength += parseInt(i);
    console.log("Get" + " " + friendsName[i] + " " + "Length" + " " + i);
}
avgLength = getTotalLength / (friendsName.length);
console.log("Get the Average of the Friends Length :" + " " + avgLength);

//7.Find the names and return the list starting with letter M

for (let names of friendsName) {
    if (names[0] === 'M') {
        console.log(names);
    }
}

//8.Find the name with max characters and return the name

let longerLength = 0;
let longestString = "";
for (i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length > longerLength) {
        longerLength = friendsName[i].length;
        longestString = friendsName[i];
    }
}
console.log(longestString);

//9.Find the name with min characters and return the name

let smallerLength = friendsName[0].length;
let smallestString = "";
for (i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length <= smallerLength) {
        smallerLength = friendsName[i].length;
        smallestString = friendsName[i];
    }
}
console.log(smallestString);

//10.Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let friendFilter = friendsInfo.filter(Number);
let stringToNumber = friendFilter.map(Number);
console.log(stringToNumber);
let totalNumber = 0;
for (let value of stringToNumber) {
    totalNumber += value;
}
console.log(totalNumber);
console.log(totalNumber / stringToNumber.length);


//11.Print the contents of the input variable

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j <= input.length; j++) {
            console.log(input[i][j]);
        }
    }
}

dataHandling(input);

