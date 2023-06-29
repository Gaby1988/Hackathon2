CREATE TABLE `admin` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE,
  `password` varchar(255)
);

CREATE TABLE `phones` (
  `id` integer PRIMARY KEY,
  `brand` varchar(255),
  `model` varchar(255),
  `Ram` varchar(255),
  `Storage` varchar(255),
  `state` varchar(255),
  `ponderation` decimal,
  `price` decimal,
  `accessories` varchar(255),
  `operatingSystem` varchar(255),
  `admin_id` integer
);

CREATE TABLE `phone_specification` (
  `id` integer PRIMARY KEY,
  `brandSpecification` varchar(255),
  `modelSpecification` varchar(255),
  `ramSpecification` varchar(255),
  `storageSpecification` varchar(255),
  `StateSpecification` varchar(255),
  `poderationSpecification` decimal,
  `priceSpecification` decimal,
  `accessoriesSpecification` varchar(255),
  `operatingSpecification` varchar(255),
  `admin_specification_id` integer,
  `phone_id` interger
);

ALTER TABLE `phones` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);
