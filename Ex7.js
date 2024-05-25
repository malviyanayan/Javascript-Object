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




let obj3 = Object.assign(obj1,obj2);// yaha target obj1 hai to sari obj2  ki value obj1 1 assign ho jayegi aur usi ka refrence code return hoga
console.log(obj3);
console.log("~~~~~~~~~~~~~~~~`");
console.log(obj1);