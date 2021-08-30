/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";
describe("solution", function(){
  it("Basic Tests", function() {
var a = [];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["0 robots functioning automatik", "0 robots dancing mechanik"]));
    a = ["We're functioning automatik","And we are dancing mechanik"];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["0 robots functioning automatik", "0 robots dancing mechanik"]));
    a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b"];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["1 robots functioning automatik", "2 robots dancing mechanik"]));
    a = ["d[(0)(0)]b We're functioning automatik d[(0)(0)]b","And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b"];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["2 robots functioning automatik", "3 robots dancing mechanik"]));
    a = ["d[(0)(0)}b We're functioning automatik D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["2 robots functioning automatik", "3 robots dancing mechanik"]));
    a = ["d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["3 robots functioning automatik", "3 robots dancing mechanik"]));
    a = ["d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b", 'and m><0(;0[;a we dancing are Mechanic'];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["3 robots functioning automatik", "0 robots dancing mechanik"]));
    a =["We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
    "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
    "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
    "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
    "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]

assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["2 robots functioning automatik", "3 robots dancing mechanik"]));
    a = ["d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"];
assert.equal(JSON.stringify(solution.countRobots(a)),JSON.stringify(["0 robots functioning automatik", "0 robots dancing mechanik"]));
  });
});
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
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
export function createArr(n) {
  let r = [],
      body = ["|","}",";","&","#","[","]","/",">","<","(",")","*"],
      legs = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
              "n","o","p","q","r","s","t","u","v","w","x","y","z"],
      lines = ["We're charging our battery","And now we're full of energy",
         "We are the robots","We're functioning automatik",
         "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga",
         "Ja tvoi Rabotnik robotnik","We are programmed just to do","anything you want us to",
         "we are the robots","We're functioning Automatic","and we are dancing Mechanic",
         "we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
         "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
         "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]
  for(let i = 0; i < n; i++) {
    let t = lines[randint(0,18)].split(" "),
        a = [legs[randint(0,25)],body[randint(0,12)],body[randint(0,12)],"0",
             body[randint(0,12)],body[randint(0,12)],"0",body[randint(0,12)],
             body[randint(0,12)],legs[randint(0,25)]],
        bot = a.join("");
        t.push(bot);shuffle(t);
        let cases = [t.join(" ").toUpperCase(),t.join(" ").toLowerCase()];
        r.push(cases[randint(0,1)]);
  }
  return r;
}
export function countRobotsTest(a) {
 let autoCnt = 0, mechCnt = 0,
      regex = /[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]/ig;
  for(let i = 0; i < a.length; i++) {
    if(a[i].match(regex) === null) continue;
    let count = a[i].match(regex).length;
    if(a[i].toLowerCase().match(/automatik/g)!=null) autoCnt += count;
    else if(a[i].toLowerCase().match(/mechanik/g)!=null) mechCnt += count;
  }
  return [`${autoCnt} robots functioning automatik`, `${mechCnt} robots dancing mechanik`]
}
describe("Random Tests", function() {
for(var i=0;i<100;i++) {
  var a = createArr(randint(0,100));
  it(`Testing for ${a}`,function() {
  var expected = countRobotsTest(a), actual = solution.countRobots(a);
  assert.equal(JSON.stringify(actual),JSON.stringify(expected),"It should work for random inputs too");
  });
 }
});
