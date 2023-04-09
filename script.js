function acceptQuest(){
    let x = document.getElementById("qAccept");
			x.currentTime = 0;
	var camView = document.querySelector('#camera');
	var qAccepted = document.createElement("a-image");
	qAccepted.setAttribute('id', 'qAccept');
	qAccepted.setAttribute('src', '#acceptImg');
	qAccepted.setAttribute('position', '0., 0.5, -0.85');
	qAccepted.setAttribute('width', '1');
	qAccepted.setAttribute('height', '0.281');
	qAccepted.setAttribute('material', 'shader: flat');
	qAccepted.setAttribute('animation', {property: 'position', to: {x: 0, y: 0.5, z: -1.05}, dur: 350, easing: 'linear'});
			x.play();
			// var w = window.open('', '_blank');			//new tab takes over focus, need to find a way to open forms after delay
			// let expires = new Date().getTime() + (60 * 1000);
			// document.cookie = `status=returnee; expires=${new Date(expires).toUTCString()}`;			//turn this back on on event day, set to 2*24*60*60*1000 (2 days)
			x.onended = function(){							//have to drop, reusing the old replace current window
				openForms();
			};
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
	// window.open('https://www.youtube.com', '_blank', 'noopener');
	// open.location = "https://www.youtube.com";
	// open.focus();
}

function startQ(){
	var scene = document.querySelector('a-scene');
	scene.setAttribute('NPCMove', '');
	var delThis = document.querySelector('#butt');
	scene.removeChild(delThis);
	document.querySelector('#followText').setAttribute('visible', true);
	scene.setAttribute('shake', '');
}

function dialogueStart(){
	var camView = document.querySelector('#camera');
	var textBox = document.createElement("a-image");
	var bgTouch = document.querySelector('a-sky');
	var touchNPC = document.querySelector('#NPC');

	textBox.setAttribute('diaLogic', '');
	textBox.setAttribute('class', 'raycastable');
	textBox.setAttribute('id', 'dialogue');
	textBox.setAttribute('src', '#tb1');
	textBox.setAttribute('position', '0.03, -0.45, -1.05');
	textBox.setAttribute('width', '1');
	textBox.setAttribute('height', '0.279');
	textBox.setAttribute('material', 'shader: flat');

	camView.appendChild(textBox);
	bgTouch.setAttribute('diaLogic', '');
	bgTouch.setAttribute('class', 'raycastable');
	touchNPC.setAttribute('diaLogic', '');
	touchNPC.setAttribute('class', 'raycastable');
}