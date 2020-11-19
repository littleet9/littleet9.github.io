function main() {
	initNav();
}
main();

function preLoadImage(imgURL){
	var img = new Image();
	img.src = imgURL;
}


function initNav(){
	let navs = document.getElementsByTagName('nav');
	
	//Buttons
	let ulNav = document.createElement('ul');
	ulNav.setAttribute('id', 'ulNav');
	let homeButton = document.createElement('button');
		homeButton.appendChild(document.createTextNode("Home"));
		homeButton.setAttribute('id', 'homeButton');
		homeButton.setAttribute('class', 'navButtons');
	ulNav.appendChild(homeButton);
	let aboutButton = document.createElement('button');
		aboutButton.appendChild(document.createTextNode("About"));
		aboutButton.setAttribute('id', 'aboutButton');
		aboutButton.setAttribute('class', 'navButtons');
	ulNav.appendChild(aboutButton);
	let careerButton = document.createElement('button');
		careerButton.appendChild(document.createTextNode("Career"));
		careerButton.setAttribute('id', 'careerButton');
		careerButton.setAttribute('class', 'navButtons');
	ulNav.appendChild(careerButton);
	let socialButton = document.createElement('button');
		socialButton.appendChild(document.createTextNode("Social"));
		socialButton.setAttribute('id', 'socialButton');
		socialButton.setAttribute('class', 'navButtons');
	ulNav.appendChild(socialButton);
	
	//---------------- Links --------------------
	let ulLinks = document.createElement('ul');
	ulLinks.setAttribute('id', 'ulLinks');
	//LinkedIn
	let linkedIn = document.createElement('img');
		linkedIn.setAttribute('id', 'linkedInLink');
		linkedIn.setAttribute('src', '../media/LinkedInLogo.png');
		linkedIn.setAttribute('height', '35%');
		linkedIn.setAttribute('width', '35%');
	let liLinkedIn = document.createElement('li');
	liLinkedIn.appendChild(linkedIn);
	liLinkedIn.style.textAlign = "center";
	ulLinks.appendChild(liLinkedIn);
	//youtube
	let youtube = document.createElement('img');
		youtube.setAttribute('id', 'youtubeLink');
		youtube.setAttribute('src', '../media/youtubeLogo.png');
		youtube.setAttribute('height', '50%');
		youtube.setAttribute('width', '50%');
	let liYoutube = document.createElement('li');
	liYoutube.appendChild(youtube);
	liYoutube.style.textAlign = "center";
	ulLinks.appendChild(liYoutube);
	//Resume
	let resume = document.createElement('img');
		resume.setAttribute('id', 'resumeLink');
		resume.setAttribute('src', '../media/resumeLogo.png');
		resume.setAttribute('height', '35%');
		resume.setAttribute('width', '35%');
		resume.setAttribute('tooltip', 'Resume');
	let liResume = document.createElement('li');
	liResume.appendChild(resume);
	liResume.style.textAlign = "center";
	ulLinks.appendChild(liResume);
	//Contact
	let hrBar = document.createElement('hr');
	hrBar.color = "#FFC857";
	hrBar.style.maxWidth = "100px";
	hrBar.setAttribute('class', 'contact');
	ulLinks.appendChild(hrBar);
	let contact = document.createElement('li');
	contact.innerHTML = "Contact Me"
	contact.setAttribute('class', 'contact');
	ulLinks.appendChild(contact);
	//Phone Number
	let phone = document.createElement('li');
	phone.innerHTML = "(336)709-6309"
	phone.setAttribute('class', 'contact');
	ulLinks.appendChild(phone);
	//Email
	let email = document.createElement('li');
	email.innerHTML = "littleet@appstate.edu"
	email.setAttribute('class', 'contact');
	ulLinks.appendChild(email);

	ulLinks.style.fontSize = "12px";
	ulLinks.style.color = "#5a5a5a";
	ulLinks.style.textAlign = "center";

	//Attach buttons and Links to Nav
	for(let ele of navs){
		ele.appendChild(ulNav);
		ele.appendChild(ulLinks);
		ele.style.minWidth = "120px";
	}
	initNavButtons();
	initNavLinks();
}

