def search_disable(log)
  fltr_log = log.split().select{ |i| (i[-2] == '2' || i[-2] == '3') && i.length == 4 }
  primes = []
  fltr_log .each do |i|
    if is_prime(i.to_i) == true 
    primes.push(i)
  end
  counts = Hash.new(0)
  primes.each { |digit| counts[digit] += 1 }
  c = 0 
  counts.each_pair do |k,v|  
    if v > 3 then c += v end
  end
  if c > 50 then return "match disable bot" end
  end
  "no match continue"
end

def is_prime(n)
  n < 2 ? false : (2..Math.sqrt(n)).none?{|i| n%i == 0}
end

Test.describe("Basic tests") do
log = '1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031'
Test.assert_equals(search_disable(log),'match disable bot')
log = '2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031'
Test.assert_equals(search_disable(log),'no match continue')
log = '7693 3051 1999 7307 4323 4968 2666 4267 9264 2399 66 5739 300 9119 2399 5177 4649 2492 2471 7301 6192 9981 1828 2698 9386 8967 1502 9014 8799 5098 7155 5090 3909 2096 6296 2835 5746 9291 2312 6419 1740 1998 6281 3328 7590 3903 4197 1804 2223 7495 4483 234 9294 9882 2793 6959 320 3495 3540 5308 6453 8666 921 4174 7987 6834 6755 4487 8396 2577 9191 6323 2684 2914 7651 2941 2897 3401 409 4381 9679 6791 927 6590 1683 2118 423 8844 7565 7052 9809 6121 6263 1614 9606 4078 7386 5360 8982'
Test.assert_equals(search_disable(log),'no match continue')
log = '8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923'
Test.assert_equals(search_disable(log),'match disable bot')
log = '5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 2423 2423 2423 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929'
Test.assert_equals(search_disable(log),'no match continue')
end

Test.describe("Random tests") do
def randint(a,b) rand(b-a+1)+a end
def create_log(n)
  a = []; i = 1
  while i < n+1 do
    a.push((randint(1,10000).to_s))
    i+=1
  end
  return a.join(' ')
end

def search_disable_test(log)
  fltr_log = log.split().select{ |i| (i[-2] == '2' || i[-2] == '3') && i.length == 4 }
  primes = []
  fltr_log .each do |i|
    if is_prime(i.to_i) == true 
    primes.push(i)
  end
  counts = Hash.new(0)
  primes.each { |prime| counts[prime] += 1 }
  c = 0 
  counts.each_pair do |k,v|  
    if v > 3 then c += v end
  end
  if c > 50 then return "match disable bot" end
  end
  "no match continue"
end

def is_prime(n)
  n < 2 ? false : (2..Math.sqrt(n)).none?{|i| n%i == 0}
end

20.times do
  n=randint(100,100000)
  log=create_log(n)
  Test.it("Testing for #{n}") do
  Test.assert_equals(search_disable(log),search_disable_test(log),"It should work for random inputs too")
  end
 end
end