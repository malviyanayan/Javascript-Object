let obj1 = {
    1 : "ab",
    2 : 34,

    3 : "someone@gmail.com"
}

let obj2 = {
    4 : "socond",
    5 : 323,

    6 : "sometwo@gmail.com"
}


let obj3 = Object.assign({},obj1,obj2);// but yaha new object create karke values pass karenge object1 and object2 ki to object 1 and 2 ki value change nhi hogi bas copy hogi
console.log(obj3);
console.log("~~~~~~~~~~~~~~~~`");
console.log(obj1);