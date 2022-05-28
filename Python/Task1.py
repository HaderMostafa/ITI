# Q1
import math
x2=2
x1=1
y2=4
y1=2
d= math.sqrt(pow((x2-x1),2)+ pow((y2-y1),2))
print(d)

# Q2
def convert_to_set(list1):
    converted_set=set(list1)
    return list(converted_set)

output=convert_to_set([1, 2, 2, 3, 2])  
print(output) 
    
# Q3
def split_string(str1):
    length=len(str1)
    check=len(str1)%2
    x= math.ceil(length/2) 
    half1=str1[0:x]
    half2=str1[x:length]
    return [half1,half2]

split_string('hadeer')

def concat_strings(str1,str2=""):
    string1=split_string(str1)
    string2=split_string(str2)
    part1=string1[0]+string2[0]
    part2=string1[1]+string2[1]
    return [part1,part2]

my_list=concat_strings('ahmed','hadeer')
print(my_list)

# Q4
import sys
from collections import Counter 

fileName=sys.argv[1]
f = open(fileName)
content=f.read().split()
f.close()
counterWords=Counter(content)
mostCommon=counterWords.most_common(20)
f = open("popular_words.txt", 'w')
for res in mostCommon:  
 newContent=res[0]+','
 f.writelines(newContent)
f.close()

# Q5
def remove_vowels(str1):
    newstr=str1
    vowels = ('a', 'e', 'i', 'o', 'u')
    for x in str1.lower():
        if x in vowels:
            newstr = newstr.replace(x,"")
    return print(newstr)

remove_vowels('ahmed')

# Q6
def find_location(str1,char):
    res = []
    for i in range(0, len(str1)):
        if str1[i].lower() == char.lower():
            res.append(i)
    return res

output=find_location('amoahgadf','a')
print(output)

#Report

#Enumerate() in Python

#Show what it does, how it works, and support your answer with an example.
# Enumerate() method adds a counter to an iterable and returns it in a form of enumerating object.
# This enumerated object can then be used directly for loops or converted into a list of tuples using the list() method.
# enumerate(iterable, start=0)
l1 = ["eat", "sleep", "repeat"]
for ele in enumerate(l1,2):
    print (ele)

# Python Lambda Expression

# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression.
# lambda arguments : expression
x = lambda a : a + 10
print(x(5))

# operator module 

# Python has predefined functions for many mathematical, logical, relational, 
# bitwise etc operations under the module “operator”. 
import operator
a = 4
b = 3
print ("The addition of numbers is :",end="")
print (operator.add(a, b))
print ("The difference of numbers is :",end="")
print (operator.sub(a, b))