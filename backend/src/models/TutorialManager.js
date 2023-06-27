// const database = require("../../database");

// const getAllTutorials = async () => {
//   try {
//     const tutorials = await database.query("SELECT * FROM tutorials");
//     return tutorials[0];
//   } catch (error) {
//     throw new Error("Error retrieving tutorials");
//   }
// };
// const getAllTutorialsByFormation = async (id) => {
//   try {
//     const tutorialsByFormation = await database.query(
//       "SELECT *, tutorials.id FROM tutorials join formations on formations.id = tutorials.formation_id where formations.id = ?",
//       [id]
//     );
//     return tutorialsByFormation[0];
//   } catch (error) {
//     throw new Error("Error retrieving tutorials by formation");
//   }
// };

// const getByIdTutorial = async (id) => {
//   try {
//     const tutorial = await database.query(
//       "SELECT tutorials.*, tutorials.id AS tutoID, quizz.* FROM tutorials LEFT JOIN quizz ON tutorials.quizz_id = quizz.id WHERE tutorials.id = ?",
//       [id]
//     );
//     return tutorial[0];
//   } catch (error) {
//     throw new Error("Error retrieving tutorial");
//   }
// };

// const getTutorialTagsById = async (id) => {
//   try {
//     const tutorialsTags = await database.query(
//       "SELECT tutorials.*, tags.id AS tagID, tags.name AS nameTag FROM tutorials INNER JOIN tutorialsTags ON tutorials.id = tutorialsTags.tutorial_id INNER JOIN tags ON tutorialsTags.tag_id = tags.id WHERE tutorials.id = ?",
//       [id]
//     );
//     return tutorialsTags[0];
//   } catch (error) {
//     throw new Error("Error retrieving tutorialsTags");
//   }
// };

// const CreateTutorialsTags = async (tutorialId, tagId) => {
//   const tutorialsTagsQuery = `INSERT INTO tutorialsTags (tutorial_id, tag_id) VALUES (?, ?)`;

//   const valuesTutorialsTags = [tutorialId, tagId];

//   try {
//     await database.query(tutorialsTagsQuery, valuesTutorialsTags);
//     return {
//       tutorialId,
//       tagId,
//     };
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error retrieving quizz");
//   }
// };

// const createTutorialWithImage = async (tutorial) => {
//   try {
//     const {
//       name,
//       formationId,
//       level,
//       objectif,
//       explication,
//       urlVideo,
//       newFilename,
//     } = tutorial;

//     // insert on quizz table values of the quizz
//     const quizzTutorialResult = await QuizzManager.CreateQuizzTutorial(
//       tutorial
//     );
//     const quizzlId = quizzTutorialResult.id;

//     const tutorialQuery = `INSERT INTO tutorials (formation_id, quizz_id, level, name, urlVideo, pictureTuto, objectif, explication) 
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

//     const valuesTutorial = [
//       parseInt(formationId, 10),
//       quizzlId,
//       parseInt(level, 10),
//       name,
//       urlVideo,
//       newFilename,
//       objectif,
//       explication,
//     ];

//     const tutorialResult = await database.query(tutorialQuery, valuesTutorial);
//     const tutorialId = tutorialResult[0].insertId;

//     const tagTutorialResult = await TagsManager.CreateTagTutorial(tutorial);
//     const tagId = tagTutorialResult.id;

//     await CreateTutorialsTags(tutorialId, tagId);

//     return {
//       quizzlId,
//       tutorialId,
//       formationId,
//       level,
//       name,
//       urlVideo,
//       newFilename,
//       objectif,
//       explication,
//     };
//   } catch (error) {
//     throw new Error("Error creating tutorial with image", error);
//   }
// };

// const updateTutorial = async (tutorial) => {
//   try {
//     const {
//       question,
//       firstProposal,
//       secondProposal,
//       response,
//       name,
//       formationId,
//       valuesTag,
//       level,
//       objectif,
//       explication,
//       urlVideo,
//       newFilename,
//       quizzId,
//       tutorialId,
//     } = tutorial;

//     // update on quizz table values of the quizz
//     await QuizzManager.UpdateQuizzTutorial(tutorial);

//     const tutorialQuery = `UPDATE tutorials SET formation_id = ?, quizz_id = ?, level = ?, name = ?, urlVideo = ?, pictureTuto = ?, objectif = ?, explication = ? WHERE id = ?`;

//     const valuesTutorial = [
//       formationId,
//       quizzId,
//       level,
//       name,
//       urlVideo,
//       newFilename,
//       objectif,
//       explication,
//       tutorialId,
//     ];

//     await database.query(tutorialQuery, valuesTutorial);

//     await TagsManager.UpdateTagTutorial(tutorial);

//     return {
//       question,
//       firstProposal,
//       secondProposal,
//       response,
//       name,
//       formationId,
//       valuesTag,
//       level,
//       objectif,
//       explication,
//       urlVideo,
//       newFilename,
//       quizzId,
//       tutorialId,
//     };
//   } catch (error) {
//     throw new Error("Error updating tutorial with image", error);
//   }
// };

// const deleteTutorialAndQuizzAndTags = async (id) => {
//   try {
//     const tutorial = await getByIdTutorial(id);

//     await QuizzManager.deleteQuizzByTutorialId(tutorial[0].quizz_id);

//     const tutorialtagsQuery =
//       "SELECT * FROM tutorialstags WHERE tutorial_id = ?";

//     const [response] = await database.query(tutorialtagsQuery, [
//       tutorial[0].id,
//     ]);

//     if (response.affectedRows === 0) {
//       throw new Error(`Tutorial with ID ${id} not found`);
//     }

//     await TagsManager.deleteTagsByTutorialId(response[0].tag_id);

//     const tutorialQuery = "DELETE tutorials.* FROM tutorials WHERE id = ?";
//     const tutorialResult = await database.query(tutorialQuery, [id]);

//     return tutorialResult;
//   } catch (error) {
//     throw new Error("Error delete tutorial");
//   }
// };

// module.exports = {
//   getAllTutorials,
//   getAllTutorialsByFormation,
//   getByIdTutorial,
//   getTutorialTagsById,
//   createTutorialWithImage,
//   updateTutorial,
//   deleteTutorialAndQuizzAndTags,
// };
