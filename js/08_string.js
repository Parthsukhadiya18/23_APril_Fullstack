14)string
Var Str=”   javascript is an easy language     !”
Length 
Str.length   

toLowerCase()
Str.toLowerCase()
toUpperCase()
Str.toUpperCase()

includes() return true false case sensitive
Str.includes(“java”)

startswith() search start word case sensitive
startswith(“java”) 
endswith()search end word sensitive
endswith(“language“)

search() index of string 0 or -1
Str.search(“an”);    

match();
Str.match(/a/g) ; find global return array

indexOf(“serch”)  find start index of array
Str.indexOf(“an”) position
lastIndexOf(“search”)  find end index of array
Str.lastIndexOf(“an”)position

replace(odd string,new string) replace string
Str.replace(“javascript”,”php”)
Str.replace(/an/g,”php”)

trim() space clean
Str.trim()

charAt() return array value
Str.charAt(2) v

charCodeAt() return array ascii value
Str.charCodeAt(1)  a =97

15)concat() add string
Str.concat(str1,str2)

split()  break string give array
Str.split(“ “)

repeat(2timerepeat)
Str.repeat(2)

slice(start,end)
Str.slice(2,5)

substr(start,total charter)
substr(2,5word)
substring(start,end)
substring(2,5)

NUMBER METHOD
Number() string to number convert
Number(“11”)

parseInt(“12,00”)   12
parseFloat(“12”) 12.00

isFinite()
isFinite(“100”) Infinity  return True false


toFixed()  .after 2 digit a=12.456
a.toFixed(2)

toPrecision()
toPrecision(3) .after round value like .567123545 ==.57

16)Math method
Math.ceil(5.2)   6
Math.floor(5.2)   5
Math.round(5.6) 6
Math.trunc(5.4) 5
Math.max(1,2,3,5) 5
Math.min(1,2,3,4) 1
Math.cbrt(8) 2
Math.sqrt(4) 2
Math.pow(2,3)     2*2*2  = 8
Math.random()*100   random value 
Math.abs(-23)  23 give plus value
Math.PI     3.14

Date get method
Now = new Date()
getDate(): Returns the day of the month (1-31).
getMonth(): Returns the month (0-11).
getFullYear(): Returns the year (4 digits).
getHours(): Returns the hour (0-23).
getMinutes(): Returns the minutes (0-59).
getSeconds(): Returns the seconds (0-59).
getMilliseconds(): Returns the milliseconds (0-999).
getDay(): Returns the day of the week (0-6)Sunday to Saturday is 6.





Date Set method
Now = new Date()
Now.setDate(20)   console.log(Now)
Now.setFullYear(2020,5,7) y-d-m  console.log(Now)
Now.setMonth(4)  console.log(Now)
Now.setDay(3) console.log(Now)
Now.setHours(23)  console.log(Now)
Now.setMinutes(21) console.log(Now)
Now.setSeconds(45) console.log(Now)
Now.setTime(123456789) console.log(Now)




getTime(): Returns the number of milliseconds
toLocaleString(): date-time locale format.
toISOString(): date in ISO format.
toUTCString(): date in UTC format.
