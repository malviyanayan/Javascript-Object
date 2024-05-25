// initializing new non singleton object 

let iam = {
    firstName : "Nayan",
    lastName : "Malviya",
    age : 20,

    getInfo : function(){
        console.log("My name is : "+this.firstName + " " + this.lastName);
        console.log("Age : " + this.age);
    }
}



// using object

console.log(iam.firstName)
console.log(iam.lastName)
console.log(iam.age)
console.log("~~~~~~~~~~~~~~~~~~~");
iam.getInfo();