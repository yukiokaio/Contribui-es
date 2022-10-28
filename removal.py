import re

# initialising string
ini_string = "abcjw:, .@! eiw"

# printing initial string
print ("initial string : ", ini_string)

result = re.sub('[\W_]+', '', ini_string)

# printing final string
print ("final string", result)
