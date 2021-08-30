import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.Arrays;
import java.util.Random;

public class KataTests
{
    @Test
    public void choreAssignments_BasicTest1() {
        int[] expectedResult = new int[] {7, 7, 8};
        assertArrayEquals(expectedResult, Kata.choreAssignments(new int[] {5, 2, 1, 6, 4, 4}));
    }
    @Test
    public void choreAssignments_BasicTest2() {
        int[] expectedResult = new int[] {7, 8, 8, 10, 10, 11};
        assertArrayEquals(expectedResult, Kata.choreAssignments(new int[] {1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9}));
    }
    @Test
    public void choreAssignments_BasicTest3() {
        int[] expectedResult = new int[] {10, 11, 11, 11, 11, 12, 12, 13};
        assertArrayEquals(expectedResult, Kata.choreAssignments(new int[] {5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6}));
    }
    @Test
    public void choreAssignments_BasicTest4() {
        int[] expectedResult = new int[] {11, 11, 11, 12, 12, 12, 12, 12, 12};
        assertArrayEquals(expectedResult, Kata.choreAssignments(new int[] {9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2}));
    }
    @Test
    public void choreAssignments_BasicTest5() {
        int[] expectedResult = new int[] {10, 10, 11, 11, 11, 11, 11, 11, 12, 12};
        assertArrayEquals(expectedResult, Kata.choreAssignments(new int[] {1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8}));
    }
    public static int[] solution(int[] chores)
    {
        Arrays.sort(chores);
        int[] assignments = new int[chores.length / 2];
        int i = 0; int j = chores.length - 1;
        while (i < j) {
            assignments[i]=(chores[i]+chores[j]);
            i++;
            j--;
        }
        Arrays.sort(assignments);
        return assignments;
    }
    @Test
    public void choreAssignments_RandomTests() {
        for(int i = 0; i < 40; i++) {
            int[] sizes = new int[] {10,12,16,20,30};
            int elementsNumber = (int)Math.floor(Math.random() * 5);
            int[] chores = new int[sizes[elementsNumber]];
            for(int j = 0; j < chores.length; j++) {
                chores[j] = Math.max(1,(int)Math.floor(Math.random() * 10));
            }
            System.out.println("testing");
            System.out.println(Arrays.toString(chores));
            System.out.println("result");
            System.out.println(Arrays.toString(solution(chores)));
            assertArrayEquals(solution(chores), Kata.choreAssignments(chores));
        }
    }
}
