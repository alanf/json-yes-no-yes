var $ = goog.dom.$;
var $$ = goog.dom.$$;

main = function (node, visited, depth) {
	children = get_children(node);
	var padding = ' - ' + goog.string.repeat(" . ", depth);

	$('main-body').appendChild(goog.dom.createTextNode(padding));
	var link = goog.dom.createDom('a', {'href': '', 'id': 'report-report-'+ node}, node);
	goog.events.listen(link, goog.events.EventType.CLICK, main_action, false, this);
	$('main-body').appendChild(link);
	$('main-body').appendChild(goog.dom.createDom('br'));

	visited_copy = goog.array.clone(visited);
	goog.array.forEach(children, function(branch) {
		if (branch) {
			if (!goog.array.contains(visited_copy, branch)) {
				goog.array.insert(visited_copy, branch);
				main(branch, visited_copy, depth + 1);
			}
		}
	});
};

main2 = function(name){
	var children = get_children(name);
	var container = goog.dom.createDom('div');

	$('main-body').appendChild(container);
	goog.array.forEach(children, function(child) {
		var link = goog.dom.createDom('a', {'href': '', 'id': 'report-'+ name +'-'+child}, child);
		container.appendChild(link);
		//container.appendChild(goog.dom.createDom('br'));
		goog.events.listen(link, goog.events.EventType.CLICK, show_children, false, this);
	});
};

show_children = function(event) {
	event.preventDefault();
	if (goog.string.contains(event.target.className, 'open')) {
		goog.dom.setProperties(event.target, {'class': 'closed'});
	} else if (goog.string.contains(event.target.className, 'closed')) {
		goog.dom.setProperties(event.target, {'class': 'open'});
	} else {
		var name = event.target.id.split('-')[2];
		var children = get_children(name);
		var container = goog.dom.createDom('div');

		goog.dom.insertSiblingAfter(container, event.target);
		goog.array.forEach(children, function(child) {
			if (child) {
				var link = goog.dom.createDom('a', {'href': '', 'id': 'report-'+ name +'-'+child}, child);
				container.appendChild(link);
				//container.appendChild(goog.dom.createDom('br'));
				goog.events.listen(link, goog.events.EventType.CLICK, show_children, false, this);
			}
		});
		goog.dom.setProperties(event.target, {'class': 'open'});
	}
};

get_children = function (node) {
	var tree = rules[node];
	var children = [];
	goog.array.forEach(tree, function (child) {
		if (child['type'] == 'image') {
			goog.array.insert(children, child['next']);
		} else if (child['type'] == 'text') {
			goog.array.insert(children, child['next']);

			var text = child['content'].split(']]');
			goog.array.forEach(text, function(fragment) {
				if (fragment.split('[[').length > 1) {
					var link_content =  fragment.split('[[')[1].split('|');
					var href = link_content[0];
					goog.array.insert(children, href);
				}
			});
		}
	});
	return children;
};

//main('start', [], 0);
main2('init');
			

	
