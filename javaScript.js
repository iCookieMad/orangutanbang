function output(){
	var input=document.getElementById("why").value;
	var text="You (don't) like orangutans because: "+input;

	document.getElementById("message").innerHTML=text;
}