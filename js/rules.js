rules = {
	'init': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'start.jpg',
                }
			],
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
                'position': {'x': '900px', 'y': '110px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '660px', 'y': '170px'}
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
                },
				{
                'type': 'image',
                'next': 'third',
                'content': 'page2_img3.jpg',
                'position': {'x': '280', 'y': '457px'}
                }
	],
    'third': [
                {
                'type': 'image',
                'next': 'fourth',
                'content': 'page3_img1.jpg',
                'position': {'x': '15%', 'y': '25%'}
                }
    ],
	'fourth': [
                {
                'type': 'image',
                'next': 'fifth_parking',
                'content': 'page4_img1.jpg',
                'position': {'x': '15%', 'y': '10%'}
                }
    ],
	'fifth_parking': [
                {
                'type': 'image',
                'next': 'sixth',
                'content': 'page5_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	],
	'sixth': [
                {
                'type': 'image',
                'next': 'seventh_hybrid',
                'content': 'page6_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	],
	'seventh_hybrid': [
                {
                'type': 'image',
                'next': 'eight',
                'content': 'page7_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	],
	'eight': [
                {
                'type': 'image',
                'next': 'nine',
                'content': 'page5_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	],
	'nine': [
                {
                'type': 'image',
                'next': 'ten',
                'content': 'page7_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	],
	'ten': [
                {
                'type': 'image',
                'next': 'eleventh',
                'content': 'page6_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	],
	'eleventh': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'page7_img1.jpg',
                'position': {'x': '25%', 'y': '8%'}
                }
	]
}


