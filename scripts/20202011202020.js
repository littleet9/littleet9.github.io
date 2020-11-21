function main() {
    $('body').hide();
    $('body').fadeIn(1000);
    initTime();
}
main();

function initTime(){
    $('.funNumber').on('mouseover', function() {
            $(this).css('color', "white");
            $(this).css('cursor', 'default');
            $(this).animate({
                fontSize: 160
            }, 100, 'swing', ''); 
    }).on('mouseout', function() {
            $(this).css('color', "#FFC857");
            $(this).animate({
                fontSize: 150
            }, 100, 'swing', ''); 
    });


    updateTime();
}

function updateTime(){
    let today = new Date();
    //-----------------------
    let hour = today.getHours();
    let hourLI = document.getElementById('hourLI');
    if(hour < 10)
    hour = "0" + hour;
    hourLI.innerHTML = hour;
    let mins = today.getMinutes();
    let minLI = document.getElementById('minLI');
    if(mins < 10)
    mins = "0" + mins;
    minLI.innerHTML = mins;
    let secs = today.getSeconds();
    let secLI = document.getElementById('secLI');
    if(secs < 10)
    secs = "0" + secs;
    secLI.innerHTML = secs;

    let month = today.getMonth() + 1;
    let monthLI = document.getElementById('monthLI');
    monthLI.innerHTML = month;
    let day = today.getDate();
    let dayLI = document.getElementById('dayLI');
    dayLI.innerHTML = day;
    let year = today.getFullYear();
    let yearLI = document.getElementById('yearLI');
    yearLI.innerHTML = year;

	//let h2 = document.getElementById("theDate");
    //h2.innerHTML = hour + " : " + mins + " : " + secs + "<br />" + month + "/" + day + "/" + year;
	
	setTimeout("updateTime();",1000);
}






