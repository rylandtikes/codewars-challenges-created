/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";
describe("solution", function(){
  it("Basic Tests", function() {
var workloads = '';
assert.equal(solution.roastLegacy(workloads),'These guys are already DevOps and in the Cloud and the business is happy!');
var workloads = 'cloudstatelesspython';
assert.equal(solution.roastLegacy(workloads),'These guys are already DevOps and in the Cloud and the business is happy!');
var workloads = 'COBOL';
assert.equal(solution.roastLegacy(workloads),'Burn baby burn disco inferno 1000 points earned in this roasting and 0 complaints resolved!');
var workloads = 'slow!expensive!';
assert.equal(solution.roastLegacy(workloads),'Burn baby burn disco inferno 0 points earned in this roasting and 2 complaints resolved!');
var workloads = 'EXPENSIVE!AUTOMATEDRUBYCLOUDMONGOPAASTAPEACTIVE-ACTIVEPYTHONNOSQL';
assert.equal(solution.roastLegacy(workloads),'Burn baby burn disco inferno 50 points earned in this roasting and 1 complaints resolved!');
var workloads = 'expensive!NONOBJECTexpensive!NONOBJECThostage!JAVASCRIPTexpensive!DEVOPS';
assert.equal(solution.roastLegacy(workloads),'Burn baby burn disco inferno 1000 points earned in this roasting and 4 complaints resolved!');
var workloads = 'manual!COBOLnonobjectmonolithicfaxmodemthickclienttapefloppyoldschoolITslow!';
assert.equal(solution.roastLegacy(workloads),'Burn baby burn disco inferno 2400 points earned in this roasting and 2 complaints resolved!');
var workloads = 'tapedistributedactive-activeoldschoolITmonolithicjavamodemnotfunctioning!thickclientCOBOLIAASexpensive!statelessrubyPAASautomatedimmutableagilemongonosqlhostage!nonobjectfaxpythoncontainerizedsecurity!floppyslow!manual!multi-tenantSAASserverlessDevOpscloudJavascriptCOBOL';
assert.equal(solution.roastLegacy(workloads),'Burn baby burn disco inferno 3400 points earned in this roasting and 5 complaints resolved!');
 });
});
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
export function shuffle(a: any[]): any[] {
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
export function roastLegacyTest(workloads: string): string {
  let complaints = ["slow!", "expensive!", "manual!", "down!", "hostage!", "security!"],
      legacy = { cobol:1000, nonobject:500, monolithic:500, fax:100, modem:100,
                 thickclient:50, tape:50, floppy:50, oldschoolit:50 },
      w = workloads.toLowerCase(), points = 0, complaintsCnt = 0;
  for (let k in legacy) { if (w.match(k) === null) continue;
    let pattern = new RegExp(k, 'g');
    points += w.match(pattern).length * legacy[k];
  }
  for (let j in complaints) { if (w.match(complaints[j]) === null) continue;
    let pattern = new RegExp(complaints[j], 'g');
    complaintsCnt += w.match(pattern).length;
  }
  if (points === 0 && complaintsCnt === 0) {
    return "These guys are already DevOps and in the Cloud and the business is happy!";
  }
  else return `Burn baby burn disco inferno ${points} points earned in this roasting and ${complaintsCnt} complaints resolved!`
}
export function createWorkloads(n: number): string {
  let t = ["COBOL","nonobject","monolithic","fax","modem","thickclient","tape","floppy","oldschoolIT",
           "open-source","cloud","stateless","python","Javascript","ruby","nosql","multi-tenant",
           "SAAS","PAAS","IAAS","java","mongo", "serverless", "automated","containerized","immutable",
           "active-active","distributed","agile","DevOps","golang","slow!","expensive!","manual!",
           "notfunctioning!","hostage!","security!"], workloads = [];
  for (let i = 0; i < n; i++) {
    let y = t[randint(0,36)];
    if (i % 2 == 0) y = y.toUpperCase();
    workloads.push(y); }
  shuffle(workloads);
  return workloads.join('');
}
describe("Random Tests", function() {
for (let i = 0; i < 40; i++) {
  let workloads = createWorkloads(randint(0,100));
  it(`Testing for ${workloads}`,function() {
  console.log(solution.roastLegacy(workloads));
  let expected = roastLegacyTest(workloads);
  assert.equal(solution.roastLegacy(workloads),expected,"It should work for random inputs too");
  }
 )};
});
