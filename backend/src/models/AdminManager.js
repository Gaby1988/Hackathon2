const database = require("../../database");

const createAdmin = async (register) => {
	const query = "INSERT INTO admins ( email, password) VALUES (?,?)";
	const { email, password } = register;

	const values = [email, password];
	try {
		const RegisterResult = await database.query(query, values);
		return {
			id: RegisterResult.insertId,
			email,
			password,
		};
	} catch (error) {
		throw new Error("Error creating your profil");
	}
};
const getByIdAdmin = async (id) => {
	try {
		const admin = await database.query(
			"SELECT admin.email FROM admin WHERE id=?",
			[id]
		);
		return admin[0];
	} catch (error) {
		throw new Error("Error retrieving admin");
	}
};

const getAllAdmins = async () => {
	try {
		const admins = await database.query("SELECT * FROM admin");
		return admins[0];
	} catch (error) {
		throw new Error("Error retrieving admin");
	}
};

module.exports = { createAdmin, getByIdAdmin, getAllAdmins };
