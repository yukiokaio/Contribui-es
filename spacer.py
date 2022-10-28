import re

def putSpace(input):

	# regex [A-Z][a-z]* means any string starting
	# with capital character followed by many
	# lowercase letters
	words = re.findall('[A-Z][a-z]*', input)

	# Change first letter of each word into lower
	# case
	for i in range(0,len(words)):
	words[i]=words[i][0].lower()+words[i][1:]
	print(' '.join(words))
	

# Driver program
if __name__ == "__main__":
	input = 'BruceWayneIsBatman'
	putSpace(input)
