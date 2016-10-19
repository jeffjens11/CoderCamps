/*
var ul = document.getElementById("list");
var li = ul.getElementsByTagName("li");



for (var i = 0; i<li.length; i++){
	li[i].className = "checked";
}

Add an external JavaScript file that adds a CSS class to the label for the checkbox when the checkbox is checked, and removes the class when the checkbox is unchecked. The CSS class should apply the style text-decoration: line-through;

*/


var chk1 = document.getElementById("box1");
var chk2 = document.getElementById("box2");
var chk3 = document.getElementById("box3");
var chk4 = document.getElementById("box4");

chk2.addEventListener('click', function(){
	addClass(chk2);
});
chk3.addEventListener('click', function(){
	addClass(chk3);
});
chk1.addEventListener('click', function(){
	addClass(chk1);
});
chk4.addEventListener('click', function(){
	addClass(chk4);
});

function addClass(chk){
	if(chk.checked){
		chk.className = "checked";
	}else{
		chk.className = "notChecked";
	}
}

