
function heeHaw(num) {
    if (isNaN(num) || num < 0) {
        console.log("Invalid Number");
    } else {
        for (let index = 1; index <= num; index++) {
            if (index % 3 == 0 && index % 5 == 0) {
                console.log("Hee Haw!");
            } else if (index % 3 == 0) {
                console.log("Hee!");
            } else if (index % 5 == 0) {
                console.log("Haw!");
            } else {
                console.log(index);
            }

        }
    }
}