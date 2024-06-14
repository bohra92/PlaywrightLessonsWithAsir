const fs = require('fs')
const path = require('path')



const jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./payload.json"), 'utf-8'));

console.log(jsonData);
console.log("************************************");
// console.log(jsonData['name']);
// console.log(jsonData['address']['city']);

 jsonData.grossFloorArea = 'test'
 jsonData.usableFloorArea = 'test'
 jsonData.facadeArea = 'test'
// jsonData.roofArea = randomInteger(500, jsonData.facadeArea);
// jsonData.glazingArea = randomInteger(500, jsonData.roofArea);
// jsonData.groundFloorArea = randomInteger(500, jsonData.glazingArea);

fs.writeFileSync(path.resolve(__dirname, "./payload.json"), JSON.stringify(jsonData, null, 2));
const payload = require('./payload.json')

console.log(payload);