let car = {
    carname : "Bugatee",
    model : "23999",

    gear : 4,

    start : function(){
        console.log("Car is started")
    }

}


// second way to accessing object

console.log(car["carname"]);
console.log(car["model"]);
console.log(car["gear"]);

car.run = function(){
    console.log("Car is runnig...");
}

console.log("~~~~~~~~~~~~~~~~~\n");
car.start()
console.log("\n~~~~~~~~~~~~~~~~~\n");
car.run();