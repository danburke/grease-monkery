// ==UserScript==
// @name           Fix Jira
// @namespace      http://github.com/danburke/
// @include        http://jira/browse/*
// ==/UserScript==

// update this above in the @include section
var issuePrefix = "EDSFT";	

// Add jQuery
var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

var GM_JQ_UI = document.createElement('script');
GM_JQ_UI.src = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.5.2/jquery-ui.min.js';
GM_JQ_UI.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ_UI);
// Check if jQuery's loaded
function GM_wait() {
	if(typeof unsafeWindow.jQuery == 'undefined'|| unsafeWindow.jQuery.resizeable == 'undefined' ) { 
		window.setTimeout(GM_wait,100); 
	}else { 
		$ = unsafeWindow.jQuery; runCode(); 
	}
}
GM_wait();

// All your GM code must be inside this function
function runCode() {



	// Add an issue link before  the description, makes it easier to copy and paste into emails etc.
	$("b a:contains('"+issuePrefix+"')").clone().css("font-size","15px").css("text-decoration","none").insertAfter("h3 img[@src=/images/icons/link_out_bot.gif]")

	// Make attachment links open in  a new tab
	$("a[href*=attachment]").attr("target","_blank");
}

	






    













	
  

