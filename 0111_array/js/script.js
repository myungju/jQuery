var array1=new Array(0,1,2,3);
var array2=array1.splice(0,2);
console.log(array1);
console.log(array2);

var doc = document;

doc.write("array1 : " + array1.join(","));
doc.write("<br><br>");
doc.write("array2 : " + array2.join(","));
doc.write("<br><br>");
doc.write("array1.length : " + array1.length);