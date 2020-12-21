import './collection-item.styless.scss';

const CollecttionItem = ({ id, name, price, imageUrl }) => (
	<div className="collection-item">
		<div 
			className="image"
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
	</div>
);

export default CollecttionItem;
