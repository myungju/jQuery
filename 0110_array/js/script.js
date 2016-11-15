var array1=new Array(0,false,"kimkimin");
var array2=new Array();
array2.push(1);
array2.push(true);
array2.push("kimmyunghee");
var array3=new Array();
array3[0]=2;
array3[1]=[3,4];
array3[2]="kimyunse";
var array4=[3,[4,5], "family"]; 

var doc = document;

doc.write("array1 : " + array1 + "<br><br>");
doc.write("array2 : " + array2 + "<br><br>");
doc.write("array3 : " + array3 + "<br><br>");
doc.write("array4 : " + array4 + "<br><br>");

doc.write("array4[1][0] : " + array4[1][0]);