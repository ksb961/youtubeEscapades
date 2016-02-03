/*function onstartRun()
{
	var name;
	name = window.prompt("Please enter your name!");
	//return "Hello!";
	document.getElementById("java").innerHTML="Hello! " + name + "! How have you been!?";
	//document.writeln("Hello" + name + "! How are you!?");
}
//window.alert (onstartRun());
//window.onload = onstartRun;*/
var now;

function showTheHours(theHour)
{
	if(theHour > 0 && theHour < 13)
	{
		return(theHour);
	}	
	if(theHour == 0)
	{
		return(12);
	}
	return(theHour - 12);
}

function showZeroFilled(inValue)
{
	if(inValue > 9)
	{
		return ":" + inValue;
	}
	return ":0" + inValue;
}

function showAmPm()
{
	if(now.getHours() < 12)
	{
		return(" am");
	}
	return(" pm");
}

function showTheTime()
{
	now = new Date();
	
	document.getElementById("clock").innerHTML= showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	
	setTimeout(showTheTime(), 1000);
}
