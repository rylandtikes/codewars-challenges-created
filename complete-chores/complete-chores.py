import random
create_chore_list = lambda n: [random.randint(1,10) for x in range(n)]
def chore_assignment_test(chores):
    assignments = []
    chores = sorted(chores)
    i, j = 0, len(chores) - 1
    while (i < j):
        assignments.append(chores[i]+chores[j])
        i+=1
        j-=1
    return sorted(assignments)

Test.describe("Basic tests")
chores = [5,2,1,6,4,4]
Test.assert_equals(chore_assignment(chores),[7, 7, 8])
chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]
Test.assert_equals(chore_assignment(chores),[7, 8, 8, 10, 10, 11])
chores = [5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6]
Test.assert_equals(chore_assignment(chores),[10, 11, 11, 11, 11, 12, 12, 13])
chores = [9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2]
Test.assert_equals(chore_assignment(chores),[11, 11, 11, 12, 12, 12, 12, 12, 12])
chores =  [1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8]
Test.assert_equals(chore_assignment(chores), [10, 10, 11, 11, 11, 11, 11, 11, 12, 12])

Test.describe("Random tests")
for i in range(40):
    chores = create_chore_list(random.choice([10,12,16,20,30]))
    Test.it("Testing for chore durations "+str(chores))
    Test.it("returns " +str(chore_assignment(chores)))
    Test.assert_equals(chore_assignment(chores), chore_assignment_test(chores),"It should work with random inputs too" )
