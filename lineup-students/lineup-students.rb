Test.describe("Basic tests") do
s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
lst1 = ['Takehiko','Takayuki','Takahiro','Takeshi','Takeshi','Takashi','Tadashi','Takeo','Takao']
Test.assert_equals(lineup_students(s1), (lst1))
s2 = 'Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki'

lst2 =['Yoshimitsu', 'Yoshiyuki', 'Yoshinori', 'Yoshikazu', 'Yoshihiro', 'Toshiyuki', 'Toshihiro', 'Shigekazu', 'Yoshiaki', 'Yasuhiro', 'Yasahiro', 'Tsuyoshi', 'Toshiaki', 'Takehiko', 'Takayuki', 'Takahiro', 'Shunichi', 'Shinichi', 'Shichiro', 'Nobuyuki', 'Yoshito', 'Yoshiro', 'Yasushi', 'Tsutomu', 'Tetsuya', 'Tatsuya', 'Tamotsu', 'Takeshi', 'Takeshi', 'Takashi', 'Tadashi', 'Shuichi', 'Shoichi', 'Shigeru', 'Senichi', 'Seiichi', 'Satoshi', 'Ryuichi', 'Ryoichi', 'Mitsuru', 'Yuichi', 'Yoshio', 'Yoichi', 'Tsuneo', 'Toshio', 'Tetsip', 'Tatsuo', 'Takumi', 'Susumu', 'Shinji', 'Shigeo', 'Satoru', 'Samuru', 'Saburo', 'Rokuro', 'Raiden', 'Noboru', 'Mitsuo', 'Minoru', 'Minori', 'Michio', 'Yoshi', 'Yemon', 'Yasuo', 'Uyeda', 'Toshi', 'Tomio', 'Teruo', 'Takeo', 'Takao', 'Tadao', 'Shuji', 'Shoji', 'Shiro', 'Shima', 'Seiji', 'Sadao', 'Ryozo', 'Ryota', 'Ronin', 'Ringo', 'Osamu', 'Norio', 'Nobuo', 'Naoko', 'Naoki', 'Mikio', 'Yuki', 'Yuji', 'Yori', 'Yogi', 'Toyo', 'Toru', 'Tomi', 'Taro', 'Tama', 'Shin', 'Shig', 'Ryuu', 'Rafu', 'Nori', 'Nobu', 'Miki', 'Ryo', 'Nao']

Test.assert_equals(lineup_students(s2), (lst2))
end
Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def sol(s) lambda{|arr| arr.sort{|a,b| a.length==b.length ? arr.index(a) <=> arr.index(b) : b.length <=> a.length}}.(s.strip.split.sort.reverse) end
students =['Michio ','Miki ','Mikio ','Minori ','Minoru ','Mitsuo ','Mitsuru ',
      'Nao ','Naoki ','Naoko ','Noboru ','Nobu ','Nobuo ','Nobuyuki ','Nori ',
      'Norio ','Osamu ','Rafu ','Raiden ','Ringo ','Rokuro ','Ronin ','Ryo ','Ryoichi ',
      'Ryota ','Ryozo ','Ryuichi ','Ryuu ','Saburo ','Sadao ','Samuru ',
      'Satoru ','Satoshi ','Seiichi ','Seiji ','Senichi ','Shichiro ','Shig ',
      'Shigekazu ','Shigeo ','Shigeru ','Shima ','Shin ','Shinichi ','Shinji ',
      'Shiro ','Shoichi ','Shoji ','Shuichi ','Shuji ','Shunichi ','Susumu ',
      'Tadao ','Tadashi ','Takahiro ','Takao ','Takashi ','Takayuki ',
      'Takehiko ','Takeo ','Takeshi ','Takeshi ','Takumi ','Tama ','Tamotsu ',
      'Taro ','Tatsuo ','Tatsuya ','Teruo ','Tetsip ','Tetsuya ','Tomi ',
      'Tomio ','Toru ','Toshi ','Toshiaki ','Toshihiro ','Toshio ','Toshiyuki ',
      'Toyo ','Tsuneo ','Tsutomu ','Tsuyoshi ','Uyeda ','Yasahiro ','Yasuhiro ',
      'Yasuo ','Yasushi ','Yemon ','Yogi ','Yoichi ','Yori ','Yoshi ',
      'Yoshiaki ','Yoshihiro ','Yoshikazu ','Yoshimitsu ','Yoshinori ','Yoshio ',
      'Yoshiro ','Yoshito ','Yoshiyuki ','Yuichi ','Yuji ','Yuki ']
40.times do
  s=students.shuffle.slice(0,randint(1,students.length-1)).join(" ")
  Test.it("Testing for #{s}") do
  expected=sol(s)
  Test.assert_equals(lineup_students(s),expected,"It should work for random inputs too")
  end
end
end