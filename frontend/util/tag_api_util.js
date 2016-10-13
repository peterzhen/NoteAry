export const getTags = (success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/tags',
		success,
		error
	});
};
