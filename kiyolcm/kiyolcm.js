Test.describe("Basic tests",_=>{
var a = [[], [], [], [], [], [], [], [], []];
Test.assertSimilar(kiyoLcm(a), 0);

var a = [[4, 3, 7, 8, 9, 2, 1, 5, 'c'], [6, 5, 6, 1, 'v', 1, 0, 5, 1], [4, 4, 'c', 7, 6, 6, 3, 6, 7], 
     [1, 7, 7, 'l', 5, 8, 9, 5, 9], [0, 't', 8, 2, 8, 9, 0, 8, 0], [4, 6, 2, 6, 'o', 8, 4, 2, 4], 
     [3, 6, 9, 2, 0, 8, 2, 3, 'u'], [9, 3, 1, 9, 4, 4, 'u', 7, 7], [0, 'n', 9, 0, 0, 0, 9, 2, 2]];
Test.assertSimilar(kiyoLcm(a), 0);

var a = [[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],
     [1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],
     [1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9]];
Test.assertSimilar(kiyoLcm(a), 25);

var a = [[1, 1, 5, 4, 4, 2, 5, 1, 5], [4, 2, 3, 5, 1, 4, 4, 2, 5], [4, 2, 1, 4, 5, 5, 4, 3, 3], 
     [2, 1, 5, 1, 1, 1, 1, 2, 4], [5, 1, 3, 1, 3, 2, 4, 2, 1], [3, 1, 1, 2, 4, 2, 5, 3, 5], 
     [5, 2, 5, 3, 3, 4, 3, 4, 1], [3, 4, 4, 5, 5, 5, 5, 4, 5], [3, 3, 5, 5, 3, 3, 3, 5, 2]]
Test.assertSimilar(kiyoLcm(a), 21420);
var a = [[9, 4, 5, 8, 0, 9, 1, 1, 3], [5, 0, 8, 5, 4, 3, 4, 5, 5], [9, 5, 1, 6, 7, 8, 8, 9, 5], 
     [9, 9, 7, 8, 6, 2, 0, 2, 9], [4, 7, 9, 3, 6, 6, 2, 6, 1], [0, 3, 5, 7, 0, 5, 1, 6, 2], 
     [7, 8, 4, 1, 0, 1, 6, 0, 0], [0, 2, 1, 8, 8, 7, 6, 0, 1], [4, 3, 5, 6, 5, 4, 0, 3, 6]]
Test.assertSimilar(kiyoLcm(a), 1970640);

var a = [[1, 7, 6, 6, 'm', 5, 1, 8, 0], [6, 2, 8, 'h', 0, 4, 6, 7, 3], [5, 5, 5, 7, 2, 1, 4, 'c', 3], 
     [7, 0, 7, 1, 1, 1, 't', 9, 3], [8, 9, 2, 4, 4, 'v', 6, 2, 4], ['o', 1, 5, 1, 7, 6, 2, 4, 6], 
     [8, 8, 8, 9, 4, 8, 9, 9, 'j'], [4, 9, 8, 'v', 3, 3, 5, 0, 6], [1, 8, 6, 8, 7, 'e', 8, 9, 0]]
Test.assertSimilar(kiyoLcm(a), 24226020);
})
function kiyoLcmTest(a) {
  let r = [];
  for(let i = 0; i < a.length; i++) {                    
    let tot = 0;
    for(let j = 0; j < a[i].length; j++) {
      if(Number.isInteger(a[i][j]) && a[i][j] % 2 != 0) tot+=a[i][j];
    }
    r.push(tot);
  }
  return lcmArr(r);
}
function gcd(a,b) {
  if (b == 0) return a;
  return gcd(b, a%b);
}
function lcm(a,b) {
  if (a == 0 || b == 0) return 0;
  return (a * b) / gcd(a, b);
}
function lcmArr(a) {
  let r = 1
  for (let i = 0; i < a.length; i++) r = lcm(a[i], r);
  return r;
}
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
function createArr() {
  let r = [];
  var nums="0123456789";
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let n = randint(9,18);
  for (let i = 0; i < n; i++) {
    let a = Array.from({length:9},a=>parseInt(nums[randint(0,nums.length-1)]));
    a[randint(0,8)]=alpha[randint(0,25)];
    r.push(a);
  }
  console.log(r);
  return r;
}   
Test.describe("Random tests",_=>{
for (var i=0;i<40;i++){
  var a = createArr();
  var actual = kiyoLcm(a);
  var expected = kiyoLcmTest(a);
  Test.it(`Testing for ${a}`,_=>{
  Test.assertSimilar(actual,expected,"It should work for random inputs too");
  })
}
})