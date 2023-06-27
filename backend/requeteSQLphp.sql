SELECT users.*, steps.*, tutorials.name FROM usersTutorials JOIN users ON userstutorials.user_id = users.id JOIN steps ON steps.step_user_id = userstutorials.user_id JOIN tutorials ON userstutorials.tutorial_id = tutorials.id;


SELECT users.email AS userMail, users.id AS userID, steps.stepOne, steps.id AS stepID, tutorials.name AS tutoName, tutorials.id AS tutoID
FROM usersTutorials
JOIN users ON userstutorials.user_id = users.id
JOIN steps ON steps.step_user_id = userstutorials.user_id
JOIN tutorials ON userstutorials.tutorial_id = tutorials.id;


SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id;

SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, tutorials.name, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID, steps.stepOne, steps.stepTwo, steps.stepThree FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id;

SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, tutorials.name, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID, steps.stepOne, steps.stepTwo, steps.stepThree, formations.iconURL, formations.name FROM userstutorials JOIN users ON users.id = userstutorials.user_id JOIN steps ON steps.id = userstutorials.step_id JOIN tutorials ON tutorials.id = userstutorials.tutorial_id JOIN formations ON tutorials.formation_id = formations.id;