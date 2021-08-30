Test.describe("Basic tests",_=> {
var monitoring = ['We need CLOUDWATCH now!'],
automation = ['We need SALTSTACK now!', 'We need ansible now!', 'We need ANSIBLE now!'],
deployment = ['We need TERRAFORM now!', 'We need jenkins now!', 'We need TEAMCITY now!', 'We need teamcity now!', 'We need TEAMCITY now!'],
cloud = ['We need OPENSTACK now!', 'We need aws now!', 'We need AWS now!'],
microservices = ['We need LXC now!', 'We need lxc now!', 'We need LXC now!', 'We need lxc now!', 'We need DOCKER now!'],
requirements = [monitoring, automation, deployment, cloud, microservices],
expected =  ['Cloudwatch! Homie dont play that!', 'Saltstack! Homie dont play that!', 'Ansible! Homie dont play that!', 'Ansible! Homie dont play that!',
             'Terraform! Homie dont play that!', 'Jenkins! Homie dont play that!', 'Teamcity! Homie dont play that!', 'Teamcity! Homie dont play that!', 
             'Teamcity! Homie dont play that!', 'Openstack! Homie dont play that!', 'Aws! Homie dont play that!', 'Aws! Homie dont play that!', 'Lxc! Homie dont play that!',
             'Lxc! Homie dont play that!', 'Lxc! Homie dont play that!', 'Lxc! Homie dont play that!', 'Docker! Homie dont play that!', 
             '1 monitoring objections, 3 automation, 5 deployment pipeline, 3 cloud, and 5 microservices.'];
Test.assertDeepEquals(nkotbVsHomie(requirements), expected);
var monitoring = ['We need LOGSTASH now!', 'We need Sensu now!', 'We need SENSU now!', 'We need CloudWatch now!','We need CLOUDWATCH now!', 
                  'We need Sensu now!', 'We need NAGIOS now!', 'We need PagerDuty now!', 'We need NAGIOS now!', 'We need SysDig now!'],
automation = ['We need CHEF now!', 'We need chef now!', 'We need CHEF now!', 'We need puppet now!', 'We need SALTSTACK now!',
              'We need saltstack now!', 'We need CHEF now!', 'We need chef now!', 'We need SALTSTACK now!', 'We need saltstack now!'],
deployment = ['We need TRAVISCI now!', 'We need git now!', 'We need TEAMCITY now!', 'We need travisci now!', 'We need GIT now!', 
              'We need travisci now!', 'We need TRAVISCI now!', 'We need terraform now!', 'We need JENKINS now!', 'We need git now!'],
cloud = ['We need AWS now!', 'We need azure now!', 'We need GOOGLE now!'],
microservices = ['We need LXC now!', 'We need lambda now!', 'We need DOCKER now!'],
requirements = [monitoring, automation, deployment, cloud, microservices],
expected = ['Logstash! Homie dont play that!', 'Sensu! Homie dont play that!', 'Sensu! Homie dont play that!', 'Cloudwatch! Homie dont play that!', 
            'Cloudwatch! Homie dont play that!', 'Sensu! Homie dont play that!', 'Nagios! Homie dont play that!', 'Pagerduty! Homie dont play that!',
            'Nagios! Homie dont play that!', 'Sysdig! Homie dont play that!', 'Chef! Homie dont play that!', 'Chef! Homie dont play that!', 
            'Chef! Homie dont play that!', 'Puppet! Homie dont play that!', 'Saltstack! Homie dont play that!', 'Saltstack! Homie dont play that!', 
            'Chef! Homie dont play that!', 'Chef! Homie dont play that!', 'Saltstack! Homie dont play that!', 'Saltstack! Homie dont play that!', 
            'Travisci! Homie dont play that!', 'Git! Homie dont play that!', 'Teamcity! Homie dont play that!', 'Travisci! Homie dont play that!', 
            'Git! Homie dont play that!', 'Travisci! Homie dont play that!', 'Travisci! Homie dont play that!', 'Terraform! Homie dont play that!', 
            'Jenkins! Homie dont play that!', 'Git! Homie dont play that!', 'Aws! Homie dont play that!', 'Azure! Homie dont play that!', 
            'Google! Homie dont play that!', 'Lxc! Homie dont play that!', 'Lambda! Homie dont play that!', 'Docker! Homie dont play that!', 
            '10 monitoring objections, 10 automation, 10 deployment pipeline, 3 cloud, and 3 microservices.'];
Test.assertDeepEquals(nkotbVsHomie(requirements), expected);
});
var monitoring = ['nagios', 'zabbix', 'sensu', 'prometheus', 'sysdig', 'newrelic',
                  'cloudwatch','stackdriver','appdynamics', 'pagerduty','logstash', 'splunk'],
automation = ['chef', 'puppet', 'saltstack', 'ansible'],
deployment = ['jenkins', 'git', 'juju', 'terraform', 'teamcity', 'travisci'],
cloud = ['aws', 'azure', 'google', 'softlayer', 'cloudfoundry', 'openstack'],
microservices = ['docker','lxc', 'lambda'];
function nkotbVsHomieTest(requirements) {
  let a = requirements, res = [], q = `pipeline, ${a[3].length} cloud, and ${a[4].length} microservices.`,
      p = `${a[0].length} monitoring objections, ${a[1].length} automation, ${a[2].length} deployment `;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      let x = (a[i][j]).slice(0, -5).split(' ');
      res.push(`${cap(x[x.length-1])}! Homie dont play that!`);
    }
  }
  res.push(p+q)
  return res;    
}
const cap = ([p,...q]) => p.toUpperCase() + q.join('').toLowerCase();
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
function cr(a,n) {
  let r = [];
  for (let i = 0; i < n; i++) {
    let x = a[randint(0, a.length-1)];
    if (i % 2 == 0) x = x.toUpperCase();
    r.push("We need " +x+ " now!");
  }
  return r;
}
Test.describe("Random tests",_=> {
for (let i = 0; i < 40; i++) {
  let requirements = [cr(monitoring, randint(1,40)), cr(automation, randint(1,40)),cr(deployment, randint(1,40)),cr(cloud, randint(1,40)), cr(microservices, randint(1,40))];
  Test.it(`"Testing for requirements =>${requirements}`,_=> {
  let expected = nkotbVsHomieTest(requirements);
  Test.assertDeepEquals(nkotbVsHomie(requirements), expected,"It should work for random inputs too");
  });
 }
});