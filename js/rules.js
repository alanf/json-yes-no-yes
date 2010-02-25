rules = {
'terms1': [  {  'type': 'text',  'next': 'terms2',  'content': 'theory',  'color': 'red',  'position': {'x': '45%', 'y': '45%'}  }   ],
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
                'position': {'x': '750px', 'y': '280px'}
                },
                {
                'type': 'image',
                'next': 'destination',
                'content': 'dot.jpg',
                'position': {'x': '460px', 'y': '350px'}
                },
				{
                'type': 'image',
                'next': 'terms1',
                'content': 'dot.jpg',
                'position': {'x': '10px', 'y': '370px'}
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
                'content': '[[only1|only]] the [[yes|yes]] [[only2|only]] the [[yolk|now]]',
				'width': '90px',
                'position': {'x': '150px', 'y': '90px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'van_sanfran.jpg',
                'position': {'x': '50%', 'y': '20px'}
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
                'next': 'breathingdeeply',
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
                'next': 'exercisesin',
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
                'content': 'like [[start|breathing]] through [[start|everybody]]',
				'width': '290px',
                'position': {'x': '770px', 'y': '370px'}
                }
	],
			'intobed': [
                {
                'type': 'image',
                'next': 'start',
                'content': '22.jpg',
                'position': {'x': '20%', 'y': '15%'}
                }
	],
				'exercisesin': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'wisdom.jpg',
                'position': {'x': '15%', 'y': '150px'}
                },
				{
                'type': 'image',
                'next': 'exercisesin',
                'content': 'exercises.jpg',
                'position': {'x': '45%', 'y': '600px'}
                }
	],
				'24nights': [
				{
                'type': 'image',
                'next': 'devotion3',
                'content': '24_1.jpg',
                'position': {'x': '20%', 'y': '40px'}
                },
				{
                'type': 'image',
                'next': '2_1',
                'content': '24_2.jpg',
                'position': {'x': '20%', 'y': '185px'}
                },
				{
                'type': 'image',
                'next': 'light_reliance',
                'content': '24_3.jpg',
                'position': {'x': '20%', 'y': '330px'}
                },
				{
                'type': 'image',
                'next': 'hairdown_x',
                'content': '24_4.jpg',
                'position': {'x': '20%', 'y': '475px'}
                }
	],
				'devotion3': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'devotion3.jpg',
                'position': {'x': '10%', 'y': '3%'}
                }
	],
				'hermann': [
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann1.jpg',
                'position': {'x': '15%', 'y': '40px'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann2.jpg',
                'position': {'x': '15%', 'y': '400px'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann3.jpg',
                'position': {'x': '65%', 'y': '40px'}
                },
				{
                'type': 'image',
                'next': 'bodies5',
                'content': 'hermann4.jpg',
                'position': {'x': '65%', 'y': '400px'}
                }
	],
				'portland_slice': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'portland_slice_print.jpg',
                'position': {'x': '20%', 'y': '10%'}
                }
	],
				'bodies5': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'body1.jpg',
                'position': {'x': '15%', 'y': '40px'}
                },
				{
                'type': 'image',
                'next': 'past_future',
                'content': 'body6.jpg',
                'position': {'x': '15%', 'y': '400px'}
                },
				{
                'type': 'image',
                'next': 'twotrees',
                'content': 'body4.jpg',
                'position': {'x': '65%', 'y': '40px'}
                },
				{
                'type': 'image',
                'next': 'start',
                'content': 'body7.jpg',
                'position': {'x': '65%', 'y': '400px'}
                }
	],
				'2_1': [
                {
                'type': 'image',
                'next': 'devotion5',
                'content': '2_1.jpg',
                'position': {'x': '55%', 'y': '45%'}
                }
	],
				'light_reliance': [
				{
                'type': 'image',
                'next': 'start',
                'content': 'light.jpg',
                'position': {'x': '10%', 'y': '50px'}
                },
				{
                'type': 'image',
                'next': 'antenna',
                'content': 'reliance.jpg',
                'position': {'x': '65%', 'y': '450px'}
                }
	],
				'hairdown_x': [
                {
                'type': 'image',
                'next': 'start',
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
                'position': {'x': '40%', 'y': '10%'}
                }
	],
				'twotrees': [
                 {
                'type': 'text',
                'content': '[[tree1|0]]11011000110100101101011011001010010000001110100011101110101111001000000111010001110010011001010110010101110011001000000110001001100101011000110110111101101101011010010110111001100111001000001101111011011100110010[[tree2|1]]',
				'width': '100px',
                'position': {'x': '170px', 'y': '270px'}
                }
	],
				'past_future': [
				 {
                'type': 'text',
                'content': '[[start|past]] [[start|future]] selves',
				'width': '40px',
                'position': {'x': '50px', 'y': '370px'}
                }
	],
				'tree1': [
                {
                'type': 'image',
                'next': 'vent',
                'content': 'tree1.jpg',
                'position': {'x': '40%', 'y': '10%'}
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
                'position': {'x': '5%', 'y': '18%'}
                }
	],
				
				'thelongest': [
                {
                'type': 'image',
                'next': 'bark',
                'content': 'thelongest.jpg',
                'position': {'x': '0%', 'y': '0%'}
                },
                {
                'type': 'image',
                'next': 'invisible',
                'content': 'thelongest2.jpg',
                'position': {'x': '10%', 'y': '20%'}
                },
				{
                'type': 'image',
                'next': 'thelongest3',
                'content': 'thelongest3.jpg',
                'position': {'x': '15%', 'y': '25%'}
                },
				{
                'type': 'image',
                'next': 'thelongest4',
                'content': 'thelongest4.jpg',
                'position': {'x': '20%', 'y': '30%'}
                },
				{
                'type': 'image',
                'next': 'thelongest5',
                'content': 'thelongest5.jpg',
                'position': {'x': '25%', 'y': '35%'}
                },
				{
                'type': 'image',
                'next': 'wall',
                'content': 'thelongest6.jpg',
                'position': {'x': '30%', 'y': '40%'}
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
                'next': 'yolk',
                'content': 'circle_1.jpg',
                'position': {'x': '235px', 'y': '30%'}
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
                'next': 'start',
                'content': 'invisible.jpg',
                'position': {'x': '40%', 'y': '40%'}
                }
	],
				'wall': [
                {
                'type': 'image',
                'next': 'uta_snowed',
                'content': 'wall.jpg',
                'position': {'x': '25%', 'y': '20%'}
                }
	],
				'vent': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'vent.jpg',
                'position': {'x': '30%', 'y': '10%'}
                }
	],
				
				'uta_snowed': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'uta2.jpg',
                'position': {'x': '40%', 'y': '10px'}
                },			
				{
                'type': 'image',
                'next': 'start',
                'content': 'snowed.jpg',
                'position': {'x': '30%', 'y': '42%'}
                }
	],		
				'garage_arm': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'garage.jpg',
                'position': {'x': '25%', 'y': '30%'}
                },			
				{
                'type': 'image',
                'next': 'start',
                'content': 'arm.jpg',
                'position': {'x': '50%', 'y': '20%'}
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
                'next': 'ground',
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
                },
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
                },
	],
		
		'terms5': [
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
                'next': 'universe',
                'content': 'ah.jpg',
				'width': '85%',
                'position': {'x': '6%', 'y': '5%'}
                }
	],
		'breathingdeeply': [
                {
                'type': 'image',
                'next': 'start',
                'content': 'breathingdeeply.jpg',
				'width': '85%',
                'position': {'x': '6%', 'y': '5%'}
                }
	],
}



