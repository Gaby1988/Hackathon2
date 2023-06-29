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

module.exports = { createAdmin };
