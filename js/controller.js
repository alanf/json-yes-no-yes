// hacked out in no time flat by alan fineberg 
// c 2010
// www.alanfineberg.com
var $ = goog.dom.$;
var $$ = goog.dom.$$;

main_action = function(event) {
	event.preventDefault();
	// delete everything from the page
	goog.array.forEach($$('body'), function (body) {
		goog.dom.removeChildren(body);	
	});

	// the previous and next targets
	var prev = event.target.id.split('-')[1];
	var name = event.target.id.split('-')[2];
	var new_rules = rules[name];

	// these counter variables keep our ids unique
	var i = 0;
	var j = 0;
	goog.array.forEach(new_rules, function (rule) {
		//hide this element
		var new_element = null;
		if (rule['type'] == 'image') {
			// create an img element
			new_element = goog.dom.createDom('img', {'src': 'images/'+rule['content'], 'id': 'image-'+name+'-'+rule['next']+'-'+i});
			// listen to image clicks
			goog.events.listen(new_element, goog.events.EventType.CLICK, main_action, false, this);
			i += 1;
		} else if (rule['type'] == 'text') {
			//create a p element
			new_element = goog.dom.createDom('p', {'id': 'text'+'-'+name+'-'+rule['next']+'-'+j});

			// pull out the text and links, the format for a link is [[target|text]]
			var text = rule['content'].split(']]');
				
			var k = 0;
			// There could be multiple links present
			goog.array.forEach(text, function(fragment) {
				var text_content = fragment.split('[[')[0];
				goog.dom.appendChild(new_element, goog.dom.createTextNode(text_content));

				// make a new a element and append it if there is one 
				if (fragment.split('[[').length > 1) {
					var link_content =  fragment.split('[[')[1].split('|');
					var href = link_content[0];
					var link_text  = link_content[1];
					var link_element = goog.dom.createDom('a', {'href': '', 'id': 'text-'+name+'-'+href+'-'+j+'-'+k}, link_text);
					goog.dom.appendChild(new_element, link_element);
					goog.events.listen(link_element, goog.events.EventType.CLICK, main_action, false, this);
				}
			});
			j += 1;
		}

		// set all the inline style properties.
		var style = '';
		if (rule['position']) {
			style += 'position: absolute; left:' + rule['position']['x'] + '; top: ' + rule['position']['y'] + ';'; 
		}
		if (rule['width'] && goog.string.trim(rule['width'])) {
			style += 'width: ' + rule['width'];
		}
		if (style) {
			goog.dom.setProperties(new_element, {'style': style});
		}

		// put the element in the page
		goog.array.forEach($$('body'), function (body) {
			body.appendChild(new_element);	
		});
	});

	// These links are always present on the page
	var debug_back_link = goog.dom.createDom('a', {'href': '', 'id': 'debug-'+prev+'-'+prev}, 'go back');
	var start_link = goog.dom.createDom('a', {'href': '', 'id': 'home-start-start'}, 'home');
	goog.array.forEach([debug_back_link, start_link], function (link) {
		goog.array.forEach($$('body'), function (body) {
			body.appendChild(link);	
			goog.events.listen(link, goog.events.EventType.CLICK, main_action, false, this);
		});
	});
};

goog.array.forEach($$('img'), function (element) {
	goog.events.listen(element, goog.events.EventType.CLICK, main_action, false, this);
});