function initNavLinks(){
	//LinkedIn
	let linkedIn = document.getElementById('linkedInLink');
	linkedIn.addEventListener('click', ()=>{
		window.open("https://www.linkedin.com/in/ethan-little", '_blank');
	}, false);
	linkedIn.addEventListener('mouseover', ()=>{
		linkedIn.style.cursor = "pointer";
		linkedIn.setAttribute('src', "../media/LinkedInLogoHover.png");
	}, false);
	linkedIn.addEventListener('mouseout', ()=>{
		linkedIn.setAttribute('src', "../media/LinkedInLogo.png");
	}, false);
	//Youtube
	let youtube = document.getElementById('youtubeLink');
	youtube.addEventListener('click', ()=>{
		window.open("https://youtube.com/channel/UCw9QMAMbaJ8FCJEniSyb98g", '_blank');
	}, false);
	youtube.addEventListener('mouseover', ()=>{
		youtube.style.cursor = "pointer";
		youtube.setAttribute('src', "../media/youtubeLogoHover.png");
	}, false);
	youtube.addEventListener('mouseout', ()=>{
		youtube.setAttribute('src', "../media/youtubeLogo.png");
	}, false);
	//Resume
	let resume = document.getElementById('resumeLink');
	resume.addEventListener('click', ()=>{
		window.open("../media/Resume2020.pdf", '_blank');
	}, false);
	resume.addEventListener('mouseover', ()=>{
		resume.style.cursor = "pointer";
		resume.setAttribute('src', "../media/resumeLogoHover.png");
	}, false);
	resume.addEventListener('mouseout', ()=>{
		resume.setAttribute('src', "../media/resumeLogo.png");
	}, false);
	//Sytles
	let ulLinks = document.getElementById('ulLinks');
	//ulLinks.style.padding = "5px 5px 5px 5px";
	ulLinks.style.borderTopWidth = "0px";
	ulLinks.style.borderBottomWidth = "0px"
	ulLinks.style.borderLeftWidth = "0px";
	ulLinks.style.borderRightWidth = "0px";
	ulLinks.style.borderStyle = "solid";
	ulLinks.style.borderColor = "#5a5a5a";
	let liLinks = document.querySelectorAll('#ulLinks li');
	for(let ele of liLinks){
		ele.style.padding = "5px 5px 5px 5px";
	}
}

function initNavButtons(){
	let ulNav = document.getElementById("ulNav");
	/*ulNav.style.margin = "20em 10px 0px 2px";*/
	let buttons = document.getElementsByClassName('navButtons');
	let whatpage = document.getElementsByTagName('body');

	for(let ele of buttons){
		ele.style.width = "100%";
		ele.style.height = "40px";
		ele.style.margin = "5px 5px 5px 0px";
		ele.style.border = "0px solid #5a5a5a";
		ele.style.fontWeight = "bold";
		let backgroundColor = "black";
		let hoverColor = "#aaaaaa";
		ele.style.backgroundColor = backgroundColor;
		switch(whatpage[0].getAttribute('id')){
			case('homePage'):
				if(ele.getAttribute('id') == 'homeButton'){
					ele.style.border = "0px solid white";
					ele.style.backgroundColor = hoverColor;
				}
				break;
			case('aboutPage'):
				if(ele.getAttribute('id') == 'aboutButton'){
					ele.style.border = "0px solid white";
					ele.style.backgroundColor = hoverColor;
				}
				break;
			case('careerPage'):
				if(ele.getAttribute('id') == 'careerButton'){
					ele.style.border = "0px solid white";
					ele.style.backgroundColor = hoverColor;
				}
				break;
			case('socialPage'):
				if(ele.getAttribute('id') == 'socialButton'){
					ele.style.border = "0px solid white";
					ele.style.backgroundColor = hoverColor;
				}
				break;
		}
		ele.style.borderTopWidth = "2px";
		ele.style.borderBottomWidth = "2px";
		ele.style.color = "#DB3A34";
		ele.style.fontSize = "20px"
		ele.addEventListener('mouseover', ()=>{
			ele.style.cursor = "pointer";
			ele.style.backgroundColor = hoverColor;
		}, false);
		ele.addEventListener('mouseout', ()=>{
			if(ele.style.borderColor != "white")
				ele.style.backgroundColor = backgroundColor;
		}, false);
		switch(ele.getAttribute('id')){
			case('homeButton'):
				ele.addEventListener('click', ()=>{
					window.location.href = "index.html";
				}, false);
				break;
			case('aboutButton'):
				ele.addEventListener('click', ()=>{
					preLoadImage("../media/mountainrange.png");
					window.location.href = "about.html";
				}, false);
				break;
			case('careerButton'):
				ele.addEventListener('click', ()=>{
					preLoadImage("../media/LakeBrandtSunset.png");
					window.location.href = "career.html";
				}, false);
				break;
			case('socialButton'):
				ele.addEventListener('click', ()=>{
					window.location.href = "social.html";
				}, false);
				break;
		}
	}

}

















