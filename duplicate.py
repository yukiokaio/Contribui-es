// C++ program to remove duplicate words
// using Regular Expression or ReGex.
#include <iostream>
#include <regex>
using namespace std;

// Function to validate the sentence
// and remove the duplicate words
string removeDuplicateWords(string s)
{

// Regex to matching repeated words.
const regex pattern("\\b(\\w+)(?:\\W+\\1\\b)+", regex_constants::icase);

string answer = s;
for (auto it = sregex_iterator(s.begin(), s.end(), pattern);
	it != sregex_iterator(); it++)
{
	// flag type for determining the matching behavior
	// here it is for matches on 'string' objects
	smatch match;
	match = *it;
	answer.replace(answer.find(match.str(0)), match.str(0).length(), match.str(1));
}

return answer;
}

// Driver Code
int main()
{
// Test Case: 1
string str1
	= "Good bye bye world world";
cout << removeDuplicateWords(str1) << endl;

// Test Case: 2
string str2
	= "Ram went went to to his home";
cout << removeDuplicateWords(str2) << endl;

// Test Case: 3
string str3
	= "Hello hello world world";
cout << removeDuplicateWords(str3) << endl;

return 0;
}

// This code is contributed by yuvraj_chandra
