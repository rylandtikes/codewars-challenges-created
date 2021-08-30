namespace Solution
{
  using NUnit.Framework;
  using System;
  using System.Linq;

  [TestFixture]
  public class KataTests
  {
    [Test]
    public void BasicTests()
    {
      var lst1 = new [] { 'u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0' };
      Assert.AreEqual(new object[] { 3.6, "udiwstagwo" }, Kata.Mean(lst1));

      var lst2 = new [] { '0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0' };
      Assert.AreEqual(new object[] { 3.0, "cxwyvuhinu" }, Kata.Mean(lst2));

      var lst3 = new [] { '0', 'u', 'a', 'y', '0', 'a', '9', 'q', '3', 'v', 'g', '7', '6', '4', 'y', 'd', '8', '6', '0', 'd' };
      Assert.AreEqual(new object[] { 4.3, "uayaqvgydd" }, Kata.Mean(lst3));

      var lst4 = new [] { 's', 'n', '9', 'l', '0', 'm', 'i', 'z', '9', '7', 'y', '4', 'z', '3', '3', 'k', '4', '1', '0', 'k' };
      Assert.AreEqual(new object[] { 4.0, "snlmizyzkk" }, Kata.Mean(lst4));

      var lst5 = new [] { '5', 'v', 'u', 'k', '8', '4', '9', 'b', '9', 'g', '5', 'z', '3', 'f', '6', 'u', 'i', '6', '6', 't' };
      Assert.AreEqual(new object[] { 6.1, "vukbgzfuit" }, Kata.Mean(lst5));
    }

    [Test]
    public void RandomTests()
    {
      var rand = new Random();

      var nums="0123456789";
      var letters="abcdefghijklmnopqrstuvwxyz";

      Func<char[],object[]> myMean = delegate (char[] lst)
      {
        double sum = 0;
        var numberCount = 0;
        var text = "";

        for(var i = 0; i< lst.Length; i++)
        {
          int number = 0;

          if(!int.TryParse(lst[i] + "", out number))
          {
            text += lst[i];
          }
          else
          {
            sum += number;
            numberCount++;
          }
        }

        return new object[] { sum / numberCount, text };
      };

      for (var i=0;i<40;i++)
      {
        var lst = Enumerable.Range(0,10).Select(a => nums[rand.Next(0,10)])
           .Concat(Enumerable.Range(0,10).Select(a => letters[rand.Next(0,26)]))
           .OrderBy(a => rand.Next(-1,2)).ToArray();

        Assert.AreEqual(myMean(lst), Kata.Mean(lst), "It should work for random inputs too");
      }
    }
  }
}
