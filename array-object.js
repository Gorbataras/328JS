function arrayToObject(arr) {
    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    //Sorting and pushing elements to their respective keys in the object
    arr.forEach(element => {
        if (typeof(element) == "string") {
            result.strings.push(element);
        } else if (typeof(element) == "number") {
            result.numbers.push(element);
        } else {
            result.booleans.push(element);
        }
    });
    return result;
} //Close arrayToObject

//Init array for testing
let inputArray = [-1, 5, "cat", false, 10.2, true, "dog"];

//Call method
let obj = arrayToObject(inputArray);

//Capture element to be inserted into for readability
let thisthing = document.getElementById("main");

//Found JSON.stringify on StackOverflow
thisthing.innerText = JSON.stringify(obj, null, 4);