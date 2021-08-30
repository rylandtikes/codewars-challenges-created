Test.describe("Basic tests")
s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
lst1 = ['Takehiko',
        'Takayuki',
        'Takahiro',
        'Takeshi',
        'Takeshi',
        'Takashi',
        'Tadashi',
        'Takeo',
        'Takao'] 
Test.assert_equals(lineup_students(s1), (lst1))
s2 = "Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki"
lst2 =['Yoshimitsu', 'Yoshiyuki', 'Yoshinori', 'Yoshikazu', 'Yoshihiro', 'Toshiyuki', 'Toshihiro', 'Shigekazu', 'Yoshiaki', 'Yasuhiro', 'Yasahiro', 'Tsuyoshi', 'Toshiaki', 'Takehiko', 'Takayuki', 'Takahiro', 'Shunichi', 'Shinichi', 'Shichiro', 'Nobuyuki', 'Yoshito', 'Yoshiro', 'Yasushi', 'Tsutomu', 'Tetsuya', 'Tatsuya', 'Tamotsu', 'Takeshi', 'Takeshi', 'Takashi', 'Tadashi', 'Shuichi', 'Shoichi', 'Shigeru', 'Senichi', 'Seiichi', 'Satoshi', 'Ryuichi', 'Ryoichi', 'Mitsuru', 'Yuichi', 'Yoshio', 'Yoichi', 'Tsuneo', 'Toshio', 'Tetsip', 'Tatsuo', 'Takumi', 'Susumu', 'Shinji', 'Shigeo', 'Satoru', 'Samuru', 'Saburo', 'Rokuro', 'Raiden', 'Noboru', 'Mitsuo', 'Minoru', 'Minori', 'Michio', 'Yoshi', 'Yemon', 'Yasuo', 'Uyeda', 'Toshi', 'Tomio', 'Teruo', 'Takeo', 'Takao', 'Tadao', 'Shuji', 'Shoji', 'Shiro', 'Shima', 'Seiji', 'Sadao', 'Ryozo', 'Ryota', 'Ronin', 'Ringo', 'Osamu', 'Norio', 'Nobuo', 'Naoko', 'Naoki', 'Mikio', 'Yuki', 'Yuji', 'Yori', 'Yogi', 'Toyo', 'Toru', 'Tomi', 'Taro', 'Tama', 'Shin', 'Shig', 'Ryuu', 'Rafu', 'Nori', 'Nobu', 'Miki', 'Ryo', 'Nao']
Test.assert_equals(lineup_students(s2), (lst2))
Test.describe("Random tests")
import random
students =["Michio","Miki","Mikio","Minori","Minoru","Mitsuo","Mitsuru",
      "Nao","Naoki","Naoko","Noboru","Nobu","Nobuo","Nobuyuki","Nori",
      "Norio","Osamu","Rafu","Raiden","Ringo","Rokuro","Ronin","Ryo","Ryoichi",
      "Ryota","Ryozo","Ryuichi","Ryuu","Saburo","Sadao","Samuru",
      "Satoru","Satoshi","Seiichi","Seiji","Senichi","Shichiro","Shig",
      "Shigekazu","Shigeo","Shigeru","Shima","Shin","Shinichi","Shinji",
      "Shiro","Shoichi","Shoji","Shuichi","Shuji","Shunichi","Susumu",
      "Tadao","Tadashi","Takahiro","Takao","Takashi","Takayuki",
      "Takehiko","Takeo","Takeshi","Takeshi","Takumi","Tama","Tamotsu",
      "Taro","Tatsuo","Tatsuya","Teruo","Tetsip","Tetsuya","Tomi",
      "Tomio","Toru","Toshi","Toshiaki","Toshihiro","Toshio","Toshiyuki",
      "Toyo","Tsuneo","Tsutomu","Tsuyoshi","Uyeda","Yasahiro","Yasuhiro",
      "Yasuo","Yasushi","Yemon","Yogi","Yoichi","Yori","Yoshi",
      "Yoshiaki","Yoshihiro","Yoshikazu","Yoshimitsu","Yoshinori","Yoshio",
      "Yoshiro","Yoshito","Yoshiyuki","Yuichi","Yuji","Yuki"]
def random_test():
    s = ""
    for i in range(random.randint(0,104)):
        student = random.choice(students)
        s+=str(student) + ' '
    return s.rstrip()
    
def lineup_students_test(string):
    names = string.split()
    lst = []
    ordered_lst = []
    for name in names:
        lst.append((len(name), name))
    lst.sort(reverse = True)
    for i, name in lst:
        ordered_lst.append(name)
    return ordered_lst
    
for i in xrange(100):
    string = random_test()
    Test.it("Testing for "+str(string))
    Test.assert_equals(lineup_students(string), lineup_students_test(string),"It should work with random inputs too" )