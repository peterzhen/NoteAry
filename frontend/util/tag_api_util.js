export const getTags = (success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/tags',
		success,
		error
	});
};

export const getNotesTags = (note, success, error) => {
	$.ajax({
		method: 'GET',
		url: `'api/notes/${note.id}/tags'`,
		success,
		error
	});
};

export const createTag = (tag, success, error) => {
	$.ajax({
		method: 'GET',
		url: `/api/tags/${tag.id}`,
		success,
		error
	});
};
