rules = {
	'start': [
				{
				'type': 'image',
				'next': 'second',
				'content': 'start.jpg',
				'position': {'x': 10, 'y': 50}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': 85, 'y': 267}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': 585, 'y': 180}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': 400, 'y': 300}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': 845, 'y': 387}
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

