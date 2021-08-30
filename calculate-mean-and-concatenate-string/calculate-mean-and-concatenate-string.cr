def testing(actual, expected)
  actual.should eq expected
end
describe "basic tests" do
it "complete chores" do
  lst = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]
  testing(mean(lst), [3.6, "udiwstagwo"])
  lst = ["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]
  testing(mean(lst), [3.0, "cxwyvuhinu"])
  lst = ["0", "u", "a", "y", "0", "a", "9", "q", "3", "v", "g", "7", "6", "4", "y", "d", "8", "6", "0", "d"]
  testing(mean(lst), [4.3, "uayaqvgydd"])
  lst = ["s", "n", "9", "l", "0", "m", "i", "z", "9", "7", "y", "4", "z", "3", "3", "k", "4", "1", "0", "k"]
  testing(mean(lst), [4.0, "snlmizyzkk"])
  lst = ["5", "v", "u", "k", "8", "4", "9", "b", "9", "g", "5", "z", "3", "f", "6", "u", "i", "6", "6", "t"]
  testing(mean(lst), [6.1, "vukbgzfuit"])
  end
end
def randint(a,b) rand(b-a+1)+a end
def mean_test(lst)
  sum, s = 0, ""
  lst.each do |i|
    if i =~ /[a-z]/
      s += i
    else
      sum += i.to_f
    end
  end
  [(sum / 10).round(1), s]
end
def create_lst
  nums=["0","1","2","3","4","5","6","7","8","9"];
  chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  a = [] of String; i = 0
  while i < 10
    a.push(nums[randint(0,nums.size-1)])
    a.push(chars[randint(0,chars.size-1)])
    i+=1
  end
  a.shuffle()
end
describe "randomized tests" do
40.times do
  lst = create_lst()
  it("Testing for #{lst}") do
  actual = mean(lst)
  expected = mean_test(lst)
  testing(actual, expected)
  end
 end
end
