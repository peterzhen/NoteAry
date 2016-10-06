export const fetchNotebooks = (success, error) => {
	$.ajax({
		method: 'GET',
		url: '/api/notebooks',
		success,
		error
	});
};

export const createNotebook = (notebook, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/notebooks',
    data: notebook,
		success,
		error
	});
};

export const updateNotebook = (notebook, success, error) => {
	$.ajax({
		method: 'PATCH',
		url: `/api/notebooks/${notebook.id}`,
    data: {
          title: notebook.title,
          description: notebook.description
          },
		success,
		error
	});
};

export const getNotebook = (id, success, error) => {
	$.ajax({
		method: 'GET',
		url: `/api/notebooks/${id}`,
		success,
		error
	});
};

export const destroyNotebook = (notebook, success, error) => {
	$.ajax({
		method: 'DELETE',
		url: `/api/notebooks/${notebook.id}`,
		success,
		error
	});
};
