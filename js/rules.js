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
                'position': {'x': '600px', 'y': '13%'}
                },
				{
                'type': 'image',
                'next': 'yolk',
                'content': 'circle_1.jpg',
                'position': {'x': '135px', 'y': '88%'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'circle_2.jpg',
                'position': {'x': '400px', 'y': '88%'}
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
                'next': 'story',
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
                'next': 'story',
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
                'next': 'story',
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
                'next': 'story',
                'content': 'page8_img2.jpg',
                'position': {'x': '5%', 'y': '409px'}
                },
				{
                'type': 'image',
                'next': 'lucky_apple_OH',
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
	'lucky_apple_OH': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'lucky.jpg',
                'position': {'x': '25%', 'y': '150px'}
                },			
				{
                'type': 'image',
                'next': 'start',
                'content': 'apple.jpg',
                'position': {'x': '25%', 'y': '600px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'OH.jpg',
                'position': {'x': '25%', 'y': '1050px'}
                }
	],
	'hair': [
                {
                'type': 'image',
                'next': 'everything',
                'content': 'hair.jpg',
                'position': {'x': '35%', 'y': '8%'}
                }
	],
	'everything': [
                {
                'type': 'image',
                'next': 'story',
                'content': 'everything.jpg',
                'position': {'x': '50px', 'y': '150px'}
                },			
				{
                'type': 'image',
                'next': 'start',
                'content': 'is.jpg',
                'position': {'x': '250px', 'y': '600px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'everything2.jpg',
                'position': {'x': '500px', 'y': '1050px'}
                }
	],
	'story': [
				{
                'type': 'text',
                'content': '[[only1|only]] the [[yes|yes]] [[only2|only]] the  [[yolk|now]]',
				'width': '90px',
                'position': {'x': '270px', 'y': '270px'}
                }
	],
	'only1': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'only1.jpg',
                'position': {'x': '25%', 'y': '5%'}
                }
	],
	'only2': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'only2.jpg',
                'position': {'x': '35%', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'only2-1.jpg',
                'position': {'x': '15%', 'y': '78%'}
                }
	],
	'yolk': [
                {
                'type': 'image',
                'next': 'bag',
                'content': 'yolk.jpg',
                'position': {'x': '20%', 'y': '5%'}
                }
	],
	'bag': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'bag.jpg',
                'position': {'x': '20%', 'y': '12%'}
                }
	],
	'yes': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'satin.jpg',
                'position': {'x': '55%', 'y': '52%'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'ocean.jpg',
                'position': {'x': '8%', 'y': '10%'}
                }
	],
	
}


