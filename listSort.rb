#!/usr/bin/env ruby

puts("this is a string output by ruby");
list = [2,1,5,1,0]
i=0
min=0
while i<list.length-1
	k=list[i]
	j=list[i+1]
	puts('k='+k)
	puts('j='+j)
	if k<=j
		min=k
		break
	else
		min=j
	end
	i=i+1
end
puts(min)