
function heeHaw(num) {
    if (isNaN(num) || num < 0) {
        document.write("Invalid Number");
    } else {
        for (let index = 1; index <= num; index++) {
            if (index % 3 == 0 && index % 5 == 0) {
                document.write("Hee Haw!");
            } else if (index % 3 == 0) {
                document.write("Hee!");
            } else if (index % 5 == 0) {
                document.write("Haw!");
            } else {
                document.write(index);
            }

        }
    }
}