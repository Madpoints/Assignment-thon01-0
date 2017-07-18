var carDealer = {
    cars: [{
        type: "sedan",
        rentalPrice: 100,
        availible: true,
        totalNum: 10
    }, {
        type: "suv",
        rentalPrice: 200,
        availible: true,
        totalNum: 5
    }, {
        type: "sports",
        rentalPrice: 300,
        availible: false,
        totalNum: 0
    }],
    displayCars: function() {
        console.log('Inventory: ', this.cars);
    },
    rentalRequest: function (car) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].type === car) {
                if (this.cars[i].availible === true) {
                    console.log("We have " + this.cars[i].totalNum + " " + car + "(s) availible, Rental price is $" + this.cars[i].rentalPrice);
                }
                else {
                    console.log("Sorry we do not have that availible");
                }
            }    
        }
    }
};

carDealer.displayCars();
carDealer.rentalRequest("sedan");
carDealer.rentalRequest("suv");
carDealer.rentalRequest("sports");