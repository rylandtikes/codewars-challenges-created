/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";

describe("solution", function() {
  it("Basic Tests", function() {
  let sensorData1 = [['Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar']];
  console.log(`Testing  ${sensorData1}`);
  assert.equal(JSON.stringify(solution.sensorAnalysis(sensorData1)),JSON.stringify([118.6275, 3.5779]));
  let sensorData2 = [['Distance:', 295.68, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.78, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 298.21, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 296.54, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 133.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.41, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.82, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 134.61, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.86, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.87, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.47, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 135.5, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.9, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 171.36, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.92, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar']];
  console.log(`Testing  ${sensorData2}`);
  assert.equal(JSON.stringify(solution.sensorAnalysis(sensorData2)),JSON.stringify([215.2265, 68.4014]));
  });
});
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
export function sensorAnalysisTest(sensorData) {
  let rd = (a) => Math.round(a*10000)/10000;
  let mu = sensorData.reduce( (acc, cur) => acc + cur[1], 0 ) / sensorData.length;
  let sd = Math.sqrt(sensorData.map( (x) => Math.pow(x[1] - mu,2)).reduce( (y, z) => y + z, 0) / (sensorData.length-1));
  return [rd(mu), rd(sd)];
}
export function createSensorData(n) {
  let a = [];
  for(let i = 1; i < n + 1; i++) {
    let x = randint(randint(100,30000),randint(500,10000))/100;
    a.push(['Distance:',x , 'Meters', 'Sensor 5 malfunction =>lorimar']);
  }
  return a;
}
describe("Random Tests", function() {
for(let i = 0; i < 40; i++) {
   let a = createSensorData(randint(1,100));
   it(`Testing for ${a}`,function() {
   assert.equal(JSON.stringify(solution.sensorAnalysis(a)), JSON.stringify(sensorAnalysisTest(a)));
   }
  )};
});
