export const getNextRoundImages = (start, end, non_target_images) => {
	let nextRoundImages = [];
	let image = null;
	for (var i = start; i < end; i++) {
		image = non_target_images[i];
		nextRoundImages.push(image);
	}

	return nextRoundImages;
};
