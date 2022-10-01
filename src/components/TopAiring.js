import Card from "./Card";

function TopAiring(props) {
	return (
		<div className="top-airing">
			<div className="top-airing__content">
				{props.topAiring.map((anime) => (
					<Card anime={anime} key={anime.mal_id} />
				))}
			</div>
		</div>
	);
}

export default TopAiring;