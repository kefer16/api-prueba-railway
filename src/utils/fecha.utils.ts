export const convertirFechaLocal = (date: Date) => {
	var local = new Date(date);
	local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return local.toJSON();
};
