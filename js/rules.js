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
                'position': {'x': '20%', 'y': '10%'}
                },
                {
                'type': 'image',
                'next': 'pressurepleasure',
                'content': 'dot.jpg',
                'position': {'x': '20%', 'y': '40%'}
                },
                {
                'type': 'image',
                'next': 'destination',
                'content': 'dot.jpg',
                'position': {'x': '20%', 'y': '70%'}
                },
				{
                'type': 'image',
                'next': 'terms1',
                'content': 'dot.jpg',
                'position': {'x': '40%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'satin_sweater',
                'content': 'dot.jpg',
                'position': {'x': '40%', 'y': '40%'}
                },
				{
                'type': 'image',
                'next': 'misc',
                'content': 'dot.jpg',
                'position': {'x': '40%', 'y': '70%'}
                },
				{
                'type': 'image',
                'next': 'bark',
                'content': 'dot.jpg',
                'position': {'x': '60%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'ceiling1',
                'content': 'dot.jpg',
                'position': {'x': '60%', 'y': '40%'}
                },
				{
                'type': 'image',
                'next': 'twotrees',
                'content': 'dot.jpg',
                'position': {'x': '60%', 'y': '70%'}
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
    'pressurepleasure': [
                {
                'type': 'image',
                'next': 'fourth',
                'content': 'page3_img1.jpg',
                'position': {'x': '7%', 'y': '25%'}
                }
    ],
	'fourth': [
                {
                'type': 'image',
                'next': 'fifth_parking',
                'content': 'page4_img1.jpg',
                'position': {'x': '475px', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'yolk2',
                'content': 'circle_1.jpg',
                'position': {'x': '135px', 'y': '85%'}
                },
				{
                'type': 'image',
                'next': 'focus_light',
                'content': 'circle_2.jpg',
                'position': {'x': '335px', 'y': '85%'}
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
                'position': {'x': '5%', 'y': '359px'}
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
                'position': {'x': '5%', 'y': '359px'}
                }
	],
	'proximity': [
                {
                'type': 'image',
                'next': 'puddle_tape',
                'content': 'proximity.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],
	'moment_sheet': [
				{
                'type': 'image',
                'next': 'youthink',
                'content': 'moment.jpg',
                'position': {'x': '500px', 'y': '50px'}
                },
				{
                'type': 'image',
                'next': 'lucky_devotion5',
                'content': 'sheet.jpg',
                'position': {'x': '86px', 'y': '325px'}
                }
	],
	'everythingiseverything': [
                {
                'type': 'image',
                'next': 'apple',
                'content': 'everything.jpg',
                'position': {'x': '50px', 'y': '50px'}
                },			
				{
                'type': 'image',
                'next': 'universe',
                'content': 'is.jpg',
                'position': {'x': '250px', 'y': '400px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'everything2.jpg',
                'position': {'x': '500px', 'y': '2050px'}
                }
	],
	'story': [
				{
                'type': 'text',
                'content': '[[only1|only]] the [[yes|yes]] [[only2|only]] the [[yolk3|now]]',
				'width': '90px',
                'position': {'x': '150px', 'y': '90px'}
                },
				{
                'type': 'image',
                'next': 'likebreathing',
                'content': 'van_sanfran.jpg',
                'position': {'x': '45%', 'y': '30%'}
                }
	],
	'only1': [
                {
                'type': 'image',
                'next': 'twoways',
                'content': 'only1.jpg',
                'position': {'x': '20%', 'y': '5%'}
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
                'next': 'plastic',
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
                'next': 'mushroom',
                'content': 'ocean.jpg',
                'position': {'x': '8%', 'y': '10%'}
                }
	],
	'mushroom': [
                {
                'type': 'image',
                'next': 'orange_plant',
                'content': 'mushroom.jpg',
                'position': {'x': '25%', 'y': '6%'}
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
                'next': 'intelligence',
                'content': 'soles.jpg',
                'position': {'x': '500px', 'y': '175px'}
                },
				{
                'type': 'image',
                'next': 'hair',
                'content': 'fulcrum.jpg',
                'position': {'x': '210px', 'y': '20px'}
                }
	],
	'hair': [
				{
                'type': 'image',
                'next': 'twoways',
                'content': 'soles.jpg',
                'position': {'x': '500px', 'y': '175px'}
                },
				{
                'type': 'image',
                'next': 'hair',
                'content': 'fulcrum.jpg',
                'position': {'x': '210px', 'y': '20px'}
                },
				{
                'type': 'image',
                'next': 'OH',
                'content': 'hair.jpg',
                'position': {'x': '85px', 'y': '310px'}
                }
	],
	'OH': [
                {
                'type': 'image',
                'next': 'everythingiseverything',
                'content': 'OH.jpg',
                'position': {'x': '40%', 'y': '6%'}
                },
				{
                'type': 'image',
                'next': 'entropy',
                'content': 'humps2.jpg',
                'position': {'x': '5%', 'y': '56%'}
                }
	],
	'lucky_devotion5': [
				{
                'type': 'image',
                'next': 'icecream',
                'content': 'lucky.jpg',
                'position': {'x': '450px', 'y': '150px'}
                },
				{
                'type': 'image',
                'next': 'devotion_1',
                'content': 'devotion_4.jpg',
                'position': {'x': '85px', 'y': '150px'}
                }
	],
	'devotion_1': [
                {
                'type': 'image',
                'next': 'emergencybed',
                'content': 'devotion_1.jpg',
                'position': {'x': '20%', 'y': '1%'}
                }
	],
	'apple': [
                {
                'type': 'image',
                'next': 'story',
                'content': 'apple.jpg',
                'position': {'x': '20%', 'y': '20%'}
                }
	],
	'landsandsky': [
                {
                'type': 'image',
                'next': 'OH',
                'content': 'land.jpg',
                'position': {'x': '10%', 'y': '35%'}
                },			
				{
                'type': 'image',
                'next': 'bodies',
                'content': 'sand.jpg',
                'position': {'x': '37%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'history',
                'content': 'sky.jpg',
                'position': {'x': '60%', 'y': '35%'}
                }
	],
	'youthink': [
                {
                'type': 'image',
                'next': 'moons',
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
                'next': 'brighter',
                'content': 'orange.jpg',
                'position': {'x': '400px', 'y': '100px'}
                },
				{
                'type': 'image',
                'next': 'doorway',
                'content': 'plant.jpg',
                'position': {'x': '85px', 'y': '100px'}
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
                'next': '2_1',
                'content': 'toe.jpg',
                'position': {'x': '10%', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'ground5',
                'content': 'plants.jpg',
                'position': {'x': '55%', 'y': '30%'}
                }
	],		
			'twoways': [
                {
                'type': 'image',
                'next': 'clothes_branches',
                'content': '2ways-1.jpg',
                'position': {'x': '200px', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'beijing',
                'content': '2ways-2.jpg',
                'position': {'x': '550px', 'y': '8%'}
                },
				{
                'type': 'image',
                'next': 'over_humps',
                'content': '2ways-3.jpg',
                'position': {'x': '203px', 'y': '48%'}
                },
				{
                'type': 'image',
                'next': 'copies',
                'content': '2ways-4.jpg',
                'position': {'x': '547px', 'y': '48%'}
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
                'next': 'yolk',
                'content': 'ground.jpg',
                'position': {'x': '20%', 'y': '12%'}
                }
	],	
			'wind': [
                {
                'type': 'image',
                'next': 'garage_arm',
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
                'next': 'colordots',
                'content': 'body1.jpg',
                'position': {'x': '10%', 'y': '40%'}
                },			
				{
                'type': 'image',
                'next': 'thelongest',
                'content': 'body2.jpg',
                'position': {'x': '38%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'gestalt',
                'content': 'body3.jpg',
                'position': {'x': '65%', 'y': '55%'}
                }
	],
			
			'doorway': [
                {
                'type': 'image',
                'next': 'mirror',
                'content': 'doorway.jpg',
                'position': {'x': '10%', 'y': '10%'}
                }
	],
			
			'mirror': [
                {
                'type': 'image',
                'next': 'toilet',
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
                'next': 'thelongest',
                'content': 'bed.jpg',
                'position': {'x': '10%', 'y': '80px'}
                }
	],
			'bodies4': [
                {
                'type': 'image',
                'next': 'soles',
                'content': 'bodies4.jpg',
                'position': {'x': '25%', 'y': '5%'}
                }
	],
			'copies': [
				{
                'type': 'image',
                'next': 'bent',
                'content': 'copy1.jpg',
                'position': {'x': '15%', 'y': '150px'}
                },
				{
                'type': 'image',
                'next': 'brain',
                'content': 'copy2.jpg',
                'position': {'x': '52%', 'y': '150px'}
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
                'next': 'only1',
                'content': 'over.jpg',
                'position': {'x': '15%', 'y': '80px'}
                },
				{
                'type': 'image',
                'next': 'sweater',
                'content': 'humps.jpg',
                'position': {'x': '35%', 'y': '350px'}
                }
	],
			
			'push_web': [
				{
                'type': 'image',
                'next': 'invisible',
                'content': 'web.jpg',
                'position': {'x': '10%', 'y': '150px'}
                },
				{
                'type': 'image',
                'next': 'breathingdeeply',
                'content': 'push.jpg',
                'position': {'x': '55%', 'y': '150px'}
                }
	],
			'sweater': [
                {
                'type': 'image',
                'next': 'cushion2',
                'content': 'sweater.jpg',
                'position': {'x': '15%', 'y': '15%'}
                }
	],
			'destination': [
                {
                'type': 'image',
                'next': 'destination',
                'content': 'destination.jpg',
                'position': {'x': '300px', 'y': '50px'}
                },
				  {
                'type': 'image',
                'next': 'portland_slice',
                'content': 'north.jpg',
                'position': {'x': '361px', 'y': '54px'}
                },
				 {
                'type': 'image',
                'next': 'hermann',
                'content': 'right2.jpg',
                'position': {'x': '356px', 'y': '130px'}
                },
				 {
                'type': 'image',
                'next': '24nights',
                'content': 'right_grey.jpg',
                'position': {'x': '365px', 'y': '242px'}
                },
				{
                'type': 'image',
                'next': 'misc',
                'content': 'right_grey2.jpg',
                'position': {'x': '363px', 'y': '349px'}
                },
				{
                'type': 'image',
                'next': 'likebreathing',
                'content': 'right_grey3.jpg',
                'position': {'x': '357px', 'y': '517px'}
                },
				{
                'type': 'image',
                'next': 'intobed',
                'content': 'destination2.jpg',
                'position': {'x': '324px', 'y': '647px'}
                }			
	],
			'likebreathing': [
				{
                'type': 'text',
                'content': '[[wind|like breathing]] [[hermann|through everybody]]',
				'width': '290px',
                'position': {'x': '770px', 'y': '370px'}
                }
	],
			'intobed': [
                {
                'type': 'image',
                'next': '24nights',
                'content': '22.jpg',
                'position': {'x': '20%', 'y': '15%'}
                }
	],
			'24nights': [
				{
                'type': 'image',
                'next': 'devotion3',
                'content': '24_1.jpg',
                'position': {'x': '15%', 'y': '20px'}
                },
				{
                'type': 'image',
                'next': '2_1',
                'content': '24_2.jpg',
                'position': {'x': '15%', 'y': '165px'}
                },
				{
                'type': 'image',
                'next': 'light_reliance',
                'content': '24_3.jpg',
                'position': {'x': '15%', 'y': '310px'}
                },
				{
                'type': 'image',
                'next': 'hairdown_x',
                'content': '24_4.jpg',
                'position': {'x': '15%', 'y': '455px'}
                }
	],
				'devotion3': [
                {
                'type': 'image',
                'next': 'emergencybed',
                'content': 'devotion3.jpg',
                'position': {'x': '10%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'portland_slice',
                'content': 'corner.jpg',
                'position': {'x': '65%', 'y': '30%'}
                }
	],
				'hermann': [
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann1.jpg',
                'position': {'x': '10%', 'y': '30px'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann2.jpg',
                'position': {'x': '10%', 'y': '300px'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann3.jpg',
                'position': {'x': '65%', 'y': '30px'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann4.jpg',
                'position': {'x': '65%', 'y': '300px'}
                }
	],
				'portland_slice': [
                {
                'type': 'image',
                'next': 'breathingdeeply',
                'content': 'portland_slice_print.jpg',
                'position': {'x': '20%', 'y': '10%'}
                }
	],
				'bodies5': [
				{
                'type': 'image',
                'next': 'toe',
                'content': 'body1.jpg',
                'position': {'x': '10%', 'y': '30px'}
                },
				{
                'type': 'image',
                'next': 'past_future',
                'content': 'body6.jpg',
                'position': {'x': '10%', 'y': '300px'}
                },
				{
                'type': 'image',
                'next': 'twotrees',
                'content': 'body4.jpg',
                'position': {'x': '65%', 'y': '30px'}
                },
				{
                'type': 'image',
                'next': 'moment_sheet',
                'content': 'body7.jpg',
                'position': {'x': '65%', 'y': '300px'}
                }
	],
				'2_1': [
                {
                'type': 'image',
                'next': 'devotion5',
                'content': '2_1.jpg',
                'position': {'x': '45%', 'y': '30%'}
                },
				{
				'type': 'video',
				'next': 'focus_light',
				'content': 'curtains.mov',
				'width': '400',
				'height': '300',
                'position': {'x': '5%', 'y': '5%'}
				}
	],
				'light_reliance': [
				{
                'type': 'image',
                'next': 'tree3',
                'content': 'light.jpg',
                'position': {'x': '100px', 'y': '230px'}
                },
				{
                'type': 'image',
                'next': 'lattice',
                'content': 'reliance.jpg',
                'position': {'x': '625px', 'y': '425px'}
                }
	],
				'hairdown_x': [
                {
                'type': 'image',
                'next': 'colordots',
                'content': 'hair_down.jpg',
                'position': {'x': '15%', 'y': '30%'}
                },			
				{
                'type': 'image',
                'next': 'yolk',
                'content': 'x.jpg',
                'position': {'x': '50%', 'y': '30%'}
                }
	],
				'antenna': [
                {
                'type': 'image',
                'next': 'orange_plant',
                'content': 'antenna.jpg',
                'position': {'x': '40%', 'y': '5%'}
                }
	],
				'devotion5': [
                {
                'type': 'image',
                'next': 'lucky_devotion5',
                'content': 'devotion5.jpg',
                'position': {'x': '50%', 'y': '5%'}
                },
				{
                'type': 'image',
                'next': 'antenna',
                'content': 'henry.jpg',
                'position': {'x': '5%', 'y': '50%'}
                }
	],
				'twotrees': [
                 {
                'type': 'text',
                'content': '[[tree1|0110]]110001101001011[[lights|010110]]1100101001000000111010001110111010111100100000011101000111001001100101011001010111001100100000011000100110010101100011011011110110110101101001011011100110011100100000110111101101110011[[tree2|01001]]',
				'width': '100px',
                'position': {'x': '170px', 'y': '270px'}
                }
	],
				'past_future': [
				 {
                'type': 'text',
                'content': '[[portland_slice|past]] [[brighter|future]] [[past_future|selves]]',
				'width': '40px',
                'position': {'x': '50px', 'y': '370px'}
                },
				{
                'type': 'image',
                'next': 'vent',
                'content': 'pillow.jpg',
                'position': {'x': '40%', 'y': '10%'}
                }
	],
				'tree1': [
                {
                'type': 'image',
                'next': 'vent',
                'content': 'tree1.jpg',
                'position': {'x': '40%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'puddle_tape',
                'content': 'sidewalk.jpg',
                'position': {'x': '10%', 'y': '50%'}
                }
	],
				'tree2': [
                {
                'type': 'image',
                'next': 'cushion',
                'content': 'tree2.jpg',
                'position': {'x': '15%', 'y': '28%'}
                }
	],
				'cushion': [
                {
                'type': 'image',
                'next': 'thelongest',
                'content': 'cushion.jpg',
                'position': {'x': '10%', 'y': '100px'}
                },
				{
                'type': 'image',
                'next': 'colordots',
                'content': 'manhole.jpg',
                'position': {'x': '65%', 'y': '240px'}
                }
	],
				
				'thelongest': [
                {
                'type': 'image',
                'next': 'bark',
                'content': 'thelongest.jpg',
                'position': {'x': '10%', 'y': '10%'}
                },
                {
                'type': 'image',
                'next': 'invisible',
                'content': 'thelongest2.jpg',
                'position': {'x': '15%', 'y': '18%'}
                },
				{
                'type': 'image',
                'next': 'window',
                'content': 'thelongest3.jpg',
                'position': {'x': '20%', 'y': '26%'}
                },
				{
                'type': 'image',
                'next': 'bent',
                'content': 'thelongest4.jpg',
                'position': {'x': '25%', 'y': '34%'}
                },
				{
                'type': 'image',
                'next': 'moment2',
                'content': 'thelongest5.jpg',
                'position': {'x': '30%', 'y': '42%'}
                },
				{
                'type': 'image',
                'next': 'wall',
                'content': 'thelongest6.jpg',
                'position': {'x': '35%', 'y': '50%'}
                }
	],
				'bark': [
                {
                'type': 'image',
                'next': 'circles',
				'width': '100%',
                'content': 'bark.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
				'circles': [
				{
                'type': 'image',
                'next': 'history',
                'content': 'circle_1.jpg',
                'position': {'x': '300px', 'y': '30%'}
                },
				{
                'type': 'image',
                'next': 'focus_light',
                'content': 'circle_2.jpg',
                'position': {'x': '500px', 'y': '30%'}
                }
    ],
				
				'invisible': [
				{
                'type': 'image',
                'next': 'sand',
                'content': 'invisible.jpg',
                'position': {'x': '25%', 'y': '35%'}
                }
	],
				'wall': [
                {
                'type': 'image',
                'next': 'second_paper',
                'content': 'wall.jpg',
                'position': {'x': '55%', 'y': '35%'}
                },
				{
				'type': 'video',
				'next': 'mushroom',
				'content': 'sparks.mov',
				'width': '300',
				'height': '200',
                'position': {'x': '15%', 'y': '35%'}
				}
	],
				'vent': [
                {
                'type': 'image',
                'next': 'x',
                'content': 'vent.jpg',
                'position': {'x': '40%', 'y': '10%'}
                }
	],
				
				'uta_snowed': [
                {
                'type': 'image',
                'next': 'story',
                'content': 'uta2.jpg',
                'position': {'x': '40%', 'y': '10px'}
                },			
				{
                'type': 'image',
                'next': 'seaclouds2',
                'content': 'snowed.jpg',
                'position': {'x': '30%', 'y': '42%'}
                }
	],		
				'garage_arm': [		
				{
                'type': 'image',
                'next': 'hairdown',
                'content': 'arm.jpg',
                'position': {'x': '50%', 'y': '20%'}
                },
				{
                'type': 'image',
                'next': 'coordinates',
                'content': 'moment3.jpg',
                'position': {'x': '24%', 'y': '42%'}
                },
				{
                'type': 'image',
                'next': 'tree1',
                'content': 'garage.jpg',
                'position': {'x': '20%', 'y': '20%'}
                }	
	],					
				'terms1': [
                {
                'type': 'text',
                'next': 'terms2',
                'content': 'theory',
				'color': 'black',
                'position': {'x': '45%', 'y': '45%'}
                }	
	],
				'terms2': [
                {
                'type': 'text',
				'next': 'terms3',
                'content': 'theory',
                'position': {'x': '45%', 'y': '45%'}
                },
                {
                'type': 'text',
                'content': 'practice',
				'next': 'terms3',
				'color': 'black',
                'position': {'x': '44%', 'y': '36%'}
                }
	],
				'toilet': [
                {
                'type': 'image',
                'next': 'dogs_dance',
                'content': 'toilet.jpg',
                'position': {'x': '20%', 'y': '15%'}
                }	
	],
				'terms3': [
                {
                'type': 'text',
				'next': 'terms4',
                'content': 'theory',
                'position': {'x': '45%', 'y': '45%'}
                },
                {
                'type': 'text',
                'content': 'practice',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '44%', 'y': '36%'}
                },
				{
                'type': 'text',
                'content': 'dialogue',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '24%', 'y': '26%'}
                },
				{
                'type': 'text',
                'content': 'discourse',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '54%', 'y': '42%'}
                },
				{
                'type': 'text',
                'content': 'gesture',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '64%', 'y': '62%'}
                },
				{
                'type': 'text',
                'content': 'index',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '79%', 'y': '35%'}
                },
				{
                'type': 'text',
                'content': 'signifier',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '53%', 'y': '47%'}
                },
				{
                'type': 'text',
                'content': 'icon',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '73%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'medium',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '55%', 'y': '33%'}
                },
				{
                'type': 'text',
                'content': 'representation',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '68%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'simulacrum',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '68%', 'y': '58%'}
                },
				{
                'type': 'text',
                'content': 'evidence',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '58%', 'y': '55%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '69%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'perspective',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '15%', 'y': '43%'}
                },
				{
                'type': 'text',
                'content': 'temporality',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '15%', 'y': '32%'}
                },
				{
                'type': 'text',
                'content': 'referent',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '45%', 'y': '21%'}
                },
				{
                'type': 'text',
                'content': 'dimension',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '2%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'composition',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '8%', 'y': '19%'}
                },
				{
                'type': 'text',
                'content': 'specificity',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '8%', 'y': '9%'}
                },
				{
                'type': 'text',
                'content': 'fetish',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '8%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'milieu',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '18%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'spectacle',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '16%', 'y': '82%'}
                },
				{
                'type': 'text',
                'content': 'realm',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '16%', 'y': '79%'}
                },
				{
                'type': 'text',
                'content': 'absence',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '16%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '67%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '68%', 'y': '7%'}
                },
				{
                'type': 'text',
                'content': 'obliqueness',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '45%', 'y': '80%'}
                },
				{
                'type': 'text',
                'content': 'paradigm',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '45%', 'y': '1%'}
                },
				{
                'type': 'text',
                'content': 'appropriate',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '36%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'interpretation',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '25%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'intervention',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '25%', 'y': '53%'}
                },
				{
                'type': 'text',
                'content': 'construction',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '29%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'connotation',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '26%', 'y': '64%'}
                },
				{
                'type': 'text',
                'content': 'explorationn',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '22%', 'y': '59%'}
                },
				{
                'type': 'text',
                'content': 'contradiction',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '70%', 'y': '17%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '70%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'limitation',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '60%', 'y': '16%'}
                },
				{
                'type': 'text',
                'content': 'symbol',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '56%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'allegory',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '10%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'meaning',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '10%', 'y': '54%'}
                },
				{
                'type': 'text',
                'content': 'contingent',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '2%', 'y': '61%'}
                }
	],
				'terms4': [
                {
                'type': 'text',
				'next': 'terms5',
                'content': 'theory',
                'position': {'x': '45%', 'y': '45%'}
                },
                {
                'type': 'text',
                'content': 'practice',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '44%', 'y': '36%'}
                },
				{
                'type': 'text',
                'content': 'dialogue',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '24%', 'y': '26%'}
                },
				{
                'type': 'text',
                'content': 'discourse',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '54%', 'y': '42%'}
                },
				{
                'type': 'text',
                'content': 'gesture',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '64%', 'y': '62%'}
                },
				{
                'type': 'text',
                'content': 'index',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '79%', 'y': '35%'}
                },
				{
                'type': 'text',
                'content': 'signifier',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '53%', 'y': '47%'}
                },
				{
                'type': 'text',
                'content': 'signifier',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '53%', 'y': '48%'}
                },
				{
                'type': 'text',
                'content': 'icon',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '73%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'medium',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '55%', 'y': '33%'}
                },
				{
                'type': 'text',
                'content': 'representation',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '68%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'simulacrum',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '68%', 'y': '58%'}
                },
				{
                'type': 'text',
                'content': 'evidence',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '58%', 'y': '55%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '69%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'perspective',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '15%', 'y': '43%'}
                },
				{
                'type': 'text',
                'content': 'temporality',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '15%', 'y': '32%'}
                },
				{
                'type': 'text',
                'content': 'referent',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '45%', 'y': '21%'}
                },
				{
                'type': 'text',
                'content': 'dimension',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '2%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'composition',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '8%', 'y': '19%'}
                },
				{
                'type': 'text',
                'content': 'specificity',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '8%', 'y': '9%'}
                },
				{
                'type': 'text',
                'content': 'fetish',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '8%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'milieu',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '18%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'spectacle',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '16%', 'y': '82%'}
                },
				{
                'type': 'text',
                'content': 'realm',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '16%', 'y': '79%'}
                },
				{
                'type': 'text',
                'content': 'absence',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '16%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '67%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '68%', 'y': '7%'}
                },
				{
                'type': 'text',
                'content': 'obliqueness',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '45%', 'y': '80%'}
                },
				{
                'type': 'text',
                'content': 'paradigm',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '45%', 'y': '1%'}
                },
				{
                'type': 'text',
                'content': 'appropriate',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '36%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'interpretation',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '25%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'intervention',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '25%', 'y': '53%'}
                },
				{
                'type': 'text',
                'content': 'construction',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '29%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'connotation',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '26%', 'y': '64%'}
                },
				{
                'type': 'text',
                'content': 'explorationn',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '22%', 'y': '59%'}
                },
				{
                'type': 'text',
                'content': 'contradiction',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '70%', 'y': '17%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '70%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'limitation',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '60%', 'y': '16%'}
                },
				{
                'type': 'text',
                'content': 'symbol',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '56%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'allegory',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '10%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'meaning',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '10%', 'y': '54%'}
                },
				{
                'type': 'text',
                'content': 'contingent',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '2%', 'y': '61%'}
                },
				{
                'type': 'text',
                'content': 'desire',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '2%', 'y': '13%'}
                },
				{
                'type': 'text',
                'content': 'dynamic',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '1%', 'y': '2%'}
                },
				{
                'type': 'text',
                'content': 'interrogation',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '70%', 'y': '0%'}
                },
				{
                'type': 'text',
                'content': 'interdisciplinary',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '25%', 'y': '14%'}
                },
				{
                'type': 'text',
                'content': 'configuration',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '25%', 'y': '0%'}
                },
				{
                'type': 'text',
                'content': 'exercise',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '1%', 'y': '45%'}
                },
				{
                'type': 'text',
                'content': 'opposition',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '68%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'contemplation',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '50%', 'y': '72%'}
                },
				{
                'type': 'text',
                'content': 'exactitude',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '1%', 'y': '83%'}
                },
				{
                'type': 'text',
                'content': 'ramification',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '1%', 'y': '78%'}
                },
				{
                'type': 'text',
                'content': 'juxtaposition',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '43%', 'y': '60%'}
                },
				{
                'type': 'text',
                'content': 'participatory',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '35%', 'y': '28%'}
                },
				{
                'type': 'text',
                'content': 'abstraction',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '27%', 'y': '40%'}
                },
				{
                'type': 'text',
                'content': 'spatial',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '1%', 'y': '1%'}
                },
				{
                'type': 'text',
                'content': 'phobia',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '48%', 'y': '21%'}
                },
				{
                'type': 'text',
                'content': 'causality',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '51%', 'y': '21%'}
                },
				{
                'type': 'text',
                'content': 'historicized',
				'next': 'terms5',
				'color': 'black',
                'position': {'x': '56%', 'y': '21%'}
                }
	],
		
		
				'terms5': [
                {
                'type': 'text',
				'next': 'terms6',
                'content': 'theory',
                'position': {'x': '45%', 'y': '45%'}
                },
                {
                'type': 'text',
                'content': 'practice',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '44%', 'y': '36%'}
                },
				{
                'type': 'text',
                'content': 'dialogue',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '24%', 'y': '26%'}
                },
				{
                'type': 'text',
                'content': 'discourse',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '54%', 'y': '42%'}
                },
				{
                'type': 'text',
                'content': 'gesture',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '64%', 'y': '62%'}
                },
				{
                'type': 'text',
                'content': 'index',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '79%', 'y': '35%'}
                },
				{
                'type': 'text',
                'content': 'signifier',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '53%', 'y': '47%'}
                },
				{
                'type': 'text',
                'content': 'icon',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '73%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'medium',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '55%', 'y': '33%'}
                },
				{
                'type': 'text',
                'content': 'representation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'simulacrum',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '58%'}
                },
				{
                'type': 'text',
                'content': 'evidence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '58%', 'y': '55%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '69%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'perspective',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '15%', 'y': '43%'}
                },
				{
                'type': 'text',
                'content': 'temporality',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '15%', 'y': '32%'}
                },
				{
                'type': 'text',
                'content': 'referent',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '45%', 'y': '21%'}
                },
				{
                'type': 'text',
                'content': 'dimension',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '2%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'composition',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '8%', 'y': '19%'}
                },
				{
                'type': 'text',
                'content': 'specificity',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '8%', 'y': '9%'}
                },
				{
                'type': 'text',
                'content': 'fetish',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '8%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'milieu',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '18%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'spectacle',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '16%', 'y': '82%'}
                },
				{
                'type': 'text',
                'content': 'realm',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '16%', 'y': '79%'}
                },
				{
                'type': 'text',
                'content': 'absence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '16%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '52%', 'y': '48%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '51%', 'y': '9%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '52%', 'y': '48%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '51%', 'y': '49%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '44%', 'y': '80%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '43%', 'y': '79%'}
                },
				{
                'type': 'text',
                'content': 'obliqueness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '42%', 'y': '78%'}
                },
				{
                'type': 'text',
                'content': 'paradigm',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '41%', 'y': '77%'}
                },
				{
                'type': 'text',
                'content': 'appropriate',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '38%', 'y': '76%'}
                },
				{
                'type': 'text',
                'content': 'interpretation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '37%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'intervention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '36%', 'y': '74%'}
                },
				{
                'type': 'text',
                'content': 'construction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '36%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'connotation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '46%', 'y': '64%'}
                },
				{
                'type': 'text',
                'content': 'explorationn',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '32%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '67%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '7%'}
                },
				{
                'type': 'text',
                'content': 'obliqueness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '45%', 'y': '80%'}
                },
				{
                'type': 'text',
                'content': 'paradigm',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '45%', 'y': '1%'}
                },
				{
                'type': 'text',
                'content': 'appropriate',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '36%', 'y': '5%'}
                },
				{
                'type': 'text',
                'content': 'interpretation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '25%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'intervention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '25%', 'y': '53%'}
                },
				{
                'type': 'text',
                'content': 'construction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '29%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'connotation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '26%', 'y': '64%'}
                },
				{
                'type': 'text',
                'content': 'explorationn',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '22%', 'y': '59%'}
                },
				{
                'type': 'text',
                'content': 'contradiction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '70%', 'y': '17%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '70%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'limitation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '60%', 'y': '16%'}
                },
				{
                'type': 'text',
                'content': 'symbol',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '56%', 'y': '27%'}
                },
				
				
				
				
				
				{
                'type': 'text',
                'content': 'allegory',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '9%'}
                },
				{
                'type': 'text',
                'content': 'meaning',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '11%'}
                },
				{
                'type': 'text',
                'content': 'contingent',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '13%'}
                },
				{
                'type': 'text',
                'content': 'desire',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '17%'}
                },
				{
                'type': 'text',
                'content': 'dynamic',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '20%'}
                },
				{
                'type': 'text',
                'content': 'interrogation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '25%'}
                },
				{
                'type': 'text',
                'content': 'interdisciplinary',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '65%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'configuration',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '66%', 'y': '30%'}
                },
				{
                'type': 'text',
                'content': 'exercise',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '35%'}
                },
				{
                'type': 'text',
                'content': 'opposition',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'contemplation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '69%', 'y': '42%'}
                },
				{
                'type': 'text',
                'content': 'exactitude',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '65%', 'y': '45%'}
                },
				{
                'type': 'text',
                'content': 'ramification',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '65%', 'y': '51%'}
                },
				{
                'type': 'text',
                'content': 'juxtaposition',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '64%', 'y': '60%'}
                },
				{
                'type': 'text',
                'content': 'participatory',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '65%', 'y': '63%'}
                },
				{
                'type': 'text',
                'content': 'abstraction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '66%', 'y': '67%'}
                },
				{
                'type': 'text',
                'content': 'spatial',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '55%', 'y': '71%'}
                },
				{
                'type': 'text',
                'content': 'phobia',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '72%'}
                },
				{
                'type': 'text',
                'content': 'causality',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '61%', 'y': '73%'}
                },
				{
                'type': 'text',
                'content': 'historicized',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '56%', 'y': '81%'}
               },
				 {
                'type': 'text',
				'next': 'terms6',
                'content': 'theory',
                'position': {'x': '0%', 'y': '5%'}
                },
                {
                'type': 'text',
                'content': 'practice',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '0%', 'y': '8%'}
                },
				{
                'type': 'text',
                'content': 'dialogue',
				'next': 'terms4',
				'color': 'black',
                'position': {'x': '2%', 'y': '9%'}
                },
				{
                'type': 'text',
                'content': 'discourse',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '2%', 'y': '11%'}
                },
				{
                'type': 'text',
                'content': 'gesture',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '4%', 'y': '12%'}
                },
				{
                'type': 'text',
                'content': 'index',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '1%', 'y': '14%'}
                },
				{
                'type': 'text',
                'content': 'signifier',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '1%', 'y': '20%'}
                },
				{
                'type': 'text',
                'content': 'icon',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '3%', 'y': '22%'}
                },
				{
                'type': 'text',
                'content': 'medium',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '25%'}
                },
				{
                'type': 'text',
                'content': 'representation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '2%', 'y': '30%'}
                },
				{
                'type': 'text',
                'content': 'simulacrum',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '3%', 'y': '31%'}
                },
				{
                'type': 'text',
                'content': 'evidence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '6%', 'y': '45%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '9%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'perspective',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '52%'}
                },
				{
                'type': 'text',
                'content': 'temporality',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '54%'}
                },
				{
                'type': 'text',
                'content': 'referent',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '59%'}
                },
				{
                'type': 'text',
                'content': 'dimension',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '2%', 'y': '61%'}
                },
				{
                'type': 'text',
                'content': 'composition',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'specificity',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '8%', 'y': '79%'}
                },
				{
                'type': 'text',
                'content': 'fetish',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '42%', 'y': '69%'}
                },
				{
                'type': 'text',
                'content': 'milieu',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '59%'}
                },
				{
                'type': 'text',
                'content': 'spectacle',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '2%', 'y': '82%'}
                },
				{
                'type': 'text',
                'content': 'realm',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '4%', 'y': '62%'}
                },
				{
                'type': 'text',
                'content': 'absence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '6%', 'y': '75%'}
                },
				{
                'type': 'text',
                'content': 'consciousness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '6%', 'y': '48%'}
                },
				{
                'type': 'text',
                'content': 'coherence',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '3%', 'y': '47%'}
                },
				{
                'type': 'text',
                'content': 'obliqueness',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '46%'}
                },
				{
                'type': 'text',
                'content': 'paradigm',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '1%', 'y': '45%'}
                },
				{
                'type': 'text',
                'content': 'appropriate',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '3%', 'y': '44%'}
                },
				{
                'type': 'text',
                'content': 'interpretation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '1%', 'y': '50%'}
                },
				{
                'type': 'text',
                'content': 'intervention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '5%', 'y': '53%'}
                },
				{
                'type': 'text',
                'content': 'construction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '4%', 'y': '42%'}
                },
				{
                'type': 'text',
                'content': 'connotation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '6%', 'y': '44%'}
                },
				{
                'type': 'text',
                'content': 'explorationn',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '12%', 'y': '31%'}
                },
				{
                'type': 'text',
                'content': 'contradiction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '70%', 'y': '17%'}
                },
				{
                'type': 'text',
                'content': 'convention',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '70%', 'y': '16%'}
                },
				{
                'type': 'text',
                'content': 'limitation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '65%', 'y': '15%'}
                },
				{
                'type': 'text',
                'content': 'symbol',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '56%', 'y': '14%'}
                },
				{
                'type': 'text',
                'content': 'allegory',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '60%', 'y': '13%'}
                },
				{
                'type': 'text',
                'content': 'meaning',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '10%', 'y': '54%'}
                },
				{
                'type': 'text',
                'content': 'contingent',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '2%', 'y': '61%'}
                },
				{
                'type': 'text',
                'content': 'desire',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '75%', 'y': '36%'}
                },
				{
                'type': 'text',
                'content': 'dynamic',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '73%', 'y': '37%'}
                },
				{
                'type': 'text',
                'content': 'interrogation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '72%', 'y': '38%'}
                },
				{
                'type': 'text',
                'content': 'interdisciplinary',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '68%', 'y': '39%'}
                },
				{
                'type': 'text',
                'content': 'configuration',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '35%', 'y': '28%'}
                },
				{
                'type': 'text',
                'content': 'exercise',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '35%', 'y': '27%'}
                },
				{
                'type': 'text',
                'content': 'opposition',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '35%', 'y': '26%'}
                },
				{
                'type': 'text',
                'content': 'contemplation',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '35%', 'y': '25%'}
                },
				{
                'type': 'text',
                'content': 'exactitude',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '35%', 'y': '24%'}
                },
				{
                'type': 'text',
                'content': 'ramification',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '1%', 'y': '78%'}
                },
				{
                'type': 'text',
                'content': 'juxtaposition',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '43%', 'y': '60%'}
                },
				{
                'type': 'text',
                'content': 'participatory',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '35%', 'y': '28%'}
                },
				{
                'type': 'text',
                'content': 'abstraction',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '36%', 'y': '36%'}
                },
				{
                'type': 'text',
                'content': 'spatial',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '34%', 'y': '11%'}
                },
				{
                'type': 'text',
                'content': 'phobia',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '48%', 'y': '31%'}
                },
				{
                'type': 'text',
                'content': 'causality',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '18%', 'y': '61%'}
                },
				{
                'type': 'text',
                'content': 'historicized',
				'next': 'terms6',
				'color': 'black',
                'position': {'x': '26%', 'y': '61%'}
                }
	],
		'terms6': [
                {
                'type': 'image',
                'next': 'ah',
                'content': 'terms5.jpg',
				'width': '85%',
                'position': {'x': '6%', 'y': '5%'}
                }
	],
		'ah': [
                {
                'type': 'image',
                'next': 'oils',
                'content': 'ah.jpg',
				'width': '85%',
                'position': {'x': '6%', 'y': '5%'}
                }
	],
		'breathingdeeply': [
                {
                'type': 'image',
                'next': '2_1',
                'content': 'breathingdeeply.jpg',
                'position': {'x': '25%', 'y': '15%'}
                }
	],
		'universe2': [
                {
                'type': 'image',
                'next': 'drawers',
                'content': 'universe.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],
		'drawers': [
                {
                'type': 'image',
                'next': 'hermann',
                'content': 'drawers.jpg',
                'position': {'x': '15%', 'y': '8%'}
                }
	],
		'hairdown': [
                {
                'type': 'image',
                'next': 'bodies5',
                'content': 'hair_down.jpg',
                'position': {'x': '5%', 'y': '40%'}
                },
				{
                'type': 'image',
                'next': 'coordinates',
                'content': 'carpet.jpg',
                'position': {'x': '45%', 'y': '10%'}
                }
	],
		'window': [
                {
                'type': 'image',
                'next': 'destination',
                'content': 'page8_img2.jpg',
                'position': {'x': '5%', 'y': '12%'}
                },
				{
                'type': 'image',
                'next': 'colordots',
                'content': 'intrusion.jpg',
                'position': {'x': '45%', 'y': '32%'}
                }
	],
		'soles': [
                {
                'type': 'image',
                'next': 'relation',
                'content': 'soles.jpg',
                'position': {'x': '5%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'sign',
                'content': 'grass.jpg',
                'position': {'x': '55%', 'y': '5%'}
                }
	],
		'sand': [			
				{
                'type': 'image',
                'next': 'skysandland',
                'content': 'sand.jpg',
                'position': {'x': '37%', 'y': '35%'}
                }
	],
		'cushion2': [
                {
                'type': 'image',
                'next': 'wall',
                'content': 'cushion.jpg',
                'position': {'x': '5%', 'y': '12%'}
                }
	],
		'misc': [
                {
                'type': 'image',
                'next': 'gestalt',
                'content': 'bundt.jpg',
                'position': {'x': '7%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'urinary.jpg',
                'position': {'x': '47%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'nothing1',
                'content': 'incense2.jpg',
                'position': {'x': '62%', 'y': '5%'}
                },
				{
                'type': 'image',
                'next': 'chad',
                'content': 'eye.jpg',
                'position': {'x': '52%', 'y': '54%'}
                },
				{
                'type': 'image',
                'next': 'brain',
                'content': 'cube.jpg',
                'position': {'x': '20%', 'y': '56%'}
                }
	],
		'brain': [
                {
                'type': 'image',
                'next': 'brain2',
				'width': '100%',
                'content': 'brain.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'brain2': [
                {
                'type': 'image',
                'next': 'spine',
				'width': '100%',
                'content': 'brain2.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'gestalt': [
                {
                'type': 'image',
                'next': 'coordinates',
                'content': 'gestalt1.jpg',
                'position': {'x': '45%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'lattice',
                'content': 'gestalt2.jpg',
                'position': {'x': '30%', 'y': '55%'}
                },
				{
                'type': 'image',
                'next': 'list',
                'content': 'gestalt3.jpg',
                'position': {'x': '60%', 'y': '55%'}
                }
	],
		'list': [
                {
                'type': 'image',
                'next': 'landsandsky',
				'content': 'list.jpg',
                'position': {'x': '30%', 'y': '10%'}
                }
	],
		'knitting': [
				{
                'type': 'text',
                'content': '[[sheet2|P2, k4, (p2, k2) twice, p2, rep from * to last 6 sts, end k4, p2. P2, k4, (p2, k2) twice, p2, rep from * to last 6 sts, end k4, p2. K the k sts and p the p sts as they face you. P2, * CB4, p2,CB2, p2, k2, p2, rep from * to last 6 sts, end CB4, p2. K the k sts and p the p sts as they face you. P2, * k4, p2, CB2, p2, k2, p2, rep from * to last 6 sts, end k4, p2. P2, k4, p2, CF4, k2, rep from * to last 8 sts, end p2, k4, p2. K the k sts and p the p sts as they face you. P2, CB4, p2, k2, CB4, rep from * to last 8 sts, end p2, CB4, p2. K the k sts and p the p sts as they face you. K2, p4, TF4, TB4, k2, p2, k2, p4, TB4, TF4, p2 twice, k2. K the k sts and p the p sts as they face you. K2, p6, * CF4, TB4, p2, TF4, TB4, p4, TF4 *, p2, rep once more, end k2. K2, p6, * k2, CB4, p6, CB4, p8, k2 *, p2, rep between *s once more, end k2. K2, p6, * CF4, TF4, p2, TB4, TF4, p4, TB4 *, p2, rep between *s once more, end k2. K2, p4, TB4, TF4, k2, p2, k2, p4, TF4, TB4, p2 twice, k2. K2, p2, TB4, p4, CB4, p2, TF4, p4, CB4, p2 twice, p2, k2. K2, p2, k2, p4, TB4, TF4, p2, TF4, TB4, k2, p2 twice, p2, k2. K2, p2, TF4, TB4, p4, TF4, p2, CF4, TB4, p2 twice, p2, k2. K2, p4, CF4, p8, k2, p2, k2, CB4, p6 twice, k2. K2, p2, TB4, TF4, p4, TB4, p2, CF4, TF4, p2 twice, p2, k2. K2, p2, k2, p4, TF4, TB4, p2, TB4, TF4, k2, p2 twice, p2, k2. K2, p2, TF4, p4, CB4, p2, TB4, p4, CB4, p2 twice, p2, k2.]]',
				'width': '467px',
                'position': {'x': '25%', 'y': '100px'}
                }
	],
		'coordinates': [
				{
                'type': 'text',
                'content': '[[latitude|42.270783]], [[longitude|-85.629866]]',
				'width': '600px',
                'position': {'x': '50px', 'y': '490px'}
                },
				{
                'type': 'image',
                'next': 'tree2',
                'content': 'plane.jpg',
                'position': {'x': '40%', 'y': '25px'}
                }
	],
		'latitude': [
                {
                'type': 'image',
                'next': 'latlong',
                'content': 'latitude.jpg',
				'width': '100%',
                'position': {'x': '0%', 'y': '60px'}
                }
	],
		'longitude': [
                {
                'type': 'image',
                'next': 'latlong',
                'content': 'longitude.jpg',
				'width': '100%',
                'position': {'x': '0%', 'y': '55px'}
                }
	],
		
		'latlong': [
                {
                'type': 'image',
                'next': 'moons',
                'content': 'latlong.jpg',
				'width': '100%',
                'position': {'x': '0%', 'y': '60px'}
                }
	],
		'chad': [
                {
                'type': 'image',
                'next': 'hands',
                'content': 'ch.jpg',
                'position': {'x': '20%', 'y': '25%'}
                }
	],
		'nothing1': [
                {
                'type': 'image',
                'next': 'nothing2',
                'content': 'nothing1.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'nothing2': [
                {
                'type': 'image',
                'next': 'nothing3',
                'content': 'nothing2.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'nothing3': [
                {
                'type': 'image',
                'next': 'nothing4',
                'content': 'nothing3.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'nothing4': [
                {
                'type': 'image',
                'next': 'nothingsomething',
                'content': 'nothing4.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'nothingsomething': [
                {
                'type': 'image',
                'next': 'red',
                'content': 'nothingsomething.jpg',
                'position': {'x': '54px', 'y': '54px'}
                }
	],
		'red': [
                {
                'type': 'image',
                'next': 'green',
                'content': 'red.jpg',
                'position': {'x': '54px', 'y': '54px'}
                }
	],
		
		'green': [
                {
                'type': 'image',
                'next': 'redgreen',
                'content': 'green.jpg',
                'position': {'x': '420px', 'y': '54px'}
                }
	],
		'redgreen': [
                {
                'type': 'image',
                'next': 'nothing1',
                'content': 'green.jpg',
                'position': {'x': '420px', 'y': '54px'}
                },
				{
                'type': 'image',
                'next': 'nothing5',
                'content': 'red.jpg',
                'position': {'x': '54px', 'y': '54px'}
                }
	],
		'nothing5': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'nothing1.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'sheet2': [
                {
                'type': 'image',
                'next': 'yes',
                'content': 'sheet2.jpg',
                'position': {'x': '40%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'misc',
                'content': 'cube2.jpg',
                'position': {'x': '5%', 'y': '60%'}
                }
	],
		'satin_sweater': [
                {
                'type': 'image',
                'next': 'indivisible',
                'content': 'sweater2.jpg',
                'position': {'x': '10%', 'y': '25%'}
                },
				{
                'type': 'image',
                'next': 'cushion2',
                'content': 'satin2.jpg',
                'position': {'x': '50%', 'y': '25%'}
                }
	],
		'emergency': [
                {
                'type': 'image',
                'next': 'uta_snowed',
                'content': 'emergency.jpg',
                'position': {'x': '5%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'oils',
                'content': 'oil2.jpg',
                'position': {'x': '55%', 'y': '50%'}
                }
	],
		'yolk2': [
                {
                'type': 'image',
                'next': 'tree2',
                'content': 'yolk.jpg',
                'position': {'x': '20%', 'y': '5%'}
                }
	],
		'yolk3': [
                {
                'type': 'image',
                'next': 'thelongest',
                'content': 'yolk.jpg',
                'position': {'x': '20%', 'y': '5%'}
                }
	],
		
		'ceiling1': [
                {
                'type': 'image',
                'next': 'ceiling2',
                'content': 'ceiling1.jpg',
                'position': {'x': '10%', 'y': '10%'}
                }
	],
	
		'ceiling2': [
                {
                'type': 'image',
                'next': 'ceiling3',
                'content': 'ceiling2.jpg',
                'position': {'x': '10%', 'y': '10%'}
                }
	],
		'ceiling3': [
                {
                'type': 'image',
                'next': 'ground2',
                'content': 'ceiling3.jpg',
                'position': {'x': '10%', 'y': '10%'}
                }
	],
		'ground2': [
                {
                'type': 'image',
                'next': 'ground3',
                'content': 'doorway2.jpg',
                'position': {'x': '9%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'ground3',
                'content': 'ground2.jpg',
                'position': {'x': '51%', 'y': '15%'}
                }
	],
		'ground3': [
                {
                'type': 'image',
                'next': 'ground4',
                'content': 'fulcrum2.jpg',
                'position': {'x': '9%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'ground4',
                'content': 'ground2.jpg',
                'position': {'x': '51%', 'y': '15%'}
                }
	],
		'ground4': [
                {
                'type': 'image',
                'next': 'ground5',
                'content': 'fulcrum2.jpg',
                'position': {'x': '9%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'ground5',
                'content': 'train.jpg',
                'position': {'x': '51%', 'y': '15%'}
                }
	],
		'ground5': [
                {
                'type': 'image',
                'next': 'moment_sheet',
                'content': 'rightangle.jpg',
                'position': {'x': '9%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'pressurepleasure',
                'content': 'train.jpg',
                'position': {'x': '51%', 'y': '15%'}
                }
	],
		'colordots': [
                {
                'type': 'image',
                'next': 'sign',
                'content': 'colordot1.jpg',
                'position': {'x': '10%', 'y': '75%'}
                },
				{
                'type': 'image',
                'next': 'devotion3',
                'content': 'colordot2.jpg',
                'position': {'x': '30%', 'y': '50%'}
                },
				{
                'type': 'image',
                'next': 'yes2',
                'content': 'colordot3.jpg',
                'position': {'x': '55%', 'y': '60%'}
                },
				{
                'type': 'image',
                'next': 'OH_wall_arm_web',
                'content': 'colordot4.jpg',
                'position': {'x': '15%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'misc',
                'content': 'colordot5.jpg',
                'position': {'x': '80%', 'y': '45%'}
                },
				{
                'type': 'image',
                'next': 'intobed',
                'content': 'colordot6.jpg',
                'position': {'x': '60%', 'y': '10%'}
                }
	],
		'yes2': [
                {
                'type': 'image',
                'next': 'proximity',
                'content': 'satin.jpg',
                'position': {'x': '55%', 'y': '52%'}
                },
				{
                'type': 'image',
                'next': 'mushroom',
                'content': 'ocean.jpg',
                'position': {'x': '8%', 'y': '10%'}
	            }
	],
		'OH_wall_arm_web': [
                {
                'type': 'image',
                'next': 'destination',
                'content': 'OH2.jpg',
                'position': {'x': '15%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'icecream',
                'content': 'arm2.jpg',
                'position': {'x': '15%', 'y': '50%'}
                },
				{
                'type': 'image',
                'next': 'ah',
                'content': 'wall2.jpg',
                'position': {'x': '55%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'mushroom',
                'content': 'web2.jpg',
                'position': {'x': '55%', 'y': '50%'}
                }
	],
		'hair2': [
                {
                'type': 'image',
                'next': 'yes',
                'content': 'hair2.jpg',
                'position': {'x': '10%', 'y': '10%'}
                }
	],
		'sign': [
                {
                'type': 'image',
                'next': 'knitting',
                'content': 'sign.jpg',
                'position': {'x': '12%', 'y': '12%'}
                }
	],
		'x': [
                {
                'type': 'image',
                'next': 'chad',
                'content': 'x2.jpg',
                'position': {'x': '50%', 'y': '48%'}
                },
				{
                'type': 'image',
                'next': 'knitting',
                'content': 'rat.jpg',
                'position': {'x': '10%', 'y': '10%'}
                }
	],
		'brighter': [
                {
                'type': 'image',
                'next': 'sand',
                'content': 'brighter.jpg',
                'position': {'x': '12%', 'y': '5%'}
                }
	],
		'bent': [
                {
                'type': 'image',
                'next': 'light_reliance',
                'content': 'bentlight.jpg',
                'position': {'x': '9%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'hairdown',
                'content': 'bentbody.jpg',
                'position': {'x': '51%', 'y': '15%'}
                }
	],
		'groundd': [
                {
                'type': 'image',
                'next': 'twotrees',
                'content': 'ground.jpg',
                'position': {'x': '20%', 'y': '10%'}
                }
	],
		'seaclouds2': [
				{
                'type': 'image',
                'next': 'gestalt',
                'content': 'seaclouds.jpg',
                'position': {'x': '180px', 'y': '80px'}
                },
				{
                'type': 'image',
                'next': 'colordots',
                'content': 'clouds.jpg',
                'position': {'x': '726px', 'y': '280px'}
                }
	],			
		'skysandland': [
                {
                'type': 'image',
                'next': 'moment2',
                'content': 'sky.jpg',
                'position': {'x': '10%', 'y': '35%'}
                },			
				{
                'type': 'image',
                'next': 'drawers',
                'content': 'sand.jpg',
                'position': {'x': '37%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'chad',
                'content': 'land.jpg',
                'position': {'x': '60%', 'y': '35%'}
                }
	],
		'moment2': [
                {
                'type': 'image',
                'next': 'twoways',
                'content': 'moment2.jpg',
                'position': {'x': '15%', 'y': '5%'}
                }
	],
		'moons': [
                {
                'type': 'image',
                'next': 'window2',
                'content': 'moons.jpg',
                'position': {'x': '15%', 'y': '6%'}
                }
	],
		'window2': [
                {
                'type': 'image',
                'next': 'apple',
                'content': 'window.jpg',
                'position': {'x': '10%', 'y': '38%'}
                },
				{
                'type': 'image',
                'next': 'antenna',
                'content': 'window2.jpg',
                'position': {'x': '55%', 'y': '5%'}
                }
	],
		'oils': [
                {
                'type': 'image',
                'next': 'drawers',
                'content': 'oil.jpg',
                'position': {'x': '10%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'entropy',
                'content': 'cabbage.jpg',
                'position': {'x': '55%', 'y': '37%'}
                }
	],
		'yolk4': [
                {
                'type': 'image',
                'next': 'over_humps',
                'content': 'yolk.jpg',
                'position': {'x': '20%', 'y': '5%'}
                }
	],
		'tree3': [
                {
                'type': 'image',
                'next': 'rocks_bd',
                'content': 'tree2.jpg',
                'position': {'x': '15%', 'y': '28%'}
                }
	],
		'entropy': [
                {
				'type': 'video',
				'next': 'destination',
				'content': 'entropy.mov',
				'width': '300',
				'height': '200',
                'position': {'x': '21%', 'y': '10%'}
				},
				{
                'type': 'image',
                'next': 'frame',
                'content': 'incense3.jpg',
                'position': {'x': '55%', 'y': '48%'}
                }
	],
		'rocks_bd': [
                {
                'type': 'image',
                'next': 'tree1',
                'content': 'rocks.jpg',
                'position': {'x': '55%', 'y': '25%'}
                },
				{
                'type': 'image',
                'next': 'reliance',
                'content': 'bd.jpg',
                'position': {'x': '15%', 'y': '25%'}
                }
	],
		'reliance': [
                {
                'type': 'image',
                'next': 'circles',
				'width': '100%',
                'content': 'reliance2.jpg',
                'position': {'x': '0%', 'y': '0%'}
                }
	],
		'history': [
                {
                'type': 'image',
                'next': 'wall',
                'content': 'touching1.jpg',
                'position': {'x': '20%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'wind',
                'content': 'touching2.jpg',
                'position': {'x': '40%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'misc',
                'content': 'touching3.jpg',
                'position': {'x': '60%', 'y': '10%'}
                },
				{
                'type': 'image',
                'next': 'push_web',
                'content': 'touching4.jpg',
                'position': {'x': '20%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'pressurepleasure',
                'content': 'touching5.jpg',
                'position': {'x': '40%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'circles',
                'content': 'touching6.jpg',
                'position': {'x': '60%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'hairdown',
                'content': 'touching7.jpg',
                'position': {'x': '20%', 'y': '60%'}
                },
				{
                'type': 'image',
                'next': '2_1',
                'content': 'touching8.jpg',
                'position': {'x': '40%', 'y': '60%'}
                },
				{
                'type': 'image',
                'next': 'portland_slice',
                'content': 'touching9.jpg',
                'position': {'x': '60%', 'y': '60%'}
                },
				{
                'type': 'text',
                'next': 'history',
                'content': 'Touching History, 4 Billion Years Ago to Present',
				'color': 'black',
                'position': {'x': '30%', 'y': '80%'}
                }	
	],
		'plastic': [
                {
                'type': 'image',
                'next': 'window',
                'content': 'plastic1.jpg',
                'position': {'x': '10%', 'y': '30%'}
                },
				{
                'type': 'image',
                'next': 'satin_sweater',
                'content': 'plastic2.jpg',
                'position': {'x': '50%', 'y': '30%'}
                }
	],
		'lights': [
                {
                'type': 'image',
                'next': 'everythingiseverything',
                'content': 'lightfixture.jpg',
                'position': {'x': '15%', 'y': '15%'}
                },
				{
                'type': 'image',
                'next': 'intobed',
                'content': 'lightbulb.jpg',
                'position': {'x': '35%', 'y': '65%'}
                },
				{
                'type': 'image',
                'next': 'devotion3',
                'content': 'nothing.jpg',
                'position': {'x': '60%', 'y': '18%'}
                }
	],
		'lattice': [
                {
                'type': 'image',
                'next': 'circles',
                'content': 'lattice.jpg',
                'position': {'x': '10%', 'y': '0%'}
                }
	],
		'puddle_tape': [
                {
                'type': 'image',
                'next': 'window',
                'content': 'puddle.jpg',
                'position': {'x': '5%', 'y': '5%'}
                },
				{
                'type': 'image',
                'next': 'oils',
                'content': 'tape.jpg',
                'position': {'x': '55%', 'y': '50%'}
                }
	],
		'intelligence': [
                 {
                'type': 'text',
                'content': '[[tree1|when an image changes the observer must know whether the change is due to the object itself or to the context or to both - otherwise he understands neither the object nor its surroundings. intertwined though the two appear, one can attempt to tease them apart, especially by watching the same object in different contexts and the same context acting on different objects.]]',
				'width': '540px',
                'position': {'x': '350px', 'y': '150px'}
                }
	],
		'clothes_branches': [
                {
                'type': 'image',
                'next': 'toe',
                'content': 'clothes.jpg',
                'position': {'x': '5%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'devotion_1',
                'content': 'branches.jpg',
                'position': {'x': '55%', 'y': '20%'}
                }
	],
		'spine': [
                 {
                'type': 'text',
                'content': '[[icecream|spine uncurling against wall]]',
				'width': '200px',
                'position': {'x': '170px', 'y': '270px'}
                }
	],
		'dogs_dance': [
                {
                'type': 'image',
                'next': 'universe',
                'content': 'dogs.jpg',
                'position': {'x': '5%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'yes',
                'content': 'dance.jpg',
                'position': {'x': '65%', 'y': '20%'}
                }
	],
		'relation': [
                {
                'type': 'text',
                'content': '[[OH_wall_arm_web|more generally, to]] see things [[pachelbel|in relation]]',
				'width': '600px',
                'position': {'x': '170px', 'y': '270px'}
                }
	],
		'pachelbel': [
				{
				'type': 'video',
				'next': 'intelligence',
				'content': 'pachelbel.mov',
				'width': '300',
				'height': '200',
                'position': {'x': '15%', 'y': '35%'}
				},
				{
				'type': 'video',
				'next': 'focus',
				'content': 'pachelbel.mov',
				'width': '300',
				'height': '200',
                'position': {'x': '55%', 'y': '35%'}
				}
	],
		'focus': [
                {
                'type': 'image',
                'next': 'circles',
                'content': 'focus.jpg',
                'position': {'x': '15%', 'y': '10%'}
                }
	],
		'frame': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'frame.jpg',
                'position': {'x': '15%', 'y': '10%'}
                }
	],
		'hands': [
   				{
                'type': 'image',
                'next': 'comparisons',
                'content': 'hands.jpg',
                'position': {'x': '15%', 'y': '40%'}
                },
				{
                'type': 'image',
                'next': 'comparisons',
                'content': 'heartplant.jpg',
                'position': {'x': '50%', 'y': '15%'}
                }
	],
		'comparisons': [
                {
                'type': 'text',
                'content': '[[OH_wall_arm_web|a series of comparisons]]',
				'width': '600px',
                'position': {'x': '520px', 'y': '120px'}
                }
	],
		'indivisible': [
                {
                'type': 'text',
                'content': '[[plastic|indi]][[oils|visible]]',
				'width': '600px',
                'position': {'x': '25%', 'y': '30%'}
                }
	],
		
}

;


never_come_from = {
	'entropy': true,
	'2_1': true,
	'wall': true,
	'init': true
}

never_go_to = {
	'init': true
}
