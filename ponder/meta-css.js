const PI = 3.14159265358;
let radius = 3;
let area = PI * radius ** 2;
console.log(area);
radius = 20;
area = PI * radius ** 2;
console.log(area);

const one = 1;
const two = 2;
console.log(two);
let result = one + two;
console.log(result);
// console.log("int times str is",result,"making the result a",typeof result,"but keeping the str a",typeof two);

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block