Test.describe("Basic tests")
sensor_data1 = [('Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar')]
Test.assert_equals(sensor_analysis(sensor_data1),(118.6275, 3.5779))
sensor_data2 = [('Distance:', 295.68, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 294.78, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 298.21, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 294.84, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 296.54, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 133.84, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 294.41, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 294.82, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 134.61, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 294.86, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.87, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.47, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 135.5, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.9, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 171.36, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.92, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar')]
Test.assert_equals(sensor_analysis(sensor_data2),(215.2265, 68.4014))

Test.describe("Random tests")
import random
import math
generate_float = lambda: round(random.uniform(150, 250) , 2)
distance_mean = lambda a: round(sum(a) / float(len(a)), 4)
distance_stdev = lambda a: round(math.sqrt(distance_var(a)), 4)
def generate_random_data():
    sensor_data = []
    for i in range(100):
    	f = generate_float()
    	t = tuple(i for i in ('Distance:', f, 'Meters', 'Sensor 5 malfunction =>lorimar'))
    	sensor_data.append(t)
    return sensor_data

def sensor_analysis_test(sensor_data):
    dist_lst = extract_distance(sensor_data)
    mu = distance_mean(dist_lst)
    sd = distance_stdev(dist_lst)
    return (mu, sd)

def extract_distance(sensor_data):
    dist_lst = []
    for i in sensor_data:
        for j in i:
           if type(j) == float:
                dist_lst.append(j)
    return dist_lst

def distance_var(a):
    mu = distance_mean(a)
    t = 0.0
    for i in a:
        t += (i - mu) ** 2
    return t / (len(a) -  1)

for i in range(40):
    a = generate_random_data()
    Test.it("Testing for "+str(a))
    Test.assert_equals(sensor_analysis(a), sensor_analysis_test(a),"It should work with random inputs too" )
