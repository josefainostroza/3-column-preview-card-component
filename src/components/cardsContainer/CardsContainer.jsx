import { INFO_CARDS } from '../../constants/info-cards';
import Button from '../button/Button';
import {
	ImgCar,
	StyledCardContainer,
	StyledContainer,
	Styledh1,
	Styledtext
} from './cardContainer.styles';

// RAFCE
const CardsContainer = () => {
	return (
		<StyledContainer>
			{INFO_CARDS.map(infoCard => {
				return (
					<StyledCardContainer key={infoCard.id} $color={infoCard.color}>
						<ImgCar src={infoCard.img} />
						<Styledh1> {infoCard.title}</Styledh1>
						<Styledtext>{infoCard.text}</Styledtext>
						<Button color={infoCard.buttoncolor}>Learn More</Button>
					</StyledCardContainer>
				);
			})}
		</StyledContainer>
	);
};

export default CardsContainer;
