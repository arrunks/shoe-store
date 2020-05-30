export const getUniqueProducts = (products) => {
	if (!products || products.length <= 0) {
		return [];
	}
	const uniqueIds = new Set();
	return products.filter((product) => {
		if (uniqueIds.has(product.id)) {
			return false;
		}
		uniqueIds.add(product.id);
		return true;
	});
};

export const removeProductFromCart = (products, id) => {
	return products.filter((product) => product.id !== id);
};
