rules = {
	'start': [
				{
				'type': 'image',
				'next': 'second',
				'content': 'portrait.jpg',
				'position': {'x': 45, 'y': 67}
				},
				{
				'type': 'text',
				'content': 'this is some example text',
				'position': {'x': 600, 'y': 600}
				}
	],
	'second': [
				{
				'type': 'image',
				'next': 'start',
				'content': 'trabant.jpg',
				'position': {'x': 55, 'y': 167}
				},
				{
				'type': 'text',
				'content': 'this is some other example text',
				'position': {'x': 669, 'y': 528}
				}
	]
}

