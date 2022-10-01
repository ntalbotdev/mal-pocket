import Card from "./Card";

function Upcoming(props) {
	return (
		<div className="upcoming">
			<div className="upcoming__content">
				{props.upcoming.map((anime) => (
					<Card anime={anime} key={anime.mal_id} />
				))}
			</div>
		</div>
	);
}

export default Upcoming;