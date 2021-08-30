Test.describe("Basic tests")
left ='''
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^'''
right ='''
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^'''
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left' )
left ='''
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^'''
right ='''
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|[(1)]    |   **
`~~~~~~~~~~    ^'''
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left' )
left ='''
   ,|___|,
   |[{1}]|
   |[{1}]|
   |[{1}]|
   | ==  |
   |[{1}]|
   /    &|
.-'`  ,   )****
|[{1}]    |   **
`~~~~~~~~~~    ^'''
right ='''
   ,|___|,
   |[(5)]|
   |[(5)]|
   |[(5)]|
   | ==  |
   |[(5)]|
   /    &|
.-'`  ,   )****
|[(5)]    |   **
`~~~~~~~~~~    ^'''
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 0 dollar bills in his right boot and 0 in the left' )
left ='''
   ,|___|,
   |     |
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^'''
right ='''
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|[(1)]    |   **
`~~~~~~~~~~    ^'''
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 2 in the left' )
import random
def cowboys_dollars_test(boots):
    left_boot, right_boot = dollar_count(boots[0]), dollar_count(boots[1])
    return "This Rhinestone Cowboy has {0} dollar bills in his right boot and {1} in the left".format(right_boot, left_boot)

def dollar_count(boot):
    cnt, pat = 0, '[(1)]'
    pos = [(16,21),(27,32),(38,43),(60,65)]
    for tup in pos:
       if boot[tup[0]:tup[1]] == pat: cnt += 1
    return cnt

def create_boot():
    boot = "\n   ,|___|,\n   |     |\n   |     |\n   |     |\n   | ==  |\n   |     |\n   /    &|\n.-'`  ,   )****\n|         |   **\n`~~~~~~~~~~    ^"
    pos = [(16,21),(27,32),(38,43),(60,65),(95,100)]
    money = ['[(1)]','[{1}]','[(5)]', '     ','[(1)]']
    for tup in pos:
        boot = boot.replace(boot[tup[0]:tup[1]], random.choice(money))
    return boot

Test.describe("Random tests")
for _ in range(40):
    boots = [create_boot(), create_boot()]
    expected = cowboys_dollars_test(boots)
    Test.it("Testing for left boot "+str(boots[0]))
    Test.it("Testing for right boot "+str(boots[1]))
    Test.it("Returns "+str(cowboys_dollars(boots)))
    Test.assert_equals(cowboys_dollars(boots), expected,"It should work with random inputs too" )
