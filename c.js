document.getElementById("car1").addEventListener("mouseover",myf1)
document.getElementById("car2").addEventListener("mouseover",myf2)
function myf1()
{
var myObj,x="",y="",i,j;
myObj={ "name":"Ferrari","model":["name:Ferrari ftxd", "cost:1456k$" ,"color:purple"]};
document.getElementById("displaytable").removeAttribute('hidden');
x=myObj.name;
 for (i in myObj.model) {
      y += myObj.model[i] + "&nbsp";
  }
document.getElementById("item1").innerHTML=x;
document.getElementById("item2").innerHTML=y;
}
function myf2(){
var myObj,x="",y="",i,j;
myObj={ "name":"BMW","model":["name:BMW ftxd", "cost:1456k$" ,"color:purple"]};
document.getElementById("displaytable").removeAttribute('hidden');
x=myObj.name;
 for (i in myObj.model) {
      y += myObj.model[i] + "&nbsp";
  }
document.getElementById("item1").innerHTML=x;
document.getElementById("item2").innerHTML=y;
}

