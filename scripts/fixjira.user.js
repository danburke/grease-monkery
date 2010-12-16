// ==UserScript==
// @name		Fix Jira
// @namespace	http://github.com/danburke/
// @include		http://jira.hmhpub.com/browse/*
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js
// @require		http://datejs.googlecode.com/files/date.js
// ==/UserScript==
(function() {
	// Make attachment links open in  a new tab
	$("a[href*=attachment]").attr("target","_blank");
		
	// Add a link to view the source for an issue
	var issueKeyMatcher = new RegExp("^\/browse\/(.*)$");
	var fisheyeProject = "TXLA-Application";
	var m = issueKeyMatcher .exec(document.location.pathname);
	if(m){
		var issueKey = m[1];
		$("#operationsSection tr:last").after(
			"<tr><td class='lazyOperation'><img width='8' height='8' border='0' align='absmiddle' alt='' src='/images/icons/bullet_creme.gif'><b> <a id='action_id_2' title='View the Source for this issue in Fisheye' href='https://dubsvn.hmco.com/fisheye/search/"+fisheyeProject+"/?comment="+issueKey+"' target='_blank'>View Source</a></b></td></tr>"
		);
	}
	
	
	// Add a timezone aware timestamp to issues. 
	var re = new RegExp(".*(\\d\\d:\\d\\d [AP]M).*", "g");
	$('.date').each(function(i){
		var old = $(this).html();
		var matches = re.exec(old);
		if(matches){
			d = Date.parseExact(matches[1], "hh:mm tt");
			console.log(matches[1]);
			if(d){
				console.log(d);
				// Change this for your timezone difference from the Jira server. 
				d = d.add({hours:5});
				console.log(d);
				$(this).text(old + " (" + d.toString("HH:mm tt IST")  +")");
			}
		}
	});
	
	// Make external links open in a new tab
	$("a").filter("a[href^='http://']").not("a[href^='http://jira.hmhpub.com/']").attr("target", "_blank"); 
	
	// Identify new tab links
	$("a[target=_blank]").css({'text-decoration':'none', 'border-bottom':'1px dashed black'}) ;
}());

