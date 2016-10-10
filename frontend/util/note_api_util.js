export const getNotes = (success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/notes',
		success,
		error
	});
};

export const createNote = (note, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/notes',
    data: note,
		success,
		error
	});
};

export const updateNote = (data, success, error) => {
	$.ajax({
		method: 'PATCH',
		url: `/api/notes/${data.id}`,
    data: {note: data},
		success,
		error
	});
};

export const getNote = (id, success, error) => {
	$.ajax({
		method: 'GET',
		url: `/api/notes/${id}`,
		success,
		error
	});
};

export const destroyNote = (note, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: `/api/notes/${note.id}`,
		success,
		error
	});
};
