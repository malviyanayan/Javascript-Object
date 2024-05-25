let person = {
    FullName : {
        firstName : "Akshay",
        lastName : "Kumar"
    },
    email : "AkshatKumar@some.com",

    fullName : function(){
        console.log(this.FullName.firstName + " " + this.FullName.lastName);
    }
}


person.fullName()

console.log(person.email);

console.log(person?.age);