CREATE TABLE `admin` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE,
  `password` varchar(255)
);

CREATE TABLE `rams` (
  `id` integer PRIMARY KEY,
  `3bg` varchar(255),
  `4gb` varchar(255),
  `6gb` varchar(255),
  `8gb` varchar(255),
  `12gb` varchar(255)
);

CREATE TABLE `models` (
  `id` integer PRIMARY KEY,
  `IphoneX` varchar(255),
  `IphoneSE` varchar(255),
  `Iphone11` varchar(255),
  `GalaxyS9` varchar(255),
  `GalaxyNote9` varchar(255),
  `GalaxyS10e` varchar(255),
  `Mate20Pro` varchar(255),
  `P20Pro` varchar(255),
  `P30Pro` varchar(255),
  `PindX2pro` varchar(255),
  `Reno5Pro` varchar(255),
  `A92` varchar(255),
  `RedmiNote11` varchar(255),
  `PocoX3Pro` varchar(255),
  `Mi11Lite` varchar(255)
);

CREATE TABLE `storages` (
  `id` integer PRIMARY KEY,
  `64gb` varchar(255),
  `128gb` varchar(255),
  `256gb` varchar(255)
);

CREATE TABLE `states` (
  `id` integer PRIMARY KEY,
  `deee` varchar(255),
  `reparable` varchar(255),
  `blocked` varchar(255),
  `reconditionnable` varchar(255),
  `reconditionned` varchar(255)
);

CREATE TABLE `brands` (
  `id` integer PRIMARY KEY,
  `Iphone` varchar(255),
  `Samsung` varcha,
  `Oppo` varchar(255),
  `Huawei` varchar(255),
  `Xiamo` varchar(255)
);

CREATE TABLE `calculator` (
  `id` integer PRIMARY KEY,
  `model_id` integer,
  `ram_id` integer,
  `state_id` integer,
  `brand_id` integer,
  `storage_id` integer
);

CREATE TABLE `phones` (
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
  `admin_id` interger
);

ALTER TABLE `phones` ADD FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);

ALTER TABLE `calculator` ADD FOREIGN KEY (`model_id`) REFERENCES `models` (`id`);

ALTER TABLE `calculator` ADD FOREIGN KEY (`ram_id`) REFERENCES `rams` (`id`);

ALTER TABLE `calculator` ADD FOREIGN KEY (`storage_id`) REFERENCES `storages` (`id`);

ALTER TABLE `calculator` ADD FOREIGN KEY (`state_id`) REFERENCES `states` (`id`);

ALTER TABLE `calculator` ADD FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
