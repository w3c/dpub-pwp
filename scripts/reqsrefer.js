/**
* Collect the external requirement references. This relies on the corresponding UCR to generate (via the reqscollect.js script) the reqInfo.js file.
*
* In the text, an element of the form
*
*    <a data-reqref="id"></a>
*
* Should be used to identify the requirement (this value can be looked up in the reqInfo.js file, for example). This will be replaced by
*
*    <a href="URIUCR#id">Req. 1</a>
*
* If, additionally, the element has the class 'fullReqRef', the full requirement description will be added to the text.
*
* To use it
*   - set the URI for the UCR document in the ucrdoc variable below
*   - add <script src="scripts/reqInfo.js" class="remove"></script> to the file generated from the UCR
*   - add <script src="scripts/reqsrefer.js" class="remove"></script>
*
**/

/* jshint shadow: true, unused: false, laxbreak:true, laxcomma:true, asi: true, eqeqeq: false, strict: implied, jquery: true */
/* global $, require */

var ucrdoc = "https://www.w3.org/TR/dpub-ucr/";

require(["core/pubsubhub"], function(respecEvents) {
	respecEvents.sub("start-all", function() {
		// Collect the necessary information on the various requirement entries right at the start...
		$("a[data-reqref]").each(function(i) {
			var id = $(this).data('reqref');
			var $ref = $(this);
			reqInfo.forEach( function(element, index, array) {
				if( element.id === id ) {
					// alert("Bingo " + id)
					$ref.attr("href", ucrdoc + '#' + id);
					$ref.removeAttr("data-reqref");
					if( $ref.hasClass('fullReqRef') ) {
						$ref.text(element.title + ": " + element.content);
					} else {
						$ref.text(element.title);
					}
				}
			});
		});
	});
});
