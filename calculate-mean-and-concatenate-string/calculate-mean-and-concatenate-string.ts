/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";
describe("solution", function() {
  it("Basic Tests", function() {
  let lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
  console.log(`Testing  ${lst}`);
  assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([3.6, 'udiwstagwo']));
  lst = ['0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0'];
  console.log(`Testing  ${lst}`);
  assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([3.0, 'cxwyvuhinu']));
  lst = ['0', 'u', 'a', 'y', '0', 'a', '9', 'q', '3', 'v', 'g', '7', '6', '4', 'y', 'd', '8', '6', '0', 'd'];
  console.log(`Testing  ${lst}`);
  assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([4.3, 'uayaqvgydd']));
  lst = ['s', 'n', '9', 'l', '0', 'm', 'i', 'z', '9', '7', 'y', '4', 'z', '3', '3', 'k', '4', '1', '0', 'k'];
  console.log(`Testing  ${lst}`);
  assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([4.0, 'snlmizyzkk']));
  lst = ['5', 'v', 'u', 'k', '8', '4', '9', 'b', '9', 'g', '5', 'z', '3', 'f', '6', 'u', 'i', '6', '6', 't'];
  console.log(`Testing  ${lst}`);
  assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([6.1, 'vukbgzfuit']));
  });
});
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
export function meanTest(lst) {
  let sum = 0, chars = '';
  for (let i = 0; i < lst.length; i++) {
    if (!isNaN(lst[i])) sum += parseInt(lst[i]);
    else chars += lst[i];
  }
  return [sum / 10, chars];
}
export function shuffle(a) {
  let cIndex = a.length, tValue, rIndex;
  while (0 !== cIndex) {
    rIndex = Math.floor(Math.random() * cIndex);
    cIndex -= 1;
    tValue = a[cIndex];
    a[cIndex] = a[rIndex];
    a[rIndex] = tValue;
  }
  return a;
}
export function createList() {
  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push(nums[randint(0,nums.length-1)]);
    a.push(chars[randint(0,chars.length-1)]);
  }
  return shuffle(a);
}
let nums=['0','1','2','3','4','5','6','7','8','9'];
let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
describe("Random Tests", function() {
for(let i=0;i<40;i++) {
  let lst=createList();
  it(`Testing for ${lst}`,function() {
  let expected = meanTest(lst), actual = solution.mean(lst);
  assert.equal(JSON.stringify(actual),JSON.stringify(expected),"It should work for random inputs too");
  }
 )};
}); 
