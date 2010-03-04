// hacked out in no time flat by alan fineberg 
// c 2010
// www.alanfineberg.com
var $ = goog.dom.$;
var $$ = goog.dom.$$;

main_action = function(event) {
	event.preventDefault();
	// the previous and next targets
	var prev = event.target.id.split('-')[1];
	var name = event.target.id.split('-')[2];
	var new_rules = rules[name];
	if (!new_rules) {
		return;
	}

	// delete everything from the page
	goog.dom.removeChildren($('main-body'));	

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
			goog.events.listen(new_element, goog.events.EventType.CLICK, main_action, false, this);

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
					k += 1;
				}
			});
			j += 1;
		} else if (rule['type'] == 'video') {
			new_element = goog.dom.createDom('object', {
				'id': 'video'+'-'+name+'-'+rule['next']+'-'+j,
				'width': rule['width'],
				'height': rule['height'],
				'data': 'video/' + rule['content'],
				'type': 'video/quicktime'}
			);
			new_element.appendChild(goog.dom.createDom('param', {'value': false, 'name': 'controller'}));
			goog.events.listen(new_element, goog.events.EventType.CLICK, main_action, false, this);
		}

		// set all the inline style properties.
		var style = '';
		if (rule['position']) {
			style += 'position: absolute; left:' + rule['position']['x'] + '; top: ' + rule['position']['y'] + ';'; 
		}

		goog.array.forEach(['width', 'color'], function (css_rule) {
			if (rule[css_rule] && goog.string.trim(rule[css_rule])) {
				style += css_rule + ': ' + rule[css_rule];
			}
		});
		if (style) {
			goog.dom.setProperties(new_element, {'style': style});
		}
		var class_name = '';
		if (rule['next']) {
			class_name += ' has-next ';
		}
		class_name += name +  ' ' + rule['type'];
		goog.dom.setProperties(new_element, {'class': goog.string.trim(class_name)});

		// put the element in the page
		$('main-body').appendChild(new_element);	
	});

	// These links are always present on the page
	var debug_back_img = goog.dom.createDom('img', {'src': 'images/back.jpg', 'id': 'debug-'+prev+'-'+prev});
	var start_img = goog.dom.createDom('img', {'src': 'images/home.jpg', 'id': 'home-start-start'});
	goog.array.forEach([debug_back_img, start_img], function (link) {
		$('main-body').appendChild(link);	
		goog.events.listen(link, goog.events.EventType.CLICK, main_action, false, this);
	});
	var debug_input = goog.dom.createDom('input', {'type': 'text', 'id': 'debug-input'});
	$('main-body').appendChild(debug_input);	
	goog.events.listen(debug_input, goog.events.EventType.KEYUP, alter_debug_jump_link, false, this);
};

alter_debug_jump_link = function(event) {
	event.preventDefault();
	// just remove the old link if there is one, rather than change it in place
	goog.array.forEach($$('a', 'debug-jump-link'), function (link) {
		goog.dom.removeNode(link);
	});

	var target = $('debug-input').value;
	var debug_jump_link = goog.dom.createDom('a', {'href': '', 'id': 'debug-start-'+ target, 'class': 'debug-jump-link'}, 'go to ' + target + '!');
	$('main-body').appendChild(debug_jump_link);	
	goog.events.listen(debug_jump_link, goog.events.EventType.CLICK, main_action, false, this);
};
	
goog.array.forEach($$('img'), function (element) {
	goog.events.listen(element, goog.events.EventType.CLICK, main_action, false, this);
});
