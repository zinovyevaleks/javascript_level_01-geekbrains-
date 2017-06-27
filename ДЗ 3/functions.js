function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10




function countBs(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "B") {
            count++;
        }
    }
    console.log(count);
}

countBs('sdfBasdfB;fgo;iggB')


// function countChar(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//          {
//             count++;
//         }
//     }
//     console.log(count);
// }
//
// countChar('sdfBasdfB;fgo;iggB')
