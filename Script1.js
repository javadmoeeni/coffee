// JavaScript source code

//g = new Date()
//h = g.getDay()
//switch (h) {
//    case 0:
//        document.write("saturday")

//        break;
//    case 1:
//        document.write("sunday")

//        break;
//    case 2:
//        document.write("monday")

//        break;
//    case 3:
//        document.write("tuesday")

//        break;
//    case 4:
//        document.write("wedneaday")

//        break;
//    case 5:
//        document.write("thuarsday")

//        break;
//    case 6:
//        document.write("friday")

//        break;

//}

//var name = prompt("نام خودراواردکنید");
//console.log('your name is :${name}');

a = prompt("عددراواردکنید ");
if (a % 2 == 0) {
    alert("zoj");
}
else {
    alert("fard");
}



m = new Date()
m.getHours()
m.getMonth() + 1
document.write("<h1 align ='center'>" + m + "<h1/>")


x = new Date()
document.write(x.getHours())
z = new Date()
if (z < 10 && z>5) {
    document.write("good morning")
}

else if (z < 13 && z>10) {
    document.write("noon")
}
else if(z > 13 && z<20)
{
    document.write("afternoon")
}
else {
    document.write("شب بخیر")
}