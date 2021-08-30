def testing(actual, expected)
  actual.should eq expected
end
describe "basic tests" do
it "complete chores" do
a = [] of String
testing(count_robots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're functioning automatik","And we are dancing mechanik"]
testing(count_robots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b"]
testing(count_robots(a), ["1 robots functioning automatik", "2 robots dancing mechanik"])
a = ["d[(0)(0)]b We're functioning automatik d[(0)(0)]b","And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b"]
testing(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d[(0)(0)}b We're functioning automatik D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
testing(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d*(0)(0)}b We're functioning automatik Roboter0%1 D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
testing(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b", "and m><0(;0[;a we dancing are Mechanic"]
testing(count_robots(a), ["3 robots functioning automatik", "0 robots dancing mechanik"])
a =["We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
    "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
    "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
    "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
    "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]
testing(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"]
testing(count_robots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
  end
end
def randint(a,b) rand(b-a+1)+a end
def count_robots_test(a)
  auto_cnt = 0
  mech_cnt = 0
  a.each do |i|
    count = i.scan(/[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]/mi).size
    if i =~ /automatik/
      auto_cnt += count
    elsif i =~ /mechanik/
      mech_cnt += count
    end
  end
  [auto_cnt.to_s+" robots functioning automatik",mech_cnt.to_s+" robots dancing mechanik"]
end
def create_arr(n)
  r = [] of String
  body = ["|","}",";","&","#","[","]","/",">","<","(",")","*", " "]
  legs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "]
  lines = ["We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
         "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
         "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
         "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
         "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
         "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]
  n.times do
    t = lines[randint(0,18)].split()
    a = [legs[randint(0,25)],body[randint(0,12)],body[randint(0,12)],"0",body[randint(0,12)],body[randint(0,12)],
         "0",body[randint(0,12)],body[randint(0,12)],legs[randint(0,25)]]
    bot = a.join("");t.push(bot);t.shuffle()
    cases = [t.join(" ").upcase(),t.join(" ").downcase()]
    r.push(cases[randint(0,1)])
  end
  r
end
describe "randomized tests" do
  100.times do
    a = create_arr(randint(0,100))
    it("Testing for #{a}") do
    actual = count_robots(a)
    puts("result #{actual}")
    expected = count_robots_test(a)
    testing(actual, expected)
    end
  end
end
