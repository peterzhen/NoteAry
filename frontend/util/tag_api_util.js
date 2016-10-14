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
		url: `api/notes/${note.id}/tags`,
		success,
		error
	});
};

export const createTag = (tag, note_id, success, error) => {
	$.ajax({
		method: 'POST',
		url: "/api/tags/",
		data: {tag: {name: `${tag}`, note_id: `${note_id}`}},
		success,
		error
	});
};

export const destroyTag = (id, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: `/api/tags/${id}`,
		success,
		error
	});
};

export const destroyTagging = (tag, note_id, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: `/api/tagging/${tag.id}`,
		data: {tag: {id: `${tag.id}`, note_id: `${note_id}`}},
		success,
		error
	});
};
