import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Customers from "./components/Navbar/Customers";
import Rentals from "./components/Navbar/Rentals";
import Movies from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Errorpage from "./components/ErrorPage";
import LoginForm from "./components/common/LoginForm";
import Register from "./components/common/RegisterForm";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="body">
			<Navbar />
			<h1 className="text-center mb-5 h1">Movie Category App</h1>
			<Switch>
				<Route path="/movies/:id" component={MovieForm} />
				<Route path="/customers" component={Customers} />
				<Route path="/rentals" component={Rentals} />
				<Route path="/movies" component={Movies} />
				<Route path="/login" component={LoginForm} />
				<Route path="/register" component={Register} />
				<Route path="/pagenotfound" component={Errorpage} />
				<Redirect from="/" to="/movies" />
				<Redirect to="/pagenotfound" />
			</Switch>
		</div>
	);
}

export default App;
