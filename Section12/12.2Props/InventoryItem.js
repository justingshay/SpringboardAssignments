function InventoryItem ({name, type, quantity=0, price=0})
{
	const lowQuantityThresh = 5;
	const valueHighThresh = 1000;

	const itemTotalValue = price * quantity;

	return (
		<div>
			<h2>{name} ({type})</h2>
			{/*TODO: Render the low stock alert based on the quantity of the item.*/}
			{
				quantity < lowQuantityThresh &&
				<Message>
					<p><span> ⚠  </span> Low Stock! {quantity} remaining.</p>
				</Message>

			}
			{/*//TODO: Render the high value alert based on the total value of the item.*/}
			{
				itemTotalValue > valueHighThresh && 
				<Message>
					<p><span> 💰 </span> High value - consider extra protection!</p>
				</Message>
			}
		</div>
	);
}
