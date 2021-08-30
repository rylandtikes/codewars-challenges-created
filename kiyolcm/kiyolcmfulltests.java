
    import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.*;

public class KataTests
{
    @Test
    public void KiyoLCM_BasicTest1() {
        Object[][] a =  {{},{},{},{},{},{},{},{},{}};
        long expectedResult = 0; long actual = Kata.KiyoLCM(a);
        assertEquals(expectedResult, actual);
    }
    @Test
    public void KiyoLCM_BasicTest2() {
        Object[][] a =  {{4, 3, 7, 8, 9, 2, 1, 5, 'c'},{6, 5, 6, 1, 'v', 1, 0, 5, 1},{4, 4, 'c', 7, 6, 6, 3, 6, 7},
                         {1, 7, 7, 'l', 5, 8, 9, 5, 9},{0, 't', 8, 2, 8, 9, 0, 8, 0},{4, 6, 2, 6, 'o', 8, 4, 2, 4},
                         {3, 6, 9, 2, 0, 8, 2, 3, 'u'},{9, 3, 1, 9, 4, 4, 'u', 7, 7},{0, 'n', 9, 0, 0, 0, 9, 2, 2}};
        long expectedResult = 0; long actual = Kata.KiyoLCM(a);
        assertEquals(expectedResult, actual);
    }
    @Test
    public void KiyoLCM_BasicTest3() {
        Object[][] a =  {{1, 2, 3, 4, 5, 6, 7, 8, 9},{1, 2, 3, 4, 5, 6, 7, 8, 9},{1, 2, 3, 4, 5, 6, 7, 8, 9},
                         {1, 2, 3, 4, 5, 6, 7, 8, 9},{1, 2, 3, 4, 5, 6, 7, 8, 9},{1, 2, 3, 4, 5, 6, 7, 8, 9},
                         {1, 2, 3, 4, 5, 6, 7, 8, 9},{1, 2, 3, 4, 5, 6, 7, 8, 9},{1, 2, 3, 4, 5, 6, 7, 8, 9}};
        long expectedResult = 25; long actual = Kata.KiyoLCM(a);
        assertEquals(expectedResult, actual);
    }
    @Test
    public void KiyoLCM_BasicTest4() {
        Object[][] a = {{1, 1, 5, 4, 4, 2, 5, 1, 5},{4, 2, 3, 5, 1, 4, 4, 2, 5}, {4, 2, 1, 4, 5, 5, 4, 3, 3},
                        {2, 1, 5, 1, 1, 1, 1, 2, 4}, {5, 1, 3, 1, 3, 2, 4, 2, 1}, {3, 1, 1, 2, 4, 2, 5, 3, 5},
                        {5, 2, 5, 3, 3, 4, 3, 4, 1}, {3, 4, 4, 5, 5, 5, 5, 4, 5}, {3, 3, 5, 5, 3, 3, 3, 5, 2}};
        long expectedResult = 21420; long actual = Kata.KiyoLCM(a);
        assertEquals(expectedResult, actual);
    }
    @Test
    public void KiyoLCM_BasicTest5() {
        Object[][] a = {{9, 4, 5, 8, 0, 9, 1, 1, 3}, {5, 0, 8, 5, 4, 3, 4, 5, 5}, {9, 5, 1, 6, 7, 8, 8, 9, 5},
                        {9, 9, 7, 8, 6, 2, 0, 2, 9}, {4, 7, 9, 3, 6, 6, 2, 6, 1}, {0, 3, 5, 7, 0, 5, 1, 6, 2},
                        {7, 8, 4, 1, 0, 1, 6, 0, 0}, {0, 2, 1, 8, 8, 7, 6, 0, 1}, {4, 3, 5, 6, 5, 4, 0, 3, 6}};
        long expectedResult = 1970640; long actual = Kata.KiyoLCM(a);
        assertEquals(expectedResult, actual);
    }
    @Test
    public void KiyoLCM_BasicTest6() {
        Object[][] a =  {{1, 7, 6, 6, 'm', 5, 1, 8, 0}, {6, 2, 8, 'h', 0, 4, 6, 7, 3}, {5, 5, 5, 7, 2, 1, 4, 'c', 3},
     {7, 0, 7, 1, 1, 1, 't', 9, 3}, {8, 9, 2, 4, 4, 'v', 6, 2, 4}, {'o', 1, 5, 1, 7, 6, 2, 4, 6},
     {8, 8, 8, 9, 4, 8, 9, 9, 'j'}, {4, 9, 8, 'v', 3, 3, 5, 0, 6}, {1, 8, 6, 8, 7, 'e', 8, 9, 0}};
        long expectedResult = 24226020; long actual = Kata.KiyoLCM(a);
        assertEquals(expectedResult, actual);
    }
   public static long solution(Object[][] a)
    {
      long[] r = new long[a.length];
      for(int i = 0; i < a.length; i++) {
          int tot = 0;
          for(int j = 0; j < a[i].length; j++) {
              String s = String.valueOf(a[i][j]);
              if((s).matches("\\d+")) {
                  int x = Integer.parseInt(String.valueOf(a[i][j]));
                  if(x % 2 != 0) tot +=x;}
              r[i]=tot;
          }
      }
      long res = LcmArr(r);
      return res;
    }
    public static long gcd(long a, long b)
    {
      if (b == 0) return a;
      return gcd(b, a%b);
    }
    public static long lcm(long a, long b)
    {
      if (a == 0 || b == 0) return 0;
      return (a * b) / gcd(a, b);
    }
    public static long LcmArr(long[] a)
    {
     long r = 1;
     for (int i = 0; i < a.length; i++) r = lcm(a[i], r);
     return r;
    }
   public static int rand(int a, int b) {
     return Math.max(a,(int)Math.floor(Math.random() * b));
   }
   public static Object[][] createArr()
    {
     int n = rand(9,19);
     Object[][] ret = new Object[n][9];
     char[] chars = new char[]{'a','b','c','d','e','f','g','h','i','j','k','l',
                             'm','n','o','p','q','r','s','t','u','v','w','x','y','z'};
     for(int i = 0; i < n; i++) {
         Object[] t = new Object[9];
         for (int j = 0; j < 9; j++) t[j]=rand(1,10);
         t[rand(0,t.length-1)] = chars[rand(0,26)];
         ret[i] = t;
     }
     return ret;
    }
    @Test
    public void KiyoLCM_RandomTests() {
        for(int i = 0; i < 40; i++) {
            Object[][] a = createArr();
            long expectedResult = solution(a); long actual = Kata.KiyoLCM(a);
            System.out.println("testing");
            for (int j = 0; j < a.length; j++) System.out.println(Arrays.toString(a[j]));
            System.out.println("result");
            System.out.println(actual);
            assertEquals(expectedResult, actual);
        }
    }
}
