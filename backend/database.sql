CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_id` integer NOT NULL,
  `level` integer NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `birthdayDate` date,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `location` integer,
  `gender` varchar(255),
  `adress` varchar(255),
  `city` varchar(255),
  `picture` varchar(255)
);

CREATE TABLE `roles` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);
