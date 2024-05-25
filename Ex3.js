let y = {
    myName : "Nayan Malviya",
    age : 34,

    getInfo : function(){
        console.log("Name : " + this.myName)
        console.log("Age : " + this.age)
    }
}


y.getInfo()

console.log("~~~~~~~~~~~~~~~~~~");

console.log(y)

Object.freeze(y)
//this is object is freeze so we can not add any value in the object

y.rollnumber = "0.....2211..";

console.log(y)

