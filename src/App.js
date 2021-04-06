import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const JeansPage = () => (
	<div>
		<h1>**JEANS PAGE</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/jeans' component={JeansPage} />
			</Switch>
		</div>
	);
}

export default App;
