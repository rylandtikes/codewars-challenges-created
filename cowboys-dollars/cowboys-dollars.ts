/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";
describe("solution", function(){
  it("Basic Tests", function() {
var left = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'],
right = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'];
var boots = [left.join('\n'),right.join('\n')];
assert.equal(solution.cowboysDollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left');
var left = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'],
right = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|[(1)]    |   **',
 '`~~~~~~~~~~    ^'];
var boots = [left.join('\n'),right.join('\n')];
assert.equal(solution.cowboysDollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left');
var left = ['',
 '   ,|___|,',
 '   |[{1}]|',
 '   |[{1}]|',
 '   |[{1}]|',
 '   | ==  |',
 '   |[{1}]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|[{1}]    |   **',
 '`~~~~~~~~~~    ^'],
right = ['',
 '   ,|___|,',
 '   |[(5)]|',
 '   |[(5)]|',
 '   |[(5)]|',
 '   | ==  |',
 '   |[(5)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|[(5)]    |   **',
 '`~~~~~~~~~~    ^'];
var boots = [left.join('\n'),right.join('\n')];
assert.equal(solution.cowboysDollars(boots),'This Rhinestone Cowboy has 0 dollar bills in his right boot and 0 in the left');
var left = ['',
 '   ,|___|,',
 '   |     |',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|         |   **',
 '`~~~~~~~~~~    ^'],
right = ['',
 '   ,|___|,',
 '   |[(1)]|',
 '   |     |',
 '   |[(1)]|',
 '   | ==  |',
 '   |[(1)]|',
 '   /    &|',
 ".-'`  ,   )****",
 '|[(1)]    |   **',
 '`~~~~~~~~~~    ^'];
var boots = [left.join('\n'),right.join('\n')];
assert.equal(solution.cowboysDollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 2 in the left');
 });
});
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
export function cowboysDollarsTest(boots) {
  let leftBoot = dollarCount(boots[0]), rightBoot = dollarCount(boots[1]);
  return `This Rhinestone Cowboy has ${rightBoot} dollar bills in his right boot and ${leftBoot} in the left`;
}
export function dollarCount(boot) {
  let cnt = 0, pat = '[(1)]', pos = [[16,21],[27,32],[38,43],[60,65]];
  for (let i = 0; i < pos.length; i++) if (boot.slice(pos[i][0], pos[i][1]) == pat) cnt++;
  return cnt;
}
export function createBoot() {
  let boot = "\n   ,|___|,\n   |     |\n   |     |\n   |     |\n   | ==  |\n   |     |\n   /    &|\n.-'`  ,   )****\n|         |   **\n`~~~~~~~~~~    ^",
      pos = [16,27,38,60,95],
      money = ['[(1)]','[{1}]','[(5)]', '     ','[(1)]'];
  for (let i = 0; i < pos.length; i++) {
      var a = boot.split(''), s = money[randint(0,4)],x = pos[i];
      a[x] = s[0];
      a[x+1] = s[1];
      a[x+2] = s[2];
      a[x+3] = s[3];
      a[x+4] = s[4];
      boot = a.join(''); 
  }
  return boot;
} 
describe("Random Tests", function() {
for (let i = 0; i < 40; i++) {
  var leftBoot = createBoot(), rightBoot = createBoot(),
      boots = [leftBoot, rightBoot];
  console.log(`left boot ${leftBoot}`)
  console.log(`right boot ${rightBoot}`)
  console.log(solution.cowboysDollars(boots));
  it(`Testing for ${boots}`,function() {
  var expected = cowboysDollarsTest(boots);
  assert.equal(solution.cowboysDollars(boots),expected,"It should work for random inputs too");
  }
 )};
});
