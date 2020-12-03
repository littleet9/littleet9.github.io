let ccfCounter = 0;
let ccfPhotos = 3;
let ytCounter = 0; //Counter for which video is currently displayed
let videosIFrames = ["https://www.youtube.com/embed/La7ve-SfxK0",
					"https://www.youtube.com/embed/jCfda-MPo1k",
					"https://www.youtube.com/embed/JCqiKOPuz84",
					"https://www.youtube.com/embed/i7M80F-DS2M",
					"https://www.youtube.com/embed/u-Fp1LZBS3Y",		
					"https://www.youtube.com/embed/zO6GOGCgt3g"];

function main() {
	$('#socialSection').hide();
	$('#socialSection').fadeIn(500);
	
	initSlideButtons();
	initCCFPhotos();
	initYTVideos();
	initCampLink();
}
main();

function initCampLink(){
	$('#ccfLogo').on('mouseover', function() {
		$(this).css('cursor', 'pointer');
	}).on('mouseout', function() {
		$(this).css('cursor', 'defualt');
	}).on('click', function() {
		window.open('http://www.campcarefree.org/', '_black');
	});
}

function initSlideButtons(){
	checkArrayBounds();
	$('.slideButtons').on('mouseover', function(){
		$(this).css('cursor', 'pointer'); 
	}).on('mouseout', function(){
		$(this).css('cursor', 'default');
	});
}

function initCCFPhotos(){
	$('#ccfprevButton').on('click', function(){
		if(ccfCounter > 0)
			ccfCounter--;
		$('#ccfphoto1').attr('src', "media/CCFphotos/" + (ccfCounter * 3 + 1) + ".JPG");
		$('#ccfphoto2').attr('src', "media/CCFphotos/" + (ccfCounter * 3 + 2) + ".JPG");
		$('#ccfphoto3').attr('src', "media/CCFphotos/" + (ccfCounter * 3 + 3) + ".JPG");
		checkArrayBounds();
	}).on('mouseover', function(){
		$(this).children().attr('src', 'media/prevButtonOver.png');
	}).on('mouseout', function(){
		$(this).children().attr('src', 'media/prevButton.png');
	});
	
	$('#ccfnextButton').on('click', function(){
		if(ccfCounter < ccfPhotos-1)
			ccfCounter++;
		$('#ccfphoto1').attr('src', "media/CCFphotos/" + (ccfCounter * 3 + 1) + ".JPG");
		$('#ccfphoto2').attr('src', "media/CCFphotos/" + (ccfCounter * 3 + 2) + ".JPG");
		$('#ccfphoto3').attr('src', "media/CCFphotos/" + (ccfCounter * 3 + 3) + ".JPG");
		checkArrayBounds();
	}).on('mouseover', function(){
		$(this).children().attr('src', 'media/nextButtonOver.png');
	}).on('mouseout', function(){
		$(this).children().attr('src', 'media/nextButton.png');
	});
}

function initYTVideos(){
	$('#ytprevButton').on('click', function(){
		if(ytCounter > 0)
			ytCounter--;
		$('iframe').fadeOut(350);
		$('iframe').attr('src', videosIFrames[ytCounter]);
		$('iframe').fadeIn(350);
		checkArrayBounds();
	}).on('mouseover', function(){
		$(this).children().attr('src', 'media/prevButtonOver.png');
	}).on('mouseout', function(){
		$(this).children().attr('src', 'media/prevButton.png');
	});
	
	$('#ytnextButton').on('click', function(){
		if(ytCounter < videosIFrames.length-1)
			ytCounter++;
		$('iframe').fadeOut(350);
		$('iframe').attr('src', videosIFrames[ytCounter]);
		$('iframe').fadeIn(350);
		checkArrayBounds();
	}).on('mouseover', function(){
		$(this).children().attr('src', 'media/nextButtonOver.png');
	}).on('mouseout', function(){
		$(this).children().attr('src', 'media/nextButton.png');
	});
}

function checkArrayBounds(){
	//CCF Photos
	if(ccfCounter == 0){
		$('#ccfprevButton').css('visibility', 'hidden');
		$('#ccfnextButton').css('visibility', 'visible');
	}
	else if(ccfCounter == ccfPhotos - 1){
		$('#ccfprevButton').css('visibility', 'visible');
		$('#ccfnextButton').css('visibility', 'hidden');
	}
	else{
		$('#ccfprevButton').css('visibility', 'visible');
		$('#ccfnextButton').css('visibility', 'visible');
	}
	//Youtube
	if(ytCounter == 0){
		$('#ytprevButton').css('visibility', 'hidden');
		$('#ytnextButton').css('visibility', 'visible');
	}
	else if(ytCounter == videosIFrames.length-1){
		$('#ytprevButton').css('visibility', 'visible');
		$('#ytnextButton').css('visibility', 'hidden');
	}
	else{
		$('#ytprevButton').css('visibility', 'visible');
		$('#ytnextButton').css('visibility', 'visible');
	}
}






