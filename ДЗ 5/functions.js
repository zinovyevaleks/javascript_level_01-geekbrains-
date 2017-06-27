// function arrayToList() {
//
// }
//
//
// var arrayToList = function (arr) {
//     var result = null;
//     for (var i = arr.length-1; i >= 0; i--) {
//         result = {
//             value: arr[i],
//             rest:  result
//         }
//     }
//     return result;
// }



function arrayToList(arr) {
    var result = null;
    for (var i = arr.length-1; i >= 0; i--) {
        result = {
            value: arr[i],
            rest:  result
        }
    }
    return result;
}


function listToArray(list) {
    var result = [];
    do {
        result.push(list.value);
        list = list.rest;
    } while ( list !== null )
    return result;
};

console.log(arrayToList([1, 2, 3, 4]));
console.log(listToArray(arrayToList([5, 6, 7])));
