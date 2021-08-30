import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.Random;
import java.util.*;

public class KataTests
{
    @Test
    public void mean_BasicTest1() {
        Object[] expectedResult = new Object[] {3.6, "udiwstagwo"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] {'u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'}));
    }

    @Test
    public void mean_BasicTest2() {
        Object[] expectedResult = new Object[] {3.0, "cxwyvuhinu"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] { '0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0'}));
    }
    @Test
    public void mean_BasicTest3() {
        Object[] expectedResult = new Object[] {4.3, "uayaqvgydd"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] {'0', 'u', 'a', 'y', '0', 'a', '9', 'q', '3', 'v', 'g', '7', '6', '4', 'y', 'd', '8', '6', '0', 'd'}));
    }  
    @Test
    public void mean_BasicTest4() {
        Object[] expectedResult = new Object[] {4.0, "snlmizyzkk"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] {'s', 'n', '9', 'l', '0', 'm', 'i', 'z', '9', '7', 'y', '4', 'z', '3', '3', 'k', '4', '1', '0', 'k'}));
    }
    @Test
    public void mean_BasicTest5() {
        Object[] expectedResult = new Object[] {6.1, "vukbgzfuit"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] {'5', 'v', 'u', 'k', '8', '4', '9', 'b', '9', 'g', '5', 'z', '3', 'f', '6', 'u', 'i', '6', '6', 't'}));
    }   
    @Test
    public void mean_BasicTest6() {
        Object[] expectedResult = new Object[] {0.9, "aaddgquvyy"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] {'1', '1', '1', '1', '1', '1', '1', '1', '1', '0', 'a', 'a', 'd', 'd', 'g', 'q', 'u', 'v', 'y', 'y'}));
    }   
    @Test
    public void mean_BasicTest7() {
        Object[] expectedResult = new Object[] {1.0, "aaddgquvyy"};
        assertArrayEquals(expectedResult, Kata.mean(new char[] { '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'a', 'a', 'd', 'd', 'g', 'q', 'u', 'v', 'y', 'y'}));
    }  
    
    public static Object[] solution(char[] lst)
    {
        double sum = 0; String chars = "";
        Object[] ret = new Object[2];
        for(int i = 0; i < lst.length; i++) {
            if(String.valueOf(lst[i]).matches("\\d+")) {
                sum += Integer.parseInt(String.valueOf(lst[i]));
            }
            else {
                chars += lst[i];
            }
        }
        ret = new Object[] {sum / 10, chars};
        return ret;
    }
    public static char[] createList()
    {
        char[] ret = new char[20];
        char[] nums = new char[]{'0','1','2','3','4','5','6','7','8','9'};
        char[] chars = new char[]{'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        for(int i = 0, j = 19; i < 10; i++, j--) {
            int knums = Math.max(0,(int)Math.floor(Math.random() * 10));
            int kchars = Math.max(0,(int)Math.floor(Math.random() * 26));
            ret[i]=nums[knums];
            ret[j]=chars[kchars];
        }
        Collections.shuffle(Arrays.asList(ret));
        return ret;
    }
    @Test
    public void mean_RandomTests() {
        for(int i = 0; i < 100; i++) {
            char[] lst = createList();
            Object[] expected = solution(lst);
            System.out.println("testing");
            System.out.println(Arrays.toString(lst));
            System.out.println("result");
            System.out.println(Arrays.toString(expected));
            assertArrayEquals(expected, Kata.mean(lst));
        }
    }  
}