/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";
describe("solution", function(){
  it("Basic Tests", function() {
  var chores = [5, 2, 1, 6, 4, 4];
  console.log(`Testing  ${chores}`);
  assert.equal(JSON.stringify(solution.choreAssignment(chores)),JSON.stringify([7, 7, 8]));
  var chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9];
  console.log(`Testing  ${chores}`);
  assert.equal(JSON.stringify(solution.choreAssignment(chores)),JSON.stringify([7, 8, 8, 10, 10, 11]));
  var chores = [5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6];
  console.log(`Testing  ${chores}`);
  assert.equal(JSON.stringify(solution.choreAssignment(chores)),JSON.stringify([10, 11, 11, 11, 11, 12, 12, 13]));
  var chores = [9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2];
  console.log(`Testing  ${chores}`);
  assert.equal(JSON.stringify(solution.choreAssignment(chores)),JSON.stringify([11, 11, 11, 12, 12, 12, 12, 12, 12]));
  var chores = [1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8];
  console.log(`Testing  ${chores}`);
  assert.equal(JSON.stringify(solution.choreAssignment(chores)), JSON.stringify([10, 10, 11, 11, 11, 11, 11, 11, 12, 12]));
  });
});
export function choreAssignmentTest(chores) {
  chores = sorted(chores);
  let i = 0, j = chores.length - 1, assignments = [];
  while(i < j) {
    assignments.push(chores[i]+chores[j]);
    i++;
    j--;
  }
  assignments = sorted(assignments);
  return assignments;
}
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
export function createChoreList(n) {
  let chores = [], i = 0;
  while(i < n) {
    chores.push(randint(1,10));
    i++;
  }
  return chores;
}
const sorted=(a)=>a.sort((a,b)=>a-b);
describe("Random Tests", function(){
for(var i=0;i<40;i++) {
  let sizes = [10,12,16,20,30];
  let chores = createChoreList(sizes[randint(0,sizes.length-1)]);
  it(`Testing for ${chores}`,function(){
  let expected = choreAssignmentTest(chores), actual = solution.choreAssignment(chores);
  assert.equal(JSON.stringify(actual),JSON.stringify(expected),"It should work for random inputs too");
  }
 )};
}); 
