document.write("-----Math methods-----<br><br>")

//math.ceil: 
var a = Math.ceil(5.2)
document.write("Ceil value of 5.2 is: "+a)

//math.floor
var b = Math.floor(1.45)
document.write("<br>Floor value of 1.45 is: "+b)

//math.round
var x = Math.round(2.40)
document.write("<br>Round of value: "+x)
var y = Math.round(2.50)
document.write("<br>Round of value: "+y)

//math.trunc: neglects value after decimal
var c = Math.trunc(45.7567)
document.write("<br>Trunc value: "+c)

//math.max: rturns highest value
var d = Math.max(8, 10, 15, 20, 30)
document.write("<br>Maximum value: "+d)

//math.min
var e = Math.min(8, 10, 15, 20, 30)
document.write("<br>Minimum value: "+e)

//math.sqrt
var f = Math.sqrt(4)
document.write("<br>Square root of 4 is: "+f)

//math.cbrt
var g = Math.cbrt(125)
document.write("<br>Cube root of 125 is: "+g)

//math.pow
var h = Math.pow(4,3)
document.write("<br>4 raise to power 3 is: "+h)

//math.random
var i = Math.floor(Math.random() *10)+1 //will five val b/w 1 to 10
document.write("<br>Random value between 1 to 10 is: "+i)

//math.abs : always return positive value even if it's neg
var j = Math.abs(5.25)
document.write("<br>Absolute value is: "+j)


















