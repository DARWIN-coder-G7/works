function analyzeCarMileage(cars=[]) {
   return approach002(cars);
}

function approach001(cars){
    const sorted = cars.sort((a,b)=> a.mileage-b.mileage);
   return {
    highestMileageCar:sorted[cars.length-1],
    lowestMileageCar:sorted[0],
    totalMileage:sorted.reduce((tot,curr)=> {return tot+curr.mileage},0),
    get averageMileage(){return this.totalMileage/sorted.length} 
   };
}

function approach002(cars){
const totalMileage = cars.reduce((tot,curr)=> tot+curr.mileage,0);
const averageMileage = totalMileage/cars.length;
const highestMileage = cars.reduce((highest,current)=> current.mileage>highest.mileage ? current : highest ,cars[0] );
const lowestMileage = cars.reduce((lowest,current)=> current.mileage<lowest.mileage ? current : lowest ,cars[0] );
return {
    highestMileageCar:highestMileage,
    lowestMileageCar:lowestMileage,
    totalMileage:totalMileage,
    averageMileage:averageMileage 
   };
}

module.exports = analyzeCarMileage;
