// const { body, validationResult } = require("express-validator");

// const validateTutorial = [
//   body("explication").notEmpty().isLength({ max: 5000 }).isString(),
//   body("firstProposal").notEmpty().isLength({ max: 255 }).isString(),
//   body("formationId").notEmpty().isString(),
//   body("level").notEmpty().isString(),
//   body("name").notEmpty().isLength({ max: 255 }).isString(),
//   body("newFilename").notEmpty().isLength({ max: 5000 }).isString(),
//   body("objectif").notEmpty().isLength({ max: 5000 }).isString(),
//   body("question").notEmpty().isLength({ max: 5000 }).isString(),
//   body("response").notEmpty().isLength({ max: 5000 }).isString(),
//   body("secondProposal").notEmpty().isLength({ max: 5000 }).isString(),
//   body("urlVideo").notEmpty().isLength({ max: 5000 }).isString(),

//   body("valuesTag").custom((value, { req }) => {
//     if (value) {
//       return true;
//     }
//     if (req.body.updatedTags) {
//       return true;
//     }
//     throw new Error("valuesTag or updatedTags is required");
//   }),

//   (req, res, next) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       res.status(422).json({ validationErrors: errors.array() });
//     } else {
//       next();
//     }
//   },
// ];

// module.exports = {
//   validateTutorial,
// };
