import Card from "./Card";

function Recent(props) {
	return (
		<div className="recent">
			<div className="recent__content">
				{props.recentAnime.map((anime) => (
					<Card anime={anime} key={anime.mal_id} />
				))}
			</div>
		</div>
	);
}

export default Recent;