import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
	<div>
		<h1>HAT PAGE</h1>
	</div>
);

function App() {
  return (
    <div>
		<Switch> {/* Cuando encuentra la ruta no renderiza los demas componentes */}
			<Route exact path="/" component={HomePage} />
			<Route path="/hats" component={HatsPage} />
		</Switch>
    </div>
  );
}

export default App;
