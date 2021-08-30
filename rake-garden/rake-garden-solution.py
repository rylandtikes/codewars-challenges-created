def rake_garden(garden):
    s = ""
    lst = garden.split()
    for i in range(len(lst)):
        if lst[i] == 'rock': continue
        elif lst[i] != 'gravel':
            lst[i] = 'gravel'
    return ' '.join(lst)
