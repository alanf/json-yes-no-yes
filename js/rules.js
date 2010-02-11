rules = {
    'start': [
                {
                'type': 'image',
                'next': 'second',
                'content': 'dot.jpg',
                'position': {'x': '50px', 'y': '50px'},
                'width': '   '
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '185px', 'y': '425px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '900px', 'y': '110px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '660px', 'y': '170px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '845px', 'y': '387px'}
                }
    ],
    'second': [
                {
                'type': 'image',
                'next': 'third',
                'content': 'page2_img1.jpg',
                'position': {'x': '35px', 'y': '35px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'page2_img2.jpg',
                'position': {'x': '48%', 'y': '85px'}
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

