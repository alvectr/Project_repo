function firstButton()
{
	
	let text, wordsLen, count;
	words = ["Jack","Mango","Chicken","D.O.B"];
	wordsLen = words.length;

	text = "<ul>";
	for (count = 0; count < wordsLen; count++) 
	{
		text += "<li>" + words[count] + "</li>";
	}
	text += "</ul>";

	document.getElementById("buttonOne").innerHTML = text;
	
}


function secondButton()
{
	
	let text, wordsLen, count;
	words = ["Password","Michael","Pizza","Fifa"];
	wordsLen = words.length;

	text = "<ul>";
	for (count = 0; count < wordsLen; count++) 
	{
		text += "<li>" + words[count] + "</li>";
	}
	text += "</ul>";

	document.getElementById("buttonTwo").innerHTML = text;
	
}