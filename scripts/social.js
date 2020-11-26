let ytCounter = 0; //Counter for which video is currently displayed
let videosIFrames = ["https://www.youtube.com/embed/La7ve-SfxK0",
					"https://www.youtube.com/embed/jCfda-MPo1k",
					"https://www.youtube.com/embed/JCqiKOPuz84",
					"https://www.youtube.com/embed/i7M80F-DS2M",
					"https://www.youtube.com/embed/u-Fp1LZBS3Y",		
					"https://www.youtube.com/embed/zO6GOGCgt3g"];

function main() {
	initYTVideos();
}
main();

function initYTVideos(){
	checkArrayBounds();
	$('.ytButtons').on('mouseover', function(){
		$(this).css('cursor', 'pointer');
	}).on('mouseout', function(){
		$(this).css('cursor', 'default');
	}).on('click', function(){
		
	});

	$('#ytprevButton').on('click', function(){
		if(ytCounter > 0)
			ytCounter--;
		console.log(ytCounter);
		$('iframe').fadeOut(350);
		$('iframe').attr('src', videosIFrames[ytCounter]);
		$('iframe').fadeIn(350);
		checkArrayBounds();
	});

	$('#ytnextButton').on('click', function(){
		if(ytCounter < videosIFrames.length-1)
			ytCounter++;
		console.log(ytCounter);
		$('iframe').fadeOut(350);
		$('iframe').attr('src', videosIFrames[ytCounter]);
		$('iframe').fadeIn(350);
		checkArrayBounds();
	});
}

function checkArrayBounds(){
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






