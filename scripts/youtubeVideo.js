function main() {
	initYTVideos();
}
main();

function initYTVideos(){
	console.log("hi2");
	let YTs = document.getElementsByTagName("iframe");
	for(let ele of YTs){
		ele.style.visibility = "hidden";
		ele.style.listStyleType = "none";
	}

}





