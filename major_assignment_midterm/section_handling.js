/*make other sections invisible first thing
then when a section is clicked, make it visible and siblings invisible*/
var home_div = document.getElementById("home");
var me_div = document.getElementById("me");
var projects_div = document.getElementById("projects");
var notsosoon_div = document.getElementById("notsosoon");
var contact_div = document.getElementById("contact");
var navbar_list = document.getElementsByClassName("navbar");
var navbar=navbar_list[0];

function show_none(){
	me_div.style.display='none';
	projects_div.style.display='none';
	notsosoon_div.style.display='none';
	contact_div.style.display='none';
	home_div.style.display='none';
}

function show_home(){
	show_none();
	home_div.style.display='block';
	navbar.style.backgroundImage="";
	navbar.style.backgroundSize = 'cover';
}

function show_me(){
	show_none();
	me_div.style.display='block';
	navbar.style.backgroundImage="url('../images/p_b_02.png')";
	navbar.style.backgroundSize = 'cover';
}

function show_projects(){
	show_none();
	projects_div.style.display='block';
	navbar.style.backgroundImage="url('../images/p_b_02.png')";
	navbar.style.backgroundSize = 'cover';
}

function show_nss(){
	show_none();
	notsosoon_div.style.display='block';
	navbar.style.backgroundImage="url('../images/p_b_02.png')";
	navbar.style.backgroundSize = 'cover';
}

function show_contact(){
	show_none();
	contact_div.style.display='block';
	navbar.style.backgroundImage="url('../images/p_b_02.png')";
	navbar.style.backgroundSize = 'cover';
}

function click_id(id){
	document.getElementById(id).click();
	setTimeout(function () {
        var canSee = $("#hamburger_button").is(":visible");
		if (canSee){
			document.getElementById("hamburger_button").click();
		}
    }, 1000);
}

click_id("homenav");
/*no more buttons please*/