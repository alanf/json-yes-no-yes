rules = {
	'start': [
				{
				'type': 'image',
				'next': 'second',
				'content': 'start.jpg',
				'position': {'x': '10px', 'y': '50px'}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': '85px', 'y': '267px'}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': '585px', 'y': '180px'}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': '400px', 'y': '300px'}
				},
				{
				'type': 'image',
				'next': 'third',
				'content': 'start.jpg',
				'position': {'x': '845px', 'y': '387px'}
				}
	],
	'second': [
				{
				'type': 'image',
				'next': 'start',
				'content': 'trabant.jpg',
				'position': {'x': '55px', 'y': '167px'}
				},
				{
				'type': 'text',
				'content': 'this is some other example text',
				'position': {'x': '669px', 'y': '528px'}
				}
	],
	'third': [
				{
				'type': 'image',
				'next': 'start',
				'content': 'puppy.jpg',
				'position': {'x': '998px', 'y': '167px'}
				},
				{
				'type': 'image',
				'next': 'second',
				'content': 'avs.jpg',
				'position': {'x': '155px', 'y': '0px'}
				},
				{
				'type': 'text',
				'content': 'whoa this is another thing',
				'position': {'x': '69px', 'y': '628px'}
				}
	]
}

