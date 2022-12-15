CREATE DATABASE app_note_db;
USE app_note_db;

CREATE TABLE `app_note_db`.`Users`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `user_name` VARCHAR(150),
	`email` VARCHAR(400),
	`photoUrl` VARCHAR(500),
	`uid` VARCHAR(800),
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB;

CREATE TABLE `app_note_db`.`Notes`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(200),
	`content` VARCHAR(9999),
	`userUid_fk` VARCHAR(800),
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB;

-- username: adminapp_note_db
-- password: Jonathan##123
-- HostName: appnotedbsql.database.windows.net
-- dbName: app_note_db

-- nombre de servidor: appnote 
-- 