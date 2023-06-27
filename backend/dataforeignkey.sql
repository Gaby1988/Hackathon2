ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);

  
