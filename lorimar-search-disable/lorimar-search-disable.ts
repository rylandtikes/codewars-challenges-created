/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./solution');
import {assert} from "chai";

describe("solution", function(){
  it("Basic Tests", function() {
    let log1:string = "1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031";
    console.log(`Testing  ${log1}`); 
    assert.equal(solution.searchDisable(log1),("match disable bot"));
    let log2:string = "2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031"
    console.log(`Testing  ${log2}`); 
    assert.equal(solution.searchDisable(log2),("no match continue"));
    let log3:string = '7693 3051 1999 7307 4323 4968 2666 4267 9264 2399 66 5739 300 9119 2399 5177 4649 2492 2471 7301 6192 9981 1828 2698 9386 8967 1502 9014 8799 5098 7155 5090 3909 2096 6296 2835 5746 9291 2312 6419 1740 1998 6281 3328 7590 3903 4197 1804 2223 7495 4483 234 9294 9882 2793 6959 320 3495 3540 5308 6453 8666 921 4174 7987 6834 6755 4487 8396 2577 9191 6323 2684 2914 7651 2941 2897 3401 409 4381 9679 6791 927 6590 1683 2118 423 8844 7565 7052 9809 6121 6263 1614 9606 4078 7386 5360 8982'
    console.log(`Testing  ${log3}`);
    assert.equal(solution.searchDisable(log3),("no match continue"));
    let log4:string = '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923'
    console.log(`Testing  ${log4}`);
    assert.equal(solution.searchDisable(log4),("match disable bot"));
    let log5:string = '5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 2423 2423 2423 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929'
    console.log(`Testing  ${log5}`);
    assert.equal(solution.searchDisable(log5),("no match continue"));  
  });
});
export function searchDisableTest(log:string):string{
  let a:string[] = log.split(" ");
  let primes:string[] = [];
  for(let i=0;i<a.length;i++){
    if(a[i].length==4 && (a[i][a[i].length-2]=="3" || a[i][a[i].length-2]=="2")){
      if(isPrime(parseInt(a[i]))===true) primes.push(a[i]);
    }
  }
  let uniquePrimes:string[] = primes.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  let total:number = 0;
  let cnt:number = 0;
  for(let i=0;i<uniquePrimes.length;i++){
    cnt = 0;
    for(let j=0;j<primes.length;j++){
      if(primes[j]==uniquePrimes[i]) cnt++;
    }
    if(cnt>3) total+=cnt;
  }
  if(total>50) return "match disable bot";
  else return "no match continue";
}
export function isPrime(n:number):boolean{
  for(let i = 2; i < n; i++) if (n % i == 0) return false;
  return n >= 2;
}
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
export function createLog(n:number):string{
  let a:string[] = [];
  for(let i=1;i<n+1;i++){
      a.push((randint(1,10000)).toString());
  }
  return a.join(' ');
}
describe("Random Tests", function(){
  for(let i=0; i<20; i++) {
    let n = randint(100,100000);
    let log = createLog(n);
    it(`Testing for ${n}`,function(){
      assert.equal(solution.searchDisable(log), searchDisableTest(log)); 
    }
  )};
});