import styled from 'styled-components';

const StyledCardContainer = styled.div`
	background-color: ${props => props.$color};
	display: flex;
	flex-direction: column;
	padding: 48px;
	gap: 25px;
`;
const ImgCar = styled.img`
	width: 64px;
`;
const Styledh1 = styled.h1`
	font-family: '';
	color: white;
	font-family: 'Big Shoulders Display';
`;
const Styledtext = styled.p`
	font-family: 'Lexend Deca';
	color: white;
	font-size: 15px;
	font-weight: 400;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (width > 768px) {
		flex-direction: row;
	}
`;
export { StyledCardContainer, ImgCar, StyledContainer, Styledh1, Styledtext };
