Test.describe("Basic tests")
lst1 = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Test.assert_equals(mean(lst1), [3.6, 'udiwstagwo'])
lst2 = ['0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0']
Test.assert_equals(mean(lst2), [3.0, 'cxwyvuhinu'])
lst3 = ['0', 'u', 'a', 'y', '0', 'a', '9', 'q', '3', 'v', 'g', '7', '6', '4', 'y', 'd', '8', '6', '0', 'd']
Test.assert_equals(mean(lst3), [4.3, 'uayaqvgydd'])
lst4 = ['s', 'n', '9', 'l', '0', 'm', 'i', 'z', '9', '7', 'y', '4', 'z', '3', '3', 'k', '4', '1', '0', 'k']
Test.assert_equals(mean(lst4), [4.0, 'snlmizyzkk'])
lst5 = ['5', 'v', 'u', 'k', '8', '4', '9', 'b', '9', 'g', '5', 'z', '3', 'f', '6', 'u', 'i', '6', '6', 't']
Test.assert_equals(mean(lst5), [6.1, 'vukbgzfuit'])

Test.describe("Random tests")
import random
def random_test():
    alpha = [chr(x) for x in range(97,123)]
    chars = [random.choice(alpha) for i in range(10)]
    ints = [str(random.randint(0,9)) for x in range(10)]
    lst = ints + chars
    random.shuffle(lst)
    return lst

def mean_test(lst):
    total, char = 0, ''
    for i in lst:
        if i.isdigit(): total += float(i)
        else: char += i
    return [total/10, char]

for i in range(100):
    lst = random_test()
    Test.it("Testing for "+str(lst))
    Test.assert_equals(mean(lst), mean_test(lst),"It should work with random inputs too" )
