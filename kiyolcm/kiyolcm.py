Test.describe("Basic tests")

a = [[], [], [], [], [], [], [], [], []]
Test.assert_equals(kiyo_lcm(a), 0)

a = [[4, 3, 7, 8, 9, 2, 1, 5, 'c'], [6, 5, 6, 1, 'v', 1, 0, 5, 1], [4, 4, 'c', 7, 6, 6, 3, 6, 7], 
     [1, 7, 7, 'l', 5, 8, 9, 5, 9], [0, 't', 8, 2, 8, 9, 0, 8, 0], [4, 6, 2, 6, 'o', 8, 4, 2, 4], 
     [3, 6, 9, 2, 0, 8, 2, 3, 'u'], [9, 3, 1, 9, 4, 4, 'u', 7, 7], [0, 'n', 9, 0, 0, 0, 9, 2, 2]]
Test.assert_equals(kiyo_lcm(a), 0)

a =  [[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],
     [1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],
     [1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9]]
Test.assert_equals(kiyo_lcm(a), 25)

a = [[1, 1, 5, 4, 4, 2, 5, 1, 5], [4, 2, 3, 5, 1, 4, 4, 2, 5], [4, 2, 1, 4, 5, 5, 4, 3, 3], 
     [2, 1, 5, 1, 1, 1, 1, 2, 4], [5, 1, 3, 1, 3, 2, 4, 2, 1], [3, 1, 1, 2, 4, 2, 5, 3, 5], 
     [5, 2, 5, 3, 3, 4, 3, 4, 1], [3, 4, 4, 5, 5, 5, 5, 4, 5], [3, 3, 5, 5, 3, 3, 3, 5, 2]]
Test.assert_equals(kiyo_lcm(a), 21420)

a = [[9, 4, 5, 8, 0, 9, 1, 1, 3], [5, 0, 8, 5, 4, 3, 4, 5, 5], [9, 5, 1, 6, 7, 8, 8, 9, 5], 
     [9, 9, 7, 8, 6, 2, 0, 2, 9], [4, 7, 9, 3, 6, 6, 2, 6, 1], [0, 3, 5, 7, 0, 5, 1, 6, 2], 
     [7, 8, 4, 1, 0, 1, 6, 0, 0], [0, 2, 1, 8, 8, 7, 6, 0, 1], [4, 3, 5, 6, 5, 4, 0, 3, 6]]
Test.assert_equals(kiyo_lcm(a), 1970640)

a = [[1, 7, 6, 6, 'm', 5, 1, 8, 0], [6, 2, 8, 'h', 0, 4, 6, 7, 3], [5, 5, 5, 7, 2, 1, 4, 'c', 3], 
     [7, 0, 7, 1, 1, 1, 't', 9, 3], [8, 9, 2, 4, 4, 'v', 6, 2, 4], ['o', 1, 5, 1, 7, 6, 2, 4, 6], 
     [8, 8, 8, 9, 4, 8, 9, 9, 'j'], [4, 9, 8, 'v', 3, 3, 5, 0, 6], [1, 8, 6, 8, 7, 'e', 8, 9, 0]]
Test.assert_equals(kiyo_lcm(a), 24226020)

def kiyo_lcm_test(a):
    r = []
    for i in a:
        tot = 0
        for j in i:
            if type(j)==int and (j % 2 != 0):tot+=j
        r.append(tot)
    return lcm_arr(r)

gcd = lambda a, b: a if b == 0 else gcd(b, a%b)
lcm = lambda a, b: 0 if (a == 0 or b == 0) else (a * b) // gcd(a, b)
    
def lcm_arr(a):
    r = 1
    for i in a:
        r = lcm(i, r)
    return r

import random
def create_arr():
    r = []
    n = random.randint(9,18)
    for _ in range(n):
        a = [random.randint(0,9) for x in range(9)]
        a[random.randint(0,8)]=chr(random.randint(97,122))
        r.append(a)
    return r

Test.describe("Random tests")
for i in range(40):
    a = create_arr()
    Test.it("Testing for lcm of "+str(a))
    Test.it("returns " +str(kiyo_lcm(a)))
    Test.assert_equals(kiyo_lcm(a), kiyo_lcm_test(a),"It should work with random inputs too" )