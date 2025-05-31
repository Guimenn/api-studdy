function parseBRDateToIso(rawDate) {
	const [day, month, year] = rawDate.split('/');
	if (!day || !month || !year) return null;

	const isoString = `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	const date = new Date(isoString);

	// Verifica se a data é válida
	if (isNaN(date.getTime())) return null;

	return date;
}

export { parseBRDateToIso };
