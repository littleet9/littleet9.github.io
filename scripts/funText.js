function main() {
	initFunText();
	$('section').hide();
    $('section').fadeIn(500);
}
main();

function initFunText(){
	let liLetter = document.getElementsByClassName('funLetter');
	for(let ele of liLetter){
		//Styles
		ele.style.display = "inline";
		ele.style.float = "left";
		ele.marginLeft = "10em";
	}
	let letters = document.querySelectorAll('li.funLetter h1');
	for(let ele of letters){
		//Styles
		ele.style.color = "#FFC857";
		ele.style.margin = "0px 0px 0px 0px";
		//Events
		ele.addEventListener('mouseover', ()=>{
			let r = (Math.random() * 255);
			let g = (Math.random() * 255);
			let b = (Math.random() * 255);
			ele.style.color = "rgb("+r+", "+g+" , "+b+")";
			ele.style.fontSize = ele.style.fontSize + 1;
			ele.style.cursor = "default";
		}, false);
		ele.addEventListener('mouseout', ()=>{
			ele.style.color = "#FFC857";
			ele.style.fontSize = ele.style.fontSize - 1;
		}, false);
		ele.addEventListener('click', ()=>{
			if(ele.style.textTransform == "uppercase"){	
				ele.style.textTransform = "lowercase";
			}else{	
				ele.style.textTransform = "uppercase";
			}
		}, false);
	}
	
}





