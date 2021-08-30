Test.describe("Basic tests",_=>{
var lst1 = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
Test.assertSimilar(mean(lst1), [3.6, 'udiwstagwo']);
var lst2 = ['0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0'];
Test.assertSimilar(mean(lst2), [3.0, 'cxwyvuhinu']);
var lst3 = ['0', 'u', 'a', 'y', '0', 'a', '9', 'q', '3', 'v', 'g', '7', '6', '4', 'y', 'd', '8', '6', '0', 'd'];
Test.assertSimilar(mean(lst3), [4.3, 'uayaqvgydd']);
var lst4 = ['s', 'n', '9', 'l', '0', 'm', 'i', 'z', '9', '7', 'y', '4', 'z', '3', '3', 'k', '4', '1', '0', 'k'];
Test.assertSimilar(mean(lst4), [4.0, 'snlmizyzkk']);
var lst5 = ['5', 'v', 'u', 'k', '8', '4', '9', 'b', '9', 'g', '5', 'z', '3', 'f', '6', 'u', 'i', '6', '6', 't'];
Test.assertSimilar(mean(lst5), [6.1, 'vukbgzfuit']);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=lst=>[lst.filter(a=>"0123456789".indexOf(a)!=-1).reduce((a,b)=>a+ +b,0)/10, lst.filter(a=>"0123456789".indexOf(a)==-1).join("")];
Array.prototype.shuffle=function(){
  var i=this.length,j,k;
  for (;i;){
    j=~~(Math.random()*this.length);
    k=this[--i];this[i]=this[j];this[j]=k;
  }
  return this;
}
var nums="0123456789",
lets="abcdefghijklmnopqrstuvwxyz";

for (var i=0;i<40;i++){
  var lst=(Array.from({length:10},a=>nums[randint(0,nums.length-1)]).concat(Array.from({length:10},a=>lets[randint(0,lets.length-1)]))).shuffle();
  Test.it(`Testing for [${lst.join(", ")}]`,_=>{
  Test.assertSimilar(mean(lst),mean(lst),"It should work for random inputs too");
  })
}
})
