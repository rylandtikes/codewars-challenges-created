Test.describe("Basic tests")
a = []
Test.assert_equals(count_robots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're functioning automatik","And we are dancing mechanik"]
Test.assert_equals(count_robots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])
a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b"]
Test.assert_equals(count_robots(a), ["1 robots functioning automatik", "2 robots dancing mechanik"])
a = ["d[(0)(0)]b We're functioning automatik d[(0)(0)]b","And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b"]
Test.assert_equals(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d[(0)(0)}b We're functioning automatik D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
Test.assert_equals(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"]
Test.assert_equals(count_robots(a), ["3 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b", 'and m><0(;0[;a we dancing are Mechanic']
Test.assert_equals(count_robots(a), ["3 robots functioning automatik", "0 robots dancing mechanik"])

a =["We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
    "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
    "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
    "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
    "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
    "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]

Test.assert_equals(count_robots(a), ["2 robots functioning automatik", "3 robots dancing mechanik"])
a = ["d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"]
Test.assert_equals(count_robots(a), ["0 robots functioning automatik", "0 robots dancing mechanik"])

Test.describe("Random tests")
import random
import re

legs, body = ["|","}",";","&","#","[","]","/",">","<","(",")","*", " "], ["|","}",";","&","#","[","]","/",">","<","(",")","*", " "]
lines = ["We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
         "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
         "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
         "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
         "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
         "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"]

def create_arr(n):
    r = []
    for x in range(n):
        t = random.choice(lines).split()
        bot = "{0}{1}{2}0{3}{4}0{5}{6}{7}".format(
        random.choice(legs),random.choice(body),random.choice(body),random.choice(body),random.choice(body),
        random.choice(body),random.choice(body),random.choice(legs))
        t.append(bot);random.shuffle(t);cases = [" ".join(t).upper()," ".join(t).upper()]
        r.append(random.choice(cases))
    return r

pattern = re.compile(r'[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]')
def count_robots_test(a):
    auto_cnt = mech_cnt = 0
    for s in a:
        s = s.lower()
        count = len(re.findall(pattern, s))
        if "automatik"  in s: auto_cnt += count
        elif "mechanik" in s: mech_cnt += count
    return["{0} robots functioning automatik".format(auto_cnt),"{0} robots dancing mechanik".format(mech_cnt)]

Test.describe("Random tests")
for i in range(100):
    a = create_arr(random.randint(0,100))
    actual = count_robots(a)
    expected = count_robots_test(a)
    Test.it("Testing for array "+str(a))
    Test.it("returns " +str(actual))
    Test.assert_equals(actual, expected,"It should work with random inputs too" )
