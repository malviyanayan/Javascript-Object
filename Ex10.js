let course = {
    courseName : "javascript in hindi",
    price : "9999",
    instructor : "anuj vishwakarma"
}

console.log(course);


const {instructor : courseInstructor} = course
console.log("\n~~~~~~~~~~~~~~~\n");
console.log("Our course Instructor is : "+courseInstructor);