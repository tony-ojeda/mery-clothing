import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

import './App.css';

function App() {
  return (
    <div>
		<Switch> {/* Cuando encuentra la ruta no renderiza los demas componentes */}
			<Route exact path="/" component={HomePage} />
			<Route path="/shop" component={ShopPage} />
		</Switch>
    </div>
  );
}

export default App;
