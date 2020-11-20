function main() {
    $('section').hide();
    $('section').fadeIn(500);
    updateTime();
}
main();



function updateTime(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
	let hour = today.getHours();
	let mins = today.getMinutes();
    let secs = today.getSeconds();
	if(hour < 10)
		hour = "0" + hour;
	if(mins < 10)
		mins = "0" + mins;
	if(secs < 10)
		secs = "0" + secs;
        
        
    let h1 = document.getElementById("timeHeader");
    h1.innerHTML = hour + "" + mins + "" + secs + "" + month  + "" + day + "" + year;

	let h2 = document.getElementById("theDate");
    h2.innerHTML = hour + " : " + mins + " : " + secs + "<br />" + month + "/" + day + "/" + year;
	
	setTimeout("updateTime();",1000);
}






