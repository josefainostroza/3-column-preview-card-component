import CardsContainer from './components/cardsContainer/CardsContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	console.log("Hola")
	return (
		<div>
			<GlobalStyles />
			<CardsContainer></CardsContainer>
		</div>
	);
};

export default App;
