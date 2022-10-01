import Card from "./Card";

function Seasonal(props) {
	return (
		<div className="seasonal">
			<div className="seasonal__content">
				{props.seasonal.map((anime) => (
					<Card anime={anime} key={anime.mal_id} />
				))}
			</div>
		</div>
	);
}

export default Seasonal;