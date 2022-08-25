import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllBlogs from './components/AllBlogs';
import CatergoryDetail from './components/CatergoryDetail';
import BlogDetail from './components/BlogDetail';

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

						<Route exact path="/blogs">
							<AllBlogs />
						</Route>

						<Route path="/blogs/:id">
							<BlogDetail />
						</Route>

						<Route path="/catergories/:id">
							<CatergoryDetail />
						</Route>

						
						
					</Switch>
				
				</div>

				<Footer />

			</div>
		</Router>
	);
}

export default App;
