ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);

  
ALTER TABLE phones
 ADD 
 CONSTRAINT fk_phones_admin FOREIGN KEY (admin_id) REFERENCES admin(id);

ALTER TABLE calculator 
ADD 
CONSTRAINT kf_calculator_models FOREIGN KEY (model_id) REFERENCES models(id);

ALTER TABLE calculator 
ADD
CONSTRAINT aa_calculator_rams FOREIGN KEY (ram_id) REFERENCES rams(id);

ALTER TABLE calculator 
ADD
CONSTRAINT bb_calculator_storages FOREIGN KEY (storage_id) REFERENCES storages(id);

ALTER TABLE calculator 
ADD
CONSTRAINT cc_calculator_states FOREIGN KEY (state_id) REFERENCES states(id);

ALTER TABLE calculator 
ADD
CONSTRAINT dd_calculator_brands FOREIGN KEY (brand_id) REFERENCES brands(id);