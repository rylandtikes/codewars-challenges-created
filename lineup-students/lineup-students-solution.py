#initial solution
#def lineup_students(string):
#    pass


def lineup_students(string):

    names = string.split()
    lst = []
    ordered_lst = []

    for name in names:
        lst.append((len(name), name))

    lst.sort(reverse = True)

    for i, name in lst:
        ordered_lst.append(name)

    return ordered_lst
