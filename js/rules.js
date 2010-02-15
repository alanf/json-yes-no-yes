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
                'position': {'x': '10%', 'y': '20%'},
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '900px', 'y': '310px'}
                },
                {
                'type': 'image',
                'next': 'third',
                'content': 'dot.jpg',
                'position': {'x': '660px', 'y': '370px'}
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
                'next': 'focus_light',
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
                'next': 'universe',
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
                'next': 'landsandsky',
                'content': 'proximity.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],
	'moment_sheet': [
				{
                'type': 'image',
                'next': 'youthink',
                'content': 'moment.jpg',
                'position': {'x': '600px', 'y': '30px'}
                },
				{
                'type': 'image',
                'next': 'lucky_devotion5',
                'content': 'sheet.jpg',
                'position': {'x': '73px', 'y': '380px'}
                }
	],
	'lucky_apple_OH': [
                {
                'type': 'image',
                'next': 'icecream',
                'content': 'lucky.jpg',
                'position': {'x': '25%', 'y': '150px'}
                },			
				{
                'type': 'image',
                'next': 'hair',
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
	'everythingiseverything': [
                {
                'type': 'image',
                'next': 'apple',
                'content': 'everything.jpg',
                'position': {'x': '50px', 'y': '150px'}
                },			
				{
                'type': 'image',
                'next': 'universe',
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
                'next': 'twoways',
                'content': 'only1.jpg',
                'position': {'x': '25%', 'y': '5%'}
                }
	],
	'only2': [
                {
                'type': 'image',
                'next': 'orange_plant',
                'content': 'only2.jpg',
                'position': {'x': '35%', 'y': '8%'}
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
                'next': 'soles_fulcrum',
                'content': 'bag.jpg',
                'position': {'x': '20%', 'y': '12%'}
                }
	],
	'yes': [
                {
                'type': 'image',
                'next': 'bodies4',
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
	'focus_light': [
                {
                'type': 'image',
                'next': 'proximity',
                'content': 'focus_light.jpg',
                'position': {'x': '25%', 'y': '6%'}
                }
	],
	'soles_fulcrum': [
				{
                'type': 'image',
                'next': 'twoways',
                'content': 'soles.jpg',
                'position': {'x': '65%', 'y': '32%'}
                },
				{
                'type': 'image',
                'next': 'hair',
                'content': 'fulcrum.jpg',
                'position': {'x': '35%', 'y': '3%'}
                }
	],
	'hair': [
				{
                'type': 'image',
                'next': 'twoways',
                'content': 'soles.jpg',
                'position': {'x': '65%', 'y': '32%'}
                },
				{
                'type': 'image',
                'next': 'ground',
                'content': 'fulcrum.jpg',
                'position': {'x': '35%', 'y': '3%'}
                },
				{
                'type': 'image',
                'next': 'OH',
                'content': 'hair.jpg',
                'position': {'x': '8%', 'y': '48%'}
                }
	],
	'OH': [
                {
                'type': 'image',
                'next': 'everythingiseverything',
                'content': 'OH.jpg',
                'position': {'x': '25%', 'y': '6%'}
                }
	],
	'lucky_devotion5': [
				{
                'type': 'image',
                'next': 'icecream',
                'content': 'lucky.jpg',
                'position': {'x': '600px', 'y': '180px'}
                },
				{
                'type': 'image',
                'next': 'devotion_1',
                'content': 'devotion_4.jpg',
                'position': {'x': '85px', 'y': '180px'}
                }
	],
	'devotion_1': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'devotion_1.jpg',
                'position': {'x': '23%', 'y': '1%'}
                }
	],
	'apple': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'apple.jpg',
                'position': {'x': '23%', 'y': '25%'}
                }
	],
	'landsandsky': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'land.jpg',
                'position': {'x': '15%', 'y': '35%'}
                },			
				{
                'type': 'image',
                'next': 'bodies',
                'content': 'sand.jpg',
                'position': {'x': '38%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'emergencybed',
                'content': 'sky.jpg',
                'position': {'x': '60%', 'y': '35%'}
                }
	],
	'youthink': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'youthink.jpg',
                'position': {'x': '20%', 'y': '12%'}
                }
	],
	
		'universe': [
                {
                'type': 'image',
                'next': 'seaclouds',
                'content': 'universe.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],
		'orange_plant': [
				{
                'type': 'image',
                'next': 'bodies2',
                'content': 'orange.jpg',
                'position': {'x': '600px', 'y': '180px'}
                },
				{
                'type': 'image',
                'next': 'doorway',
                'content': 'plant.jpg',
                'position': {'x': '285px', 'y': '180px'}
                }
	],
			'icecream': [
                {
                'type': 'image',
                'next': 'toe',
                'content': 'icecream.jpg',
                'position': {'x': '40%', 'y': '12%'}
                }
	],
			'toe': [
                {
                'type': 'image',
                'next': 'hair',
                'content': 'toe.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],		
			'twoways': [
                {
                'type': 'image',
                'next': 'fifth_parking',
                'content': '2ways-1.jpg',
                'position': {'x': '300px', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'beijing',
                'content': '2ways-2.jpg',
                'position': {'x': '650px', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'over_humps',
                'content': '2ways-3.jpg',
                'position': {'x': '300px', 'y': '48%'}
                },
				{
                'type': 'image',
                'next': 'copies',
                'content': '2ways-4.jpg',
                'position': {'x': '650px', 'y': '48%'}
                }
	],
			'seaclouds': [
				{
                'type': 'image',
                'next': 'ground',
                'content': 'seaclouds.jpg',
                'position': {'x': '20%', 'y': '80px'}
                },
				{
                'type': 'image',
                'next': 'wind',
                'content': 'clouds.jpg',
                'position': {'x': '35%', 'y': '280px'}
                }
	],
			'ground': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'ground.jpg',
                'position': {'x': '20%', 'y': '12%'}
                }
	],	
			'wind': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'wind.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],	
			'bodies': [
                {
                'type': 'image',
                'next': 'bodies2',
                'content': 'body1.jpg',
                'position': {'x': '10%', 'y': '40%'}
                }
	],
			'bodies2': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'body1.jpg',
                'position': {'x': '10%', 'y': '40%'}
                },			
				{
                'type': 'image',
                'next': 'start',
                'content': 'body2.jpg',
                'position': {'x': '38%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'body3.jpg',
                'position': {'x': '65%', 'y': '55%'}
                }
	],
			
			'doorway': [
                {
                'type': 'image',
                'next': 'mirror',
                'content': 'doorway.jpg',
                'position': {'x': '5%', 'y': '5%'}
                }
	],
			
			'mirror': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'mirror.jpg',
                'position': {'x': '40%', 'y': '5%'}
                }
	],
			'emergencybed': [
				{
                'type': 'image',
                'next': 'bodies4',
                'content': 'emergency.jpg',
                'position': {'x': '45%', 'y': '280px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'bed.jpg',
                'position': {'x': '10%', 'y': '80px'}
                }
	],
			'bodies4': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'bodies4.jpg',
                'position': {'x': '25%', 'y': '10%'}
                }
	],
			'copies': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'copy1.jpg',
                'position': {'x': '15%', 'y': '180px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'copy2.jpg',
                'position': {'x': '45%', 'y': '180px'}
                }
	],
			'beijing': [
                {
                'type': 'image',
                'next': 'push_web',
                'content': 'beijing.jpg',
                'position': {'x': '25%', 'y': '10%'}
                }
	],
			'over_humps': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'over.jpg',
                'position': {'x': '15%', 'y': '0px'}
                },
				{
                'type': 'image',
                'next': 'sweater',
                'content': 'humps.jpg',
                'position': {'x': '35%', 'y': '480px'}
                }
	],
			
			'push_web': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'web.jpg',
                'position': {'x': '15%', 'y': '180px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'push.jpg',
                'position': {'x': '55%', 'y': '180px'}
                }
	],
			'sweater': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'sweater.jpg',
                'position': {'x': '20%', 'y': '15%'}
                }
	],
}


