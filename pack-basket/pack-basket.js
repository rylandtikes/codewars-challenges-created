Test.describe("Basic tests",_=>{
basket = 48;
pile = 'dust dust 1';
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 1 kilograms');
basket = 41
pile = 'dust 2 7 1 dust 4 75 dust 17 8dust 100dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 39 kilograms')
basket = 43
pile = 'dust 1 dust 4 dust 8 dust 100 dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 13 kilograms')
basket = 54
pile = 'dust 2 7 1 13 dust 4 75 dust 17 8 dust 100 dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 52 kilograms')
basket = 47
pile = 'dust 2 7 1 dust 4 75 dust 17 8 dust 100 dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 39 kilograms')
basket = 41
pile = 'dust 2 7 1 dust 4 75 dust 17 8dust 100dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 39 kilograms')
basket = 35
pile = 'dust83dust 61 146 51 48 170 100 114 145 191 29 7 12 139 136 62 123 43 dust46dust 36 92 dust9dust 144 2 dust150dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 31 kilograms')
basket = 50
pile = 'dust83dust 45 25 22 46'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 47 kilograms')
basket = 10
pile = 'dust83dust 45 25 22 46'
Test.assertSimilar(packBasket(basket,pile), 'The basket weighs 0 kilograms')
})
Test.describe("Random tests",_=>{
function packBasketTest(basket,pile){
  pile = pile.replace(/dust/g,'');
  let a = pile.split(' ');let pieces = [];
  for(let i=0;i<a.length;i++){
    if(a[i]!='') pieces.push(parseInt(a[i]));
  }
  let b = basket;let p = pieces;
  let n = p.length;let m = new Array(n+1);
  for(let i=0;i<n+1;i++){
      m[i] = Array(b+1).fill(0); 
  }
  for(let i=1;i<n+1;i++){
    for(let j=0;j<b+1;j++){
      if (p[i-1] <= j){
        let remaining = j - p[i-1];
        m[i][j] = Math.max(m[i-1][j], m[i-1][remaining] + p[i-1]);
      }
      else m[i][j]=m[i-1][j];
    }
  }
  return 'The basket weighs '+ (m[n][b]).toString() +' kilograms'
}
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
function createPile(n){
  let a=[];
  let others=["dust56dust","dust","dust9dust","dust3dustdust"]
  for(let i=1;i<n+1;i++){
      a.push((randint(1,200)).toString());
      a.push(others[randint(0,3)]);
      a.push("dust");
  }
  return a.join(' ');
}
for (let i=0;i<200;i++){
  let n=randint(1,100);
  let pile=createPile(n);
  let basket=randint(10,200);
  Test.it(`Testing for basket of size =>${basket}<= & ${pile}'`,_=>{
  Test.assertSimilar(packBasket(basket,pile),packBasketTest(basket,pile),"It should work for random inputs too");
  })
}
})