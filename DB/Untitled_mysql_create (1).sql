CREATE TABLE `User` (
	`id` VARCHAR(36) NOT NULL,
	`account_type` INT NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`password` TEXT NOT NULL,
	`phone` INT(11) NOT NULL,
	`household_income` INT NULL,
	`occupation` varchar(15) NULL,
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Property` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`user_type` varchar(10) NOT NULL,
	`property_for` varchar(15) NOT NULL,
	`sale_type` varchar(15) NOT NULL,
	`property_cat_id` varchar(36) NOT NULL,
	`property_sub_cat_id` varchar(36) NOT NULL,
	`property_attr_id` varchar(36) NOT NULL,
	`city` varchar(25) NOT NULL,
	`project_name` varchar(50) NOT NULL,
	`locality` varchar(20) NOT NULL,
	`property_address` varchar(200) NOT NULL,
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Property_category` (
	`id` varchar(36) NOT NULL,
	`title` varchar(30) NOT NULL,
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Property_sub_category` (
	`id` varchar(36) NOT NULL,
	`title` varchar(40) NOT NULL,
	`cat_id` varchar(36) NOT NULL,
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `property_attributes` (
	`id` varchar(36) NOT NULL,
	`built_up_area` FLOAT NOT NULL,
	`plot_area` FLOAT NOT NULL,
	`area_unit` varchar(10) NOT NULL,
	`bedrooms` INT NOT NULL,
	`bathrooms` INT NOT NULL,
	`balconies` INT NOT NULL,
	`other_room` varchar(30) NOT NULL,
	`total_floors` INT NOT NULL,
	`reserved_parking` varchar(10) NOT NULL,
	`availability` varchar(20) NOT NULL,
	`possession_by` varchar(25) NOT NULL,
	`ownership` varchar(20) NOT NULL,
	`expected_price` INT NOT NULL,
	`brokerage` INT NOT NULL,
	`brokerage_type` varchar(25) NOT NULL,
	`amenities` varchar(100) NOT NULL,
	`power_backup` varchar(10) NOT NULL,
	`water_source` varchar(40) NOT NULL,
	`overlooking` varchar(70) NOT NULL,
	`facing` varchar(10) NOT NULL,
	`width_facing_road` FLOAT NOT NULL,
	`width_type` varchar(10) NOT NULL,
	`floring_type` varchar(15) NOT NULL,
	`furnishing_type` varchar(15) NOT NULL,
	`description` TEXT NOT NULL,
	`property_image` TEXT NOT NULL,
	`createdAt` TIMESTAMP NOT NULL,
	`updatedAt` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Property` ADD CONSTRAINT `Property_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `Property` ADD CONSTRAINT `Property_fk1` FOREIGN KEY (`property_cat_id`) REFERENCES `Property_category`(`id`);

ALTER TABLE `Property` ADD CONSTRAINT `Property_fk2` FOREIGN KEY (`property_sub_cat_id`) REFERENCES `Property_sub_category`(`id`);

ALTER TABLE `Property` ADD CONSTRAINT `Property_fk3` FOREIGN KEY (`property_attr_id`) REFERENCES `property_attributes`(`id`);

ALTER TABLE `Property_sub_category` ADD CONSTRAINT `Property_sub_category_fk0` FOREIGN KEY (`cat_id`) REFERENCES `Property_category`(`id`);

