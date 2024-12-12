import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: white;
	color: ${props => props.color};
	border: none;
	border-radius: 25px;
	padding: 0.5rem;
	width: 146px;
	border: 2px solid white;

	@media screen and (width>768px) {
		display: block;
	}

	@media (hover: hover) {
		&:hover {
			background-color: transparent;
			color: white;
		}
	}
`;

export { StyledButton };
