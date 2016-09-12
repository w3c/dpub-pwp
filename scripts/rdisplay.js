/**
*
* Note: T
*    The code for the popup was shamelessly stolen (with his permission:-) from Shane McCarron
*    The code for setting and numbering a requirement is based on the requirement.js code in respec
*
**/

/* jshint shadow: true, unused: false, laxbreak:true, laxcomma:true, asi: true, eqeqeq: false, strict: implied, jquery: true */
/* global $, require */

function rdisplay() {
	ucrUri = respecConfig.ucrUri === undefined ? "" : respecConfig.ucrUri ;
	$(".req-ref,.req-ref-full").each(function(i) {
		var id = $(this).attr("href");
		var $ref = $(this);
		reqInfo.forEach( function(element, index, array) {
			if( ('#' + element.id) === id ) {
				$ref.attr("href", ucrUri + id)
				if($ref.hasClass('req-ref-full')) {
					$ref.append(element.title + ": " + element.content);
				} else {
					$ref.append(element.title)
				}
			}
		});
	});

	// Generate the table of requirements
	$("table#reqtable").each( function(i) {
		var $table = $(this);
		$("table#reqtable tbody").each( function(i) {
			var $table = $(this);
		});
		reqInfo.forEach( function(element, index, array) {
			// Add a new table row to the table itself
			var $row = $("<tr></tr>");
			$table.append($row);

			cellref = $("<td></td>");
			$row.append(cellref)
			reqref = $("<a></a>");
			cellref.append(reqref);
			reqref.attr("href", ucrUri + "#" + element.id);
			reqref.append(element.title)

			celltitle = $("<td></td>");
			$row.append(celltitle);
			celltitle.append(element.content);
		})
	});

	// // Generate the table of requirements
	// $("table#reqtable, tbody#reqtable").each( function(i) {
	// 	var $table = $(this);
	// 	reqInfo.forEach( function(element, index, array) {
	// 		// Add a new table row to the table itself
	// 		var $row = $("<tr></tr>");
	// 		$table.append($row);
	//
	// 		cellref = $("<td></td>");
	// 		$row.append(cellref)
	// 		reqref = $("<a></a>");
	// 		cellref.append(reqref);
	// 		reqref.attr("href", ucrUri + "#" + element.id);
	// 		reqref.append(element.title)
	//
	// 		celltitle = $("<td></td>");
	// 		$row.append(celltitle);
	// 		celltitle.append(element.content);
	// 	})
	// });

	$("ul#reclist, ol#reclist").each( function(i) {
		var $list = $(this);
		reqInfo.forEach( function(element, index, array){
			var $li = $("<li></li>");
			$list.append($li);

			$a = $("<a></a>");
			$li.append($a);
			$a.attr("href", ucrUri + '#' + element.id);
			$a.append(element.title)

			$span = $("<span></span>");
			$li.append($span);
			$span.append(": " + element.content)
		})
	})
}

require(["core/pubsubhub"], function(respecEvents) {
	// respecEvents.sub("start-all", function() {
	// });
});
