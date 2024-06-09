// JavaScript source code

document.write("<table border='1'>");
var row = new Array();
for (var i =1; i <= 10; i++) {
    document.write("<tr>");
    for (var j = 1; j <= 10; j++) {
        document.write("<td>" + i * j + "</td>");
    }
}



document.write("<table border='1'>");
var x = prompt("یک عملگرریاضی واردکنید");
var n = prompt("یک عددواردکنید");
var m = prompt("یک عددواردکنید ضمناجواب شمادرپایان صفحه قابل نمایش می باشد ");
   document.write("<tr>");
if (x == '-') {
    p = n - m; document.write(p);
}
else if (x == '*') {
    p = n * m; document.write(p);
}
else if (x == '/') {
    p = n / m; document.write(p);
}
else if (x == '+') {
    p = n + m; document.write(p);
}
