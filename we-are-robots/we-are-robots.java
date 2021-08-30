import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.*;

public class KataTests
{
    @Test
    public void countRobots_BasicTest1() {
        String [] a = {};
        String [] expectedResult = {"0 robots functioning automatik", "0 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest2() {
        String [] a = {"We're functioning automatik","And we are dancing mechanik"};
        String [] expectedResult = {"0 robots functioning automatik", "0 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest3() {
        String [] a = {"We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b"};
        String [] expectedResult = {"1 robots functioning automatik", "2 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest4() {
        String [] a = {"d[(0)(0)]b We're functioning automatik d[(0)(0)]b","And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b"};
        String [] expectedResult = {"2 robots functioning automatik", "3 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest5() {
        String [] a = {"d[(0)(0)}b We're functioning automatik D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"};
        String [] expectedResult = {"2 robots functioning automatik", "3 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest6() {
        String [] a = {"d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"};
        String [] expectedResult = {"3 robots functioning automatik", "3 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest7() {
        String [] a = {"d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b", "and m><0(;0[;a we dancing are Mechanic"};
        String [] expectedResult = {"3 robots functioning automatik", "0 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest8() {
        String [] a = {"We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
                       "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
                       "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
                       "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
                       "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
                       "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"};

        String [] expectedResult = {"2 robots functioning automatik", "3 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }
    @Test
    public void countRobots_BasicTest9() {
        String [] a = {"d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"};
        String [] expectedResult = {"0 robots functioning automatik", "0 robots dancing mechanik"}; String[] actual = Kata.countRobots(a);
        assertArrayEquals(expectedResult, actual);
    }

    public static int randint(int a, int b) {
      return Math.max(a,(int)Math.floor(Math.random() * b));
    }
    public static String[] countRobotsTest(String[] a)
    {
      int autoCnt = 0, mechCnt = 0;
      String regex = "[a-z][|};&#\\[\\]\\//><()*]{2}0[|};&#\\[\\]\\//><()*]{2}0[|};&#\\[\\]\\//><()*]{2}[a-z]";
      for(int i = 0; i < a.length; i++) {
          String s = String.valueOf(a[i]).toLowerCase();
          int ac = matchCount(s, "automatik"), mc = matchCount(s, "mechanik");
          if (ac != 0) autoCnt += matchCount(s, regex);
          else if (mc != 0) mechCnt += matchCount(s, regex);
      }
      String[] res = new String[]{String.valueOf(autoCnt)+" robots functioning automatik",
                                  String.valueOf(mechCnt)+" robots dancing mechanik"};
      return res;
    }
    public static int matchCount(String s, String regex)
    {
      int c = 0;
      for (String r:s.split(" ")) c += r.matches(regex) ? 1:0;
      return c;
    }
    public static String[] createArr(int n)
    {
      String[] r = new String[n];
      String[] body = {"|","}",";","&","#","[","]","/",">","<","(",")","*", " "},
               legs = {"a","b","c","d","e","f","g","h","i","j","k","l","m",
                       "n","o","p","q","r","s","t","u","v","w","x","y","z", " "},
               lines = {"We're charging our battery","And now we're full of energy",
                        "We are the robots","We're functioning automatik",
                        "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga",
                        "Ja tvoi Rabotnik robotnik","We are programmed just to do","anything you want us to",
                        "we are the robots","We're functioning Automatic","and we are dancing Mechanic",
                        "we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
                        "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
                        "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"};
      for(int i = 0; i < n; i++) {
          String[] t = lines[randint(0,18)].split(" ");
          String[] a = {legs[randint(0,25)],body[randint(0,12)],body[randint(0,12)],"0",
                        body[randint(0,12)],body[randint(0,12)],"0",body[randint(0,12)],
                        body[randint(0,12)],legs[randint(0,25)]};
          String bot = String.join("", a);
          t[0] = bot;
          Collections.shuffle(Arrays.asList(t));
          String[] cases = {String.join(" ", t).toUpperCase(),String.join(" ", t).toLowerCase()};
          r[i] = cases[randint(0,1)];
      }
      return r;
    }
    @Test
    public void choreAssignments_RandomTests()
    {
      for(int i = 0; i < 100; i++) {
          int n = randint(0,100);
          String[] a = createArr(n);
          String[] actual = Kata.countRobots(a);
          String[] expectedResult = countRobotsTest(a);
          System.out.println("testing");
          System.out.println(Arrays.toString(a));
          System.out.println("result");
          System.out.println(Arrays.toString(actual));
          assertArrayEquals(expectedResult, actual);
      }
    }
}
