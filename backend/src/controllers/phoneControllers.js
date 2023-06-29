const PhoneManager = require("../models/PhoneManager");

const getAll = async (req, res) => {
	try {
		const phones = await PhoneManager.getAllPhone();
		if (phones.length === 0) {
			res.status(404).send("No phones found");
		} else {
			res.status(200).send(phones);
		}
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = {
	getAll,
};
