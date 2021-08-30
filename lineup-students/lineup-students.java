import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;
import java.util.Random;
import java.util.*;

public class KataTests
{
    @Test
    public void lineupStudents_BasicTest1() {
        String[] expectedResult = {"Takehiko","Takayuki", "Takahiro","Takeshi","Takeshi","Takashi","Tadashi","Takeo","Takao"};
        assertArrayEquals(expectedResult, Kata.lineupStudents("Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"));
    }
    @Test
    public void lineupStudents_BasicTest2() {
        String[] expectedResult = {
        "Yoshimitsu", "Yoshiyuki", "Yoshinori", "Yoshikazu", "Yoshihiro", "Toshiyuki",
         "Toshihiro", "Shigekazu", "Yoshiaki", "Yasuhiro", "Yasahiro", "Tsuyoshi","Toshiaki",
         "Takehiko", "Takayuki", "Takahiro", "Shunichi", "Shinichi","Shichiro",
         "Nobuyuki", "Yoshito", "Yoshiro", "Yasushi", "Tsutomu","Tetsuya", "Tatsuya",
         "Tamotsu", "Takeshi", "Takeshi", "Takashi","Tadashi", "Shuichi", "Shoichi",
         "Shigeru", "Senichi", "Seiichi","Satoshi", "Ryuichi", "Ryoichi", "Mitsuru",
         "Yuichi", "Yoshio","Yoichi", "Tsuneo", "Toshio", "Tetsip", "Tatsuo", "Takumi",
        "Susumu", "Shinji", "Shigeo", "Satoru", "Samuru", "Saburo","Rokuro", "Raiden",
        "Noboru", "Mitsuo", "Minoru", "Minori", "Michio", "Yoshi", "Yemon", "Yasuo",
        "Uyeda", "Toshi", "Tomio","Teruo", "Takeo", "Takao", "Tadao", "Shuji", "Shoji",
        "Shiro", "Shima", "Seiji", "Sadao", "Ryozo", "Ryota", "Ronin", "Ringo", "Osamu",
        "Norio", "Nobuo", "Naoko", "Naoki", "Mikio", "Yuki", "Yuji", "Yori", "Yogi",
        "Toyo", "Toru", "Tomi", "Taro", "Tama", "Shin", "Shig", "Ryuu", "Rafu", "Nori",
        "Nobu", "Miki", "Ryo", "Nao"};
       assertArrayEquals(expectedResult, Kata.lineupStudents("Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki"));
    }
    public static String[] solution(String students)
    {
        String[] studentsArr = students.split(" ");
        List<String> list = Arrays.asList(studentsArr);
        list.sort(Comparator.comparing(String::length).thenComparing(String::compareToIgnoreCase));
        Collections.reverse(Arrays.asList(studentsArr));
        return studentsArr;
    }
    public static String createStudents()
    {
        String[] students = {"Michio","Miki","Mikio","Minori","Minoru","Mitsuo",
        "Mitsuru","Nao","Naoki","Naoko","Noboru","Nobu","Nobuo","Nobuyuki","Nori",
        "Norio","Osamu","Rafu","Raiden","Ringo","Rokuro","Ronin","Ryo","Ryoichi",
        "Ryota","Ryozo","Ryuichi","Ryuu","Saburo","Sadao","Samuru","Satoru",
        "Satoshi","Seiichi","Seiji","Senichi","Shichiro","Shig","Shigekazu",
        "Shigeo","Shigeru","Shima","Shin","Shinichi","Shinji","Shiro","Shoichi",
        "Shoji","Shuichi","Shuji","Shunichi","Susumu","Tadao","Tadashi","Takahiro",
        "Takao","Takashi","Takayuki","Takehiko","Takeo","Takeshi","Takeshi","Takumi",
        "Tama","Tamotsu","Taro","Tatsuo","Tatsuya","Teruo","Tetsip","Tetsuya","Tomi",
        "Tomio","Toru","Toshi","Toshiaki","Toshihiro","Toshio","Toshiyuki",
        "Toyo","Tsuneo","Tsutomu","Tsuyoshi","Uyeda","Yasahiro","Yasuhiro",
        "Yasuo","Yasushi","Yemon","Yogi","Yoichi","Yori","Yoshi",
        "Yoshiaki","Yoshihiro","Yoshikazu","Yoshimitsu","Yoshinori","Yoshio",
        "Yoshiro","Yoshito","Yoshiyuki","Yuichi","Yuji","Yuki" };

        int n = Math.max(0,(int)Math.floor(Math.random() * 105));
        String[] a = new String[n];
        for(int i = 0; i < n; i++) {
            int k = Math.max(0,(int)Math.floor(Math.random() * 105));
            a[i]=students[k];
        }
        String res = String.join(" ", a);
        return res;
    }
    @Test
    public void lineupStudents_RandomTests() {
        for(int i = 0; i < 40; i++) {
            String students = createStudents();
            String[] expected = solution(students);
            String[] actual = Kata.lineupStudents(students);
            System.out.println("testing");
            System.out.println(students);
            System.out.println("result");
            System.out.println(Arrays.toString(actual));
            assertArrayEquals(expected, actual);
        }
    }
}
