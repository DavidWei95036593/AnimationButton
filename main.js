function changeSize(element){
	let elementClass = element.className;
	if(elementClass.match("wide")){
		element.className = elementClass.replace(" wide","");
	}else{
		element.className +=" wide";
	}
}


function closeSize(element){
	let X = element.className;
	if(X.match("wide")){
		element.className = X.replace(" wide","");

	}else{
		element.className +=" wide";
	}
}

function ajustinner(element){
	let inner = element.className;
	if(inner.match(" ajust")){
		element.className == inner.replace(" ajust","");
	}else{
		element.className +=" ajust"
	}
}


//diver code
let X = document.querySelector("#close");
X.addEventListener("click",function(){
		closeSize(box1);
})


let button1 = document.querySelector(".button1");
let box1 = document.querySelector(".box1");
button1.addEventListener("click",function(){
	changeSize(box1);
})