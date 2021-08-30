def testing(actual, expected) actual.should eq expected end
describe("Basic tests") do
  it "should rake the garden" do
  testing(rake_garden("gravel"), "gravel")
  testing(rake_garden("rock"), "rock")
  testing(rake_garden("ant rock ant"), "gravel rock gravel")
  garden1 = "slug spider rock gravel gravel gravel gravel gravel gravel gravel"
  testing(rake_garden(garden1),"gravel gravel rock gravel gravel gravel gravel gravel gravel gravel")
  garden2 = "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel"
  testing(rake_garden(garden2), "gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel")
 end
end
def sol(g) g.split(" ").map{|a| a=="rock" ? a : "gravel"}.join(" ") end
def randint(a,b) rand(b-a+1)+a end
def create_garden(n)
  base=["moss", "ant", "snail", "slug", "spider", "rock", "gravel", "gravel", "gravel", "gravel","gravel", "gravel", "gravel", "gravel", "gravel", "gravel","gravel", "gravel", "gravel", "gravel", "gravel", "gravel","gravel", "gravel", "gravel", "rock"]
  a = [] of String;
  while n > 0
    a.push(base[randint(0,25)])
    n-=1
  end
  a.join(" ")
end
describe "randomized tests" do
40.times do
 g = create_garden(randint(1,100))
 it("Testing for #{g.inspect}") do
  user_ans = rake_garden(g)
  ans = sol(g)
  testing(user_ans, ans)
  end
 end
end
