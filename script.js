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

function openForms(){
	window.location.href = "https://www.youtube.com";
}

const volSet = function setVol(){
	document.getElementById("mOver").volume = 0.45;
}