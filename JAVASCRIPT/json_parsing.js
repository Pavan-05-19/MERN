//stringify()-to parse the data into JSON format data
//parse()-to parse the JSON data into JavaScript object
let student={name:"XXXX",age:15};
//stringify() converts a JavaScript object into a JSON string
let jsonData=JSON.stringify(student);
console.log(jsonData);
//parse() converts a JSON string into a JavaScript object
let objectData=JSON.parse(jsonData);
console.log(objectData);