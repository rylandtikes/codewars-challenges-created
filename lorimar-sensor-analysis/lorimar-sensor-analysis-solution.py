import math

def sensor_analysis(sensor_data):

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

def distance_mean(lst):
    
    return round(sum(lst) / float(len(lst)), 4)

def distance_var(lst):

	mu = distance_mean(lst)
	t = 0.0
	for i in lst:
		t += (i - mu) ** 2
	return t / (len(lst) -  1)

def distance_stdev(lst):

	return round(math.sqrt(distance_var(lst)), 4)