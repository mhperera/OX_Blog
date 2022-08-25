import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllBlogs from './components/AllBlogs';



function App() {
	return (
		<Router>
			<div className="App">

				<div className="content">

					<Navbar />

					<Switch>

						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/blogs">
							<AllBlogs />
						</Route>
						
					</Switch>
				
				</div>

				<Footer />

			</div>
		</Router>
	);
}

export default App;
