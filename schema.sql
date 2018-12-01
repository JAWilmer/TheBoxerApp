-- Drops the boxers if it exists currently --
DROP DATABASE IF EXISTS boxers;
-- Creates the "boxers" database --
CREATE DATABASE boxers;


CREATE TABLE `Pets` (
  `id` int(11) DEFAULT NULL,
  `petName` varchar(255) DEFAULT NULL,
  `petSize` varchar(255) DEFAULT NULL,
  `petBreed` varchar(255) DEFAULT NULL,
  `user_ID` varchar(255) NOT NULL,
  `complete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_ID` text,
  `active` varchar(255) DEFAULT NULL,
  `title` text NOT NULL,
  `description` text,
  `price` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `imageURL` text,
  `avgReviews` text,
  `category` varchar(255) DEFAULT NULL,
  `tags` text,
  `size` text,
  `listingURL` text,
  `category_ID` int(11) DEFAULT NULL,
  `shop_section_id` int(11) DEFAULT NULL,
  `ending_tsz` int(11) DEFAULT NULL,
  `complete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `SoldItems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `listingID` int(11) DEFAULT NULL,
  `soldOnDate` datetime DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `complete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Users` (
  `id` varchar(255) NOT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` text,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `optIn` tinyint(1) DEFAULT NULL,
  `lastLoginDate` datetime DEFAULT NULL,
  `complete` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  Create table `Favorites`(
      user_id int not null auto_increment PRIMARY KEY, ##will need to change to whatever the key value is from user table for session
      holiday  varchar(20),
      sport  varchar(20),
      tv  varchar(20),
      game varchar(20),
      marvel varchar(20),
      food  varchar(20),
      soda varchar(20),
      restaurant varchar(20),
      lang varchar(20) 

  );
