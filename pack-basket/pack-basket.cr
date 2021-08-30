def pack_basket(basket,pile)
   pile = pile.gsub("dust","0")
   pieces = [] of Int32;
   pile.split(" ").each do |i|
       pieces.push(i.to_i)
   end
   b = basket
   p = pieces
   n = p.size
   m = [nil] * (n+1)
   i = 0
   while i < (n+1)
#   for i in (0..n+1) 
       x = [0] * (b+1)
       m[i] = x
       i+=1
   end
#  for i in (1..n)
#      for j in (0..b)
#          if p[i-1] <= j 
#              remaining = j - p[i-1]
#              m[i][j] = [m[i-1][j], m[i-1][remaining] + p[i-1]].max
#          else
#              m[i][j]=m[i-1][j]
#      end
#   end
#end
# "The basket weighs "+ ((m[n][b]).to_s) +" kilograms"
end 

def testing(actual, expected) actual.should eq expected end
describe "Basic tests" do
  it "fill the basket to the optimal level" do
    basket = 41
    pile = "dust 2 7 1 dust 4 75 dust 17 8dust 100dust"
    testing(pack_basket(basket,pile),"The basket weighs 1 kilograms")
  end
end