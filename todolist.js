function adder()
{ if(document.getElementById('input').value !='')
{/*var ol = document.getElementById('list');
var li = document.createElement("li");
li.appendChild(document.createTextNode(document.getElementById('input').value));
ol.appendChild(li);*/
var temp=document.getElementById('liststyle').innerHTML;
document.getElementById('liststyle').innerHTML= temp +'<li>'+document.getElementById('input').value+'</li>';
document.getElementById('input').value=''}}
function setCookie()
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + 3);
var str =document.getElementById('liststyle').innerHTML //change back to list
var k =document.getElementsByTagName("li")//testing
var c_value=escape(str) + ((3==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie='unique12' + "=" + c_value;
}

function reset()
{var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x=='unique12')
    {
  document.write(y); 
    }
  }
}

