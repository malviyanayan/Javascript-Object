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


let obj3 = {...obj1,...obj2} // Saari value ko spread karke obj3 me assign ker diya
console.log(obj3);
console.log("~~~~~~~~~~~~~~~~~~");

console.log(obj1);  // lekin ye values pahle ke jaisi rahegi
console.log(obj2);