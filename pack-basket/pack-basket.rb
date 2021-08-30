def pack_basket(basket,pile)
  pile = pile.gsub('dust','')
  pieces = []
  pile.split(' ').each do |i|
      pieces.push(i.to_i)
  end
  b = basket;p = pieces;n = p.length
  m = [nil] * (n+1)
  for i in (0..n+1)
      m[i] = [0] * (b+1)
  end
  for i in (1..n)
      for j in (0..b)
          if p[i-1] <= j 
              remaining = j - p[i-1]
              m[i][j] = [m[i-1][j], m[i-1][remaining] + p[i-1]].max
          else
              m[i][j]=m[i-1][j]
      end
   end
end
  'The basket weighs '+ ((m[n][b]).to_s) +' kilograms'
end 
Test.describe("Basic tests") do
basket = 48
pile = 'dust dust 1'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 1 kilograms')
basket = 41
pile = 'dust 2 7 1 dust 4 75 dust 17 8dust 100dust'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 39 kilograms')
basket = 43
pile = 'dust 1 dust 4 dust 8 dust 100 dust'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 13 kilograms')
basket = 54
pile = 'dust 2 7 1 13 dust 4 75 dust 17 8 dust 100 dust'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 52 kilograms')
basket = 47
pile = 'dust 2 7 1 dust 4 75 dust 17 8 dust 100 dust'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 39 kilograms')
basket = 41
pile = 'dust 2 7 1 dust 4 75 dust 17 8dust 100dust'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 39 kilograms')
basket = 35
pile = 'dust83dust 61 146 51 48 170 100 114 145 191 29 7 12 139 136 62 123 43 dust46dust 36 92 dust9dust 144 2 dust150dust'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 31 kilograms')
basket = 50
pile = 'dust83dust 45 25 22 46'
Test.assert_equals(pack_basket(basket,pile),'The basket weighs 47 kilograms')
basket = 10
pile = 'dust83dust 45 25 22 46'
Test.assert_equals(pack_basket(basket,pile), 'The basket weighs 0 kilograms')
end
Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def create_pile(n)
  a = []; i = 1
  others=["dust56dust","dust","dust9dust","dust3dustdust"]
  while i < n+1 do
    a.push((randint(1,200).to_s))
    a.push(others[randint(0,3)]);
    a.push("dust");
    i+=1
  end
  return a.join(' ')
end
def pack_basket_test(basket,pile)
  pile = pile.gsub('dust','')
  pieces = []
  pile.split(' ').each do |i|
      pieces.push(i.to_i)
  end
  b = basket;p = pieces;n = p.length
  m = [nil] * (n+1)
  for i in (0..n+1)
      m[i] = [0] * (b+1)
  end
  for i in (1..n)
      for j in (0..b)
          if p[i-1] <= j 
              remaining = j - p[i-1]
              m[i][j] = [m[i-1][j], m[i-1][remaining] + p[i-1]].max
          else
              m[i][j]=m[i-1][j]
      end
   end
end
  'The basket weighs '+ ((m[n][b]).to_s) +' kilograms'
end 
200.times do
  n=randint(1,100)
  pile=create_pile(n)
  basket=randint(10,200)
  Test.it("Testing for basket of size =>#{basket}<= & pile of #{pile}") do
  Test.assert_equals(pack_basket(basket,pile),pack_basket_test(basket,pile),"It should work for random inputs too")
  end
 end
end