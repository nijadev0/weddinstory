export function numberWithCommas(currency: number) {
	return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
