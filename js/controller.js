var $ = goog.dom.$;
var $$ = goog.dom.$$;

main_action = function(event) {
	// delete the old stuff
	goog.dom.removeNode(event.target);
	goog.array.forEach($$('p'), function (p_el) {
		goog.dom.removeNode(p_el);
	});

	var name = event.target.id.split('-')[1];
	new_rules = rules[name];

	goog.array.forEach(new_rules, function (rule) {
		//hide this element
		var new_element = null;
		if (rule['type'] == 'image') {
			// create an img element
			new_element = goog.dom.createDom('img', {'src': 'images/'+rule['content'], 'id': 'image-'+rule['next']});
			// listen to image clicks
			goog.events.listen(new_element, goog.events.EventType.CLICK, main_action, false, this);
		} else if (rule['type'] == 'text') {
			//create a p element
			new_element = goog.dom.createDom('p', {'id': 'image-'+rule['next']}, rule['content']);
		}

		// set the position
		style = 'position: absolute; left:' + rule['position']['x'] + 'px; top: ' + rule['position']['y'] + 'px;'; 
		goog.dom.setProperties(new_element, {'style': style})

		// put the element in the page
		goog.array.forEach($$('body'), function (body) {
			body.appendChild(new_element);	
		});
	});
};

goog.array.forEach($$('img'), function (element) {
	goog.events.listen(element, goog.events.EventType.CLICK, main_action, false, this);
});
