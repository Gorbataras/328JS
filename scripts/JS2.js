for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("Hee Haw!");
    } else if (index % 3 === 0) {
        console.log("Hee!");
    } else if (index % 5 === 0) {
        console.log("Haw!");
    } else {
        console.log(index);
    }

}
