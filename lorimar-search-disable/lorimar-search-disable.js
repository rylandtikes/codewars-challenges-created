function searchDisable(log){
  let a = log.split(' ');
  let primes = [];
  for(let i=0;i<a.length;i++){
    if(a[i].length==4 && (a[i][a[i].length-2]=='3' || a[i][a[i].length-2]=='2')){
      if(isPrime(parseInt(a[i]))===true){primes.push(a[i]);}
    }
  }
  let counts = primes.reduce((a,b)=>(a[b] = a[b]+1 || 1,a),{});
  let c = 0;
  for(let j in counts){
    if(counts[j]>3){c+=counts[j];}
  }
  if(c>50) return "match disable bot";
  else return "no match continue";
}

function isPrime(n){
  for(let i = 2; i < n; i++) if (n % i == 0) return false;
  return n >= 2;
}
Test.describe("Basic tests",_=>{
log = '1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031'
Test.assertSimilar(searchDisable(log),'match disable bot');
log = '2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031'
Test.assertSimilar(searchDisable(log),'no match continue')
log = '7693 3051 1999 7307 4323 4968 2666 4267 9264 2399 66 5739 300 9119 2399 5177 4649 2492 2471 7301 6192 9981 1828 2698 9386 8967 1502 9014 8799 5098 7155 5090 3909 2096 6296 2835 5746 9291 2312 6419 1740 1998 6281 3328 7590 3903 4197 1804 2223 7495 4483 234 9294 9882 2793 6959 320 3495 3540 5308 6453 8666 921 4174 7987 6834 6755 4487 8396 2577 9191 6323 2684 2914 7651 2941 2897 3401 409 4381 9679 6791 927 6590 1683 2118 423 8844 7565 7052 9809 6121 6263 1614 9606 4078 7386 5360 8982'
Test.assertSimilar(searchDisable(log),'no match continue')
log = '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923'
Test.assertSimilar(searchDisable(log),'match disable bot')
log = '5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 2423 2423 2423 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929'
Test.assertSimilar(searchDisable(log),'no match continue')
})
function searchDisableTest(log){
  let a = log.split(' ');
  let primes = [];
  for(let i=0;i<a.length;i++){
    if(a[i].length==4 && (a[i][a[i].length-2]=='3' || a[i][a[i].length-2]=='2')){
      if(isPrime(parseInt(a[i]))===true){primes.push(a[i]);}
    }
  }
  let counts = primes.reduce((a,b)=>(a[b] = a[b]+1 || 1,a),{});
  let c = 0;
  for(let j in counts){
    if(counts[j]>3){c+=counts[j];}
  }
  if(c>50) return "match disable bot";
  else return "no match continue";
}
function isPrime(n){
  for(let i = 2; i < n; i++) if (n % i == 0) return false;
  return n >= 2;
}
Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
function createLog(n){
  let a=[];
  for(let i=1;i<n+1;i++){
      a.push((randint(1,10000)).toString());
  }
  return a.join(' ');
}
for (var i=0;i<20;i++){
  let n=randint(100,100000);
  let log=createLog(n);
  Test.it(`Testing for '${n}'`,_=>{
  Test.assertSimilar(searchDisable(log),searchDisableTest(log),"It should work for random inputs too");
  })
}
})