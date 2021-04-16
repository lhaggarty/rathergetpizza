export const getDateInteger = () => {
	const currentDate = +new Date();
	return currentDate.toString().substring(0, 8);
};
