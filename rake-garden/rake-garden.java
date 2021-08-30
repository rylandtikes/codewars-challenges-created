import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.Random;
import java.util.*;

public class KataTests
{
    @Test
    public void rakeGarden_BasicTest1() {
        String expectedResult = "gravel gravel rock gravel gravel gravel gravel gravel gravel gravel";
        assertEquals(expectedResult, Kata.rakeGarden("slug spider rock gravel gravel gravel gravel gravel gravel gravel"));
    }
    @Test
    public void rakeGarden_BasicTest2() {
        String expectedResult = "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel";
        assertEquals(expectedResult, Kata.rakeGarden("gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel"));
    }
    public static String solution(String garden)
    {
      String[] rakedGarden = garden.split(" ");

      for(int i = 0; i < rakedGarden.length; i++) {
        if((rakedGarden[i]).equals("rock") || (rakedGarden[i]).equals("gravel")) continue;
        else rakedGarden[i] = "gravel";
      }
      String res = String.join(" ", rakedGarden);
      return res;
    }
    public static String createGarden()
    {
        String[] a = new String[100];
        String[] possibleItems = new String[] {"gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "gravel", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "slug", "ant", "moss", "snail", "spider", "rockstar", "notrock", "notgravel"};
        for(int i = 0; i < 100; i++) {
            int k = Math.max(0,(int)Math.floor(Math.random() * 41));
            a[i]=possibleItems[k];
            }
        String res = String.join(" ", a);
        return res;
    }
    @Test
    public void rakeGarden_RandomTests() {
        for(int i = 0; i < 40; i++) {
            String garden = createGarden();
            String expected = solution(garden);
            String actual = Kata.rakeGarden(garden);
            System.out.println("testing");
            System.out.println(garden);
            System.out.println("result");
            System.out.println(actual);
            assertEquals(expected, actual);
        }
    }
}
