Test.describe("Basic tests") do

a = [[], [], [], [], [], [], [], [], []]
Test.assert_equals(kiyo_lcm(a), 0)
a = [[4, 3, 7, 8, 9, 2, 1, 5, 'c'], [6, 5, 6, 1, 'v', 1, 0, 5, 1], [4, 4, 'c', 7, 6, 6, 3, 6, 7], 
     [1, 7, 7, 'l', 5, 8, 9, 5, 9], [0, 't', 8, 2, 8, 9, 0, 8, 0], [4, 6, 2, 6, 'o', 8, 4, 2, 4], 
     [3, 6, 9, 2, 0, 8, 2, 3, 'u'], [9, 3, 1, 9, 4, 4, 'u', 7, 7], [0, 'n', 9, 0, 0, 0, 9, 2, 2]]
Test.assert_equals(kiyo_lcm(a), 0)

a = [[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],
     [1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],
     [1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9]]
Test.assert_equals(kiyo_lcm(a),25)

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
end
def kiyo_lcm_test(a)
  r = []
  for i in 0...a.length                         
    tot = 0 
    for j in 0...a[i].length
      if (a[i][j] % 2 != 0) && (a[i][j].is_a? Integer)
        tot+=a[i][j] 
      end
    end
    r.push(tot)
 end
 lcm_arr(r)
end

def gcd(a,b)
  if b == 0 then return a end
  gcd(b, a%b)
end

def lcm(a,b)
  if (a == 0 || b == 0) then return 0 end
  (a * b) / gcd(a, b)
end

def lcm_arr(a)
  r = 1
  a.each do |i|
    r = lcm(i, r)
  end
  r
end
def randint(a,b) rand(b-a+1)+a end
def create_arr()
  r = []
  chars=("a".."z").to_a
  n = randint(9,18)
  n.times do
    a = (0...9).map{randint(0,9)}
    a[randint(0,8)]=chars[randint(0,25)]
    r.push(a)
  end
  r
end
Test.describe("Random tests") do
40.times do
  a = a = create_arr()
  Test.it("Testing for lcm of #{a}") do
  actual = kiyo_lcm(a)
  expected = kiyo_lcm_test(a)
  Test.assert_equals(actual,expected,"It should work for random inputs too")
  end
end
end