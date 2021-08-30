Test.describe("Basic tests",_=> {
chores = [5, 2, 1, 6, 4, 4];
Test.assertSimilar(choreAssignment(chores),[7, 7, 8]);
chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9];
Test.assertSimilar(choreAssignment(chores),[7, 8, 8, 10, 10, 11]);
chores = [5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6];
Test.assertSimilar(choreAssignment(chores),[10, 11, 11, 11, 11, 12, 12, 13]);
chores = [9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2];
Test.assertSimilar(choreAssignment(chores),[11, 11, 11, 12, 12, 12, 12, 12, 12]);
chores = [1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8];
Test.assertSimilar(choreAssignment(chores), [10, 10, 11, 11, 11, 11, 11, 11, 12, 12]);
});
Test.describe("Random tests",_=> {
function choreAssignmentTest(chores) {
  chores = sorted(chores);
  let i = 0, j = chores.length - 1, assignments = [];
  while(i < j) {
    assignments.push(chores[i]+chores[j]);
    i++;
    j--;
  }
  assignments = sorted(assignments);
  return assignments;
}
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
function createChoreList(n) {
  let chores = [], i = 0;
  while(i < n) {
    chores.push(randint(1,10));
    i++;
  }
  return chores;
}
const sorted=(a)=>a.sort((a,b)=>a-b);
for(var i=0;i<40;i++) {
  let sizes = [10,12,16,20,30];
  let chores = createChoreList(sizes[randint(0,sizes.length-1)]);
  Test.it(`Testing for chore durations =>${chores}`,_=> {
  let expected = choreAssignmentTest(chores), actual = choreAssignment(chores);
  Test.assertSimilar(actual,expected,"It should work for random inputs too");
  });
 }
});
