namespace Solution
{
  using NUnit.Framework;
  using System;
  using System.Text.RegularExpressions;
  using System.Linq;
  [TestFixture]
  public class KataTests
  {
    [Test]
    public void BasicTest1()
    {
      String[] a = {};
      String[] expected = {"0 robots functioning automatik", "0 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest2()
    {
      String[] a = {"We're functioning automatik","And we are dancing mechanik"};
      String[] expected = {"0 robots functioning automatik", "0 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest3()
    {
      String[] a = {"We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b"};
      String[] expected = {"1 robots functioning automatik", "2 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest4()
    {
      String[] a = {"d[(0)(0)]b We're functioning automatik d[(0)(0)]b","And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b"};
      String[] expected = {"2 robots functioning automatik", "3 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }

    [Test]
    public void BasicTest5()
    {
      String[] a = {"d[(0)(0)}b We're functioning automatik D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"};
      String[] expected = {"2 robots functioning automatik", "3 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest6()
    {
      String[] a = {"d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b","And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b"};
      String[] expected = {"3 robots functioning automatik", "3 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest7()
    {
      String[] a = {"d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b", "and m><0(;0[;a we dancing are Mechanic"};
      String[] expected = {"3 robots functioning automatik", "0 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest8()
    {
      String[] a = {"We're charging our battery","And now we're full of energy","We are the robots","We're functioning automatik",
                       "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
                       "We are programmed just to do","anything you want us to","we are the robots","We're functioning Automatic",
                       "and we are dancing Mechanic","we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
                       "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
                       "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"};


      String[] expected = {"2 robots functioning automatik", "3 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    [Test]
    public void BasicTest9()
    {
      String[] a = {"d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b", "and m><0(;0 ;a we dancing are Mechanic"};
      String[] expected = {"0 robots functioning automatik", "0 robots dancing mechanik"};
      Assert.AreEqual(expected, Kata.CountRobots(a));
    }
    public static String[] CountRobotsTest(String[] a)
    {
      int autoCnt = 0, mechCnt = 0;
      string pattern = "[a-z][|};&#\\[\\]\\//><()*]{2}0[|};&#\\[\\]\\//><()*]{2}0[|};&#\\[\\]\\//><()*]{2}[a-z]";
      foreach(string v in a) {
          var s = v.ToLower();
          int ac = MatchCount(s, "automatik"), mc = MatchCount(s, "mechanik");
          if (ac != 0) autoCnt += MatchCount(s, pattern);
          else if (mc != 0) mechCnt += MatchCount(s, pattern);
      }
      var res = new [] {autoCnt.ToString()+" robots functioning automatik", mechCnt.ToString()+" robots dancing mechanik"};
      return res;
    }
    public static int MatchCount(String s, String pattern)
    {
      int c = 0;
      var a = s.Split(' ');
      foreach(string v in a) {
          Match result = Regex.Match(v, pattern);
          if (result.Success) c++;
      }
      return c;
    }
    public static String[] CreateArr(int n)
    {
      var rand = new Random();
      String[] r = new String[n];
      String[] body = {"|","}",";","&","#","[","]","/",">","<","(",")","*", " "};
      String[] legs = {"a","b","c","d","e","f","g","h","i","j","k","l","m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z", " "};
      String[] lines = {"We're charging our battery","And now we're full of energy",
                        "We are the robots","We're functioning automatik",
                        "And we are dancing mechanik","We are the robotororo robots","Ja tvoi sluga",
                        "Ja tvoi Rabotnik robotnik","We are programmed just to do","anything you want us to",
                        "we are the robots","We're functioning Automatic","and we are dancing Mechanic",
                        "we are the robots","Ja tvoi sluga","Ja tvoi Rabotnik robotnik",
                        "We are the robots","d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
                        "And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b"};
      for(int i = 0; i < n; i++) {
          String[] t = lines[rand.Next(0,19)].Split(' ');
          String[] v = {legs[rand.Next(0,26)],body[rand.Next(0,14)],body[rand.Next(0,14)],"0",
                       body[rand.Next(0,14)],body[rand.Next(0,14)],"0",body[rand.Next(0,14)],
                       body[rand.Next(0,14)],legs[rand.Next(0,26)]};
          String bot = String.Join("", v);
          t[0] = bot;
          var nt = t.OrderBy(a => Guid.NewGuid()).ToList();
          String[] cases = {String.Join(" ", nt).ToUpper(),String.Join(" ", nt).ToLower()};
          r[i] = cases[rand.Next(0,2)];
      }
      return r;
    }
    [Test]
    public void RandomTests()
    {
      var rand = new Random();

      for (var i = 0; i < 100; i++) {
         var n = rand.Next(0,101);
         var a = CreateArr(n);
         var expected = CountRobotsTest(a);
         var actual = Kata.CountRobots(a);
         Console.WriteLine("testing Array: {0}", string.Join(", ", a));
         Console.WriteLine("Result: {0}", string.Join(", ", actual));
         Assert.AreEqual(expected, actual);
      }
    }
  }
} 
