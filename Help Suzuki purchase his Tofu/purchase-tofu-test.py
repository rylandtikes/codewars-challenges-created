def get_change(n):
      coins = [1,5,10]
      m = help(coins, n) 
      for i in range(1, len(coins) + 1):
          for j in range(1, n + 1):
              if coins[i - 1] == j:m[i][j] = 1
              elif coins[i - 1] > j:m[i][j] = m[i - 1][j]
              else:m[i][j] = min(m[i - 1][j], 1 + m[i][j - coins[i - 1]])
      print m
      return m[-1][-1]

def help(seq, r):
     m = [[0 for x in range(r + 1)] for x in range(len(seq) + 1)]
     for i in range(r + 1):
         m[0][i] = i
     return m


def ip_from_dotted(s):
    return list(lambda a, b: a << 8 | b, map(int, s.split('.')))


def ip_to_dotted(ip):
    return '.'.join(map(lambda n: str(ip >> n & 0xFF), [24, 16, 8, 0]))



def ip_to_int32(ip):
  retInt = 0
  octets = ip.split('.')
  for ndx, offset in enumerate((24, 16, 8, 0)):
      retInt = retInt | int(octets[ndx]) << offset
      print retInt
  return retInt


CSCvk22834



dc01