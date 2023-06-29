const database = require("../../database");

const createAdmin = async (register) => {
  const query = "INSERT INTO admins ( email, password, isAdmin) VALUES (?,?,?)";
  const { email, password, isAdmin } = register;

  const values = [email, password, isAdmin];
  try {
    const RegisterResult = await database.query(query, values);
    return {
      id: RegisterResult.insertId,
      email,
      password,
      isAdmin,
    };
  } catch (error) {
    throw new Error("Error creating your profil");
  }
};
const getByIdAdmin = async (id) => {
  try {
    const admin = await database.query(
      "SELECT admins.email FROM admins WHERE id=?",
      [id]
    );
    return admin[0];
  } catch (error) {
    throw new Error("Error retrieving admin");
  }
};

const getAllAdmins = async () => {
  try {
    const admins = await database.query("SELECT * FROM admins");
    return admins[0];
  } catch (error) {
    throw new Error("Error retrieving admin");
  }
};

module.exports = { createAdmin, getByIdAdmin, getAllAdmins };
