The alphabet, from 'a' to 'z', is assigned weights corresponding to their ordinal positions. For instance, 'a' has a weight of 1, 'b' has a weight of 2, and so on, with 'z' having a weight of 26. The weight of a string is calculated by summing the weights of all its characters. Consider the string "gits" > gits = 7 + 9 + 20 + 19 = 55.

Example:
Input:
Given a string "abbcccd" and an array of queries "[1, 3, 9, 8]". The queries are used to determine the status of the numbers in the queries based on the following rules:
1. If a number in the queries is equal to the weight of a character or substring, return "Yes".
2. If a number in the queries is different from the weight of a character or substring, return "No".
a = 1
b = 2
bb = 4
c = 3
cc = 6
ccc = 9
d = 4 
Output: [Yes, Yes, Yes, No]
Explanation: 
1. 1=> Yes, 3 => Yes, 9 => Yes, and 8 => No.
2. Based on the character and substring weighting of "abbcccd", the status of the queries "[1, 3, 9, 8]" is "[Yes, Yes, Yes, No]".

Rule:
For repeated and consecutive characters, the weighting should be specified for each substring from the first occurrence to the n-th occurrence. Example: bbccc => b, bb, c, cc, ccc.

Task: 
Create a function to solve the Weighted Strings problem!
