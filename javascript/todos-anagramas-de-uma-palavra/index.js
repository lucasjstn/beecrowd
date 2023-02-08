const word = "amora";
const fields = word.length;

let characters = word.split("");

var resultado = fields;
// for (let i = 1; i < fields; i++) {
//     resultado *= i;
// }

// for (let i = 0; i < resultado; i++) {
//     for (let j = 0; j < fields; j++) {
//         console.log(characters[j], i);
//     }
// }

const result = removeChar("a", "amor");
console.log(result);

//
function removeChar(char, array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        // console.log(char);
        // console.log(array[i]);

        if (char === array[i]) {
            // console.log("encontrado");
            // console.log(array.indexOf(char));
            const charIndex = array.indexOf(char);
            // console.log(charIndex);
            
            let j = charIndex + 1;
            while (j < array.length) {
                newArray.push(array[j]);
                // console.log(newArray);
                j++;
            }
        }

        return newArray;
    }
}

// console.log(characters);
