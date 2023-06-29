const database = require("../../database");

const getAllPhone = async () => {
	try {
		const phones = await database.query("SELECT * FROM phones");
		return phones[0];
	} catch (error) {
		throw new Error("Error retrieving tutorials");
	}
};

module.exports = {
	getAllPhone,
};
