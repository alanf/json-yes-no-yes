// hacked out in no time flat by alan fineberg 
// c 2010
// www.alanfineberg.com
var $ = goog.dom.$;
var $$ = goog.dom.$$;

get_rules_from_id = function(id) {
	var prev = id.split('-')[1];
	var name = id.split('-')[2];
	return {
		'prev': prev,
		'name': name
	};
};

main_action = function(event) {
	event.preventDefault();
	rules_dict = get_rules_from_id(event.target.id);
	show_page(rules_dict.name, rules_dict.prev);
};

// rules for automatically redirecting to a random page
var redirect_timer = null;
var AUTO_REDIRECT_DURATION = 5000; //ms
var reset_timer = null;
var RESET_DURATION = 60000; //ms

show_page = function(name, prev, from_redirect) {
	if (from_redirect) {
		// only redirect the user once
		clearTimeout(redirect_timer);
		redirect_timer = null;
	} else {
		// this timer resets to the first page if there's no activity for a minute
		clearTimeout(reset_timer);
		var statement = 'show_page("start", "' + name + '", false)';
		reset_timer = setTimeout(statement, RESET_DURATION);
		// this timer will redirect to a ranom page 5 seconds after the user clicks something
		if(!redirect_timer && name != 'start') {
			var random_page;
			var keys = goog.object.getKeys(rules);
			while (!random_page || random_page == 'init' || random_page == 'start') {
				random_page = keys[Math.floor(Math.random()*keys.length)]
			};
			statement = 'show_page("' + random_page + '", "' + name + '", true)';
			redirect_timer = setTimeout(statement, AUTO_REDIRECT_DURATION);
		}
	}

	var new_rules = rules[name];
	if (!new_rules) {
		return;
	};
		
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
			new_element.appendChild(goog.dom.createDom('param', {'value': true, 'name': 'autoplay'}));
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
	//set up a timer to show a random page after the user has clicked something
	if (!from_redirect && name != 'start') {
		var random_page;
		var keys = goog.object.getKeys(rules);
		while (!random_page || random_page == 'init' || random_page == 'start') {
			random_page = keys[Math.floor(Math.random()*keys.length)]
		};
		var statement = 'show_page("' + random_page + '", "' + name + '", true)';
		redirect_timer = setTimeout(statement, AUTO_REDIRECT_DURATION);
	} 
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
