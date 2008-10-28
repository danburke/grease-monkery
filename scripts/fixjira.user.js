// ==UserScript==
// @name           Fix Jira
// @namespace      http://github.com/danburke/
// @include        http://bugtrack.riverdeep.net/browse/EDSFT-*
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

	// Add a comment form to the left column on view issue
	var id = $("input[type=hidden]").attr("value");
	var commentForm='<tr><td><img height="8" width="8" border="0" align="absmiddle" src="/images/icons/bullet_creme.gif"/><b>Comment</b>:<br/><form action="/secure/AddComment.jspa" method="post" name="jiraform" ><textarea name="comment" id="comment" rows="10" wrap="virtual" cols="" class="textarea"></textarea><input id="id" name="id" value="'+id+'" type="hidden"/><input name="Add " value="Add " accesskey="S" title="Press Alt+S to submit form" class="spaced" type="submit"/></form><br/></td></tr>';
	$("#operationsSection tbody").children(":last-child").after(commentForm);

	// Add an issue link before  the description, makes it easier to copy and paste into emails etc.
	$("b a:contains('"+issuePrefix+"')").clone().css("font-size","15px").css("text-decoration","none").insertAfter("h3 img[@src=/images/icons/link_out_bot.gif]")

	// Make attachment links open in  a new tab
	$("a[href*=attachment]").attr("target","_blank");
}

	






    













	
  

