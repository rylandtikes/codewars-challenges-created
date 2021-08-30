/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";

describe("solution", function(){
  it("Basic Tests", function() {
  let lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
  let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
  console.log(`Testing  ${s1}`);
  assert.equal(JSON.stringify(solution.countVegetables(s1)), JSON.stringify((lst1)));
  let lst2 = [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];
  let s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
        mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
        onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
        onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
        potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
        mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;
  console.log(`Testing  ${s2}`);
  assert.equal(JSON.stringify(solution.countVegetables(s2)), JSON.stringify((lst2)));
  });
});
function createVegetables(n:number):string{
  let a:string[] = [];
  for(let i=1;i<n+1;i++){a.push(vegetables[randint(0,vegetables.length-1)]);}
  return a.join(' ');
}
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=s=>(arr=>arr.sort((a,b)=>b[0]-a[0] || (b[1]>a[1] ? 1 : b[1]<a[1] ? -1 : 0)))(["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"].map(a=>[(s.match(new RegExp(a,"g")) || []).length,a]).filter(a=>a[0]!=0));
let vegetables = ['potato ', 'tofu ', 'cucumber ', 'cabbage ', 'turnip ', 'pepper ', 'onion ', 'carrot ', 'celery ','mushroom ', 'chopsticks '];
describe("Random Tests", function(){
  for (var i=0;i<40;i++){
    let s=createVegetables(randint(1,1000));
    it(`Testing for ${s}`,function(){
    assert.equal(JSON.stringify(solution.countVegetables(s)), JSON.stringify(sol(s))); 
    }
  )};
});