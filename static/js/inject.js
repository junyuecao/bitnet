
$(function(){

	var table = $(document.body.children[3]);
	var head = table.find("tr").eq(3).find(":first");
	$('<td class="maintd">所在区域</td>').insertAfter(head);
	var tr = table.find("tr :gt(3)").not(":last");
	var ips = [];//本页的ip列表
	tr.each(function(i,e){
		ips.push($(this).find(":first").text());
	});
	var url = chrome.extension.getURL("/ipdata.dat");
	chrome.extension.sendMessage({message: "get_ipmap","ips":ips}, function(response) {
		var ipmap = response.ipmap;
		tr.each(function(i,e){
			var firstTd = $(e).find(":first");
			$('<td class="maintd">'+ipmap[firstTd.text()]+'</td>').insertAfter(firstTd);
		});
	});

});
