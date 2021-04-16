export const parseListen = ({ listen }, { payload }) => {
	const { id, timecode } = payload;
	const listenList = listen.filter((item) => item.id !== id);
	const listenEntry = {
		active: 1,
		id: id,
		timecode: timecode,
	};
	return [...listenList, listenEntry];
};
