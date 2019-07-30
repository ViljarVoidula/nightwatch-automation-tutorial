let boolean = true;
let string = `I'm string!`;

const car = {
    carType: 'Truck',
    brand: 'Toyota',
    maxSpeed: '150',
    speedUnits: 'km'
}

boolean = undefined;
string = null;

// if
if(boolean && string ){
    console.log('Both string and boolean is present');
}

if(boolean){
    console.log('Boolean was true');
}else if(string){
    console.log('String is here', string)
}else{
    console.log('Well there is no boolean or a string')
}

// ternary operator
string = 'Nissan'
const ternaryBrand = car.brand ? car.brand : string;

console.log(ternaryBrand);

