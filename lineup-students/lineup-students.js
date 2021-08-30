Test.describe("Basic tests",_=>{
s1 = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
lst1 = ['Takehiko','Takayuki','Takahiro','Takeshi','Takeshi','Takashi','Tadashi','Takeo','Takao'];
Test.assertSimilar(lineupStudents(s1), (lst1));
s2 = 'Michio Miki Mikio Minori Minoru Mitsuo Mitsuru Nao Naoki Naoko Noboru Nobu Nobuo Nobuyuki Nori Norio Osamu Rafu Raiden Ringo Rokuro Ronin Ryo Ryoichi Ryota Ryozo Ryuichi Ryuu Saburo Sadao Samuru Satoru Satoshi Seiichi Seiji Senichi Shichiro Shig Shigekazu Shigeo Shigeru Shima Shin Shinichi Shinji Shiro Shoichi Shoji Shuichi Shuji Shunichi Susumu Tadao Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi Takumi Tama Tamotsu Taro Tatsuo Tatsuya Teruo Tetsip Tetsuya Tomi Tomio Toru Toshi Toshiaki Toshihiro Toshio Toshiyuki Toyo Tsuneo Tsutomu Tsuyoshi Uyeda Yasahiro Yasuhiro Yasuo Yasushi Yemon Yogi Yoichi Yori Yoshi Yoshiaki Yoshihiro Yoshikazu Yoshimitsu Yoshinori Yoshio Yoshiro Yoshito Yoshiyuki Yuichi Yuji Yuki';
lst2 = ['Yoshimitsu', 'Yoshiyuki', 'Yoshinori', 'Yoshikazu', 'Yoshihiro', 'Toshiyuki', 'Toshihiro', 'Shigekazu', 'Yoshiaki', 'Yasuhiro', 'Yasahiro', 'Tsuyoshi', 'Toshiaki', 'Takehiko', 'Takayuki', 'Takahiro', 'Shunichi', 'Shinichi', 'Shichiro', 'Nobuyuki', 'Yoshito', 'Yoshiro', 'Yasushi', 'Tsutomu', 'Tetsuya', 'Tatsuya', 'Tamotsu', 'Takeshi', 'Takeshi', 'Takashi', 'Tadashi', 'Shuichi', 'Shoichi', 'Shigeru', 'Senichi', 'Seiichi', 'Satoshi', 'Ryuichi', 'Ryoichi', 'Mitsuru', 'Yuichi', 'Yoshio', 'Yoichi', 'Tsuneo', 'Toshio', 'Tetsip', 'Tatsuo', 'Takumi', 'Susumu', 'Shinji', 'Shigeo', 'Satoru', 'Samuru', 'Saburo', 'Rokuro', 'Raiden', 'Noboru', 'Mitsuo', 'Minoru', 'Minori', 'Michio', 'Yoshi', 'Yemon', 'Yasuo', 'Uyeda', 'Toshi', 'Tomio', 'Teruo', 'Takeo', 'Takao', 'Tadao', 'Shuji', 'Shoji', 'Shiro', 'Shima', 'Seiji', 'Sadao', 'Ryozo', 'Ryota', 'Ronin', 'Ringo', 'Osamu', 'Norio', 'Nobuo', 'Naoko', 'Naoki', 'Mikio', 'Yuki', 'Yuji', 'Yori', 'Yogi', 'Toyo', 'Toru', 'Tomi', 'Taro', 'Tama', 'Shin', 'Shig', 'Ryuu', 'Rafu', 'Nori', 'Nobu', 'Miki', 'Ryo', 'Nao']
Test.assertSimilar(lineupStudents(s2), (lst2));
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=s=>s.trim().split(" ").sort((a,b)=>b.length-a.length || (a < b ? 1 : a > b ? -1 : 0));
var students =['Michio ','Miki ','Mikio ','Minori ','Minoru ','Mitsuo ','Mitsuru ',
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
      'Yoshiro ','Yoshito ','Yoshiyuki ','Yuichi ','Yuji ','Yuki '];
Array.prototype.shuffle=function(){
  var i=this.length,j,k;
  for (;i;){
    j=~~(Math.random()*this.length);
    k=this[--i];this[i]=this[j];this[j]=k;
  }
  return this;
}

for (var i=0;i<40;i++){
  var s=students.shuffle().slice(0,randint(1,students.length-1)).join(" ").replace(/ {2,}/g," ");
  Test.it(`Testing for '${s}'`,_=>{
  var expected=sol(s);
  Test.assertSimilar(lineupStudents(s),expected,"It should work for random inputs too");
  })
}
})