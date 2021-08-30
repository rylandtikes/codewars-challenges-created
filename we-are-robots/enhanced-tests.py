import re

def count_robots_1(a):
    pattern = re.compile(r"\w\W{2}0\W{2}0\W{2}\w")
    auto_cnt = mech_cnt = 0
    for x in a:
        count = len(re.findall(pattern, x ))
        if "automatik"  in x.lower(): auto_cnt += count
        elif "mechanik" in x.lower(): mech_cnt += count
    return["{0} robots functioning automatik".format(auto_cnt),"{0} robots dancing mechanik".format(mech_cnt)]


r"/[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]/mi"
r"/[a-z]\W\W0\W\W0\W\W[a-z]/mi
* ruby



*java
"[a-z]\\W\\W0\\W\\W0\\W\\W[a-z]"
"[a-z][|};&#\\[\\]\\//><()*]{2}0[|};&#\\[\\]\\//><()*]{2}0[|};&#\\[\\]\\//><()*]{2}[a-z]"

*python
r'[a-z][|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}0[|};&#\[\]\/><()*]{2}[a-z]'


    @Test
    public void countRobots_BasicTest9() {
        String [] a = {"d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"};
        String [] expectedResult = {"0 robots functioning automatik", "0 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
