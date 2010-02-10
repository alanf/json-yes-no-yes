var $ = goog.dom.$;
var $$ = goog.dom.$$;

main_action = function(event) {
	// delete the old stuff
	goog.array.forEach($$('body'), function (body) {
		goog.dom.removeChildren(body);	
	});

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
			new_element = goog.dom.createDom('p', {'id': 'text'+'-'+name+'-'+rule['next']+'-'+j}, rule['content']);
			j += 1;
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
