const  AdminManager = require("../models/AdminManager");

const postAdmin = async (req, res) => {
	try {
		const adminCreated = await AdminManager(req.body);
		console.info(adminCreated);
		if (adminCreated.length === 0) {
			res.status(404).send("Error creating admin");
		} else {
			res.status(200).send(adminCreated);
		}
	} catch (err) {
		res.status(500).send(err);
	}
};

const getAll = async (req, res) => {
	try {
		const admin = await AdminManager.getAllAdmins();
		if (admin.length === 0) {
			res.status(404).send("No admin found");
		} else {
			res.status(200).send(admin);
		}
	} catch (err) {
		res.status(500).send(err);
	}
};

const getAllByAdminId = async (req, res) => {
	try {
		const { id } = req.params;
		const idAdmin =
      await AdminManager.getByIdAdmin(id);
		if (idAdmin.length === 0) {
			res.status(404).send("No admin found");
		} else {
			res.status(200).send(idAdmin);
		}
	} catch (err) {
		res.status(500).send(err);
	}
};

module.exports = { postAdmin, getAll, getAllByAdminId };
