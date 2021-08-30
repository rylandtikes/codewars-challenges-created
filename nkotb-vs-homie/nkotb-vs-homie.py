Test.describe("Basic tests")
monitoring = ['We need CLOUDWATCH now!']
automation = ['We need SALTSTACK now!', 'We need ansible now!', 'We need ANSIBLE now!']
deployment = ['We need TERRAFORM now!', 'We need jenkins now!', 'We need TEAMCITY now!', 'We need teamcity now!', 'We need TEAMCITY now!']
cloud = ['We need OPENSTACK now!', 'We need aws now!', 'We need AWS now!']
microservices = ['We need LXC now!', 'We need lxc now!', 'We need LXC now!', 'We need lxc now!', 'We need DOCKER now!']
requirements = monitoring, automation, deployment, cloud, microservices
expected =  ['Cloudwatch! Homie dont play that!', 'Saltstack! Homie dont play that!', 'Ansible! Homie dont play that!', 'Ansible! Homie dont play that!',
             'Terraform! Homie dont play that!', 'Jenkins! Homie dont play that!', 'Teamcity! Homie dont play that!', 'Teamcity! Homie dont play that!', 
             'Teamcity! Homie dont play that!', 'Openstack! Homie dont play that!', 'Aws! Homie dont play that!', 'Aws! Homie dont play that!', 'Lxc! Homie dont play that!',
             'Lxc! Homie dont play that!', 'Lxc! Homie dont play that!', 'Lxc! Homie dont play that!', 'Docker! Homie dont play that!', 
             '1 monitoring objections, 3 automation, 5 deployment pipeline, 3 cloud, and 5 microservices.']
Test.assert_equals(nkotb_vs_homie(requirements), expected)
monitoring = ['We need LOGSTASH now!', 'We need Sensu now!', 'We need SENSU now!', 'We need CloudWatch now!','We need CLOUDWATCH now!', 
              'We need Sensu now!', 'We need NAGIOS now!', 'We need PagerDuty now!', 'We need NAGIOS now!', 'We need SysDig now!']
automation = ['We need CHEF now!', 'We need chef now!', 'We need CHEF now!', 'We need puppet now!', 'We need SALTSTACK now!',
              'We need saltstack now!', 'We need CHEF now!', 'We need chef now!', 'We need SALTSTACK now!', 'We need saltstack now!']
deployment = ['We need TRAVISCI now!', 'We need git now!', 'We need TEAMCITY now!', 'We need travisci now!', 'We need GIT now!', 
              'We need travisci now!', 'We need TRAVISCI now!', 'We need terraform now!', 'We need JENKINS now!', 'We need git now!']
cloud = ['We need AWS now!', 'We need azure now!', 'We need GOOGLE now!']
microservices = ['We need LXC now!', 'We need lambda now!', 'We need DOCKER now!']
requirements = monitoring, automation, deployment, cloud, microservices
expected = ['Logstash! Homie dont play that!', 'Sensu! Homie dont play that!', 'Sensu! Homie dont play that!', 'Cloudwatch! Homie dont play that!', 
            'Cloudwatch! Homie dont play that!', 'Sensu! Homie dont play that!', 'Nagios! Homie dont play that!', 'Pagerduty! Homie dont play that!',
            'Nagios! Homie dont play that!', 'Sysdig! Homie dont play that!', 'Chef! Homie dont play that!', 'Chef! Homie dont play that!', 
            'Chef! Homie dont play that!', 'Puppet! Homie dont play that!', 'Saltstack! Homie dont play that!', 'Saltstack! Homie dont play that!', 
            'Chef! Homie dont play that!', 'Chef! Homie dont play that!', 'Saltstack! Homie dont play that!', 'Saltstack! Homie dont play that!', 
            'Travisci! Homie dont play that!', 'Git! Homie dont play that!', 'Teamcity! Homie dont play that!', 'Travisci! Homie dont play that!', 
            'Git! Homie dont play that!', 'Travisci! Homie dont play that!', 'Travisci! Homie dont play that!', 'Terraform! Homie dont play that!', 
            'Jenkins! Homie dont play that!', 'Git! Homie dont play that!', 'Aws! Homie dont play that!', 'Azure! Homie dont play that!', 
            'Google! Homie dont play that!', 'Lxc! Homie dont play that!', 'Lambda! Homie dont play that!', 'Docker! Homie dont play that!', 
            '10 monitoring objections, 10 automation, 10 deployment pipeline, 3 cloud, and 3 microservices.']
Test.assert_equals(nkotb_vs_homie(requirements), expected)
import random
monitoring = ['nagios', 'zabbix', 'sensu', 'prometheus', 'sysdig', 'newrelic',
              'cloudwatch','stackdriver','appdynamics', 'pagerduty','logstash', 'splunk']
automation = ['chef', 'puppet', 'saltstack', 'ansible']
deployment = ['jenkins', 'git', 'juju', 'terraform', 'teamcity', 'travisci']
cloud = ['aws', 'azure', 'google', 'softlayer', 'cloudfoundry', 'openstack']
microservices = ['docker','lxc', 'lambda']
def cr(a, n):
    r = []
    for i in range(n):
        x = random.choice(a)
        if i % 2 == 0: x = x.upper()
        r.append("We need " +x+ " now!")
    return r
def nkotb_vs_homie_test(requirements):
    a = requirements
    res = [j[0:-5].split()[-1].capitalize() + "! Homie dont play that!" for _ in a for j in _]
    report = "{} monitoring objections, {} automation, {} deployment pipeline, {} cloud, and {} microservices.".format(
             len(a[0]),len(a[1]),len(a[2]),len(a[3]),len(a[4]))
    res.append(report)
    return res
Test.describe("Random tests")
for _ in range(40):
    requirements = cr(monitoring, random.randint(1,40)), cr(automation, random.randint(1,40)),cr(deployment, random.randint(1,40)),cr(cloud, random.randint(1,40)), cr(microservices, random.randint(1,40))
    expected = nkotb_vs_homie_test(requirements)
    Test.it("Returns "+str(nkotb_vs_homie(requirements)))
    Test.assert_equals(nkotb_vs_homie(requirements), expected,"It should work with random inputs too" )