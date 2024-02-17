export const validateLoginForm = (values) => {
	const errors = {};
	const { username, password } = values;
	console.log(username, password, "values in validateLoginForm");

	if (!username) {
		errors.username = "Required";
	} else if (username.length < 6) {
		errors.username = "Must be at least";
	} else if (username.length > 15) {
		errors.username = "Must be no longer than 15 characters";
	}

	if (!password) {
		errors.password = "Required";
	} else if (password.length < 8) {
		errors.password = "Must be at least 8 characters";
	}

	return errors;
};
