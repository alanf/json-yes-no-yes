var $ = goog.dom.$;
var $$ = goog.dom.$$;

main_action = function(event) {
	// delete the old stuff
	event.preventDefault();
	goog.array.forEach($$('body'), function (body) {
		goog.dom.removeChildren(body);	
	});

	var prev = event.target.id.split('-')[1];
	var name = event.target.id.split('-')[2];
	new_rules = rules[name];

	i = 0, j = 0;
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

			// pull out the text and links
			text = rule['content'].split(']]');
				
			goog.array.forEach(text, function(fragment) {
				text_content = fragment.split('[[')[0];
				goog.dom.appendChild(new_element, goog.dom.createTextNode(text_content));

				// make a new a element and append it if there is one
				if (fragment.split('[[').length > 1) {
					link_content =  fragment.split('[[')[1].split('|');
					href = link_content[0];
					link_text  = link_content[1];
					link_element = goog.dom.createDom('a', {'href': '', 'id': 'text-'+name+'-'+href+'-'+j}, link_text);
					goog.dom.appendChild(new_element, link_element);
					goog.events.listen(link_element, goog.events.EventType.CLICK, main_action, false, this);
				}
			});
			j += 1;
		}

		var style = '';
		// set the position
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

	// DEBUGGING
	debug_back_link = goog.dom.createDom('a', {'href': '', 'id': 'debug-'+prev+'-'+prev}, 'go back');
	goog.array.forEach($$('body'), function (body) {
		body.appendChild(debug_back_link);	
	});
	goog.events.listen(debug_back_link, goog.events.EventType.CLICK, main_action, false, this);
};

goog.array.forEach($$('img'), function (element) {
	goog.events.listen(element, goog.events.EventType.CLICK, main_action, false, this);
});
