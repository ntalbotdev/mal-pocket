function Card({ anime }) {
	return (
		<a className="card" href={anime.url} target="_blank" rel="noreferrer" title={anime.title}>
			<div className="card__image_wrapper">
				<img
					className="card__image"
					src={anime.images.jpg.image_url}
					alt={anime.title}
				/>
				<div className="card__anime card__gradient_bg">{anime.title}</div>
			</div>
		</a>
	);
}

export default Card;