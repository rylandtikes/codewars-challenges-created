import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.*;

public class KataTests
{
    @Test
    public void sensorAnalysis_BasicTest1() {        
        Object[][] sensorData = {{"Distance:", 116.28, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 117.1, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 123.96, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 117.17, "Meters", "Sensor 5 malfunction =>lorimar"}};
        double[] expectedResult = {118.6275, 3.5779}; double[] actual = Kata.sensorAnalysis(sensorData);
        assertEquals(Arrays.toString(expectedResult), Arrays.toString(actual));
    }
    @Test
    public void sensorAnalysis_BasicTest2() {        
        Object[][] sensorData = {{"Distance:", 295.68, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 294.78, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 298.21, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 294.84, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 296.54, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 133.84, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 294.41, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 294.82, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 134.61, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 294.86, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.88, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.87, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.47, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 135.5, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.9, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.08, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 171.36, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.08, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.92, "Meters", "Sensor 5 malfunction =>lorimar"}, {"Distance:", 170.88, "Meters", "Sensor 5 malfunction =>lorimar"}};
        double[] expectedResult = {215.2265, 68.4014}; double[] actual = Kata.sensorAnalysis(sensorData);
        assertEquals(Arrays.toString(expectedResult), Arrays.toString(actual));
    }
    public static int rand(int a, int b) {
        return Math.max(a,(int)Math.floor(Math.random() * b));
    }
    public static Object[][] createArr()
    {
        int p = rand(100,30000);
        int q = rand(500,10000);
        int n = rand(1,100);
        Object[][] ret = new Object[n][4];
        for(int i = 0; i < n; i++) {
            Object[] t = new Object[]{"Distance:", (double) rand(p-q,p+q)/100, "Meters", "Sensor 5 malfunction =>lorimar"};
            ret[i] = t;
        }
        return ret;
    }
    public static double[] sensorAnalysisTest(Object[][] sensorData)
    {
        double[] a = new double [sensorData.length];
        for(int i = 0; i < a.length; i++) {
            for(int j = 0; j < a.length; j++)
                a[i] = Double.parseDouble(String.valueOf(sensorData[i][1]));            
        }
        double mu = mean(a);
        double sd = stddev(a);
        double[] r = new double [] {mu, sd};
        return r;
    }
    public static double var(double[] a)
    {
        double tot = 0.0;
        double m = mean(a);
        for(int i = 0; i < a.length; i++) tot += (a[i] - m) * (a[i] - m);
        return tot / (a.length - 1);
    } 
   public static double stddev(double[] a)
    {
       double r = Math.sqrt(var(a));
       r = Math.round(r * 10000);
       return r / 10000;
    }
   public static double mean(double[] a)
    {
       double tot = 0.0;
       for(int i = 0; i < a.length; i++) tot += a[i];
       double m = tot / a.length;
       double r = Math.round(m * 10000);
       return r / 10000;
    }
    @Test
    public void sensorAnalysis_RandomTests() {
       for(int i = 0; i < 40; i++) {
           Object[][] sensorData = createArr();
           double[] expectedResult = sensorAnalysisTest(sensorData); double[] actual = Kata.sensorAnalysis(sensorData);
           System.out.println("testing");
           for (int j = 0; j < sensorData.length; j++) System.out.println(Arrays.toString(sensorData[j]));
           System.out.println("result");
           System.out.println(Arrays.toString(actual));
           assertEquals(Arrays.toString(expectedResult), Arrays.toString(actual));
       }
    }
}