sizes = [10,12,16,20,30]
def randint(a,b) rand(b-a+1)+a end
def create_chore_list(n)
  chores = []
  i = 0
  while i < n
    chores.push(randint(1,10))
    i+=1
  end
 chores
end
def chore_assignment_test(chores)
    assignments = []
    chores = chores.sort()
    i = 0
    j = chores.length - 1
    while (i < j) do
        assignments.push(chores[i]+chores[j])
        i+=1
        j-=1
    assignments = assignments.sort()
    end
  assignments
end
Test.describe("Basic tests") do
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
end
Test.describe("Random tests") do
40.times do
  chores = create_chore_list(sizes[randint(0,sizes.size-1)])
  Test.it("Testing for chore durations =>#{chores}") do
  Test.assert_equals(chore_assignment(chores),chore_assignment_test(chores),"It should work for random inputs too")
  end
 end
end
