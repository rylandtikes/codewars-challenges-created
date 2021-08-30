Test.describe("Basic tests")
lst1 = [(2, 'tofu'),
       (2, 'potato'),
       (2, 'cucumber'),
       (2, 'cabbage'),
       (1, 'turnip'),
       (1, 'pepper'),
       (1, 'onion'),
       (1, 'mushroom'),
       (1, 'celery'),
       (1, 'carrot')]
s1 = 'potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage' 
Test.assert_equals(count_vegetables(s1), (lst1))
lst2 = [(15, 'turnip'),
        (15, 'mushroom'),
        (13, 'cabbage'),
        (10, 'carrot'),
        (9, 'potato'),
        (7, 'onion'),
        (6, 'tofu'),
        (6, 'pepper'),
        (5, 'cucumber'),
        (4, 'celery')]
s2 = '''mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
 mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
 onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
 onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
 potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
 mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip'''
Test.assert_equals(count_vegetables(s2), (lst2))
Test.describe("Random tests")
import random

def random_test():
	vegetables = ['potato ', 'tofu ', 'cucumber ', 'cabbage ', 'turnip ', 'pepper ', 'onion ',
	              'carrot ', 'celery ','mushroom ', 'chopsticks ']
	s = ""
	for i in range(random.randint(1,1000)):
		s += random.choice(vegetables)
	return s

def count_vegetables_test(string):
    s = string.split(); counts = {}; a = []
    vegetables = ['potato', 'tofu', 'cucumber', 'cabbage', 'turnip', 'pepper', 'onion',
                  'carrot', 'celery','mushroom']
    for veg in s:
        if veg in vegetables:
            if veg not in counts:counts[veg] = 1
            else:counts[veg] += 1
            
    for key, val in counts.items():
         a.append( (val, key) )
    return sorted(a, reverse=True)

for i in range(40):
    string = random_test()
    Test.it("Testing for "+str(string))
    Test.assert_equals(count_vegetables(string), count_vegetables_test(string),"It should work with random inputs too" )