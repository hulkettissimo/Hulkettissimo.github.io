

function show_alert()	{
	alert("WOF!"); 
	
	}
	
function get_hulk() 
{
	// raccolta degli input
	
	var name_js = document.getElementById("name");
	var name = name_js.value;
	
	var birthyear_js = document.getElementById("birthyear");
	var birthyear = birthyear_js.value;
	
	var color_js = document.getElementById("favourite_color");
	var color = color_js.value;
	
	// elaborazione dei dati 
	
	var hulk = (name_js.value.length + color_js.value.length + birthyear_js.value.length) % 8;	

	var get_hulk=""
	
		if (hulk==0) {												
			get_hulk = "troubled_hulk.html";
		} else if (hulk==1) {
			get_hulk = "busy_hulk.html";
		} else if (hulk==2) {
			get_hulk = "graduated_hulk.html";
		}else if (hulk==3) {
			get_hulk = "revolutionary_hulk.html";
		} else if (hulk==4) {
			get_hulk = "sexy_hulk.html";
		} else if (hulk==5) {
			get_hulk = "hungry_hulk.html";
		} else if (hulk =6) {
			get_hulk = "smart_hulk.html";
		} else if (hulk==7) {
		get_hulk = "alcoholic_hulk.html";
		} 
	
	// output
	
	var get_hulk= window.open(get_hulk);
		
	}
	
function mouse_in()		{ 
	var scopri_quale_hulk_sei_js = document.getElementById("Clicca qui!");
	
		scopri_quale_hulk_sei_js.style.backgroundColor="#E1AFE1";
		
		}

function mouse_out()	{ 
	var scopri_quale_hulk_sei_js = document.getElementById("Clicca qui!");
	
		scopri_quale_hulk_sei_js.style.backgroundColor="";
		
		}
		
