Test.describe("Basic tests")
garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Test.assert_equals(rake_garden(garden1),'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel' )
garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
Test.assert_equals(rake_garden(garden2), 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel')

Test.describe("Random tests")

import random

def create_garden():

    garden = ""

    garden_lst = ['moss ', 'ant ', 'snail ', 'slug ', 'spider ', 'rock ', 'gravel ',
                  'gravel ', 'gravel ', 'gravel ','gravel ', 'gravel ', 'gravel ',
                  'gravel ', 'gravel ', 'gravel ','gravel ', 'gravel ', 'gravel ',
                  'gravel ', 'gravel ', 'gravel ','gravel ', 'gravel ', 'gravel ', 
                  'rock ']

    for i in range(100):
        garden += random.choice(garden_lst)

    return garden.rstrip()

def rake_garden_test(garden):
    s = ""
    lst = garden.split()
    for i in range(len(lst)):
        if lst[i] == 'rock': continue
        elif lst[i] != 'gravel':
            lst[i] = 'gravel'
    return ' '.join(lst)
    
for i in xrange(40):
    garden = create_garden()
    Test.it("Testing for "+str(garden))
    Test.assert_equals(rake_garden(garden), rake_garden_test(garden),"It should work with random inputs too" )
