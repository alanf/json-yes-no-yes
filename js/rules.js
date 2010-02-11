rules = {
	'start': [
				{
				'type': 'image',
				'next': 'second',
				'content': 'start.jpg',
				'position': {'x': 0, 'y': 0}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': 445, 'y': 367}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': 845, 'y': 567}
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
	],
	'third': [
				{
				'type': 'image',
				'next': 'start',
				'content': 'puppy.jpg',
				'position': {'x': 998, 'y': 167}
				},
				{
				'type': 'image',
				'next': 'second',
				'content': 'avs.jpg',
				'position': {'x': 155, 'y': 0}
				},
				{
				'type': 'text',
				'content': 'whoa this is another thing',
				'position': {'x': 69, 'y': 628}
				}
	]
}

