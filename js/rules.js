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
                'next': 'second_paper',
                'content': 'dot.jpg',
                'position': {'x': '50px', 'y': '50px'},
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '900px', 'y': '110px'}
                },
                {
                'type': 'text',
                'content': 'this is a large block of text lorem ipsum blah blah internet internet one two [[third|three]] is this thing on? is this [[second|thing]] on? check 2 check2.',
				'width': '200px',
                'position': {'x': '260px', 'y': '170px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '660px', 'y': '170px'}
                }
    ],
    'second_paper': [
                {
                'type': 'image',
                'next': 'thirteenth_uta',
                'content': 'page2_img2.jpg',
                'position': {'x': '48%', 'y': '85px'}
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
		],
	'twelveth': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'page8_img1.jpg',
                'position': {'x': '50%', 'y': '50%'}
                },
                {
                'type': 'image',
                'next': 'start',
                'content': 'page8_img2.jpg',
                'position': {'x': '10%', 'y': '50%'}
                },
                {
                'type': 'image',
                'next': 'start',
                'content': 'page8_img3.jpg',
                'position': {'x': '38%', 'y': '10%'}
                }
	],
	'thirteenth_uta': [
                {
                'type': 'image',
                'next': 'fourteenth_bus',
                'content': 'page2_img2.jpg',
                'position': {'x': '48%', 'y': '85px'}
                },
				{
                'type': 'image',
                'next': 'fourteenth_bus',
                'content': 'page2_img1.jpg',
                'position': {'x': '8%', 'y': '8%'}
                }
	],
	'fourteenth_bus': [
                {
                'type': 'image',
                'next': 'uta_bus',
                'content': 'page2_img2.jpg',
                'position': {'x': '48%', 'y': '85px'}
                },
				{
                'type': 'image',
                'next': 'moment_sheet',
                'content': 'page2_img1.jpg',
                'position': {'x': '8%', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'fifteenth_fulcrum',
                'content': 'page8_img2.jpg',
                'position': {'x': '5%', 'y': '409px'}
                }
	],
	'uta_bus': [
				{
                'type': 'image',
                'next': 'moment_sheet',
                'content': 'page2_img1.jpg',
                'position': {'x': '8%', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'fifteenth_fulcrum',
                'content': 'page8_img2.jpg',
                'position': {'x': '5%', 'y': '409px'}
                }
	],
	'fifteenth_fulcrum': [
                {
                'type': 'image',
                'next': 'proximity',
                'content': 'page8_img3.jpg',
                'position': {'x': '455px', 'y': '8%'}
                },			
				{
                'type': 'image',
                'next': 'fifteenth_fulcrum',
                'content': 'page8_img2.jpg',
                'position': {'x': '5%', 'y': '409px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'page8_img1.jpg',
                'position': {'x': '45%', 'y': '409px'}
                }
	],
	'proximity': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'proximity.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],
	'moment_sheet': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'moment.jpg',
                'position': {'x': '600px', 'y': '30px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'sheet.jpg',
                'position': {'x': '73px', 'y': '380px'}
                }
	],
	
}


