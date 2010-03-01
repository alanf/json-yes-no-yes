var $ = goog.dom.$;
var $$ = goog.dom.$$;

main = function (node, visited, depth) {
	var tree = rules[node];
	var branches = [];
	goog.array.forEach(tree, function (child) {
		if (child['type'] == 'image') {
			goog.array.insert(branches, child['next']);
		} else if (child['type'] == 'text') {
			goog.array.insert(branches, child['next']);

			var text = child['content'].split(']]');
			goog.array.forEach(text, function(fragment) {
				if (fragment.split('[[').length > 1) {
					var link_content =  fragment.split('[[')[1].split('|');
					var href = link_content[0];
					goog.array.insert(branches, href);
				}
			});
		}
	});
	var padding = ' - ' + goog.string.repeat(" . ", depth);

	$('main-body').appendChild(goog.dom.createTextNode(padding));
	var link = goog.dom.createDom('a', {'href': '', 'id': 'report-report-'+ node}, node);
	goog.events.listen(link, goog.events.EventType.CLICK, main_action, false, this);
	$('main-body').appendChild(link);
	$('main-body').appendChild(goog.dom.createDom('br'));

	visited_copy = goog.array.clone(visited);
	goog.array.forEach(branches, function(branch) {
		if (branch) {
			if (!goog.array.contains(visited_copy, branch)) {
				goog.array.insert(visited_copy, branch);
				main(branch, visited_copy, depth + 1);
			}
		}
	});
};

main('start', [], 0);
			

	
