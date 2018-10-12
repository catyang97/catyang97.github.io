// main js file

// variables

// for "other" page 
var idArrayOth = ["mask", "bird", "game"];
var modalArrayOth = ["myModal-0-oth", "myModal-1-oth", "myModal-2-oth"];
var closeArrayOth = ["close0-oth", "close1-oth", "close2-oth"];


// CODING POP UPS 
var idArrayCode = ["code-proj-1", "code-proj-2", "code-proj-3", "code-proj-4", "code-proj-5", "code-proj-6", 
"code-proj-7", "code-proj-8", "code-proj-9", "code-proj-10"];
var modalArrayCode = ["myModal-1-code", "myModal-2-code", "myModal-3-code", "myModal-4-code", "myModal-5-code", 
"myModal-6-code","myModal-7-code", "myModal-8-code", "myModal-9-code", "myModal-10-code"];
var closeArrayCode = ["close1-code", "close2-code", "close3-code", "close4-code", "close5-code", "close6-code", 
"close7-code", "close8-code", "close9-code", "close10-code"];

// functions 
function getModals(x, y, z) {
	var modal = document.getElementById(x);
	var btn = document.getElementById(y);
	var span = document.getElementById(z);
	if (btn != null && span != null) {
			btn.onclick = function() {
		    modal.style.display = "block";
		}
		 span.onclick = function() {
		    modal.style.display = "none";
		}
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
	}
}

// display images in art.html
$(document).ready(function(){
	for (var i = 0; i < idArrayTrad.length; i++) {
		getModals(modalArrayTrad[i], idArrayTrad[i], closeArrayTrad[i]);
	};

	for (var j = 0; j < idArrayPerc.length; j++) {
		getModals(modalArrayPerc[j], idArrayPerc[j], closeArrayPerc[j]);
	};

	for (var k = 0; k < idArrayDes.length; k++) {
		getModals(modalArrayDes[k], idArrayDes[k], closeArrayDes[k]);
	};

	for (var q = 0; q < idArrayOth.length; q++) {
		getModals(modalArrayOth[q], idArrayOth[q], closeArrayOth[q]);
	};

	for (var r = 0; r < idArray3D.length; r++) {
		getModals(modalArray3D[r], idArray3D[r], closeArray3D[r]);
	};

	// CODE MODALS
	for (var v = 0; v < idArrayCode.length; v++) {
		getModals(modalArrayCode[v], idArrayCode[v], closeArrayCode[v]);
	}

		for (var v = 0; v < idArrayCode.length; v++) {
		getModals(modalArrayPhoto[v], idArrayPhoto[v], closeArrayPhoto[v]);
	}
}); 

// fade transitions
$(document).ready(function(){
    $("#first-page").fadeIn(800);
    $("#first-page-opt").fadeIn(1800);
    $(".top-container").fadeIn();
    $(".info-container").fadeIn(700);

    $("#threed").fadeIn(400);
    $("#design").fadeIn(500);
    $("#traditional").fadeIn(600);
    $("#gallery-perc").fadeIn(700);
    $("#photograph").fadeIn(800);
    $("#other").fadeIn(900);

    $("#code-proj-10").fadeIn(400); 
    $("#code-proj-9").fadeIn(400); 
    $("#code-proj-8").fadeIn(600); 
    $("#code-proj-7").fadeIn(600); 
    $("#code-proj-6").fadeIn(800); 
    $("#code-proj-5").fadeIn(800); 
    $("#code-proj-4").fadeIn(1000); 
    $("#code-proj-3").fadeIn(1000); 
    $("#code-proj-2").fadeIn(1200); 
    $("#code-proj-1").fadeIn(1200); 

	$("a.options").click(function(event){
	        event.preventDefault();
	        linkLoc = this.href;
	        $("body").fadeOut(200, redirectPage);      
	    });	         
	    function redirectPage() {
	        window.location = linkLoc;
	    }

	$("a.art-options").click(function(event){
	        event.preventDefault();
	        linkLoc = this.href;
	        $("body").fadeOut(200, redirectPage);      
	    });	         
	    function redirectPage() {
	        window.location = linkLoc;
	    }
});