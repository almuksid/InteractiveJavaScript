// Factory function

function createPhone(brand, model, price, isAvailable){
    return{
        brand,
        model, 
        price, 
        isAvailable
    }
}
let phone1 = createPhone('Samsong', 'f21', 90000, true);
console.log(phone1);

phone1.showBrand = function(){
    console.log('brand name is' + this.brand);
}
phone1.showBrand();

let phone2 = createPhone('Apple', '16 Pro', 120000, true);

// __________________________________________________________


// Constructor function

// Old version 
function CreateCar(brand, model, price){
    this.brand = brand, 
    this.model = model,
    this.price = price
}
let Car1 = new CreateCar('Volvo', 'FS25', 1450000);
console.log(Car1);

// New Version es6
class CreateDrone {
    constructor(brand, model, price) {
        this.brand = brand,
            this.model = model,
            this.price = price;
    }
}
let drone = new CreateDrone('Max', 'M101 Max GPS Drone', 13990);
console.log(drone);