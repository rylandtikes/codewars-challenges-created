Test.describe("Basic tests")
workloads = ''
Test.assert_equals(roast_legacy(workloads), 'These guys are already DevOps and in the Cloud and the business is happy!')
workloads = 'cloudstatelesspython'
Test.assert_equals(roast_legacy(workloads), 'These guys are already DevOps and in the Cloud and the business is happy!')
workloads = 'COBOL'
Test.assert_equals(roast_legacy(workloads), 'Burn baby burn disco inferno 1000 points earned in this roasting and 0 complaints resolved!')
workloads = 'slow!expensive!'
Test.assert_equals(roast_legacy(workloads), 'Burn baby burn disco inferno 0 points earned in this roasting and 2 complaints resolved!')
workloads = 'EXPENSIVE!AUTOMATEDRUBYCLOUDMONGOPAASTAPEACTIVE-ACTIVEPYTHONNOSQL'
Test.assert_equals(roast_legacy(workloads),'Burn baby burn disco inferno 50 points earned in this roasting and 1 complaints resolved!')
workloads = 'expensive!NONOBJECTexpensive!NONOBJECThostage!JAVASCRIPTexpensive!DEVOPS'
Test.assert_equals(roast_legacy(workloads), 'Burn baby burn disco inferno 1000 points earned in this roasting and 4 complaints resolved!')
workloads = 'manual!COBOLnonobjectmonolithicfaxmodemthickclienttapefloppyoldschoolITslow!'
Test.assert_equals(roast_legacy(workloads), 'Burn baby burn disco inferno 2400 points earned in this roasting and 2 complaints resolved!')
workloads = 'tapedistributedactive-activeoldschoolITmonolithicjavamodemnotfunctioning!thickclientCOBOLIAASexpensive!statelessrubyPAASautomatedimmutableagilemongonosqlhostage!nonobjectfaxpythoncontainerizedsecurity!floppyslow!manual!multi-tenantSAASserverlessDevOpscloudJavascriptCOBOL'
Test.assert_equals(roast_legacy(workloads), 'Burn baby burn disco inferno 3400 points earned in this roasting and 5 complaints resolved!')

Test.describe("Random tests")
import random
def create_workloads(n):
    legacy = ["COBOL","nonobject","monolithic","fax", "modem","thickclient","tape","floppy", "oldschoolIT"]          
    modern = ["open-source", "cloud","stateless", "python", "Javascript", "ruby", "nosql", "multi-tenant",
              "SAAS", "PAAS", "IAAS", "java", "mongo", "serverless", "automated", "containerized", "immutable", 
              "active-active", "distributed", "agile", "DevOps", "golang" ]
    complaints = ["slow!", "expensive!", "manual!", "notfunctioning!", "hostage!", "security!"]
    workloads = [] 
    t = legacy + modern + complaints
    for x in range(n):
        y = random.choice(t)
        if x % 2 == 0: y = y.upper()
        workloads.append(y)
    return ''.join(workloads)

def roast_legacy_test(workloads):
    complaints = ["slow!", "expensive!", "manual!", "down!", "hostage!", "security!"]
    legacy = { "cobol":1000, "nonobject":500, "monolithic":500, "fax":100, "modem":100,
              "thickclient":50, "tape":50, "floppy":50, "oldschoolit":50 }
    w = workloads.lower()
    points = sum( w.count(x[0]) * x[1] for x in legacy.items() )
    complaints_cnt = sum( w.count(x) for x in complaints )
    if points == 0 and complaints_cnt == 0:return "These guys are already DevOps and in the Cloud and the business is happy!"
    else:return "Burn baby burn disco inferno {0} points earned in this roasting and {1} complaints resolved!".format(points, complaints_cnt)

for _ in range(40):
    workloads = create_workloads(random.randint(1,100))
    expected = roast_legacy_test(workloads)
    Test.it("testing -> " + workloads)
    Test.it("result -> " + roast_legacy(workloads))
    Test.assert_equals(roast_legacy(workloads), expected,"It should work with random inputs too" )