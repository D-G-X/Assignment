//var links = ["'i.html'","'c.html'","'si.html'","'it.html'","'m.html'","'a.html'"];

/*function openlink(){
	var r = Math.floor(Math.random() * links.length);
	return links[r];
}

var x = openlink();

document.getElementById('run').href=x;*/

/*
function openlink(){
	var links = ["https://www.google.com/","https://in.yahoo.com/?p=us","https://www.apple.com/"];
	var r = (Math.floor(Math.random() * links.length));
	return links[r];
}

var x = openlink();
console.log(x);
document.getElementById("run").href=x;
document.getElementById("runo").href=x;
document.getElementById("runt").href=x;*/
var urls = new Array("a.html", "i.html","si.html","it.html","m.html","c.html");

function redirect()
{
    window.location = urls[Math.floor(urls.length*Math.random())];
}
