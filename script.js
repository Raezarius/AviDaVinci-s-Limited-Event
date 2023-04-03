function acceptQuest(){
    let x = document.getElementById("qAccept");
			x.currentTime = 0;
			x.play();
}

function declineQuest(){
    let x = document.getElementById("qDecline");
			x.currentTime = 0;
			x.play();
}

function mOverSFX(){
	document.getElementById("mOver").volume = 0.25;
    let x = document.getElementById("mOver");
			x.currentTime = 0;
			x.play();
}

function buttAccept(){
	let x = document.getElementById("buttClick");
			x.currentTime = 0;
			x.play();
}

function congrats(){
	let x = document.getElementById("qComplete");
			x.currentTime = 0;
			x.play();
}

function openWindow(){
	let x = document.getElementById("oWindow");
			x.currentTime = 0;
			x.play();
}

function compAcquisition(){
	let a = document.querySelector("#accept");
	let d = document.querySelector("#decline");

	a.setAttribute("accept", '');
	d.setAttribute("decline", '');
}

function compRemoval(){
	let a = document.querySelector("#accept");
	let d = document.querySelector("#decline");

	a.removeAttribute("accept");
	d.removeAttribute("decline");
}

function openForms(){
	window.location.href = "https://www.youtube.com";
}

function startQ(){
	var scene = document.querySelector('a-scene');
	scene.setAttribute('NPCMove', '');
	var delThis = document.querySelector('#butt');
	scene.removeChild(delThis);
	document.querySelector('#followText').setAttribute('visible', true);
}