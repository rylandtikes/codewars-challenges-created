import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class KataTests
{
    @Test
    public void roastLegacy_BasicTest1() {
        String workloads = "";
        String expectedResult ="These guys are already DevOps and in the Cloud and the business is happy!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest2() {
        String workloads = "cloudstatelesspython";
        String expectedResult = "These guys are already DevOps and in the Cloud and the business is happy!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest3() {
        String workloads = "COBOL";
        String expectedResult ="Burn baby burn disco inferno 1000 points earned in this roasting and 0 complaints resolved!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest4() {
        String workloads = "slow!expensive!";
        String expectedResult = "Burn baby burn disco inferno 0 points earned in this roasting and 2 complaints resolved!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest5() {
        String workloads = "EXPENSIVE!AUTOMATEDRUBYCLOUDMONGOPAASTAPEACTIVE-ACTIVEPYTHONNOSQL";
        String expectedResult ="Burn baby burn disco inferno 50 points earned in this roasting and 1 complaints resolved!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest6() {
        String workloads ="expensive!NONOBJECTexpensive!NONOBJECThostage!JAVASCRIPTexpensive!DEVOPS";
        String expectedResult = "Burn baby burn disco inferno 1000 points earned in this roasting and 4 complaints resolved!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest7() {
        String workloads = "manual!COBOLnonobjectmonolithicfaxmodemthickclienttapefloppyoldschoolITslow!";
        String expectedResult ="Burn baby burn disco inferno 2400 points earned in this roasting and 2 complaints resolved!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    @Test
    public void roastLegacy_BasicTest8() {
        String workloads ="tapedistributedactive-activeoldschoolITmonolithicjavamodemnotfunctioning!thickclientCOBOLIAASexpensive!statelessrubyPAASautomatedimmutableagilemongonosqlhostage!nonobjectfaxpythoncontainerizedsecurity!floppyslow!manual!multi-tenantSAASserverlessDevOpscloudJavascriptCOBOL";
        String expectedResult = "Burn baby burn disco inferno 3400 points earned in this roasting and 5 complaints resolved!";
        assertEquals(expectedResult, Kata.roastLegacy(workloads));
    }
    public static int randint(int a, int b) {
      return Math.max(a,(int)Math.floor(Math.random() * b));
    }
    public static String roastLegacyTest(String workloads)
    {
      String[] complaints = {"slow!", "expensive!", "manual!", "down!", "hostage!", "security!"};
      String[] legacy = {"cobol", "nonobject", "monolithic", "fax", "modem","thickclient","tape",
                       "floppy", "oldschoolit"};
      int[] legacyPnts = {1000, 500, 500, 100, 100, 50, 50, 50, 50};int points = 0, complaintsCnt = 0;
      for (int i = 0; i < legacy.length; i++) points += matchCount(workloads, legacy[i]) * legacyPnts[i];
      for (int j = 0; j < complaints.length; j++) complaintsCnt += matchCount(workloads, complaints[j]);
      String s1 =  String.valueOf(points), s2 = String.valueOf(complaintsCnt);
      if (points == 0 && complaintsCnt == 0) {
        return "These guys are already DevOps and in the Cloud and the business is happy!";
      }
      else return "Burn baby burn disco inferno "+s1+" points earned in this roasting and "+s2+" complaints resolved!";
    }
    public static int matchCount(String workloads, String s)
    {
      int count = 0;
      Pattern p = Pattern.compile(s, Pattern.CASE_INSENSITIVE);
      Matcher m = p.matcher(workloads);
      while (m.find()) count++;
      return count;
    }
    public static String createWorkloads(int n)
    {
      String[] workloads = new String[n];

      String[] t = {"COBOL","nonobject","monolithic","fax","modem","thickclient","tape","floppy","oldschoolIT",
                    "open-source","cloud","stateless","python","Javascript","ruby","nosql","multi-tenant",
                    "SAAS","PAAS","IAAS","java","mongo", "serverless", "automated","containerized","immutable",
                    "active-active","distributed","agile","DevOps","golang","slow!","expensive!","manual!",
                    "notfunctioning!","hostage!","security!"};
      for (int i = 0; i < n; i++) {
          String y = t[randint(0,36)];
          if (i % 2 == 0) y = y.toUpperCase();
          workloads[i] = y;
      }
      Collections.shuffle(Arrays.asList(workloads));
      return String.join(" ",workloads);
    }
    @Test
    public void choreAssignments_RandomTests()
    {
      for(int i = 0; i < 40; i++) {
          String workloads = createWorkloads(randint(0,100));
          String expectedResult = roastLegacyTest(workloads);
          System.out.println("testing");
          System.out.println(workloads);
          System.out.println("result");
          System.out.println(Kata.roastLegacy(workloads));
          assertEquals(expectedResult, Kata.roastLegacy(workloads));
      }
    }
}
