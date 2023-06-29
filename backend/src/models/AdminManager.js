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

module.exports = { createAdmin };
