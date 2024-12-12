import { v4 } from 'uuid';

export const INFO_CARDS = [
	{
		id: v4(),
		title: 'SEDANS',
		text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		img: '/public/assets/images/sedan.svg',
		color: '#E28625',
		buttoncolor: '#E28625'
	},
	{
		id: v4(),
		title: 'SUVS',
		text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		img: '/public/assets/images/suv.svg',
		color: '#006971',
		buttoncolor: '#006971'
	},
	{
		id: v4(),
		title: 'Luxury',
		text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ',
		img: '/public/assets/images/luxury.svg',
		color: '#004140',
		buttoncolor: '#006971'
	}
];
