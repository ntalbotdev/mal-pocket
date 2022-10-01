// TO DO LIST

// pagination
// seasonal page (select year/season)

import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	useNavigation
} from "react-router-dom";
import './assets/css/style.css';
import Recent from './components/Recent';
import Seasonal from './components/Seasonal';
import TopAiring from './components/TopAiring';
import Upcoming from './components/Upcoming';

function App() {
	const [recentAnime, setRecentAnime] = useState([]);
	const [topAiring, setTopAiring] = useState([]);
	const [seasonal, setSeasonal] = useState([]);
	const [upcoming, setUpcoming] = useState([]);

	const getRecent = async () => {
		const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

		const todayDate = new Date();
		const getToday = todayDate.getDay();

		const today = {
			name() {
				if (getToday === 0) { return dayNames[0] } // sunday
				if (getToday === 1) { return dayNames[1] } // monday
				if (getToday === 2) { return dayNames[2] } // tuesday
				if (getToday === 3) { return dayNames[3] } // wednesday
				if (getToday === 4) { return dayNames[4] } // thursday
				if (getToday === 5) { return dayNames[5] } // friday
				if (getToday === 6) { return dayNames[6] } // saturday
			}
		}

		const request = await fetch(`https://api.jikan.moe/v4/schedules?kids=false&filter=${today.name()}&limit=24`)
			.then(res => res.json())
			.catch(error => console.log(error));

		setRecentAnime(request.data);
	}

	const getTopAiring = async () => {
		const request = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=24`)
			.then(res => res.json())
			.catch(error => console.log(error));

		setTopAiring(request.data);
	}

	const getSeasonal = async () => {
		const request = await fetch(`https://api.jikan.moe/v4/seasons/now?limit=24`)
			.then(res => res.json())
			.catch(error => console.log(error));

		setSeasonal(request.data);
	}

	const getUpcoming = async () => {
		const request = await fetch(`https://api.jikan.moe/v4/seasons/upcoming?limit=24`)
			.then(res => res.json())
			.catch(error => console.log(error));

		setUpcoming(request.data);
	}

	useEffect(() => {
		getRecent();
		getTopAiring();
		getSeasonal();
		getUpcoming();
	}, []);

	return (
		<Router>
			<header className="header">
				<h1 className="header__title">MAL<span className="mini"> Pocket</span></h1>

				<nav className="navbar">
					<ul className="navbar__list">
						<li className="navbar__item">
							<NavLink className={({ isActive }) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")} to="/recent">Today</NavLink>
						</li>

						<li className="navbar__item">
							<NavLink className={({ isActive }) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")} to="/top-airing">Top Airing</NavLink>
						</li>

						<li className="navbar__item">
							<NavLink className={({ isActive }) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")} to="/seasonal">Seasonal</NavLink>
						</li>

						<li className="navbar__item">
							<NavLink className={({ isActive }) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")} to="/upcoming">Upcoming</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main className="main">
				<Routes>
					<Route path="/*">
						<Route index element={<Recent recentAnime={recentAnime} />} />
						<Route path="recent" element={<Recent recentAnime={recentAnime} />} />
						<Route path="top-airing" element={<TopAiring topAiring={topAiring} />} />
						<Route path="seasonal" element={<Seasonal seasonal={seasonal} />} />
						<Route path="upcoming" element={<Upcoming upcoming={upcoming} />} />
					</Route>
				</Routes>
			</main>

			<footer className="footer">
				<p className="footer__text">
					made with <span className="footer__heart">♥ </span>
					by <a className="footer__link" href="https://myanimelist.net/profile/SPCTRE" target="_blank" rel="noreferrer">SPCTRE</a>
				</p>
			</footer>
		</Router>
	);
}

export default App;
