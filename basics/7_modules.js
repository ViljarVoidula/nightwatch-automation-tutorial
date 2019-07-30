const adding = require('./5_functions');
const Truck = require('./6_classes');
const _ = require('lodash');

const NissanTruck = new Truck('Nissan', 90, 'Lisa', 'blue');


const trucksProperties = [
    {
        brand: 'Dodge',
        maxSpeed: 20,
        owner: 'Rob',
        color: 'red'
    },
    {
        brand: 'BMW',
        maxSpeed: 60,
        owner: 'Rob',
        color: 'red'
    },
    {
        brand: 'Chevy',
        maxSpeed: 40,
        owner: 'Rob',
        color: 'red'
    },

]

const trucks = trucksProperties.map((info)=>{
    const {brand, maxSpeed, owner, color} = info
    return new Truck(brand, maxSpeed, owner, color)
})
// https://lodash.com/docs/4.17.15#find
const ChevyTruck = _.find(trucks, {brand: 'Chevy'});

console.log(adding.addTwoNumbersWithArrow(3,5));

NissanTruck.logInfo()
ChevyTruck.logInfo();
