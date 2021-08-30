#initial solution
#def count_vegetables(string):
#    pass



def count_vegetables(string):

    s = string.split()

    vegetables = ['potato', 'tofu', 'cucumber', 'cabbage', 'turnip', 'pepper', 'onion',
                  'carrot', 'celery','mushroom']

    counts = dict
    lst = list()
  
    for veg in s:
        if veg in vegetables:
            if veg not in counts:
                counts[veg] = 1
            else:
                counts[veg] += 1

    for key, val in counts.items():
        lst.append( (val, key) )

    lst.sort(reverse=True)

    return lst
