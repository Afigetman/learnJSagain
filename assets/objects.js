// //objects ключ: "значення"
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// //first output is better!
// console.log(obj.name);
// //second output is not good.
// //console.log(obj["name"]);

// //arrays індекс: значення
// //  індекс    0          1           2     3         4   5 а значення прописані в самому масиві
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// // РІЗНИЦЯ МІЖ МАСИВОМ ТА ОБ'ЄКТОМ
// const arr01 = ["a", "b", "c", "d"];

// const arrObj = {
//     zero: "a",
//     one: "b",
//     two: "c",
//     3: "d"
// };
// console.log(arr01[1]);//output array
// console.log(arrObj.one);//output object use . + str
// console.log(arrObj[3]);//output object use [] + key write number too

// //const obj = {a: 1, b: 2};
// const obj01 = {
//     Anna: 100, 
//     Maria: 200
// };

// console.log(obj01);

// ADD IN OBJECT NEW KEY AND VALUE
// const arrObj = {
//     zero: "a",
//     one: "b",
//     two: "c",
//     3: "d"
// };

// // arrObj.Z = "1234";
// arrObj['Z'] = "1234";
// console.log(arrObj["Z"]);
// console.log(arrObj.Z);

// ARRAY AND OBJECT IN OBJECT
const arrObj = {
    zero: "a",
    one: "b",
    two: "c",
    3: "d",
    abc: {
        five: 'e',
        siz: 'f',
        arrnew: [{}, {}]
    }
};

// arrObj.Z = "1234";
arrObj['Z'] = "1234";
console.log(arrObj["Z"]);
console.log(arrObj.Z);