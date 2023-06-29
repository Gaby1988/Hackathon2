const { createAdmin } = require("../models/AdminManager");

const postAdmin = async (req, res) => {
  try {
    const adminCreated = await createAdmin(req.body);
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

module.exports = { postAdmin };
