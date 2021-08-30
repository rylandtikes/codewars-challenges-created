Test.describe("Basic tests") do
left ="
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^"
right ="
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^"
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left' )
left ="
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^"
right ="
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|[(1)]    |   **
`~~~~~~~~~~    ^"
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 3 in the left' )
left ="
   ,|___|,
   |[{1}]|
   |[{1}]|
   |[{1}]|
   | ==  |
   |[{1}]|
   /    &|
.-'`  ,   )****
|[{1}]    |   **
`~~~~~~~~~~    ^"
right ="
   ,|___|,
   |[(5)]|
   |[(5)]|
   |[(5)]|
   | ==  |
   |[(5)]|
   /    &|
.-'`  ,   )****
|[(5)]    |   **
`~~~~~~~~~~    ^"
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 0 dollar bills in his right boot and 0 in the left' )
left ="
   ,|___|,
   |     |
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|         |   **
`~~~~~~~~~~    ^"
right ="
   ,|___|,
   |[(1)]|
   |     |
   |[(1)]|
   | ==  |
   |[(1)]|
   /    &|
.-'`  ,   )****
|[(1)]    |   **
`~~~~~~~~~~    ^"
boots = [left, right]
Test.assert_equals(cowboys_dollars(boots),'This Rhinestone Cowboy has 3 dollar bills in his right boot and 2 in the left' )
end
def randint(a,b) rand(b-a+1)+a end
def cowboys_dollars_test(boots)
  left_boot, right_boot = dollar_count(boots[0]), dollar_count(boots[1])
  "This Rhinestone Cowboy has "+right_boot.to_s+" dollar bills in his right boot and "+left_boot.to_s+" in the left"
end
def dollar_count(boot)
  cnt, pat = 0, '[(1)]'
  pos = [16,27,38,60]
  pos.each do |x|
    if boot.slice(x,5) == pat then cnt += 1 end
  end
 cnt
end
def create_boot()
  boot = "\n   ,|___|,\n   |     |\n   |     |\n   |     |\n   | ==  |\n   |     |\n   /    &|\n.-'`  ,   )****\n|         |   **\n`~~~~~~~~~~    ^"
  pos = [16,27,38,60,95]
  money = ['[(1)]','[{1}]','[(5)]', '     ','[(1)]']
  pos.each do |x|
    boot = boot.sub(boot[x,5], money[randint(0,4)])
  end
  boot
end
Test.describe("Random tests") do
  40.times do
    boots = [create_boot(), create_boot()]
    Test.it("Testing for boots #{puts(boots)}") do
    expected = cowboys_dollars_test(boots)
    Test.assert_equals(cowboys_dollars(boots), expected,"It should work for random inputs too")
    end
  end
end
