var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")){
    	var pos = 70;
		var id = setInterval(frame, 0.5);
		var elem = document.getElementById("main_container");
		function frame() {
			if (pos >= 270) {
				clearInterval(id);
			} else {
			pos = pos+3.8;
			elem.style.paddingTop = pos + 'px';
			}
		}
    } else{
    	var pos = 270;
		var id = setInterval(frame, 0.5);
		var elem = document.getElementById("main_container");
		function frame() {
			if (pos <= 70) {
				clearInterval(id);
			} else {
			pos = pos-3.8;
			elem.style.paddingTop = pos + 'px';
			}
		}
    }
 });