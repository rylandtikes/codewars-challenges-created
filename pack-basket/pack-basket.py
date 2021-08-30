Test.describe("Basic tests")
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


def pack_basket_test(basket,pile):
    pile = pile.replace('dust','')
    pieces = [int(x) for x in pile.split() if x.isdigit()]
    b = basket;p = pieces
    n = len(p)
    m = [None] * (n+1)
    for i in range(n+1):
        m[i] = [0] * (b+1)
    for i in range(1,n+1):
        for j in range(b+1):
            if p[i-1] <= j:
                remaining = j - p[i-1]
                m[i][j] = max(m[i-1][j], m[i-1][remaining] + p[i-1])
            else:
                m[i][j]=m[i-1][j]
    return 'The basket weighs '+ str(m[n][b]) +' kilograms'

import random

def create_pile():
    others=["dust56dust","dust","dust9dust","dust3dustdust"]
    pile=" ".join([str(random.randint(1,200)) if random.randint(0,4) else 'dust'+str(random.randint(1,200))+'dust' if random.randint(0,1) else others[random.randint(0,len(others)-1)] for q in range(random.randint(1,100))])
    return pile

for i in range(200):
    pile = create_pile()
    basket = random.randint(10,200) 
    Test.it("Testing for "+str(pile))
    Test.it("returns " +str(pack_basket(basket,pile)))
    Test.assert_equals(pack_basket(basket,pile), pack_basket_test(basket,pile),"It should work with random inputs too" )