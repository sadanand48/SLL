import functools
l1=[34,55,12,25,67,89]
l2=[x*3 for x in l1]
print("original list",end=" ")
print(l1)
print("new list",end=" ")
print(l2)
print ("The sum of the original list elements is : ",end="") 
print (functools.reduce(lambda a,b : a+b,l1)) 
print ("The sum of the new list elements is : ",end="") 
print (functools.reduce(lambda a,b : a+b,l2)) 
