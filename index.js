//move button
let counter = 0, count = 0;
function randint(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function moveButton() {
	let button = document.getElementById("button");
	button.style.top = randint(20, 80).toString() + "%";
	button.style.left = randint(20, 80).toString() + "%";
	counter++;
    count++;
	document.getElementById("counter").innerHTML = counter;
}

//timer
let a;
let time = 30;
function timer(){
    time--;
	document.getElementById("timer").innerHTML = time;
	if (time < 0){
		clearInterval(a);
		end();
	}
}

//show/hide elements
function game(){
    document.getElementById("menu").style.display = "none";
    a = setInterval(timer, 1000);
    document.getElementById("game").style.display = "block";
}

function end(){
    document.getElementById("game").style.display = "none";
    document.getElementById("end").style.display = "block";
    time = 30; 
    document.getElementById("timer").innerHTML = time;
    document.getElementById("count").innerHTML = count;
}

function menu(){
    counter = 0; count = 0;
    document.getElementById("count").innerHTML = count;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("end").style.display = "none";
    document.getElementById("menu").style.display = "block";
}