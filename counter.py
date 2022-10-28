# your code goes here# Python program to
# find the most occurring element
import re
from collections import Counter

def most_occr_element(word):
	
	# re.findall will extract all the elements
	# from the string and make a list
	arr = re.findall(r'[0-9]+', word)	
	
	# to store maxm frequency
	maxm = 0

	# to store maxm element of most frequency
	max_elem = 0
	
	# counter will store all the number with
	# their frequencies
	# c = counter((55, 2), (2, 1), (3, 1), (4, 1))	
	c = Counter(arr)
	
	# Store all the keys of counter in a list in
	# which first would we our required element	
	for x in list(c.keys()):

		if c[x]>= maxm:
			maxm = c[x]
			max_elem = int(x)
				
	return max_elem

# Driver program
if __name__ == "__main__":
	word = 'geek55of55gee4ksabc3dr2x'
	print(most_occr_element(word))
